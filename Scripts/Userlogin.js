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

            beforeSend:function(response){
              $('form').trigger("reset");
               $('#response').fadeIn(200).html('<span class="li-modal">Loading...</span>');
              setTimeout(function(){
                   $('#response').fadeOut("slow");
              }, 500);
            },

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
          window.location = "home.html";
        }

    });
            },
            dataType: 'text'


        }
      );

    }

  });
});
