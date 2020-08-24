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

let goods = function(cat) {
  const cats = cat;


            $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php?&category='+ cat +'&type=Goods', function(results) {
            	productsArray = results;
            	for(let j = 0; j < productsArray.length; j++){
            		console.log(productsArray[j]);
                var pic = `https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/`+productsArray[j].Product_ID+`.jpeg`
            		productHTML = '<div class="card single-item"> '+
										    '<!-- Image of the product--> '+
										    '<div class="img-container"> '+
                                `<img src=${pic} alt="" class="card-img-top product-img" width = "300" height = "250">`+
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

};

goods('Other');

categories = function(){
  $.getJSON(url, function (result) {
    goodsArray = result;
    for (let i = 0; i < goodsArray.length; i++) {
    	/*--------------- list of categories ----------------------*/
        //console.log(goodsArray[i].Category);

        var heading = document.createElement("h1");
        var node = document.createTextNode(goodsArray[i].Category);
        heading.appendChild(node);
        productBlock.appendChild(heading);


 }
});
};
let viewProduct = function(){
	console.log("It works");
}
