function wrongCred(user_name, user_brand){
     	if (user_name=="" || user_brand==""){
     		return true;
     	}
     	else {
     		return false;
     	}
     }

module.exports = wrongCred ;