const Product = require('../Scripts/classes/Product');

test("Product details verification", () => {
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);

	expect(product.productID).toBe(null);
	expect(product.userID).toBe(null);
	expect(product.currentQuantity).toBe(null);
	expect(product.soldQuantity).toBe(null);
	expect(product.pricePerItem).toBe(null);
	expect(product.productName).toBe(null);
	expect(product.category).toBe(null);
	expect(product.productBrand).toBe(null);
	expect(product.productPicture).toBe(null);
	expect(product.productDescription).toBe(null);
	expect(product.prodType).toBe(null);

});

test('get ProductID', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getProductID', 'get');
	const  getterProductID = product.getProductID;

	expect(spy).toHaveBeenCalled();
	expect(getterProductID).toBe(null);

	spy.mockRestore();
});

test('get userID', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getUserID', 'get');
	const  getterUserID = product.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe(null);

	spy.mockRestore();
});

test('get Category', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getCategory', 'get');
	const  getterCategory = product.getCategory;

	expect(spy).toHaveBeenCalled();
	expect(getterCategory).toBe(null);

	spy.mockRestore();
});

test('get ProductName', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy1 = jest.spyOn(product, 'getProductName', 'get');
	const  getterProductName = product.getProductName;

	expect(spy1).toHaveBeenCalled();
	expect(getterProductName).toBe(null);

	spy1.mockRestore();
});

test('get Product Brand', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getProductBrand', 'get');
	const getterProductBrand = product.getProductBrand;

	expect(spy).toHaveBeenCalled();
	expect(getterProductBrand).toBe(null);

	spy.mockRestore();
});

test('get Product Description', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getProductDescription', 'get');
	const getterProductDescription = product.getProductDescription;

	expect(spy).toHaveBeenCalled();
	expect(getterProductDescription).toBe(null);

	spy.mockRestore();
});

test('get Product Price Per Item', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getPricePerItem', 'get');
	const getterPPI = product.getPricePerItem;

	expect(spy).toHaveBeenCalled();
	expect(getterPPI).toBe(null);

	spy.mockRestore();
});

test('get Current Quantity', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getCurrentQuantity', 'get');
	const getterCurrentQuantity = product.getCurrentQuantity;

	expect(spy).toHaveBeenCalled();
	expect(getterCurrentQuantity).toBe(null);

	spy.mockRestore();
});

test('get Profile Pic', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getProductPic', 'get');
	const getterProductPic = product.getProductPic;

	expect(spy).toHaveBeenCalled();
	expect(getterProductPic).toBe(null);
	
	spy.mockRestore();
});

test('get Product Product Type', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getProdType', 'get');
	const getterProdType = product.getProdType;

	expect(spy).toHaveBeenCalled();
	expect(getterProdType).toBe(null);

	spy.mockRestore();
});

test('get Sold Quantity', ()=>{
	const product = new Product(null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(product, 'getSoldQuantity', 'get');
	const getterSoldQuantity = product.getSoldQuantity;

	expect(spy).toHaveBeenCalled();
	expect(getterSoldQuantity).toBe(null);

	spy.mockRestore();
});
