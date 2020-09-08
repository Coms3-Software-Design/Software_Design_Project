
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
<<<<<<< HEAD
<<<<<<< .merge_file_uj73Z9
                this.productPicture = productPic;
=======
                this.productPicture = null;
>>>>>>> .merge_file_wNBaDd
=======
                this.productPicture = null;
>>>>>>> master
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
<<<<<<< HEAD
<<<<<<< .merge_file_uj73Z9
// {"Product_ID":"51","UserID":"1814732","Category":"Other","Product_Name":"Book","Product_Brand":"Condere",
// "Product_Description":"Heat up your life","Product_Price":"783",
// "Current_Quantity":"5","Sold_Quantity":"2","Product_Pic":"51.jpeg","Product_type":"goods"}
=======

module.exports = Product ;
>>>>>>> .merge_file_wNBaDd
=======

module.exports = Product ;
>>>>>>> master
