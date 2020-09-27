const cartItems = JSON.parse(sessionStorage.getItem("cart"));
let user = JSON.parse(localStorage.getItem("user"));
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";
const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";
const updateUserUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPReturnUser.php";
const updateCartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPUpdateCartItem.php";
const DeleteCartItemUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPDeleteCartItem.php";

console.log(cartItems);
const ConfirmPurchase = document.getElementById("confirmPurchase"); //This the buy button
let sumTotal = 0;

//console.log(cartItems , user);

let setVariables = function () {
    if (cartItems === null) return;

    let numItems = cartItems.length;

    for (let i = 0; i < cartItems.length; i++) {
        sumTotal += (cartItems[i].Amount * cartItems[i].Product_Price);
    }

    document.getElementById("PCSumNumItem").innerHTML = numItems;
    document.getElementById("PCPriceSum").innerHTML = sumTotal;
}

let varifyAndProceed = function () {
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
        proceedToBuy();
    });

}

let proceedToBuy = function () {


    const buyer = user.UserID;
    let transDate = new Date();
    let dd = String(transDate.getDate()).padStart(2, '0');
    let mm = String(transDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = transDate.getFullYear();
    transDate = mm + '/' + dd + '/' + yyyy;

    for (let i = 0; i < cartItems.length; i++) {

        for (let j = 0; j < parseInt(cartItems[i].Amount); j++) {
            cartItems[i].Quantity--;
            let prodID = cartItems[i].Product_ID;
            let balance = parseFloat(user.Balance) - parseFloat(cartItems[i].Product_Price);
            let Quant = parseInt(cartItems[i].Current_Quantity) - 1;



            console.log(transDate, prodID, buyer, balance, Quant);
            $.getJSON(buyURL, {
                ProductID: prodID,
                Buyer: buyer,
                TransDate: transDate,
                Balance: balance,
                Quantity: Quant
            }, function (confirmation) {
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
                            console.log("Product(s) successfully purchased");

                            //Minuses one from the database
                            $.getJSON(updateCartUrl, {
                                userID: user.UserID,
                                product_ID: cartItems[i].Product_ID
                            }, function (update) {
                                console.log(cartItems[i].Product_ID + ' minused')
                            })

                        }
                    });

                }
            });

        }

        

        //window.location.href = "Homepage.html";
    }
    DeleteItemFromCart();

}

let DeleteItemFromCart = function () {
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
                })
            }

        }).join('');
    });

    setVariables();
}

ConfirmPurchase.setAttribute("onclick", "varifyAndProceed()");

setVariables();
