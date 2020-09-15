var item = JSON.parse(localStorage.getItem("item"));
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
let url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReviews.php';
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
    $.getJSON(URL,{ProductID: item.productID, Review:review, Rating:rating, Reviewer:'1814731'},function(results){
        return;
    });
});

document.getElementById("buy-product").addEventListener('click',function(){
    document.querySelector('.buy-popup').style.display = 'flex';
});

document.getElementById("Buy-btn").addEventListener('click',function(){
    document.querySelector('.buy-popup').style.display = 'none';
    alert("You just bought a product");
});

document.getElementById("Cancel-btn").addEventListener('click',function(){
    document.querySelector('.buy-popup').style.display = 'none';
    alert("Purchase canceled");
});

/*

<script>
                const btn = document.querySelector("button");
                const post = document.querySelector(".post");
                const widget = document.querySelector(".star-widget");
                const editBtn = document.querySelector(".edit");

                btn.onclick = ()=>{
                  widget.style.display = "none";
                  post.style.display = "block";

                  if(document.getElementById("rate-5").checked == true){
                    console.log(5);
                  }

                  else if(document.getElementById("rate-4").checked == true){
                    console.log(4);
                  }

                  else if(document.getElementById("rate-3").checked == true){
                    console.log(3);
                  }

                  else if(document.getElementById("rate-2").checked == true){
                    console.log(2);
                  }

                  else if(document.getElementById("rate-1").checked == true){
                    console.log(1);
                  }

                  let review = document.getElementById("review").value;
                  if(review != ""){
                    console.log(review);
                  }

                  return false;
                }

                editBtn.onclick = ()=>{
                  widget.style.display = "block";
                  post.style.display = "none";

                  return false;
                }
              </script>

*/