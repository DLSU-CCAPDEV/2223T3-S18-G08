function checkPassword(){
    if(document.getElementById("password").value == document.getElementById("confirmpassword").value){
        document.location.href = "index.html";
    } else {
        alert("Password and confirm password do not match!");
    }
}

