class TransactionHistory {
	constructor( product_name , transaction_date , buyer , transaction_price ){
		//this.transactionID = transactionID;
		this.product_name = product_name ;
		this.transaction_date = transaction_date;
		this.buyer = buyer ;
		this.transaction_price = transaction_price;
	}

	/*get transID(){
		return this.transactionID;
	}*/

	get prod_name() {
		return this.tproduct_name;
	}

	get trans_date(){
		return this.transaction_date ;
	}

	get buyer(){
		return buyer;
	}

	get trans_price(){
		return this.transaction_price;
	}
}