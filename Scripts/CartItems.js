const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPGetCart.php";

let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

let populate = function(){
    $.getJSON(cartUrl , {userID : loggedUser.UserID} , function(results){

        console.log(results);
    });

}

populate();