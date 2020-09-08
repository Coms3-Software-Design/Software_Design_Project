

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
<<<<<<< .merge_file_bQXaq2

  getUserID = () => this.userID;
  getName = () => this.name;
  getSurname = () => this.surname;
  getUserName = () => this.userName;
  getPassword = () => this.password;
  getDateOfBirth = () => this.dateOfBirth;
  getGender = () => this.gender;
  getDateCreated = () => this.dateCreated;
  getBio = () => this.bio;
  getBalance = () => this.balance;
  getContactDetails = () => this.contactDetails;
  getProPicURL = () => this.proPicURL;
=======
/*
  getUserID = () => userID;
  getName = () => name;
  getSurname = () => surname;
  getUserName = () => userName;
  getPassword = () => password;
  getDateOfBirth = () => dateOfBirth;
  getGender = () => gender;
  getDateCreated = () => dateCreated;
  getBio = () => bio;
  getBalance = () => balance;
  getContactDetails = () => contactDetails;
  getProPicURL = () => proPicURL;
>>>>>>> .merge_file_24e4C5

  setUserID = (userID) => {
    this. userID = userID;
  };

  setName = (name) => {
    this.name = name;
  };

  setSurname = (surname) => {
    this.surname = surname;
  };

  setUserName = (userName) => {
    this.userName = userName;
  };

  setPassword = (password) => {
    this.password = password;
  };

  setDateOfBirth = (dateOfBirth) => {
    this.dateOfBirth = dateOfBirth;
  };

  setGender = (gender) => {
    this.gender = gender;
  };

  setDateCreated = (dateCreated) => {
    this.dateCreated = dateCreated;
  };

  setBio = (bio) => {
    this.bio = bio;
  };

  setBalance = (balance) => {
    this.balance = balance;
  };

  setContactDetails = (contactDetails) => {
    this.contactDetails= contactDetails;
  };

  setProPicURL = (proPicURL) => {
    this.proPicURL = proPicURL;
  };*/
}

module.exports=User;
