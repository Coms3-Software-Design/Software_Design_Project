class Item {
	constructor(username, userID, userBrand, descriptionName, priceValue, quantityValue, goodsService, categories){
		this.username = username;
		this.userID = userID ;
		this.userBrand = userBrand ;
		this.descriptionName = descriptionName ;
		this.priceValue = priceValue ;
		this.quantityValue = quantityValue ;
		this.goodsService = goodsService ;
		this.categories = categories ;
	}

	get getUsername(){
		return this.username;
	}

	get getUserID(){
		return this.userID;
	}

	get getUserBrand(){
		return this.userBrand ;
	}

	get getDescName(){
		return this.descriptionName ;
	}

	get getPriceValue(){
		return this.priceValue ;
	}

	get getQuantityValue(){
		return this.quantityValue ;
	}

	get getGoodsService(){
		return this.goodsService ;
	}

	get getCategories(){
		return this.categories ;
	}
}

module.exports = Item ;