

"use strict";

class User {

  constructor( userID, name, surname, userName,  password,  contactDetails,  dateOfBirth,  dateCreated,  gender,
                 bio, balance, Profilepic) {

                   this.userID = userID;
                   this.name = name;
                   this.surname = surname;
                   this.userName = userName;
                   this.password = password;
                   this.dateOfBirth = dateOfBirth;
                   this.gender = gender;
                   this.dateCreated = dateCreated;
                   this.bio = bio;
                   this.balance = balance;
                   this.contactDetails = contactDetails;
                   this.proPicURL = Profilepic;
  }

  get getUserID(){return this.userID;}
  get getName(){return this.name;}
  get getSurname(){return this.surname;}
  get getUserName(){return this.userName;}
  get getPassword(){return this.password;}
  get getDateOfBirth(){return this.dateOfBirth;}
  get getGender(){return this.gender;}
  get getDateCreated(){return this.dateCreated;}
  get getBio(){return this.bio;}
  get getBalance(){return this.balance;}
  get getContactDetails(){return this.contactDetails;}
  get getProPicURL(){return this.proPicURL;}




  set setUserID(userID){
    this. userID = userID;
  };

  set setName(name){
    this.name = name;
  };

  set setSurname(surname){
    this.surname = surname;
  };

  set setUserName(userName){
    this.userName = userName;
  };

  set setPassword(password){
    this.password = password;
  };

  set setDateOfBirth(dateOfBirth){
    this.dateOfBirth = dateOfBirth;
  };

  set setGender(gender){
    this.gender = gender;
  };

  set setDateCreated(dateCreated){
    this.dateCreated = dateCreated;
  };

  set setBio(bio){
    this.bio = bio;
  };

  set setBalance(balance){
    this.balance = balance;
  };

  set setContactDetails(contactDetails){
    this.contactDetails= contactDetails;
  };

  set setProPicURL(proPicURL){
    this.proPicURL = proPicURL;
  };
}

Module.exports = User;
