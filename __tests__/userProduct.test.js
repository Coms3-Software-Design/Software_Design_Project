const Product = require('../Scripts/classes/Product');

test("Product details verification", () => {
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	expect(product.productID).toBe(undefined);
	expect(product.userID).toBe(undefined);
	expect(product.currentQuantity).toBe(undefined);
	expect(product.soldQuantity).toBe(undefined);
	expect(product.pricePerItem).toBe(undefined);
	expect(product.productName).toBe(undefined);
	expect(product.category).toBe(undefined);
	expect(product.productBrand).toBe(undefined);
	expect(product.productPicture).toBe(undefined);
	expect(product.productDescription).toBe(undefined);
	expect(product.prodType).toBe(undefined);

});

test('get ProductID', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getProductID', 'get');
	const  getterProductID = product.getProductID;

	expect(spy).toHaveBeenCalled();
	expect(getterProductID).toBe(undefined);

	spy.mockRestore();
});

test('get userID', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getUserID', 'get');
	const  getterUserID = product.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe(undefined);

	spy.mockRestore();
});

test('get Category', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getCategory', 'get');
	const  getterCategory = product.getCategory;

	expect(spy).toHaveBeenCalled();
	expect(getterCategory).toBe(undefined);

	spy.mockRestore();
});

test('get ProductName', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy1 = jest.spyOn(product, 'getProductName', 'get');
	const  getterProductName = product.getProductName;

	expect(spy1).toHaveBeenCalled();
	expect(getterProductName).toBe(undefined);

	spy1.mockRestore();
});

test('get Product Brand', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getProductBrand', 'get');
	const getterProductBrand = product.getProductBrand;

	expect(spy).toHaveBeenCalled();
	expect(getterProductBrand).toBe(undefined);

	spy.mockRestore();
});

test('get Product Description', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getProductDescription', 'get');
	const getterProductDescription = product.getProductDescription;

	expect(spy).toHaveBeenCalled();
	expect(getterProductDescription).toBe(undefined);

	spy.mockRestore();
});

test('get Product Price Per Item', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getPricePerItem', 'get');
	const getterPPI = product.getPricePerItem;

	expect(spy).toHaveBeenCalled();
	expect(getterPPI).toBe(undefined);

	spy.mockRestore();
});

test('get Current Quantity', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getCurrentQuantity', 'get');
	const getterCurrentQuantity = product.getCurrentQuantity;

	expect(spy).toHaveBeenCalled();
	expect(getterCurrentQuantity).toBe(undefined);

	spy.mockRestore();
});

test('get Profile Pic', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getProductPic', 'get');
	const getterProductPic = product.getProductPic;

	expect(spy).toHaveBeenCalled();
	expect(getterProductPic).toBe(undefined);
	
	spy.mockRestore();
});

test('get Product Product Type', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getProdType', 'get');
	const getterProdType = product.getProdType;

	expect(spy).toHaveBeenCalled();
	expect(getterProdType).toBe(undefined);

	spy.mockRestore();
});

test('get Sold Quantity', ()=>{
	const product = new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(product, 'getSoldQuantity', 'get');
	const getterSoldQuantity = product.getSoldQuantity;

	expect(spy).toHaveBeenCalled();
	expect(getterSoldQuantity).toBe(undefined);

	spy.mockRestore();
});
