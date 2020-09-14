let buttn = document.getElementById('submit');

buttn.addEventListener('click',function(e){
e.preventDefault();
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php";


$.getJSON(url,{username: username, password:password},function(results){

//if the user inputs wrong credentials
if(results=="!exists" && username!=""&&password!=""){
  console.log(results);
    $("#response").fadeIn().html('<span>Invalid username or password</span>');
    setTimeout(function(){$("#response").fadeOut('slow');},5000);
    return;

  }
  //If the user exists in the database then it links to the Homepage
  else if( results!="!exists" && username!="" && password!=""){

    sessionStorage.setItem('user', JSON.stringify(results[0]));
     var user1 = JSON.parse(sessionStorage.getItem('user'));
     console.log(user1);


    var UserId = JSON.stringify(user1.UserID);
    var Name = JSON.stringify(user1.Name);
    var Surname = JSON.stringify(user1.Surname);
    var UserName = JSON.stringify(user1.userName);
    var Password = JSON.stringify(user1.Password);
    var ContactDetails = JSON.stringify(user1.ContactNum);
    var DateOfBirth = JSON.stringify(user1.D_O_B);
    var DateCreated = JSON.stringify(user1.Date_Created);
    var Gender = JSON.stringify(user1.Gender);
    var Bio = JSON.stringify(user1.Bio);
    var Balance = JSON.stringify(user1.Balance);
    var Profilepic = JSON.stringify(user1.Profilepic);


    var user = new User(UserId,Name,Surname,UserName,Password,ContactDetails,DateOfBirth,DateCreated,Gender,Bio,Balance,Profilepic);
    //window.location.href='Homepage.html';
    alert(user.getName());
  }
  //When the fields are empty
  else{

  $("#response").fadeIn().html('<span>All fields required</span>');
  setTimeout(function(){ $("#response").fadeOut('slow');}, 3000);
  return;
}

});

});
