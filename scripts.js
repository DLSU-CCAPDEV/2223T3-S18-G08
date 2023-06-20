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

var slots = new Array();



function makeArray(d, h, w) {
    for(i=0;i<d;i++){
        slots[i] = new Array();
        for(j=0;j<h;j++){
            slots[i][j] = new Array();
            for(k=0;k<w;k++){
                slots[i][j][k] = Math.floor(Math.random() * 2);
            }
        }
    }
    //slots[0][0][0]=1;



    // for(let i = 0; i < h; i++) {
    //     arr[i] = [];
    //     for(let j = 0; j < w; j++) {
    //         for(let k = 0; k < d; j++) {
    //             arr[i][j][k] = val;
    //         }
    //         arr[i][j] = val;
    //     }
    // }
    // return arr;
}

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
    document.write(labnumber);
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
