//console.log('Phakhathi inside');

let user = JSON.parse(localStorage.getItem('user'));

console.log(user) ;

let transURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPTransHistory.php';

	function userId(){
		return user.UserID;
	}

	function username(){
		return user.UserName;
	}
	
	function names(){
		return user.Name + ' ' + user.Surname ;
	}
	
	function balance(){
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

	function profilePic(){
		return user.Profilepic ;
	}

	function getTransactionInfo(){
		$.getJSON(transURL, { userName: userId() }, function(results){
				console.log(results);
				
				for (let i = 0 ; i < results.length ; i++ ){
					
					/**Using Transaction History**/
					/**Include the buyer**/
					
					let transaction = new TransactionHistory(results[i].Product_Name , results[i].Transaction_Date, results[i].Product_Price);
		
					return `
					<div class="lists">
						<div class="lists-details">
							<h3>${transaction.prod_name}</h3>
							<h6>${transaction.trans_date}</h6>
						</div>
					<div class="category">
							<div class="category-color">Bought from: </div>
							<h5>${transaction.buyer}</h5>
						</div>
					<div class="price-tag">
						 <h2>${transaction.trans_price}</h2>
					</div>
				</div>
					` ;
				}
			});
		}

	document.getElementById('transaction-profile-username').innerHTML = username() ;
	document.getElementById('transaction-profile-names').innerHTML = names() ;
	document.getElementById('transaction-profile-balance').innerHTML = "R " + balance() ;
	getTransactionInfo();