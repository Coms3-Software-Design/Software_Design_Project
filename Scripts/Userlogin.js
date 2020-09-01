$(document).ready(function(){
  $("#submit").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();

    if(username=="" || password==""){
      alert("All feilds required");
    }else{
      $.ajax(
        {
            url:"https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php",
            data:{
              login:1,
              username:username,
              password:password
            },
            beforeSend:function(){
              //   $('#res').html('<span class="li-modal">Loading...</span>');
            },
            success:function(response){
              if(response=="!exists"){
                $('#response').fadeIn(400).html('<span class="li-modal">Invalid username or password</span>');
                setTimeout(function(){
                  $('#response').fadeOut('slow');
                },50000);
              }
              else{

              }
            },
            dataType: 'text'

        }
      );

    }

  });
});
