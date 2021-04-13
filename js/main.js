function myFunction() {
    var signup = document.getElementById("Signup");
    var login = document.getElementById("Login")
    if (signup.style.display === "none") {
        document.getElementById("btn1").innerHTML = "SIGNUP"
        document.getElementById("btn2").innerHTML = "LOGIN"
        signup.style.display = "block";
        login.style.display = "none"
    } else {
        signup.style.display = "none";
        login.style.display = "block"
        document.getElementById("btn1").innerHTML = "LOGIN"
        document.getElementById("btn2").innerHTML = "SIGNUP"
    } 
}

function logged() {
    var displayName = document.getElementById("display").value
    alert("Welcome " + displayName + ". We are glad you are here!")    
}