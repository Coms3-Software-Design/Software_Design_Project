
var button = document.getElementById('submit');



button.onclick = function(e){
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;


url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php";

$.getJSON(url,{username: username, password:password},function(results){


  if(username==""||password==""){
  e.preventDefault();
  $("#response").fadeIn().html('<span>All fields required</span>');
  setTimeout(function(){ $("#response").fadeOut('slow');}, 3000);
  return;
}
else if(results=="!exists"){
    e.preventDefault();
    $("#response").fadeIn().html('<span>Invalid username or password</span>');
    setTimeout(function(){$("#response").fadeOut('slow');},5000);
  }




console.log(results);

});




};
