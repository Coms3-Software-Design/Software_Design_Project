var theID = localStorage.getItem("id");
var Categories = localStorage.getItem("cat");
var product_id = theID;
let ProductsArray;

$("#product-items").empty();
$.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php?&category='+ Categories +'&type='+'Goods', function(results) {
    ProductsArray = results;
    for(let j = 0; j < ProductsArray.length; j++){
      if (ProductsArray[j].Product_ID == product_id){
        var productDiv = document.getElementById("Product");

        /* Getting and setting a picture*/
        var pic = `https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/`+ProductsArray[j].Product_ID+`.jpeg`
        document.getElementById("product_image").src = pic;

        /* Getting and setting Products name*/
        document.getElementById("product_title").innerHTML = ProductsArray[j].Product_Name;

        /* Getting and setting Product Description*/
        document.getElementById("product_description").innerHTML = ProductsArray[j].Product_Description;

        /* Getting and setting Product price*/
        document.getElementById("product_price").innerHTML = "R" + ProductsArray[j].Product_Price;

        /* Getting and setting Product Quantity*/
        document.getElementById("product_quantity").innerHTML = ProductsArray[j].Current_Quantity;

        console.log(ProductsArray[j]);
      }
    }
});
