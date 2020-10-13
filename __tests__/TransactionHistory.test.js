var TransactionTest = require('../Scripts/classes/TransactionHistory');

test('Test User ID', ()=>{

	let tempUser = '{"UserID": "101", "UserName" : "Jermaine", "Name" : "Jermaine", "Surname" : "Cole", "Balance" : "19020"}' ;
	let user = JSON.parse(tempUser);

	let testUser = TransactionTest.userId(user) ;
	//console.log(testUser)

	expect(testUser).toBe('101');
});

test('Test Username', () => {
	let tempUser = '{"UserID": "101", "UserName" : "Jermaine", "Name" : "Jermaine", "Surname" : "Cole", "Balance" : "19020"}' ;
	let user = JSON.parse(tempUser);

	let testUser = TransactionTest.username(user) ;

	expect(testUser).toBe('Jermaine');

});


test('Test Names First and Last', () => {

	let tempUser = '{"UserID": "101", "UserName" : "Jermaine", "Name" : "Jermaine", "Surname" : "Cole", "Balance" : "19020"}' ;
	let user = JSON.parse(tempUser);
	
	let testUser = TransactionTest.names(user);

	expect(testUser).toBe('Jermaine Cole');
});

test('Test Balance', () => {

	let tempUser = '{"UserID": "101", "UserName" : "Jermaine", "Name" : "Jermaine", "Surname" : "Cole", "Balance" : "1000000"}' ;
	let user = JSON.parse(tempUser);

	let testUser = TransactionTest.balance(user);

	expect(testUser).toBe('1 000 000');
})