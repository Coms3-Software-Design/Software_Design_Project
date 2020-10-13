
const changUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReset.php';


document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
let Username = document.getElementById('user');
let pass = document.getElementById('pass');

$.getJSON(changUrl, {
    UserID: Username,
    new_pass: pass,
}, result => {
    if (result == "0") {
        alert("Change Password Failed")
    } else {
        alert("Password Changed Successfully")
    }
    console.log(result);
});

});

