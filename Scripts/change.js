
const changUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPReset.php';

$.getJSON(changUrl, {
    UserID: users.UserID,
    new_pass: currentpass,
}, result => {
    if (result == "0") {
        alert("Change Password Failed")
    } else {
        alert("Password Changed Successfully")
    }
    console.log(result);
});

