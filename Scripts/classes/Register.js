function verifyUser(username, stno, full_name, last_name, password, contact, dob){
	if (username == '' || stno == '' || full_name == '' || last_name == '' || password == '' || contact == '' || dob == ''){
		return true ;
	}
	else {
		return false ;
	}
}

module.exports = verifyUser ;