
// window.onhashchange = function() {
//     //blah blah blah
    
// location.reload();
//    }
//window.location=document.referrer;

let user = JSON.parse(localStorage.getItem("user"));
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";
const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";
const updateUserUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPReturnUser.php";
const updateCartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPUpdateCartItem.php";
const DeleteCartItemUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPDeleteCartItem.php";
let cartItems;

//getCartItems();
setVariables();

//console.log( user);

 function getCartItems(){
   const promise = new Promise(resolve =>{
     //console.log("in promise");   
     $.getJSON(cartUrl , {userID : user.UserID} , function(results){
        console.log("in promise2"); 
    // sessionStorage.removeItem("cart");
    // sessionStorage.setItem("cart" , JSON.stringify(results));
    // cartItems = JSON.parse(sessionStorage.getItem("cart"));
    resolve();
    });
    
   });
    
   promise.then(results => {
    //sessionStorage.removeItem("cart");
    // sessionStorage.setItem("cart" , JSON.stringify(results));
    // cartItems = JSON.parse(sessionStorage.getItem("cart"));
    console.log("from item promise");
   });

}


 
const ConfirmPurchase = document.getElementById("confirmPurchase"); //This the buy button
let sumTotal = 0;

function setVariables() {
    
    const promises = new Promise( resolve =>{  
        $.getJSON(cartUrl , {userID : user.UserID} , function(results){
            console.log("in promise3"); 
        sessionStorage.removeItem("cart");
        sessionStorage.setItem("cart" , JSON.stringify(results));
        cartItems = JSON.parse(sessionStorage.getItem("cart"));
        resolve();
        });
        //resolve(getCartItems());
    });
    
    promises.then(()=>{
      
        cartItems = JSON.parse(sessionStorage.getItem("cart"));
        console.log('Trying out promises : ', cartItems);
        if (cartItems === null) return;

        let numItems = cartItems.length;
        sumTotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            sumTotal += (parseFloat(cartItems[i].Amount) * parseFloat(cartItems[i].Product_Price));
           // console.log("Promise : ", cartItems[i]);
        }
    
        document.getElementById("PCSumNumItem").innerHTML = numItems;
        document.getElementById("PCPriceSum").innerHTML = sumTotal;
    });
    

}



function varifyAndProceed() {
    if (user == null) {
        alert("Please sign in");
        window.location.href = "Login.html";
        return;
    }

    if (user.Balance < sumTotal) {
        alert("Your Balance is insufficient");
        return;
    }

    if(cartItems.length === 0){
        alert("No items in cart to checkout");
        return;
    }

    // Pop up to confirm if you wanna buy
    document.querySelector('.buy-popup').style.display = 'flex';

    // Upon clicking cancel on the pop up 
    document.getElementById("Cancel-btn").addEventListener('click', function () {
        document.querySelector('.buy-popup').style.display = 'none';
        alert("Purchase canceled");
    });

    //Upon clicking buy on the pop up
    document.getElementById("Buy-btn").addEventListener('click', function () {
         console.log('about to buy');

         const promise = new Promise((resolve )=>{
            resolve(proceedToBuy());
         });
         
         promise.then(()=>{
            DeleteItemFromCart()
            promise.then(()=>{
                setVariables();
            });
         })
    });

}

function proceedToBuy() {
    const buyer = user.UserID;
    let transDate = new Date();
    let dd = String(transDate.getDate()).padStart(2, '0');
    let mm = String(transDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = transDate.getFullYear();
    transDate = mm + '/' + dd + '/' + yyyy;

    for (let i = 0; i < cartItems.length; i++) {
    
        // Go to the next item if the quantity of the item in cart is 0
        if(parseInt(cartItems[i].Current_Quantity) === 0){
            alert(`${cartItems[i].Product_Name} is currently out of stock. \n You will be notified once we have stock`);
            continue;
        }
        for (let j = 0; j < parseInt(cartItems[i].Amount); j++) {  
            cartItems[i].Current_Quantity--;
            let prodID = cartItems[i].Product_ID;
            let balance = parseFloat(user.Balance) - parseFloat(cartItems[i].Product_Price);
            let Quant = parseInt(cartItems[i].Current_Quantity) - 1;
            console.log(transDate, prodID, buyer, balance, Quant);

            ProcessElement(prodID,buyer,transDate,transDate,balance,Quant);
        }
        
    }
    
    
    

}

function ProcessElement(prodID,buyer,transDate,transDate,balance,Quant){

    $.getJSON(buyURL, {
        ProductID: prodID,
        Buyer: buyer,
        TransDate: transDate,
        Balance: balance,
        Quantity: Quant
    }, confirmation => {
        console.log(confirmation);
        if (confirmation === "1") {
            const updateUserURl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReturnUser.php";
            $.getJSON(updateUserURl, {
                username: user.UserName
            }, function (result) {
                if (result[0] !== '') {
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(result[0]));
                    user = JSON.parse(localStorage.getItem("user"));
                    console.log(JSON.parse(localStorage.getItem('user')));
                    console.log("Product successfully purchased");
                     MinusFromDatabase(user.UserID,prodID);   
                }
            });

        }
    });

}

function MinusFromDatabase(uID , pID){
 //Minuses one from the database
 $.getJSON(updateCartUrl, {
    userID: uID,
    product_ID: pID
}, function (update) {
    console.log(pID + ' minused');
    DeleteItemFromCart();

});

}

function DeleteItemFromCart() {
    // Here we delete an 
    $.getJSON(cartUrl, {userID: user.UserID}, function (results) {
        results.map(function (item) {
            console.log(item);
            if (item.Amount === "0") {
                console.log(item.Amount);
                $.getJSON(DeleteCartItemUrl, {
                    userID: user.UserID,
                    product_ID: item.Product_ID
                }, function (response) {
                    console.log(response);
                    setVariables();
                })
            }

        }).join('');
    });

    
}


ConfirmPurchase.setAttribute("onclick", "varifyAndProceed()");


