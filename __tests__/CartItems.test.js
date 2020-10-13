const sumPrice = require('../Scripts/classes/CartItems') ;

test('' , () => {
	expect(sumPrice(1, 2)).toBe(2) ;
});