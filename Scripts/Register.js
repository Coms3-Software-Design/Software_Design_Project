$(document).ready(function(){
     $('#submit').click(function(e){
       e.preventDefault();
       var username = $("#username").val();
       var stno = $("#stno").val();
       var full_name = $("#full_name").val();
       var last_name = $("#last_name").val();
       var password = $("#password").val();
       var phone = $("#phone").val();
          if(username =='' || stno=='' || full_name== '' || last_name=='' || password=='' || phone=='')
          {
               $('#response').html('<span class="text-danger">All Fields are required</span>');
          }
          else
          {

               $.ajax({
                    url:"https://lamp.ms.wits.ac.za/~s1814731/R.php",
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