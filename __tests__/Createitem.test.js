const createItem = require('../Scripts/classes/VerifyCreateItem');
var Item = require('../Scripts/classes/CreateItem') ;

test('Test whether credentials' , () => {

	expect(createItem('', 'XBOX')).toBe(true);
	expect(createItem('101', 'Sony')).toBe(false);
});

test('Test Item', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	expect(item.username).toBe('Mike') ;
	expect(item.userID).toBe('101') ;
	expect(item.userBrand).toBe('Sony') ;
	expect(item.descriptionName).toBe('Best best') ;
	expect(item.priceValue).toBe('10.50') ;
	expect(item.quantityValue).toBe('120') ;
	expect(item.goodsService).toBe('goods') ;
	expect(item.categories).toBe('Electronics');
}); 


test('get Username' , () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getUsername', 'get');
	const getterUsername = item.getUsername ;

	expect(spy).toHaveBeenCalled();
	expect(getterUsername).toBe('Mike');

	spy.mockRestore();
});

test('get UserID', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getUserID', 'get');
	const getterUserID = item.getUserID ;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe('101');

	spy.mockRestore();
});

test('get UserBrand', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getUserBrand', 'get');
	const getterUserBrand = item.getUserBrand ;

	expect(spy).toHaveBeenCalled();
	expect(getterUserBrand).toBe('Sony');

	spy.mockRestore();
});

test('get Description Name', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getDescName', 'get');
	const getterDescName = item.getDescName ;

	expect(spy).toHaveBeenCalled();
	expect(getterDescName).toBe('Best best');

	spy.mockRestore();
});

test('get Price Value', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getPriceValue', 'get');
	const getterPriceValue = item.getPriceValue ;

	expect(spy).toHaveBeenCalled();
	expect(getterPriceValue).toBe('10.50');

	spy.mockRestore();
});

test('get Quantity Value', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getQuantityValue', 'get');
	const getterQuantityValue = item.getQuantityValue ;

	expect(spy).toHaveBeenCalled();
	expect(getterQuantityValue).toBe('120');

	spy.mockRestore();
});

test('get Goods And Services Value', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getGoodsService', 'get');
	const getterGoodsService = item.getGoodsService ;

	expect(spy).toHaveBeenCalled();
	expect(getterGoodsService).toBe('goods');

	spy.mockRestore();
});

test('get Categories', () => {
	const item = new Item('Mike', '101', 'Sony', 'Best best', '10.50', '120', 'goods', 'Electronics') ;

	const spy = jest.spyOn(item, 'getCategories', 'get');
	const getterCategories = item.getCategories ;

	expect(spy).toHaveBeenCalled();
	expect(getterCategories).toBe('Electronics');

	spy.mockRestore();
});