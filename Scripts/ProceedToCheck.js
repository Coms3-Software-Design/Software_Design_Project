const cartItems = JSON.parse(sessionStorage.getItem("cart"));
const user = JSON.parse(localStorage.getItem("user"));
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";
const updateUserUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReturnUser.php";
const ConfirmPurchase = document.getElementById("confirmPurchase"); //This the buy button
let sumTotal = 0;

//console.log(cartItems , user);

let setVariables = function(){
    if(cartItems === null) return;

    let numItems = cartItems.length;
    
    for(let i = 0 ; i < cartItems.length ; i++){
        sumTotal += (cartItems[i].Amount * cartItems[i].Product_Price);
    }

    document.getElementById("PCSumNumItem").innerHTML = numItems;
    document.getElementById("PCPriceSum").innerHTML = sumTotal;
}

let proceedToBuy = function(){
    if(user == null){
        alert("Please sign in");
        window.location.href = "Login.html";
        return;
    }

    if(user.Balance < sumTotal){
        alert("Your Balance is insufficient");
        return;
    }

    const buyer = user.UserID;
    let  transDate= new Date();
    let dd = String(transDate.getDate()).padStart(2, '0');
    let mm = String(transDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = transDate.getFullYear();
    transDate = mm + '/' + dd + '/' + yyyy;

    for(let i = 0 ; i < cartItems.length ; i++){
        for(let j = 0 ; j < parseInt(cartItems[i].Amount) ; j++){
            cartItems[i].Quantity--;
            let prodID = cartItems[i].Product_ID;
            let balance = parseFloat(user.Balance) - parseFloat(cartItems[i].Product_Price);
            let Quant = parseInt(cartItems[i].Quantity)-1;


            console.log( transDate , prodID , buyer , balance , Quant);
            $.getJSON(buyURLs , {
                ProductID : prodID,
                Buyer: buyer,
                TransDate : transDate,
                Balance: balance,
                Quantity : Quant
            },function(confirmation){
               console.log(confirmation);
                if(confirmation === "1"){
                const updateUserURl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReturnUser.php";
                $.getJSON(updateUserURl , {username : user.UserName}, function(result){
                    if(result[0] !== ''){
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(result[0]));
                    console.log(JSON.parse(localStorage.getItem('user')));
                    console.log("Product(s) successfully purchased");
                    // window.location.href = "Homepage.html";
                    }
                });
         
                }
            });
        
        }
    }




}

ConfirmPurchase.setAttribute("onclick","proceedToBuy()");

setVariables();