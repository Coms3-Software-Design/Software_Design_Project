$(document).ready(function(){
     $('#submit').click(function(e){
       e.preventDefault();
       var username = $("#username").val();
       var stno = $("#userid").val();
       var full_name = $("#name").val();
       var last_name = $("#name").val();
       var password = $("#password").val();
       var phone = $("#contactnum").val();
          if(username =='' || stno=='' || full_name== '' || last_name=='' || password=='' || phone=='')
          {
               $('#response').html('<span class="text-danger">All Fields are required</span>');
          }
          else
          {

               $.ajax({
                    url:"https://lamp.ms.wits.ac.za/~s1814731/public_html/MPphpfiles/MPRegister.php",
                    method:"POST",
                    data:$('#submit_form').serialize(),
                    dataType: "text",
                    beforeSend:function(){
                         $('#response').html('<span class="text-info">Loading response...</span>');
                    },
                    success:function(data){
                         $('form').trigger("reset");
                         $('#response').fadeIn().html(data);
                         setTimeout(function(){
                              $('#response').fadeOut("slow");
                         }, 5000);
                    }
               });
          }
     });
});
