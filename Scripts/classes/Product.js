class Product {
  constructor( productID,  userID,  currentQuantity,  soldQuantity,  pricePerItem,
              productName,  category,  productBrand,  productDescription,prodType) {

                this.productID = productID;
                this.userID = userID;
                this.currentQuantity = currentQuantity;
                this.soldQuantity = soldQuantity;
                this.pricePerItem = pricePerItem;
                this.productName = productName;
                this.category = category;
                this.productBrand = productBrand;
                this.productDescription = productDescription;
                this.productPicture = null;
                this.prodType = prodType;

  }


}

module.exports = Product ;