var username =  document.getElementById('username');
var password  =  document.getElementById('password');


addEventListener('submit', function(e){
//checks the length of password
 if(password.value.length <= 3){
   //Prevents form from submitting
   e.preventDefault();
   $('#errormessage').fadeIn().html('<span>password must be at least 6 characters </>');

   setTimeout(function () {
     $('#errormessage').fadeOut('slow');

   }, 3000);
 }

});
