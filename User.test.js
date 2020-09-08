const User = require('./Scripts/classes/User');

test("Returning information of the user", () => {
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');

	expect(user.userID).toBe('101');
	expect(user.name).toBe('Billy');
	expect(user.surname).toBe('McTominay');
	expect(user.userName).toBe('BigTee');
	expect(user.dateOfBirth).toBe('22-06-2010');
	expect(user.gender).toBe('male');
	expect(user.dateCreated).toBe('30-06-2017');
	expect(user.bio).toBe('low-key douche');
	expect(user.balance).toBe('5000');
	expect(user.contactDetails).toBe('0860010111');
	expect(user.proPicURL).toBe('www.hello.com/images/image.png')
});
