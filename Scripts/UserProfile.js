let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

const picURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/uploads/';

var UserId = user.UserID;
var Name = user.Name;
var Surname = user.Surname;
var UserName = user.UserName;
var Password = user.Password;
var ContactDetails = user.ContactNum;
var DateOfBirth = user.D_O_B;
var DateCreated = user.Date_Created;
var Gender = user.Gender;
var Bio = user.Bio;
var Balance = user.Balance;
var Profilepic = user.Profile_pic;

console.log(Profilepic);
//If there is no Bio.
if(Bio==null)
    Bio="EMPTY!!!";

//If no Profile pic, a default profile picture is set
if(Profilepic!=null)
$('#Pic').html(`<img src="${picURL}${UserId}.jpg" id="Pic" width="250" height="250">`);

$('#Name').html(`<span>${Name}</span>`);
$('#Surname').html(`<span>${Surname}</span>`);
$('#User').html(`<span>${"INFORMATION "}</span>`);
$('#Email').html(`<span>${ContactDetails}</span>`);
$('#Username').html(`<span>${UserName}</span>`);
$('#Bio').html(`<span>${Bio}</span>`);
$('#Balance').html(`<span>${"R "}${Balance}</span>`);
$('#Date').html(`<Span>${DateCreated}</span>`);


//When a user presses Edit profile, edit fields appear.



//when user clicks on change password
document.getElementById('change').addEventListener('click', function(){
    let btnPass = document.getElementById('btn-changePass');
    let form = document.getElementById('changePass');

    btnPass.style.display="none";
    form.style.display="block";

    
       

});

document.getElementById('btn-update').addEventListener('click', function(e){
    e.preventDefault();
    
    let database = "12345"
    let currentpass = document.getElementById('current-pass').value;
    let newpass = document.getElementById('new-pass').value;
    let confirmpass = document.getElementById('confirm-pass').value;

   if(currentpass=="" && newpass=="" && confirmpass==""){
   alert("Password not changed");
   btnPass.style.display="block";
   form.style.display="none";
   }
   else if(currentpass!="" && newpass!="" && confirmpass!=""){

       if(newpass != confirmpass)
       alert("Password does not match")

       else if(newpass == confirmpass && currentpass==database){
           
            alert("Password successfully Changed");

       }
       else{
           alert(" you have entered an incorrect password")
       }
       
   }else{
       alert("All fields required");
   }



});

    
    var timeClicked = 0;
   let IDs = ['Name' , 'Surname' , 'Email', 'Bio'];
   let params = [Name, Surname, ContactDetails, Bio];
                IDs.map((id,i) => {
                    document.getElementById(`btn-edit${id}`).addEventListener('click', function(){
                        timeClicked++;
                        
                        if(timeClicked>0){
                            if(timeClicked%2 != 0){
                                document.getElementById(`${id}Change-input`).value = params[i];
                                document.getElementById(`${id}`).style.display = "none";
                                document. getElementById(`${id}form`).style.display="block";
                         
                            }
                            else{
                            
                                document.getElementById(`${id}`).style.display = "block";
                                document. getElementById(`${id}form`).style.display="none";
                                if(document.getElementById(`${id}Change-input`).value == "") alert("No name entered");

                                if(document.getElementById(`${id}Change-input`).value == params[i]) alert("name not change");

                                else if(document.getElementById(`${id}Change-input`).value != ""){

                                    if(i==2 && document.getElementById(`${id}Change-input`).value != params[i]){
                                        var email = document.getElementById(`${id}Change-input`).value;
                                        var patterns = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                                        var message =  document.getElementById('Emailtext');
                                        if(email.match(patterns))
                                        {
                                             alert("Valid Email Address"); 
                                        }
                                        else
                                        {
                                            alert("Invalid email");
                                        }
                                    }
                                } 
                
                                
                            }
                    
                        }
                    });
                }).join('');     

//When user presses update password
            



    
    
