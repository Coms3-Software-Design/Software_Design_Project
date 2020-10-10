//console.log('Phakhathi inside');
//const Transaction = require('./classes/TransactionHistory');

let user = JSON.parse(localStorage.getItem('user'));

//console.log(user) ;

//console.log ("The User ID of the user that logged in --->>> " + user.UserID);

let transURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPTransHistory.php';

	/*function profilePic(user){
		return user.Profilepic ;
	}*/

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