//console.log('Phakhathi inside');

let user = JSON.parse(localStorage.getItem('user'));

console.log(user) ;

//console.log ("The User ID of the user that logged in --->>> " + user.UserID);

let transURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPTransHistory.php';

	function userId(user){
		let u_ID = user.UserID;
		return u_ID;
	}

	function username(user){
		let user_name = user.UserName ;
		return user_name;
	}
	
	function names(user){
		return user.Name + ' ' + user.Surname ;
	}
	
	function balance(user){
		let balance_string = '' ;
		let counter = 0 ;
		let balance_user = user.Balance;
		for (var i = balance_user.length-1 ; i >= 0 ; i-- ){
			counter+=1;
			if ( counter == 3){
				balance_string+=balance_user[i];
				balance_string+=' ';
				counter=0;
			}
			else{
				balance_string+=balance_user[i];
			}
		}

		let balance_complete = '';

		for (var i = balance_string.length - 1; i >= 0; i--) {
			balance_complete += balance_string[i]
		}

		return balance_complete;
	}

	function profilePic(user){
		return user.Profilepic ;
	}

	/*function transactionTemplate(transaction){

	}*/
	

	function getTransactionInfo(){
		$.getJSON(transURL, { userName: userId(user) }, function(results){
				console.log(results);
				
				if (results.length > 0){
					/*There are transactions*/
					document.getElementById('transaction-history-list').innerHTML = `
			
					${results.map(function(transaction){
				return `
					<div class="lists">
						<div class="lists-details">
							<h3>${transaction.Product_Name}</h3>
							<h6>${transaction.Transaction_Date}</h6>
						</div>
					<div class="category">
							<div class="category-color">Bought from: </div>
							<h5>${transaction.Name}</h5>
						</div>
					<div class="price-tag">
						 <h2>R ${transaction.Product_Price}</h2>
					</div>
				</div>
					`
					}).join('')}`;
			}

			else {
				/**What if there ain't no transactions*/
			}
		});
			
		}

	document.getElementById('transaction-profile-username').innerHTML = username(user) ;
	document.getElementById('transaction-profile-names').innerHTML = names(user) ;
	document.getElementById('transaction-profile-balance').innerHTML = "R " + balance(user) ;
	getTransactionInfo();

/*
//export { userId , username , balance } ;
exports.userId = ;
exports.names = names;
exports.username = username ;
exports.balance = balance;*/
module.exports = userId;
/*module.exports = names;
module.exports = username;
module.exports = balance;*/