const User = require('../Scripts/classes/User');

test("Returning information of the user", () => {
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	expect(user.userID).toBe(null);
	expect(user.name).toBe(null);
	expect(user.surname).toBe(null);
	expect(user.userName).toBe(null);
	expect(user.dateOfBirth).toBe(null);
	expect(user.gender).toBe(null);
	expect(user.dateCreated).toBe(null);
	expect(user.bio).toBe(null);
	expect(user.balance).toBe(null);
	expect(user.contactDetails).toBe(null);
	expect(user.proPicURL).toBe(null)
});

test('get UserID', ()=>{
	//const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getUserID', 'get');
	const getterUserID = user.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe(null);

	spy.mockRestore();
});

test('get Name', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getName', 'get');
	const getterName = user.getName;

	expect(spy).toHaveBeenCalled();
	expect(getterName).toBe(null);

	spy.mockRestore();
});

test('get Surname', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getSurname', 'get');
	const getterSurname = user.getSurname;

	expect(spy).toHaveBeenCalled();
	expect(getterSurname).toBe(null);

	spy.mockRestore();
});

test('get Username', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);
	
	const spy = jest.spyOn(user, 'getUserName', 'get');
	const getterUserName = user.getUserName;

	expect(spy).toHaveBeenCalled();
	expect(getterUserName).toBe(null);

	spy.mockRestore();
});

test('get Password', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getPassword', 'get');
	const getterPassword = user.getPassword;

	expect(spy).toHaveBeenCalled();
	expect(getterPassword).toBe(null);

	spy.mockRestore();
});

test('get Date Of Birth', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getDateOfBirth', 'get');
	const getterDOB = user.getDateOfBirth;

	expect(spy).toHaveBeenCalled();
	expect(getterDOB).toBe(null);

	spy.mockRestore();
});

test('get Gender', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getGender', 'get');
	const getterGender = user.getGender;

	expect(spy).toHaveBeenCalled();
	expect(getterGender).toBe(null);

	spy.mockRestore();
});

test('get Date Of Creation', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getDateCreated', 'get');
	const getterDateCreation = user.getDateCreated;

	expect(spy).toHaveBeenCalled();
	expect(getterDateCreation).toBe(null);

	spy.mockRestore();
});

test('get Bio', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getBio', 'get');
	const getterBio = user.getBio;

	expect(spy).toHaveBeenCalled();
	expect(getterBio).toBe(null);

	spy.mockRestore();
});

test('get Balance', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getBalance', 'get');
	const getterBalance = user.getBalance;

	expect(spy).toHaveBeenCalled();
	expect(getterBalance).toBe(null);

	spy.mockRestore();
});

test('get Contact Details', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getContactDetails', 'get');
	const getterContactDetails = user.getContactDetails;

	expect(spy).toHaveBeenCalled();
	expect(getterContactDetails).toBe(null);

	spy.mockRestore();
});

test('get Profile Picture', ()=>{
	const user = new User(null, null, null, null, null, null, null, null, null, null, null, null);

	const spy = jest.spyOn(user, 'getProPicURL', 'get');
	const getterProfilePic = user.getProPicURL;

	expect(spy).toHaveBeenCalled();
	expect(getterProfilePic).toBe(null);

	spy.mockRestore();
});

/*test('set UserID', ()=>{
	//const user = new User('101', 'Billy', 'McTominay', 'BigTee', 'BigMacTeaMoney', '0860010111', '22-06-2010', '30-06-2017', 'male', 'low-key douche', '5000', 'www.hello.com/images/image.png');	
	
	const spy = jest.spyOn(user, 'setUserID', 'set');
	const getterUserID = user.getUserID;

	expect(spy).toHaveBeenCalled();
	expect(getterUserID).toBe('101');

	spy.mockRestore();
});*/











/*jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
var html = require('fs').readFileSync('./HTML/Login.html').toString();

describe('validateSubmits', function() {
  
  test('shows/hides error banner', function() {
    document.documentElement.innerHTML = html;
    
    // initial state
    expect($('#response')).toBeTruthy();
    
    // submit blank form, get an error
    $('form').submit();
    expect($('#response')).toBeTruthy();
    
    // fill out completely, error gone
    $('#username').val('ChrisExcel');
    $('#password').val('123456');
    $('form').submit();
    expect($('#response')).toBeTruthy();
  });
});*/