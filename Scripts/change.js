
const changUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReset.php';

let Username = document.getElementById('');
let pass = document.getElementById('');

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

