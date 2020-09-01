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
