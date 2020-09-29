const User = require('../Scripts/classes/User');

test("Returning information of the user", () => {
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	expect(user.userID).toBe(undefined);
	expect(user.name).toBe(undefined);
	expect(user.surname).toBe(undefined);
	expect(user.userName).toBe(undefined);
	expect(user.dateOfBirth).toBe(undefined);
	expect(user.gender).toBe(undefined);
	expect(user.dateCreated).toBe(undefined);
	expect(user.bio).toBe(undefined);
	expect(user.balance).toBe(undefined);
	expect(user.contactDetails).toBe(undefined);
	expect(user.proPicURL).toBe(undefined)
});

test('get UserID', ()=>{
	//const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getUserID', 'get');
	const getterUserID = user.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe(undefined);

	spy.mockRestore();
});

test('get Name', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getName', 'get');
	const getterName = user.getName;

	expect(spy).toHaveBeenCalled();
	expect(getterName).toBe(undefined);

	spy.mockRestore();
});

test('get Surname', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getSurname', 'get');
	const getterSurname = user.getSurname;

	expect(spy).toHaveBeenCalled();
	expect(getterSurname).toBe(undefined);

	spy.mockRestore();
});

test('get Username', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	
	const spy = jest.spyOn(user, 'getUserName', 'get');
	const getterUserName = user.getUserName;

	expect(spy).toHaveBeenCalled();
	expect(getterUserName).toBe(undefined);

	spy.mockRestore();
});

test('get Password', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getPassword', 'get');
	const getterPassword = user.getPassword;

	expect(spy).toHaveBeenCalled();
	expect(getterPassword).toBe(undefined);

	spy.mockRestore();
});

test('get Date Of Birth', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getDateOfBirth', 'get');
	const getterDOB = user.getDateOfBirth;

	expect(spy).toHaveBeenCalled();
	expect(getterDOB).toBe(undefined);

	spy.mockRestore();
});

test('get Gender', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getGender', 'get');
	const getterGender = user.getGender;

	expect(spy).toHaveBeenCalled();
	expect(getterGender).toBe(undefined);

	spy.mockRestore();
});

test('get Date Of Creation', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getDateCreated', 'get');
	const getterDateCreation = user.getDateCreated;

	expect(spy).toHaveBeenCalled();
	expect(getterDateCreation).toBe(undefined);

	spy.mockRestore();
});

test('get Bio', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getBio', 'get');
	const getterBio = user.getBio;

	expect(spy).toHaveBeenCalled();
	expect(getterBio).toBe(undefined);

	spy.mockRestore();
});

test('get Balance', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getBalance', 'get');
	const getterBalance = user.getBalance;

	expect(spy).toHaveBeenCalled();
	expect(getterBalance).toBe(undefined);

	spy.mockRestore();
});

test('get Contact Details', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getContactDetails', 'get');
	const getterContactDetails = user.getContactDetails;

	expect(spy).toHaveBeenCalled();
	expect(getterContactDetails).toBe(undefined);

	spy.mockRestore();
});

test('get Profile Picture', ()=>{
	const user = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

	const spy = jest.spyOn(user, 'getProPicURL', 'get');
	const getterProfilePic = user.getProPicURL;

	expect(spy).toHaveBeenCalled();
	expect(getterProfilePic).toBe(undefined);

	spy.mockRestore();
});
