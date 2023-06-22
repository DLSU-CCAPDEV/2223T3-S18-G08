function checkPassword(){
    //checks if user inputs are empty
    if(document.getElementById('student').checked || document.getElementById("labtechnician").checked && document.getElementById("email").value != "" && document.getElementById("username").value != "" && document.getElementById("email").value != "password" && document.getElementById("confirmpassword").value != ""){
        if(document.getElementById("password").value == document.getElementById("confirmpassword").value){
            document.write();
            document.location.href = "login.html";
        } else {
            alert("Password and confirm password do not match!");
        }
    }else{
        alert("Completely fill-out the form!");
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
                    slots[i][j][k][n] = 0;
                }
            }
        }
    }

    slots[0][0][0][7] = "Andre";
    slots[0][0][0][8] = "Andre";
    slots[0][0][0][9] = "Andre";
    slots[0][0][0][5] = "Ethan";
    slots[0][0][0][6] = "Ethan";
    slots[0][0][0][10] = "Ethan";
    slots[0][0][0][11] = "Ethan";

    slots[1][0][0][5] = "AJ";
    slots[1][0][0][6] = "AJ";
    slots[1][0][0][7] = "AJ";
    slots[1][0][0][8] = "AJ";
    slots[1][0][0][9] = "AJ";
    slots[1][0][0][15] = "Arren";
    slots[1][0][0][16] = "Arren";
    slots[1][0][0][17] = "Arren";
    slots[1][0][0][18] = "Arren";
    slots[1][0][0][19] = "Arren";
    
    slots[2][0][0][1] = "Adriel";
    slots[2][0][0][2] = "Adriel";
    slots[2][0][0][6] = "Adriel";
    slots[2][0][0][7] = "Adriel";
    slots[2][0][0][11] = "Adriel";
    slots[2][0][0][12] = "Adriel";
}

function viewProfile(){
    document.location.href = "viewprofile.html";
}

function displaySlots(){
    var displayslots = slots[document.getElementById("lab_num").value-1][document.getElementById("day_num").value][document.getElementById("time").value];
    table = document.getElementById("slots");
   
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = "";
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Taken by " + displayslots[i] + ")";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function() {viewProfile()};
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

function displaySlotsR(){
    var displayslots = slots[document.getElementById("lab_num").value-1][document.getElementById("day_num").value][document.getElementById("time").value];
    table = document.getElementById("slots");
   
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "transparent";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function(){
                    if(this.style.backgroundColor == "orange"){
                        this.style.backgroundColor = "transparent";}
                    else{
                        this.style.backgroundColor = "orange";   
                    }
                };
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Taken by " + displayslots[i] + ")";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = "";
            table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "red";
        }
    }
    
    document.getElementById("slots").style.display = "block";
}



