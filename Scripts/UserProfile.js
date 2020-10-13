let users;
users = JSON.parse(localStorage.getItem('user'));
//console.log(users);

const picURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/uploads/';
const updateProfURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPUpdateProfile.php';
const returnUserURL = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReturnUser.php';
const updatePasswordurl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPUpdatePassword.php';


var UserId = users.UserID;
var Name = users.Name;
var Surname = users.Surname;
var UserName = users.UserName;
var Password = users.Password;
var ContactDetails = users.ContactNum;
var DateOfBirth = users.D_O_B;
var DateCreated = users.Date_Created;
var Gender = users.Gender;
var Bio = users.Bio;
var Balance = users.Balance;
var Profilepic = users.Profile_pic;

$('#Name').html(`<span>${Name}</span>`);
$('#Surname').html(`<span>${Surname}</span>`);
$('#User').html(`<span>${"INFORMATION "}</span>`);
$('#Email').html(`<span>${ContactDetails}</span>`);
$('#Username').html(`<span>${UserName}</span>`);
$('#Bio').html(`<span>${Bio}</span>`);
$('#Balance').html(`<span>${"R "}${Balance}</span>`);
$('#Date').html(`<Span>${DateCreated}</span>`);

console.log(Profilepic);
//If there is no Bio.
if(Bio==null)
    Bio="EMPTY!!!";

//If no Profile pic, a default profile picture is set
if(Profilepic!=null)
$('#Pic').html(`<img src="${picURL}${UserId}.jpg" id="Pic" width="250" height="250">`);



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
    

    let currentpass = document.getElementById('currentpass').value;
    let newpass = document.getElementById('newpass').value;
    let confirmpass = document.getElementById('confirmpass').value;

   if(currentpass=="" && newpass=="" && confirmpass==""){
    let btnPass = document.getElementById('btn-changePass');
    let form = document.getElementById('changePass');
    defaultf();
    
   alert("Password not changed");
   

   }
   else if(currentpass!="" && newpass!="" && confirmpass!=""){

       if(newpass != confirmpass){
       alert("Password does not match")
       defaultf();
       }
       else if(newpass == confirmpass){

        $.getJSON(updatePasswordurl,{
            UserID: users.UserID,
            current_pass: currentpass,
            new_pass: newpass
        }, result=>{
            if(result=="0"){
                alert("Change Password Failed")
            }
            else{
                alert("Password Changed Successfully")
            }
        console.log(result);
        });
        defaultf();

       }
       else{
           alert("you have entered an incorrect password")
           defaultf();
       }
       
   }else{
       alert("All fields required");
       defaultf();
   }



});

function matched(password){
return true;

}

populate();
Repopulate(users);
function populate(userd){
    let user = userd
    let promise = new Promise(resolve=>{
        $.getJSON(returnUserURL , {username : users.UserName}, (results) => {
            console.log(results[0]);
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(results[0]));
            users = JSON.parse(localStorage.getItem('user'));
            resolve(users);
        })
    });

    promise.then((results)=>{
        
        //localStorage.setItem('user', JSON.stringify(results));
        users = JSON.parse(localStorage.getItem('user'));
        console.log(users , 'WE ARE TRYING THINGD OUT');
        Repopulate(results);
    })

    
}

function Repopulate(user){  


    let params = [Name, Surname, ContactDetails, Bio];   

    //let user = JSON.parse(localStorage.getItem('user'));
   // users = JSON.parse(localStorage.getItem('user'));
   let IDs = ['Name' , 'Surname' , 'Email', 'Bio'];
   
                IDs.map((id,i) => {
                    var timeClicked = 0;
                   
                    document.getElementById(`btn-edit${id}`).addEventListener('click', function(){
                        timeClicked++;
                        
                        if(timeClicked>0){
                            if(timeClicked%2 != 0){
                                //document.getElementById(`${id}Change-input`).value = params[i] ;
                                document.getElementById(`${id}`).style.display = "none";
                                document. getElementById(`${id}form`).style.display="block";
                                //alert(timeClicked);
                         
                            }
                            else{
                            
                               // alert(timeClicked);
                                document.getElementById(`${id}`).style.display = "block";
                                document. getElementById(`${id}form`).style.display="none";
                    
                                if(document.getElementById(`${id}Change-input`).value == params[i]) console.log("name not change");

                                else if(document.getElementById(`${id}Change-input`).value != "" ){

                                    if(i==2 && document.getElementById(`${id}Change-input`).value != params[i]){
                                        var email = document.getElementById(`${id}Change-input`).value;
                                        var patterns = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                                        var message =  document.getElementById('Emailtext');
                                        if(email.match(patterns))
                                        {
                                            //updateProf(params[0] , params[1] , email, params[3] , 12345 );
                                            params[2] = document.getElementById(`${id}Change-input`).value;
                                            alert("Valid Email Address");     
                                        }
                                        else
                                        {
                                            alert("Invalid email");
                                        }
                                    }

                                    else{
                                        item = document.getElementById(`${id}Change-input`).value;
                                        params[i] = item;
                                    }

                                    updateProf(params[0] , params[1] , params[2], params[3] , 12345 ,user);

                                    $('#Name').html(`<span>${params[0]}</span>`);
                                    $('#Surname').html(`<span>${params[1]}</span>`);
                                    $('#User').html(`<span>${"INFORMATION "}</span>`);
                                    $('#Email').html(`<span>${params[2]}</span>`);
                                    $('#Username').html(`<span>${UserName}</span>`);
                                    $('#Bio').html(`<span>${params[3]}</span>`);
                                    $('#Balance').html(`<span>${"R "}${Balance}</span>`);
                                    $('#Date').html(`<Span>${DateCreated}</span>`);

                                    
                                    populate(user);
                                } 
                            
                                
                            }
                            
                        }
                       
                    });
                }).join('');     

//When user presses update password

} 

function updateProf(Name , Surname , PNum , Bio , Password , user){

    console.log(Name , Surname , PNum , Bio , Password ,user.UserID);

    $.getJSON(updateProfURL , {
        userID : user.UserID,
        name : Name,
        surname : Surname,
        pNum : PNum,
        bio : Bio,
        password : Password
     } , result => {
        console.log(result);
        populate();
     });
}

function updatePassword(UserID,current_password,new_password){
$.getJSON(updatePasswordurl,{
    UserID: users.UserID,
    current_pass: currentpass,
    new_pass: newpass
}, result=>{
    if(retult=="0"){
        alert("PChange Password Failed")
    }
    else{
        alert("Password Changed Successfully")
    }
console.log(result);
});

}

function defaultf(){
    let btnPass = document.getElementById('btn-changePass');
    let form = document.getElementById('changePass');
    document.getElementById('currentpass').value="";
    document.getElementById('newpass').value="";
    document.getElementById('confirmpass').value="";
    btnPass.style.display="block";
   form.style.display="none";
}




 







    
    
