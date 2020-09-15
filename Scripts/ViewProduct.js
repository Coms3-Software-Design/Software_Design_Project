// Getting to know who's logged in
let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

let item = JSON.parse(localStorage.getItem("item"));
console.log(item);
/* Getting and setting a picture*/
var pic = `https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/`+item.productPicture;
console.log(pic);
document.getElementById("product_image").src = pic;

/* Getting and setting Products name*/
document.getElementById("product_title").innerHTML = item.productName;

/* Getting and setting Product Description*/
document.getElementById("product_description").innerHTML = item.productDescription;

/* Getting and setting Product price*/
document.getElementById("product_price").innerHTML = "R" + item.pricePerItem;

/* Getting and setting Product Quantity*/
document.getElementById("product_quantity").innerHTML = item.currentQuantity;

/* Getting and setting Ratings*/
var ratings = 0;
var itemRatings;
const url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReviews.php';
$.getJSON(url,{ProductID: item.productID},function(results){
    //console.log(results);
    itemRatings = results;
    for(var i = 0; i < results.length;++i){
        console.log(results[i].Review_Rating);
        ratings += parseInt(results[i].Review_Rating);
    }
    ratings /= results.length;
    //console.log(ratings);

    if(ratings > 4){
        document.getElementById("rate_5").checked = true;
    }

    else if(ratings > 3){
        document.getElementById("rate_4").checked = true;
    }

    else if(ratings > 2){
        document.getElementById("rate_3").checked = true;
    }

    else if(ratings > 1){
        document.getElementById("rate_2").checked = true;
    }

    else if(ratings > 0){
        document.getElementById("rate_1").checked = true;
    }

    document.getElementById("review-no").innerHTML = results.length + ' Reviews';
    
});

// Add review button
document.getElementById("review_btn").addEventListener('click', function(){
    document.querySelector('.ratingSystem').style.display = 'flex';
});

document.getElementById("post-btn").addEventListener('click', function(){
    
    document.querySelector('.ratingSystem').style.display = 'none';

    var rating = 0;
    let review = document.getElementById("review").value;

    if(document.getElementById("rate-5").checked == true){
        rating = 5;
        console.log(rating);
    }

    else if(document.getElementById("rate-4").checked == true){
        rating = 4;
        console.log(rating);
    }

    else if(document.getElementById("rate-3").checked == true){
        rating = 3;
        console.log(rating);
    }

    else if(document.getElementById("rate-2").checked == true){
        rating = 2;
        console.log(rating);
    }

    else if(document.getElementById("rate-1").checked == true){
        rating = 1;
        console.log(rating);
    }

    if(review != ""){
        console.log(review);
    }
    console.log(itemRatings);

    let URL='https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPAddReview.php';
    $.getJSON(URL,{ProductID: item.productID, Review:review, Rating:rating, Reviewer:'1814732'},function(results){
        return;
    });
});

// The buy button
document.getElementById("buy-product").addEventListener('click',function(){

  
  if(loggedUser !=  null){
    console.log(loggedUser.Balance + " "+ item.pricePerItem);
    if(parseFloat(loggedUser.Balance) < parseFloat(item.pricePerItem)){
      alert("Insuficient funds, please load your account and try again");
    }
    else{
      document.querySelector('.buy-popup').style.display = 'flex';
    }
    // document.getElementById("user-balance").value = 'R' + JSON.parse(user).Balance;
    
  }
   else{
    alert("Please sign in");
  }
    
});

// Buying a product
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";
document.getElementById("Buy-btn").addEventListener('click',function(){

    console.log("Testing");


    let  transDate= new Date();
    let dd = String(transDate.getDate()).padStart(2, '0');
    let mm = String(transDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = transDate.getFullYear();

    transDate = mm + '/' + dd + '/' + yyyy;
    let prodID = item.productID;
    let buyer = loggedUser.UserID;
    let balance = parseFloat(loggedUser.Balance) - parseFloat(item.pricePerItem);
    let Quant = parseInt(item.currentQuantity) - 1; 
    console.log( transDate , prodID , buyer , balance , Quant);
    $.getJSON(buyURL , {
        ProductID : prodID,
        Buyer: buyer,
        TransDate : transDate,
        Balance: balance,
        Quantity : Quant
    },function(confirmation){
       console.log(confirmation);
        if(confirmation === "1"){
        const updateUserURl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReturnUser.php";
        $.getJSON(updateUserURl , {username : loggedUser.UserName}, function(result){
            if(result[0] !== ''){
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(result[0]));
            console.log(JSON.parse(localStorage.getItem('user')));
            alert("Product successfully purchased");
            window.location.href = "Homepage.html";
            }
        });
 
        }
    });

    

    document.querySelector('.buy-popup').style.display = 'none';
    

  
});

document.getElementById("Cancel-btn").addEventListener('click',function(){
    document.querySelector('.buy-popup').style.display = 'none';
    alert("Purchase canceled");
});
