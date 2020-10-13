const verifyUser = require('../Scripts/classes/Register') ;


test('Test Registration Details', () => {
	
	expect(verifyUser('Chris', '1808080', 'Christopher', 'Brown', 'YungXIIXthKing', '0860010111')).toBe(false);
	
	expect(verifyUser('', '1808080', 'Christopher', 'Brown', 'YungXIIXthKing', '0860010111')).toBe(true);
});