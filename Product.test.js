const Product = require('./Scripts/classes/Product');

test("Product details verification", () => {
	const product = new Product('101', '1001', '20', '10', '10.99', 'XBOX', 'Electronics', 'Microsoft', 'Best In The World', 'good');

	expect(product.productID).toBe('101');
	expect(product.userID).toBe('1001');
	expect(product.currentQuantity).toBe('20');
	expect(product.soldQuantity).toBe('10');
	expect(product.pricePerItem).toBe('10.99');
	expect(product.productName).toBe('XBOX');
	expect(product.category).toBe('Electronics');
	expect(product.productBrand).toBe('Microsoft');
	expect(product.productPicture).toBe(null);
	expect(product.productDescription).toBe('Best In The World');
	expect(product.prodType).toBe('good');

});