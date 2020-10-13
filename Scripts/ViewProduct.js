
const cartPostUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPPostCart.php";
const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";
const addReviewUrl='https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPAddReview.php';
const url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReviews.php';
const buyURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPBuy.php";


// Getting to know who's logged in
let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

let item = JSON.parse(localStorage.getItem("item"));
console.log(item);




/* Getting and setting a picture*/
var pic = `https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/`+item.productPicture;
//console.log(pic);
document.getElementById("product_image").src = pic;

/* Getting and setting Products name*/
document.getElementById("product_title").innerHTML = item.productName.replace(":","");

/* Getting and setting Product Description*/
document.getElementById("product_description").innerHTML = item.productDescription;

/* Getting and setting Product price*/
document.getElementById("product_price").innerHTML = "R" + item.pricePerItem;

/* Getting and setting Product Quantity*/
document.getElementById("product_quantity").innerHTML = item.currentQuantity;

/* setting the user balance on the nav bar*/
if(loggedUser != null){
    document.getElementById("showBalance").innerHTML = "Balance: " + "R" + loggedUser.Balance;
}

/* Getting and setting Ratings*/


var ratings = 0;
var itemRatings;
function getReviews(){
    $.getJSON(url,{
        ProductID: item.productID
        },
        function(results){
        console.log(results);
        itemRatings = results;
        for(var i = 0; i < results.length;++i){
            console.log(results[i].Review_Rating);
            ratings += parseInt(results[i].Review_Rating);

            if(loggedUser != null){
                if(results[i].Reviewers_Name == loggedUser.UserName){
                    document.getElementById("your-Review").innerText = "Your review:";
                    document.getElementById("yourReview").innerText = itemRatings[i].Review_Rating+" Stars, "+ itemRatings[i].Review;
                }
            }
        }
        ratings /= results.length;
        
    
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

}
getReviews();

// Add review button
document.getElementById("review_btn").addEventListener('click', function(){
    window.scrollTo(0,0);
    console.log("Reviews: ");
    //console.log(itemRatings);
    var didReview = false;
    console.log(loggedUser);
    if(loggedUser != null){
        for(var i = 0; i < itemRatings.length; ++ i){
            if(itemRatings[i].Reviewers_Name == loggedUser.UserName){
                document.getElementById("your-Review").innerText = "Your review:";
                document.getElementById("yourReview").innerText = itemRatings[i].Review_Rating+" Stars, "+ itemRatings[i].Review;
                alert("You already reviewed this  item");
                didReview = true;
                break;
            }
        }
        if(!didReview){
            document.body.style.overflowY = "hidden";
            document.querySelector('.ratingSystem').style.display = 'flex';
        }
    }
    else{
        alert("Please log in to review this product!");
        window.location.href = "Login.html";
    }
    //alert("Clicked the review button");
});

document.getElementById("review-close").addEventListener('click', function(){
    document.body.style.overflowY = "visible";
    document.querySelector('.ratingSystem').style.display = 'none';
});


document.getElementById("post-btn").addEventListener('click', function(e){
    e.preventDefault();
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
    else{
        review = "";
    }
    console.log(item.productID);

    let promise = new Promise(resolve => {
        $.getJSON(addReviewUrl,{
            ProductID: item.productID,
            Review:review, 
            Rating:rating,
            Reviewer:loggedUser.UserName},
            function(results){
            console.log("Database results: " + results);
            resolve(results);
        });

    });

    promise.then(result =>{
        if(parseInt(result) == 1){
            alert('Review Successsfuly Added');
        }
        else{
            alert('Failed to add review');
        }
        document.body.style.overflowY = "visible";
        document.querySelector('.ratingSystem').style.display = 'none';
        getReviews();
    })
    
    
    //location.reload();
});

// The buy button
document.getElementById("buy-product").addEventListener('click',function(){


  if(loggedUser !=  null){
    console.log(loggedUser.Balance + " "+ item.pricePerItem);
    if(parseFloat(loggedUser.Balance) < parseFloat(item.pricePerItem)){
      alert("Insuficient funds, please load your account and try again");
    }
    else{
        window.scrollTo(0,0);
        document.body.style.overflowY = "hidden";
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

document.getElementById("Buy-btn").addEventListener('click',function(){
    document.body.style.overflowY = "visible";
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
    document.body.style.overflowY = "visible";
    document.querySelector('.buy-popup').style.display = 'none';
    alert("Purchase canceled");
});

document.getElementById("veiw_reviews_btn").addEventListener('click', function(){
    $("#reviews").empty();
    document.querySelector('.review-card').style.display = 'flex';
    document.querySelector('.reviews-heading').style.display = 'flex';

    for(var i = 0; i < itemRatings.length; i++){
        console.log(itemRatings[i]);
        var stars = document.createElement("div");
        for(var j = 0; j < parseInt(itemRatings[i].Review_Rating); ++j){
            console.log("Si on");
        }
        if(itemRatings[i].Review != ""){
            console.log("Phakathi inside");
            var reviewBlock = document.createElement("div");
            reviewBlock.className = "profile-pic col";
            var reviewHTML =  '<img src="../CSS/Images/profile.png" class="profile_pic">'+
                              '<div class="review-txt">' +
                              '<div>'+
                              '<span class="reviewerName">'+
                              itemRatings[i].Reviewers_Name +
                              '</span>' +
                              '</div>'+
                              `<div class="stars" id="star${itemRatings[i].ReviewID}">`+
                              '</div>' +
                              '<span class="reviewMsg">' + 
                              itemRatings[i].Review +
                              '</span>' +
                              '</div>'+
                              '</div>';
            reviewBlock.innerHTML = reviewHTML;
            var node = document.createTextNode(reviewHTML);
            var element = document.getElementById("reviews"); 
            element.appendChild(reviewBlock);
        }

        for(var j = 0; j < 5;++j){
            if(j < itemRatings[i].Review_Rating){
                var reviewstar = document.createElement("i");
                reviewstar.className = "fas fa-star";
                reviewstar.style.color = "yellow";
                document.getElementById(`star${itemRatings[i].ReviewID}`).appendChild(reviewstar);
            }
            else{
                var reviewstar = document.createElement("i");
                reviewstar.className = "fas fa-star";
                document.getElementById(`star${itemRatings[i].ReviewID}`).appendChild(reviewstar);
            }
        }


    }
});


//---> https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPAddReview.php
/*
Takes :: ProductID : productID , Rating: integer ,Review : text ,Reviewer : UserID
*/
