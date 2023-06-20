function checkPassword(){
    if(document.getElementById("password").value == document.getElementById("confirmpassword").value){
        document.write();
        document.location.href = "index.html";
    } else {
        alert("Password and confirm password do not match!");
    }
}

function checkLogin(){
    if((document.getElementById("email").value == "arren.antioquia@dlsu.edu.ph" && document.getElementById("password").value == "CCAPDEV_prof") ||
       (document.getElementById("email").value == "andre_giancarlo_lu@dlsu.edu.ph" && document.getElementById("password").value == "AGL") ||
       (document.getElementById("email").value == "adriel_donato@dlsu.edu.ph" && document.getElementById("password").value == "AJ123") ||
       (document.getElementById("email").value == "adriel_shanlley_teng@dlsu.edu.ph" && document.getElementById("password").value == "lolafobic") ||
       (document.getElementById("email").value == "ethan_lester_l_chan@dlsu.edu.ph" && document.getElementById("password").value == "ELC1123")){
        document.write();
        document.location.href = "profile.html";
    } else {
        alert("Email or password is incorrect!");
    }
}

var slots = [0, 1, 0][0, 1, 0, 0, 0, 1, 0, 1][0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

var slots = [0, 1, 2][0, 1, 2, 3, 4, 5, 6, 7][0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
/*
for (i = 0; i < 3; i++){
    for(j = 0; j < 8; j++){
        for(k = 0; k < 20; k++){
            slots[i][j].append(Math.floor(Math.random() * 2));
        }
    }
}
*/
function displaySlots(labnumber, daynumber){
    displayslots = slots[labnumber-1][daynumber];
    table = document.getElementById("slots");
    /*
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table[i].innerHTML = "Free";
        } else {
            table[i].innerHTML = "Taken";
        }
    }
    */
    
    document.getElementById("slots").style.display = "block";

}
