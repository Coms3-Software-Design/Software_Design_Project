/*
 * The 4 lines below gets information from the server
 * We set the catergoryURL and the array of categories
 */
const catergoryURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/categories.php';
const categoryPicURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/';
const productPicUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/';
let productBlock = document.getElementById("product-items");
let productsArray;
let goodsArray;
let productHTML;

// let user = sessionStorage.getItem('user');
// if(user !=  null){
//   console.log(user);
// }


//When user logins sign up and Registration disappears
let hide = function(){
  let log = JSON.parse(sessionStorage.getItem('user'));

  if(log==null){
  document.getElementById('signed').className = "D-login";
  }else{

   document.getElementById('Bsign').className = "D-login";
  }
}

//clears the session when the user has logged out
let logout = function(){
  sessionStorage.removeItem('user');
  sessionStorage.clear();
 
}



// this function sets the categories on homepage
let homepageCategories = function(){

  $.getJSON(catergoryURL , function(result){
    let categ =
    `${result.map(function(category){
      if (String(category.Category) !== String("Services")) {
      return`<div class = "col-sm-1 my-2 ml-5 " style="margin: auto; width: 50%;" >
                <div class="card" style="width: 8rem; cursor: pointer;" id="${category.Category}ss">
                  <img src="${categoryPicURL}${category.Category}" class="card-img-top" alt="..." style="min-width:8rem ; max-width:8rem; min-height:10rem ; max-height:10rem;">
                  <h5 class="card-title">${category.Category}</h5>

                </div>
              </div>
      `;
      }


    }).join('')
  }
    `;

    document.getElementById("homepageCats").innerHTML = categ;

    result.map(function(category){
      if (String(category.Category) !== String("Services")) {
        let individualCat = document.getElementById(`${category.Category}ss`);
        individualCat.setAttribute("onclick", `goods("${category.Category}","Goods")`);
      } else {
        let individualCat = document.getElementById("Service");
        individualCat.setAttribute("onclick", `goods("Services","Services")`);
      }
     })
  });
};


// This function handles the top rated services on the main
let topRatedServices = function(){

  $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php',{
    category: 'Services',
    type: 'Services'
    },function(result){
      let servs =
      `${result.map(function(service){

        const prodItem = new Product(service.Product_ID, service.UserID, service.Category, service.Product_Name, service.Product_Brand, service.Product_Description, service.Product_Price, service.Current_Quantity, service.Product_Pic, service.Sold_Quantity, service.Product_type);

          return `
          <div class = "col-sm-1 my-2 ml-5 " style="margin: auto; width: 50%;">
          <div class="card" style="width: 8rem; height: 10rem; cursor: pointer;">
            <img src="${productPicUrl}${service.Product_ID}" class="card-img-top" alt="..." style="min-width:8rem ; max-width:8rem; min-height:10rem ; max-height:10rem;">
            <h5 class="card-title">${service.Product_Name}</h5>
            <h6 class="card-title">R${service.Product_Price}</h6>
          </div>
        </div>
          `;
      }).join('')}

      `;
     document.getElementById("homepageTopServices").innerHTML = servs;


    }
  );
}


// This function makes sure handles the top rated goods on homepage start up
let topRatedGoods = function(){
  $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php',{
    category: 'Electronics',
    type: 'Goods'
    },function(result){
     let prod = '';
     for(let i = 0 ; i < 6;i++){
        prod += `
       <div class = "col-sm-1 my-2 ml-5 " style="margin: auto; width: 50%;">
       <div class="card" style="width: 10rem; height: 10rem; cursor: pointer;">
         <img src="${productPicUrl}${result[i].Product_ID}" class="card-img-top" alt="..." style="min-width:10rem ; max-width:10rem; min-height:10rem ; max-height:10rem;">
         <h5 class="card-title">${result[i].Product_Name}</h5>
         <h6 class="card-title">R${result[i].Product_Price}</h6>
       </div>
     </div>
       `;

     }
     document.getElementById("homepageTopGoods").innerHTML = prod;


    }
  );
}

 // This function is responsible for showing goods of any selected category
let goods = function(cat, type) {
  const cats = cat;
  $("#Tops").empty();
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
        let stringFormItem = JSON.stringify(prodItem);

        const pic = `${productPicUrl}${prodItem.getProductPic}`;
        let id = productsArray[j].Product_ID;
        productHTML = '<a href="ViewProduct.html" class = " my-2 ml-5">' +
        '<div class="card single-item"> ' +
          '<div class="img-container"> ' +
          `<img src=${pic} alt="" class="card-img-top product-img" id="productPic">` +
          '</div> ' +

          '<div class="card-body" id=' + id + ' onclick="viewProduct()> ' +
          '<div class="card-text d-flex justify-content-between text-capitalize"> ' +
          '<h5 id="item-name"> ' +
          prodItem.getProductName +
          '</h5> ' +
          '<span> ' +
          'R' + prodItem.getPricePerItem +
          '</span> ' +
          '</div> ' +
          '</div>' +
          '</div> ' +
          '</a>';
        let productBLOCK = document.createElement("div");
        productBLOCK.className = "col-10 col-sm-8 col-lg-3 mx-auto my-3";
        productBLOCK.setAttribute("onclick", `viewProduct(${stringFormItem})`);
        productBLOCK.innerHTML = productHTML;
        let node = document.createTextNode(productHTML);
        productBlock.appendChild(productBLOCK);
      }
    });

};


//This Function sets the categories Drop down
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

  console.log(item);
  let prodItem = new Product(item.productID, item.userID, item.category, item.productName,
    item.productBrand, item.productDescription, item.pricePerItem, item.currentQuantity,
    item.productPicture, item.soldQuantity, item.prodType);
  console.log(item.productName);
  localStorage.setItem("item",JSON.stringify(item));

}


let init = function(){

  hide();
  homepageCategories();
  topRatedServices();
  topRatedGoods();
  categories();
  logout();
}

init();
