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

module.exports = { userId: userId, username : username, names : names, balance : balance };