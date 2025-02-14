function registeration(){
    var Name = document.getElementById("name").value;
    var Userid = document.getElementById("user_id").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var CPassword = document.getElementById("cPassword").value;
    var error = document.getElementById("error");
    var text = "";
    if (!Name|| !Userid || !Email || !Password|| !CPassword) {
        alert("Complete registration!!!");
        return;
    }

    if (Name.length < 5) {
        text = "Please enter a valid name (at least 5 characters)";
        alert(text);
        return;
    } else if (Userid.length < 8) {
        text = "Please enter a valid User ID (at least 8 digits)";
        alert(text);
        return;

    } else if (Email.indexOf("@") === -1 || Email.length <= 10) {
        text = "Please enter a valid Email (must contain '@' and be longer than 10 characters)";
        alert(text);
        return;
    } else if (Password.length < 8) {
        text = "Please enter a valid Password (at least 8 characters)";
        alert(text);
        return;
    } else if (CPassword !== Password) {
        text = "Passwords do not match!";
        alert(text);
        return;
    } else {
        alert("Congratulations!");
    }
}









