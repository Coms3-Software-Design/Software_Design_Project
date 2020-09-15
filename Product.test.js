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

test('get functions', ()=>{
	const product = new Product('101', '1001', 'Electronics', 'XBOX', 'Microsoft', 'Best In The World', '10.99', '20', 'www.hello.com/img/img.jpg','10', 'good');
	
	const spy = jest.spyOn(product, 'getProductID', 'get');
	const  getterProductID = product.getProductID;

	expect(spy).toHaveBeenCalled();
	expect(getterProductID).toBe('101');

	spy.mockRestore();
});