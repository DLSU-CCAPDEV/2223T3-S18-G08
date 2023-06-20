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

function makeArray(l, d, t, s) {
    for(i=0;i<l;i++){
        slots[i] = new Array();
        for(j=0;j<d;j++){
            slots[i][j] = new Array();
            for(k=0;k<t;k++){
                slots[i][j][k] = new Array();
                for(n=0;n<s;n++){
                    slots[i][j][k][n] = Math.floor(Math.random() * 2);
                }
            }
        }
    }
}

function displaySlots(){
    var displayslots = slots[document.getElementById("lab_num").value-1][document.getElementById("day_num").value][document.getElementById("time").value];
    table = document.getElementById("slots");
   
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "(Free)";
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "(Taken)";
        }
    }
    
    document.getElementById("slots").style.display = "block";
}

function displayFreeSlots(){
    var displayslots = slots[document.getElementById("search_lab_num").value-1][document.getElementById("search_day_num").value][document.getElementById("search_time").value];
    var freeslots = "Free slots: ";
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            freeslots = freeslots + "[Seat " + (i+1) + "] ";
        }
    }

    document.getElementById("freeslots").innerHTML = freeslots;
}

function checkFree(){
    /* checks to make sure the specific seat is indeed free, in which case link them back to profile.html
        else alert that the slot is already taken
    */
}

