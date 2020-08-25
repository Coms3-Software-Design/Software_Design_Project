$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();



    if(username=="" || password==""){
      alert("All feilds required");
    }
    else{
      $.ajax(
        {
            url:"https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php",
            type: 'POST',
            data:{
              login:1,
              username:username,
              password:password
            },

            // beforeSend:function(response){
            //   $('form').trigger("reset");
            //    $('#response').fadeIn().html('<span class="li-modal">Loading...</span>');
            //   setTimeout(function(){
            //        $('#response').fadeOut("slow");
            //   }, 500);
            // },


            // return error message if the user does not exits in the databases
             success:function(response){
              url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php';
              $.post(url,{username:username, password:password})
              .done(function(data){
              if(data == "!exists"){
              $('form').trigger("reset");
               $('#login-message').fadeIn("slow").html('<span class="li-modal">Invalid username or password.</span>');
               setTimeout(function(){
                   $('#login-message').fadeOut("slow");
              }, 4000);
              $("#submit").show();

        }else{

          //This sends a user to the next page when the credentials are correct
          $('form').trigger("reset");
           $('#response').fadeIn().html('<span class="li-modal"><h4>Loading...</h4></span>');
          setTimeout(function(){
               $('#response').fadeOut("slow");
               window.location ="Homepage.html";
          }, 3000);

        }

    });
            },
            dataType: 'text'


        }
      );

    }

  });
});
