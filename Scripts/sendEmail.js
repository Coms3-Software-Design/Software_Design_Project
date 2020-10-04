
var loginbtn = document.getElementById('submit');

loginbtn.addEventListener('click', function(e){
  e.preventDefault();
  alert("clicked");
Email.send({
    Host : "smtp.gmail.com",
    Username : "Sibawaih Motaung",
    Password : "24434786siba",
    To : 'sirajmotaung@gmail.com',
    From : "info.sibawaih@gmail.com",
    Subject : "Testing how it works",
    Body : "You have not made any purchase"
}).then(
  message => alert(message)
    //alert("clicked");
);

});
