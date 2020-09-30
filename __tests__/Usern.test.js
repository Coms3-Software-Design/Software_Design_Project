const User = require('../Scripts/classes/User');

test("Returning information of the user", () => {
	const user = new User(null) //, 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');

	expect(user.userID).toBe(null);
	
	});

test("Returning information of the user", () => {
	const user = new User(undefined)//, 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');

	expect(user.userID).toBe(undefined);
	
	});
test("Returning information of the user", () => {
	const user = new User(""); //, 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');

	expect(user.userID).toBe("");
	
	});