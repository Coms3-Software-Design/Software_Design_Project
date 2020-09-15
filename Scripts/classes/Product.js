
"use strict";

class Product {

  constructor( productID,  userID,  category , productName , productBrand , productDescription ,
    pricePerItem , currentQuantity , productPic , soldQuantity ,  prodType) {

                this.productID = productID;
                this.userID = userID;
                this.currentQuantity = currentQuantity;
                this.soldQuantity = soldQuantity;
                this.pricePerItem = pricePerItem;
                this.productName = productName;
                this.category = category;
                this.productBrand = productBrand;
                this.productDescription = productDescription;
                this.productPicture = productPic;
                this.prodType = prodType;

  }

   get getProductID(){
    return this.productID;
  }
   get getUserID(){
    return this.userID;
  }
   get getCategory(){
    return this.category;
  }
   get getProductName(){
    return this.productName;
  }
   get getProductBrand(){
    return this.productBrand;
  }
   get getProductDescription(){
    return this.productDescription;
  }
   get getPricePerItem(){
    return this.pricePerItem;
  }
   get getCurrentQuantity(){
    return this.currentQuantity;
  }
   get getProductPic(){
    return this.productPicture;
  }
   get getProdType(){
    return this.prodType;
  }
   get getSoldQuantity(){
    return this.soldQuantity;
  }

   set setCategory(category){this.category = category;}
   set setProductName(productName){this.productName = productName;}
   set setProductBrand(productBrand){this.productBrand = productBrand;}
   set setProductDescription(productDescription){this.productDescription = productDescription;}
   set setPricePerItem(pricePerItem){this.pricePerItem = pricePerItem;}
   set setCurrentQuantity(currentQuantity){this.currentQuantity = currentQuantity;}
   set setSoldQuantity(soldQuantity){this.soldQuantity = soldQuantity;}
   set setProdType(prodType){this.prodType = prodType;}

}

module.exports = Product;
