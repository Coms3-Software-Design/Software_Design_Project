
var button = document.getElementById('submit');
var username = document.getElementById('username');
var password = document.getElementById('password');


button.onclick = function(){
//alert(username);

url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php";
$.getJSON(url,{username: "Bee", password:"1234555"},function(results){

console.log("beee");

});




};
