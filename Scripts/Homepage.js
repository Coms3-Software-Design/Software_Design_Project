let post = "posts";
let user = "1814732";
/*
 * The 4 lines below gets information from the server
 * We set the url and the array of categories
 */
const  url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/categories.php';
let productsArray;
let goodsArray;
let productHTML;
let HTMLcode = '';

var productBlock = document.getElementById("product-items");

let categories = function() {
    $.getJSON(url, function (result) {
        goodsArray = result;
        for (let i = 0; i < goodsArray.length; i++) {
        	/*--------------- list of categories ----------------------*/
            //console.log(goodsArray[i].Category);

            var heading = document.createElement("h1");
            var node = document.createTextNode(goodsArray[i].Category);
            heading.appendChild(node);
            productBlock.appendChild(heading);

            $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php?&category='+ goodsArray[i].Category +'&type=Goods', function(results) {
            	productsArray = results;
            	for(let j = 0; j < productsArray.length; j++){
            		//console.log(productsArray[j].Product_Name);

            		productHTML = '<div class="card single-item"> '+
										    '<!-- Image of the product--> '+
										    '<div class="img-container"> '+
										        '<img src="../CSS/Images/iphone.jpg" alt="" class="card-img-top product-img"> '+
										    '</div> '+
										    '<div class="card-body"> '+
										        '<div class="card-text d-flex justify-content-between text-capitalize"> '+
										            '<h5 id="item-name"> '+
										                productsArray[j].Product_Name+
										            '</h5> '+
										            '<span> '+
										                'R' + productsArray[j].Product_Price+
										            '</span> '+
										        '</div> '+
										    '</div> '+
										'</div> ';
					HTMLcode += productHTML;
					var productBLOCK = document.createElement("div");
					productBLOCK.className = "col-10 col-sm-8 col-lg-4 mx-auto my-3";
					productBLOCK.setAttribute("onclick", "viewProduct()");
					productBLOCK.innerHTML = productHTML;
		      var node = document.createTextNode(productHTML);
		      productBlock.appendChild(productBLOCK);
            	}
            });
        }
    });
};

categories();

let viewProduct = function(){
	console.log("It works");
}
