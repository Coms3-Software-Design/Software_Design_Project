$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php';
    $.post(url,{username:username, password:password})
    .done(function(data){
        if(data!= "!exits"){
          window.location = "home.html";
        }else{
          $("#login-message").text("Invalid username or password.");
          $("#submit").show();
        }

    });

    // if(username=="" || password==""){
    //   alert("All feilds required");
    // }
    // else{
    //   $.ajax(
    //     {
    //         url:"https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php",
    //         type: 'POST',
    //         data:{
    //           login:1,
    //           username:username,
    //           password:password
    //         },
    //
    //         beforeSend:function(response){
    //
    //         },
    //
    //         success:function(response){
    //           console.log(response);
    //         },
    //         dataType: 'text'
    //
    //
    //     }
    //   );
    //
    // }

  });
});
