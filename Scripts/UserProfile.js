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
var Profilepic = user.Profile_pic;

console.log(Profilepic);
//If there is no Bio.
if(Bio==null)
    Bio="EMPTY!!!";

//If no Profile pic, a default profile picture is set
if(Profilepic!=null)
$('#Pic').html(`<img src="${picURL}${UserId}.jpg" id="Pic" width="250" height="250">`);

$('#Name').html(`<span>${Name}</span>`);
$('#Surname').html(`<span>${Surname}</span>`);
$('#User').html(`<span>${"INFORMATION "}</span>`);
$('#Email').html(`<span>${ContactDetails}</span>`);
$('#Username').html(`<span>${UserName}</span>`);
$('#Bio').html(`<span>${Bio}</span>`);
$('#Balance').html(`<span>${"R "}${Balance}</span>`);
$('#Date').html(`<Span>${DateCreated}</span>`);



