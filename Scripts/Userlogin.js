
let button = document.getElementById('submit');



button.onclick = function(e){
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

e.preventDefault();

url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php";
$.getJSON(url,{username: username, password:password},function(results){

console.log(results);

});




};
