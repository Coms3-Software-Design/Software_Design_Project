let post = "posts";
let user = "1814732";
/*
 * The 4 lines below gets information from the server
 * We set the url and the array of categories
 */
const  url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/categories.php';
let productsArray;
let goodsArray;
let Category;
let productHTML;
let HTMLcode = '';


var productBlock = document.getElementById("product-items");

let goods = function(cat,type) {
  const cats = cat;
  Category = cat;
  $("#product-items").empty();
	            $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php?&category='+ cat +'&type='+type, function(results) {
	            	productsArray = results;
	            	for(let j = 0; j < productsArray.length; j++){
	            		//console.log(productsArray[j]);
	                var pic = `https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/`+productsArray[j].Product_ID+`.jpeg`
	                var id = productsArray[j].Product_ID;
	                console.log(id);
	            		productHTML = '<a href="ViewProduct.html">' + 
	            		'<div class="card single-item"> '+
											    '<!-- Image of the product--> '+
											    '<div class="img-container"> '+
	                                				`<img src=${pic} alt="" class="card-img-top product-img" id="productPic">`+
											    '</div> '+
											    '<div class="card-body" id='+id+' onclick="viewProduct()> '+
											        '<div class="card-text d-flex justify-content-between text-capitalize"> '+
											            '<h5 id="item-name"> '+
											                productsArray[j].Product_Name+
											            '</h5> '+
											            '<span> '+
											                'R' + productsArray[j].Product_Price+
											            '</span> '+
											        '</div> '+
											    '</div> '+
											'</div> '
	            		+ '</a>';
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

categories = function(){

  var array = $.getJSON(url, function (result) {
    goodsArray = result;
    catDropDown = `
      <ul class="nav-items">${goodsArray.map(function(category){
        //console.log(category);
        return `<li class = "category" id = "${category.Category}" onclick = "goods(${category.Category})">${category.Category}</li>`;
      }).join('')}
      </ul>
    `
    document.getElementById("goodsDrop").innerHTML = catDropDown;

var Accessories = document.getElementById("Accessories");
Accessories.setAttribute("onclick", `goods("Accessories","Goods")`);

var Cutlery = document.getElementById("Cutlery");
Cutlery.setAttribute("onclick", `goods("Cutlery","Goods")`);

var Electronics = document.getElementById("Electronics");
Electronics.setAttribute("onclick", `goods("Electronics","Goods")`);

var Other = document.getElementById("Other");
Other.setAttribute("onclick", `goods("Other","Goods")`);

var Shoes = document.getElementById("Shoes");
Shoes.setAttribute("onclick", `goods("Shoes","Goods")`);

var Stationery = document.getElementById("Stationery");
Stationery.setAttribute("onclick", `goods("Stationery", "Goods")`);

var Services = document.getElementById("Service");
Services.setAttribute("onclick", `goods("Services","Services")`);

});


};

var globalVariable = {
    x: 'sachin'
};

viewProduct = function(){
	var image;
	document.onclick = function(e) {
    if (e.target.tagName == 'DIV') {
      x = e.target.id;
      for(i = 0; i < productsArray.length; ++i){
      	if(e.target.id == productsArray[i].Product_ID){
      		localStorage.setItem("id",e.target.id);
      		localStorage.setItem("cat",Category);
      	}
      	//console.log(productsArray[i].Product_ID);
      }
      console.log(productsArray[0]);
    }
  }
}

goods('Accessories','Goods');
categories();
