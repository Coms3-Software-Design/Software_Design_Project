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


//When user logins sign up and Registration disappears
let hide = function(){
  let log = JSON.parse(localStorage.getItem('user'));

  if(log==null){
  document.getElementById('signed').className = "D-login";
  document.getElementById('Servicecart').className = "D-login";
  }else{
   document.getElementById('Bsign').className = "D-login";
  }
}

//Checks whether the user logged in or not. If not it redirects to login page
let doSignUp = function(){
  if(localStorage.getItem('user') == null){
    alert('You will be directed to the log in page');
    window.location.href = "Login.html";
  }else{
    alert("you already logged in!!");
  }
}

//clears the session when the user has logged out
let logout = function(){
  localStorage.removeItem('user');
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


// This function makes sure handles the top rated goods on homepage start up
let topRatedGoods = function(){
  $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php',{
    category: 'Electronics',
    type: 'Goods'
    },function(result){

     let prod = '';
     let item;
     let arr = [];
     for(let i = 0 ; i < 6;i++){
      arr.push(result[i]);
      const prodItem = new Product(result[i].Product_ID, result[i].UserID, result[i].Category, result[i].Product_Name, result[i].Product_Brand, result[i].Product_Description, result[i].Product_Price, result[i].Current_Quantity, result[i].Product_Pic, result[i].Sold_Quantity, result[i].Product_type);
       item = JSON.stringify(prodItem);
        prod += `
       <div class = "col-sm-1 my-2 ml-5"  style="margin: auto; width: 50%; cursor: pointer;">
       <a href="ViewProduct.html">
       <div class="card" style="width: 10rem; height: 10rem; " id="${result[i].Product_ID}">
        <div class="img-container">
          <img src="${productPicUrl}${result[i].Product_ID}" class="card-img-top" alt="..." style="min-width:10rem ; max-width:10rem; min-height:10rem ; max-height:10rem;">
        </div>
        <div class="card-body"
          <h5 class="card-title">${result[i].Product_Name.replace(":","")}</h5>
          <h6 class="card-title">R${result[i].Product_Price}</h6>
        </div>  
        </a>
       </div>

     </div>
       `;

     }
     document.getElementById("homepageTopGoods").innerHTML = prod;

     arr.map(function(good){
      const prodItem = new Product(good.Product_ID, good.UserID, good.Category, good.Product_Name, good.Product_Brand, good.Product_Description, good.Product_Price, good.Current_Quantity, good.Product_Pic, good.Sold_Quantity, good.Product_type);
      const ite = JSON.stringify(prodItem);
      let individualCat = document.getElementById(good.Product_ID);
      individualCat.setAttribute("onclick", `viewProduct(${ite})`);
     }).join('');


    }
  );
}
// This function handles the top rated services on the main
let topRatedServices = function(){

  $.getJSON('https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/products.php',{
    category: 'Services',
    type: 'Services'
    },function(result){
      let servs =
      `${result.map(function(service){

        const prodItem = new Product(service.Product_ID, service.UserID, service.Category, service.Product_Name, service.Product_Brand, service.Product_Description, service.Product_Price, service.Current_Quantity, service.Product_Pic, service.Sold_Quantity, service.Product_type);
        const item = JSON.stringify(prodItem);
          return `
        <div class = "col-sm-1 my-2 ml-5 " style="margin: auto; width: 50%; height: 100%;">
        
          <div class="card" style="width: 8rem; height: 10rem; cursor: pointer;" id="${service.Product_ID}">
          <a href="ViewProduct.html" style="background-color: white; height : 100%">
              <div class = "img-container">
                <img src="${productPicUrl}${service.Product_ID}" class="card-img-top" alt="..." style="min-width:8rem ; max-width:8rem; min-height:10rem ; max-height:10rem;">
              </div>
              
              <div class = "card-body">
                <h6 class="card-title">${service.Product_Name}</h6>
                <p class="card-title">R${service.Product_Price}</p>
              </div>
            </a>
          </div>  
          
        </div>  
          `;
      }).join('')

      }

      `;


     document.getElementById("homepageTopServices").innerHTML = servs;

      result.map(function(service){
        const prodItem = new Product(service.Product_ID, service.UserID, service.Category, service.Product_Name, service.Product_Brand, service.Product_Description, service.Product_Price, service.Current_Quantity, service.Product_Pic, service.Sold_Quantity, service.Product_type);
        const item = JSON.stringify(prodItem);
        let individualCat = document.getElementById(service.Product_ID);
        individualCat.setAttribute("onclick", `viewProduct(${item})`);
       // console.log(item);

      }).join('');


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
}

init();
