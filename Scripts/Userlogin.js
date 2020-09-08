
let button = document.getElementById('submit');



button.addEventListener('click',function(e){
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
    console.log(JSON.parse(sessionStorage.getItem('user')));
    window.location.href='Homepage.html';
  }
  //When the fields are empty
  else{

  $("#response").fadeIn().html('<span>All fields required</span>');
  setTimeout(function(){ $("#response").fadeOut('slow');}, 3000);
  return;
}

});




});
