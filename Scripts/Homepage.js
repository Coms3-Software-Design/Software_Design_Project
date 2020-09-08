/*
 * The 4 lines below gets information from the server
 * We set the catergoryURL and the array of categories
 */
const catergoryURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/categories.php';
const productPicUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/';
let productsArray;
let goodsArray;
let productHTML;

let users = new User("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1");

console.log(users.getName());
let productBlock = document.getElementById("product-items");

let goods = function(cat, type) {
  const cats = cat;
  $("#product-items").empty();
  $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php', {
      category: cat,
      type: type
    },
    function(results) {
      productsArray = results;
      for (let j = 0; j < productsArray.length; j++) {
        // {"Product_ID":"51","UserID":"1814732","Category":"Other","Product_Name":"Book","Product_Brand":"Condere",
        // "Product_Description":"Heat up your life","Product_Price":"783",
        // "Current_Quantity":"5","Sold_Quantity":"2","Product_Pic":"51.jpeg","Product_type":"goods"}
        const prodItem = new Product(productsArray[j].Product_ID, productsArray[j].UserID, productsArray[j].Category, productsArray[j].Product_Name, productsArray[j].Product_Brand, productsArray[j].Product_Description, productsArray[j].Product_Price, productsArray[j].Current_Quantity, productsArray[j].Product_Pic, productsArray[j].Sold_Quantity, productsArray[j].Product_type);
        //  console.log(prodItem);
        let stringFormItem = JSON.stringify(prodItem);
        //console.log(stringFormItem);
        const pic = `${productPicUrl}${prodItem.getProductPic()}`;
        let id = productsArray[j].Product_ID;
        productHTML = '<div class="card single-item"> ' +
          '<div class="img-container"> ' +
          `<img src=${pic} alt="" class="card-img-top product-img" id="productPic">` +
          '</div> ' +

          '<div class="card-body" id=' + id + ' onclick="viewProduct()> ' +
          '<div class="card-text d-flex justify-content-between text-capitalize"> ' +
          '<h5 id="item-name"> ' +
          prodItem.getProductName() +
          '</h5> ' +
          '<span> ' +
          'R' + prodItem.getPricePerItem() +
          '</span> ' +
          '</div> ' +
          '</div>' +
          '</div> ';
        let productBLOCK = document.createElement("div");
        productBLOCK.className = "col-10 col-sm-8 col-lg-4 mx-auto my-3";
        productBLOCK.setAttribute("onclick", `viewProduct(${stringFormItem})`);
        productBLOCK.innerHTML = productHTML;
        let node = document.createTextNode(productHTML);
        productBlock.appendChild(productBLOCK);
      }
    });

};

categories = function() {

  $.getJSON(catergoryURL, function(result) {
    goodsArray = result;
    catDropDown =
      `
      <ul class="nav-items"> ${goodsArray.map(function(category){
        return `<li class = "category" id = "${category.Category}" onclick = "goods(${category.Category})">${category.Category}</li>`;
        }).join('')}
      </ul>
    `
    document.getElementById("goodsDrop").innerHTML = catDropDown;

    /*
    This bottom section handles the onlick event of categories and service item on the navBar
    */
    goodsArray.map(function(category) {
      if (String(category.Category) !== String("Services")) {
        let individualCat = document.getElementById(`${category.Category}`);
        individualCat.setAttribute("onclick", `goods("${category.Category}","Goods")`);
      } else {
        let individualCat = document.getElementById("Service");
        individualCat.setAttribute("onclick", `goods("${category.Category}","Services")`);
      }
    }).join('');

  });


};

let globalletiable = {
  x: 'sachin'
};

viewProduct = function(item) {


  let prodItem = new Product(item.productID, item.userID, item.category, item.productName,
    item.productBrand, item.productDescription, item.pricePerItem, item.currentQuantity,
    item.productPicture, item.soldQuantity, item.prodType);
  console.log(prodItem);

  
}

goods('Accessories', 'Goods');
categories();
