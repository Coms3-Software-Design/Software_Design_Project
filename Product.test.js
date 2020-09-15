const Product = require('./Scripts/classes/Product');

test("Product details verification", () => {
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');

	expect(product.productID).toBe('101');
	expect(product.userID).toBe('1001');
	expect(product.currentQuantity).toBe('20');
	expect(product.soldQuantity).toBe('10');
	expect(product.pricePerItem).toBe('10.99');
	expect(product.productName).toBe('XBOX');
	expect(product.category).toBe('Electronics');
	expect(product.productBrand).toBe('Microsoft');
	expect(product.productPicture).toBe('www.hello.com/img/img.jpg');
	expect(product.productDescription).toBe('Best In The World');
	expect(product.prodType).toBe('good');

});

test('get ProductID', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductID', 'get');
	const  getterProductID = product.getProductID;

	expect(spy).toHaveBeenCalled();
	expect(getterProductID).toBe('101');

	spy.mockRestore();
});

test('get ProductName', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy1 = jest.spyOn(product, 'getProductName', 'get');
	const  getterProductName = product.getProductName;

	expect(spy1).toHaveBeenCalled();
	expect(getterProductName).toBe('XBOX');

	spy1.mockRestore();
});

test('get userID', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getUserID', 'get');
	const  getterUserID = product.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe('1001');

	spy.mockRestore();
});

test('get Category', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getCategory', 'get');
	const  getterCategory = product.getCategory;

	expect(spy).toHaveBeenCalled();
	expect(getterCategory).toBe('Electronics');

	spy.mockRestore();
});

test('get Product Brand', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductBrand', 'get');
	const getterProductBrand = product.getProductBrand;

	expect(spy).toHaveBeenCalled();
	expect(getterProductBrand).toBe('Microsoft');

	spy.mockRestore();
});

test('get Product Price Per Item', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getPricePerItem', 'get');
	const getterPPI = product.getPricePerItem;

	expect(spy).toHaveBeenCalled();
	expect(getterPPI).toBe('10.99');

	spy.mockRestore();
});

test('get Product Description', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductDescription', 'get');
	const getterProductDescription = product.getProductDescription;

	expect(spy).toHaveBeenCalled();
	expect(getterProductDescription).toBe('Best In The World');

	spy.mockRestore();
});

test('get Product Product Type', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProdType', 'get');
	const getterProdType = product.getProdType;

	expect(spy).toHaveBeenCalled();
	expect(getterProdType).toBe('good');

	spy.mockRestore();
});
/*
test('get Product Description', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductDescription', 'get');
	const getterProductDescription = product.getProductDescription;

	expect(spy).toHaveBeenCalled();
	expect(getterProductDescription).toBe('Best In The World');

	spy.mockRestore();
});

test('get Product Description', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductDescription', 'get');
	const getterProductDescription = product.getProductDescription;

	expect(spy).toHaveBeenCalled();
	expect(getterProductDescription).toBe('Best In The World');

	spy.mockRestore();
});*/