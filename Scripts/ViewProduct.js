
const cartPostUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPPostCart.php";
const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";


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
document.getElementById("product_title").innerHTML = item.productName.replace(":","");

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
    console.log(results);
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
    console.log("Reviews: ");
    //console.log(itemRatings);
    var didReview = false;
    console.log(loggedUser);
    for(var i = 0; i < itemRatings.length; ++ i){
        if(itemRatings[i].Reviewers_Name == loggedUser.UserID){
            document.getElementById("your-Review").innerText = "Your review:";
            document.getElementById("yourReview").innerText = itemRatings[i].Review_Rating+" Stars, "+ itemRatings[i].Review;
            alert("You already reviewed this  item");
            didReview = true;
        }
    }
    if(!didReview){
        document.querySelector('.ratingSystem').style.display = 'flex';
    }
    //alert("Clicked the review button");
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
    $.getJSON(URL,{ProductID: item.productID, Review:review, Rating:rating, Reviewer:loggedUser.UserID},function(results){
        return;
    });
    location.reload();
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
    window.location.href = "Login.html";
  }
    
});

// Buying a product
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";
document.getElementById("Buy-btn").addEventListener('click',function(){

   
    document.querySelector('.buy-popup').style.display = 'none';
    updateCart();
   
    
});

function updateCart(){
    let found = true;
    let promise = new Promise(resolve=>{
        $.getJSON(cartUrl , {userID : loggedUser.UserID} , function(results){
            results.forEach(prod => {
                if(parseInt(prod.Product_ID) === parseInt(item.productID)){
                    found = false;
                    $.getJSON(cartPostUrl, {userID : loggedUser.UserID, product_ID :  item.productID , amount : parseInt(prod.Amount)+1},function(ans){
                        alert("Cart Item increased by 1");
                        found = false;
                          
                    });
                }
                
            });
            resolve(found);
        });

    });

    promise.then(answer=>{
        if(found){
            $.getJSON(cartPostUrl, {userID : loggedUser.UserID, product_ID :  item.productID , amount : 1},function(ans){
                alert("new item addded to cart");  
            });
        }
    });
    
 

}

document.getElementById("Cancel-btn").addEventListener('click',function(){
    document.querySelector('.buy-popup').style.display = 'none';
    alert("Purchase canceled");
});

document.getElementById("veiw_reviews_btn").addEventListener('click', function(){
    
    for(var i = 0; i < itemRatings.length; i++){

        if(itemRatings[i].Review != ""){
            console.log("Phakathi inside");
            var reviewBlock = document.createElement("div");
            reviewBlock.className = "all-reviews";
            var reviewHTML =  '<h3 class="reviewer">'+
                              itemRatings[i].Reviewers_Name +
                              '</h3>'+
                              '<h4 class="the-review">' + 
                              itemRatings[i].Review +
                              '</h4>' +
                              '<hr>';
            reviewBlock.innerHTML = reviewHTML;
            var node = document.createTextNode(reviewHTML);
            //reviewBlock.appendChild(node);
            var element = document.getElementById("reviews");
            element.appendChild(reviewBlock);
        }
    }
    document.querySelector('.review-popup').style.display = 'flex';
});

document.getElementById("close-btn").addEventListener('click',function(){
    document.querySelector('.review-popup').style.display = 'none';
});



//---> https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPAddReview.php
/*
Takes :: ProductID : productID , Rating: integer ,Review : text ,Reviewer : UserID
*/