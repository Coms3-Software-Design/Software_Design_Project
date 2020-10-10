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
document.getElementById('btn-editp').addEventListener('click', function(){

    //alert("Clicked");
    var btnN = document.getElementById('btn-editN');
    let btnS = document.getElementById('btn-editS');
    let btnE = document.getElementById('btn-editE');
    let btnB = document.getElementById('btn-editB');
    let btnPass = document.getElementById('btn-changePass');
    let btnUpdate = document.getElementById('btn-updatep');
    let btnEdit = document.getElementById('btn-editp');
    let form = document.getElementById('changePass');
    
    btnN.style.display="block";
    btnS.style.display="block";
    btnE.style.display="block";
    btnB.style.display="block";
    btnPass.style.display="block";
    btnUpdate.style.display="block";
    btnEdit.style.display="none";
    

    document.getElementById('btn-updatep').addEventListener('click', function(){
        btnN.style.display="none";
    btnS.style.display="none";
    btnE.style.display="none";
    btnB.style.display="none";
    btnPass.style.display="none";
    btnUpdate.style.display="none";
    btnEdit.style.display="block";
    form.style.display="none";
    document.getElementById('Name').style.display = "block";
    document. getElementById('xform').style.display="none"; 

    
    });

    // let timeClicked = 0;
    // document.getElementById('btn-editN').addEventListener('click', function(){
    //     timeClicked++;
    // });
    // if(timeClicked>0){
    //     if(timeClicked%2=!0){}

    // }

    
});



//when user clicks on change password
document.getElementById('change').addEventListener('click', function(){
    let btnPass = document.getElementById('btn-changePass');
    let form = document.getElementById('changePass');

    btnPass.style.display="none";
    form.style.display="block";


});

    
    var timeClicked = 0;

    document.getElementById('btn-editN').addEventListener('click', function(){
        timeClicked++;
        if(timeClicked>0){
            if(timeClicked%2 != 0){
                document.getElementById('Name').style.display = "none";
                document. getElementById('xform').style.display="block"; 
                
            }
            else{
                document.getElementById('Name').style.display = "block";
                document. getElementById('xform').style.display="none";
            }
    
        }
    });
    
    
