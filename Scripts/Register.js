
const registerURL = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPRegister.php";


let dateCreated = new Date();
let dd = String(dateCreated.getDate()).padStart(2, '0');
let mm = String(dateCreated.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = dateCreated.getFullYear();
dateCreated = dd + '-' + mm + '-' + yyyy;

let Button = document.getElementById("submit");

Button.addEventListener('click', function(e){
    e.preventDefault();
     var username = document.getElementById("username").value;
     var stno = document.getElementById("userid").value;
     var full_name = document.getElementById("name").value;
     var last_name = document.getElementById("surname").value;
     var password = document.getElementById("password").value;
     var contact = document.getElementById("contactnum").value;
     let gender = document.getElementById("male").checked?"Male":"Female";
     let dob = document.getElementById("dob").value;

     
     
     if(username =='' || stno=='' || full_name== '' || last_name=='' || password=='' || contact=='' || dob == '')
     {
          $('#response').html('<span class="text-danger">All Fields are required</span>');
          return;
     }

     var patterns = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!contact.match(patterns))
     {
         alert("Invalid Email Address");  
         return;   
     }

     $.getJSON(registerURL , {
          userid : stno,
          name : full_name,
          surname : last_name,
          username : username,
          password : password,
          contactnum : contact,
          datecreated : dateCreated,
          dob : dob,
          gender : gender
     }, (response) => {
          $('form').trigger("reset");
          $('#response').fadeIn().html('<span class="li-modal">registration successfull</span>');
          
          let prom = new Promise(resolve =>{
               setTimeout(function(){
                    $('#response').fadeOut("slow");
                    resolve();
               }, 5000);
          })
          
          prom.then(()=>{
               window.location.href = 'Login.js';
          })
          
     });
});

/*
$(document).ready(function(){
     $('#submit').click(function(e){

       e.preventDefault();
       var username = $("#username").val();
       var stno = $("#userid").val();
       var full_name = $("#name").val();
       var last_name = $("#surname").val();
       var password = $("#password").val();
       var phone = $("#contactnum").val();
       
        //$('#datecreated').val(new Date().toDateInputValue());


          if(username =='' || stno=='' || full_name== '' || last_name=='' || password=='' || phone=='')
          {

               $('#response').html('<span class="text-danger">All Fields are required</span>');

          }
          else
          {

               $.ajax({
                    url:"https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPRegister.php",
                    method:"POST",
                    data:$('#submit_form').serialize(),
                    dataType: "text",
                    beforeSend:function(){
                         $('#response').html('<span class="li-modal">Loading response...</span>');
                    },
                    success:function(data){
                        
                         $('form').trigger("reset");
                         $('#response').fadeIn().html('<span class="li-modal">registration successfull</span>');
                         setTimeout(function(){
                              $('#response').fadeOut("slow");
                         }, 5000);
                    }
               });
          }
     });
});
*/

