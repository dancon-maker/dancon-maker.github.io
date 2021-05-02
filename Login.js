function checkCreds() {
    //Place to store First name
    var firstName = document.getElementById("fName").value;
    //Place to store Last name
    var lastName = document.getElementById("lName").value;
    //Place to store Badge Number
    var badgeNum = document.getElementById("badgeID").value;
    //Publishes full name
    var fullName = firstName + " " + lastName;
    if (fullName.length > 20 || fullName.length == 1) {
        //if true
        document.getElementById("loginstatus").innerHTML = "Full name is invalid!"
    } else if (badgeNum > 999 || badgeNum < 1) {
        //if true
        document.getElementById("loginstatus").innerHTML = "Invalid Badge Number";
    } else {
        alert("Access Granted! Welcome " + fullName);
        location.replace("INDEX.html");
    }
}