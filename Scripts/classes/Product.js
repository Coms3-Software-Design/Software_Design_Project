
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

   getProductID = () => {
    return this.productID;
  }
   getUserID = () => {
    return this.userID;
  }
   getCategory = () => {
    return this.category;
  }
   getProductName = () => {
    return this.productName;
  }
   getProductBrand = () => {
    return this.productBrand;
  }
   getProductDescription = () => {
    return this.productDescription;
  }
   getPricePerItem = () => {
    return this.pricePerItem;
  }
   getCurrentQuantity = () => {
    return this.currentQuantity;
  }
   getProductPic = () => {
    return this.productPicture;
  }
   getProdType = () => {
    return this.prodType;
  }
   getSoldQuantity = () => {
    return this.soldQuantity;
  }

   setCategory = category => {this.category = category;}
   setProductName = productName => {this.productName = productName;}
   setProductBrand = productBrand => {this.productBrand = productBrand;}
   setProductDescription = productDescription => {this.productDescription = productDescription;}
   setPricePerItem = pricePerItem => {this.pricePerItem = pricePerItem;}
   setCurrentQuantity = currentQuantity => {this.currentQuantity = currentQuantity;}
   setSoldQuantity = soldQuantity => {this.soldQuantity = soldQuantity;}
   setProdType = prodType => {this.prodType = prodType;}


}
