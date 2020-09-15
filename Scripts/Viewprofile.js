
let user = JSON.parse(localStorage.getItem('user'));
console.log(user);
const picURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/uploads/';

var UserId = user.UserID;
var Name = user.Name;
var Surname = user.Surname;
var UserName = user.UserName;
var Password = user.Password;
var ContactDetails = user.ContactNum;
var DateOfBirth = user.D_O_B;
var DateCreated = user.Date_Created;
var Gender = user.Gender;
var Bio = user.Bio;
var Balance = user.Balance;
var Profilepic = user.Profilepic;

var abuser = new User(UserId,Name,Surname,UserName,Password,ContactDetails,DateOfBirth,DateCreated,Gender,Bio,Balance,Profilepic);
<<<<<<< HEAD
console.log(user.UserName);
$("#p-Name").html(`<p class="pItem">${abuser.getName}</p>`);
=======
console.log("halo");
$("#p-Name").html(`<p class="pItem">${Name}</p>`);
>>>>>>> 8f672482763392e57ff82dea35e98b82592418c6
$("#p-surname").html(`<p class="pItem">${Surname}</p>`);
$("#p-userName").html(`<p class="pItem">${user.UserName}</p>`);
$("#p-Bio").html(`<p class="pItem">${Bio}</p>`);
$("#p-No").html(`<p class="pItem">${ContactDetails}</p>`);
$("#p-Propic").html(`<img src="${picURL}${UserId}.jpg" alt="../CSS/Images/iphone.jpg" id="profilePic">`);
