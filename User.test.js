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

test('get UserID', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	
	
	const spy = jest.spyOn(user, 'getUserID', 'get');
	const getterUserID = user.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe('101');

	spy.mockRestore();
});

test('get Name', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getName', 'get');
	const getterName = user.getName;

	expect(spy).toHaveBeenCalled();
	expect(getterName).toBe('Billy');

	spy.mockRestore();
});

test('get Surname', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getSurname', 'get');
	const getterSurname = user.getSurname;

	expect(spy).toHaveBeenCalled();
	expect(getterSurname).toBe('McTominay');

	spy.mockRestore();
});

test('get Username', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getUserName', 'get');
	const getterUserName = user.getUserName;

	expect(spy).toHaveBeenCalled();
	expect(getterUserName).toBe('BigTee');

	spy.mockRestore();
});

test('get Password', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getPassword', 'get');
	const getterPassword = user.getPassword;

	expect(spy).toHaveBeenCalled();
	expect(getterPassword).toBe('BigMacTeaMoney');

	spy.mockRestore();
});


test('get Gender', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getGender', 'get');
	const getterGender = user.getGender;

	expect(spy).toHaveBeenCalled();
	expect(getterGender).toBe('male');

	spy.mockRestore();
});

test('get Bio', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getBio', 'get');
	const getterBio = user.getBio;

	expect(spy).toHaveBeenCalled();
	expect(getterBio).toBe('low-key douche');

	spy.mockRestore();
});

test('get Balance', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getBalance', 'get');
	const getterBalance = user.getBalance;

	expect(spy).toHaveBeenCalled();
	expect(getterBalance).toBe('5000');

	spy.mockRestore();
});

test('get Contact Details', ()=>{
	const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	

	const spy = jest.spyOn(user, 'getContactDetails', 'get');
	const getterContactDetails = user.getContactDetails;

	expect(spy).toHaveBeenCalled();
	expect(getterContactDetails).toBe('0860010111');

	spy.mockRestore();
});