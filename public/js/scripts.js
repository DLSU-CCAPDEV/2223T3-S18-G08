var slots = new Array();
var emails = new Array();
var selectedSeats = new Array();
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
    for(i=0;i<l;i++){
        emails[i] = new Array();
        for(j=0;j<d;j++){
            emails[i][j] = new Array();
            for(k=0;k<t;k++){
                emails[i][j][k] = new Array();
                for(n=0;n<s;n++){
                    emails[i][j][k][n] = "";
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
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = "";
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Taken by " + displayslots[i] + ")";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function() {viewProfile()};
        }
    }
    
    document.getElementById("slots").style.display = "block";
}

function updateSlots(users){
    var data = JSON.parse(users);
    data.forEach(e => {
        if(e.myReservations!=null){
            e.myReservations.forEach(a =>{
                slots[a.lab][a.date][a.time][a.seat] = e.username;
                emails[a.lab][a.date][a.time][a.seat] = e.email;
            });
        }
    });
}

function displayFreeSlots(users,email){
    updateSlots(users);
    var displayslots = slots[document.getElementById("search_lab_num").value-1][document.getElementById("search_day_num").value][document.getElementById("search_time").value];
    table = document.getElementById("slots");
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = "";
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Taken by " + displayslots[i] + ")";
            table.rows[Math.floor(i/5)].cells[i%5].name = i;
            var emailslots = emails[document.getElementById("search_lab_num").value-1][document.getElementById("search_day_num").value][document.getElementById("search_time").value]
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function() {viewProfile(email,emailslots[Number(this.name)])};
        }
    }
    
    document.getElementById("slots").style.display = "block";
}

function displaySlotsR(users){
    updateSlots(users);
    selectedSeats = new Array();
    var displayslots = slots[document.getElementById("lab_num").value-1][document.getElementById("day_num").value][document.getElementById("time").value];
    table = document.getElementById("slots");
   
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + " \n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].name = i;
            table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "transparent";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function(){
                    if(this.style.backgroundColor == "orange"){
                        selectedSeats.splice(selectedSeats.indexOf(this.name),1);
                        this.style.backgroundColor = "transparent";}
                    else{
                        selectedSeats.push(this.name);
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

function displaySlotsE(users,data){
    selectedSeats = new Array();
    seats = JSON.parse(data);
    seats.forEach(e => {
        selectedSeats.push(e.seat);
    });
    updateSlots(users);
    var displayslots = slots[Number(seats[0].lab)][Number(seats[0].date)][Number(seats[0].time)];
    table = document.getElementById("slots");
    document.getElementById("timeslot").innerHTML = "lab: " + (Number(seats[0].lab)+1) + " day: June, " + (Number(seats[0].date)+20) + " time: " + getTime(seats[0].time);
    for(i = 0; i < 20; i++){
        if(displayslots[i] == 0 ||selectedSeats.includes(i)){
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Free)";
            table.rows[Math.floor(i/5)].cells[i%5].name = i;
            table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "transparent";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = function(){
                    if(this.style.backgroundColor == "orange"){
                        selectedSeats.pop(this.name);
                        this.style.backgroundColor = "transparent";}
                    else{
                        selectedSeats.push(this.name);
                        this.style.backgroundColor = "orange";   
                    }
                };
            if(selectedSeats.includes(i)){
                table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "orange";
            }
        } else {
            table.rows[Math.floor(i/5)].cells[i%5].innerHTML = "Seat " + (i+1) + "\n(Taken by " + displayslots[i] + ")";
            table.rows[Math.floor(i/5)].cells[i%5].onclick = "";
            table.rows[Math.floor(i/5)].cells[i%5].style.backgroundColor = "red";
        }
    }
    
    document.getElementById("slots").style.display = "block";
}
function getTime(t){
    switch(Number(t)){
        case 0:
            return "10:00AM-10:30AM";
        case 1:
            return "10:30AM-11:00AM";
        case 2:
            return "11:00AM-11:30AM";
        case 3:
            return "11:30AM-12:00AM";
        case 4:
            return "12:00AM-12:30AM";
        case 5:
            return "12:30AM-1:00AM";
        case 6:
            return "1:00AM-1:30AM";
        case 7:
            return "1:30AM-2:00AM";
        case 8:
            return "2:00AM-2:30AM";
        case 9:
            return "2:30AM-3:00AM";
        case 10:
            return "3:00AM-3:30AM";
        case 11:
            return "3:30AM-4:00AM";
    }
}

function searchUserTech(email){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/techmodifying';
        
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'find_email';
            hidden_input1.value = document.getElementById("find_email").value;

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}

function searchUser(email){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/searcheduser';
        
                
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'find_email';
            hidden_input1.value = document.getElementById("find_email").value;

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}

function editprofile(email,username,description,position){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/editprofile';
        
                
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'username';
            hidden_input1.value = username;
            const hidden_input2 = document.createElement('input');
            hidden_input2.type = 'hidden';
            hidden_input2.name = 'description';
            hidden_input2.value = description;
            const hidden_input3 = document.createElement('input');
            hidden_input3.type = 'hidden';
            hidden_input3.name = 'position';
            hidden_input3.value = position;

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);
            hidden_form.appendChild(hidden_input2);
            hidden_form.appendChild(hidden_input3);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}

function deleteprofile(email){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/deleteprofile';
        
                
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;

            hidden_form.appendChild(hidden_input0);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}

function viewProfile(email,viewing_email){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/viewprofile';
        
                
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'viewing_email';
            hidden_input1.value = viewing_email;

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}

function studentreserve(email){
    // Create form
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/studentreserved';
        
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'lab';
            hidden_input1.value = document.getElementById("lab_num").value-1;
            const hidden_input2 = document.createElement('input');
            hidden_input2.type = 'hidden';
            hidden_input2.name = 'date';
            hidden_input2.value = document.getElementById("day_num").value;
            const hidden_input3 = document.createElement('input');
            hidden_input3.type = 'hidden';
            hidden_input3.name = 'time';
            hidden_input3.value = document.getElementById("time").value;
            const hidden_input4 = document.createElement('input');
            hidden_input4.type = 'hidden';
            hidden_input4.name = 'seat';
            hidden_input4.value = JSON.stringify(selectedSeats);

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);
            hidden_form.appendChild(hidden_input2);
            hidden_form.appendChild(hidden_input3);
            hidden_form.appendChild(hidden_input4);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}
function reservetech(email){
    // Create form
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/techreserved';
        
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'student_email';
            hidden_input1.value = document.getElementById("student_email").value;
            const hidden_input2 = document.createElement('input');
            hidden_input2.type = 'hidden';
            hidden_input2.name = 'lab';
            hidden_input2.value = document.getElementById("lab_num").value-1;
            const hidden_input3 = document.createElement('input');
            hidden_input3.type = 'hidden';
            hidden_input3.name = 'date';
            hidden_input3.value = document.getElementById("day_num").value;
            const hidden_input4 = document.createElement('input');
            hidden_input4.type = 'hidden';
            hidden_input4.name = 'time';
            hidden_input4.value = document.getElementById("time").value;
            const hidden_input5 = document.createElement('input');
            hidden_input5.type = 'hidden';
            hidden_input5.name = 'seat';
            hidden_input5.value = JSON.stringify(selectedSeats);
            const hidden_input6 = document.createElement('input');
            hidden_input6.type = 'hidden';
            hidden_input6.name = 'anon';
            hidden_input6.value = document.getElementById("reserveanonymously").checked;
            //console.log(document.getElementById("reserveanonymously").checked);
            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);
            hidden_form.appendChild(hidden_input2);
            hidden_form.appendChild(hidden_input3);
            hidden_form.appendChild(hidden_input4);
            hidden_form.appendChild(hidden_input5);
            hidden_form.appendChild(hidden_input6);

    document.body.appendChild(hidden_form);
    hidden_form.submit();
}
function editReserve(email,editing_email,id){
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/studenteditslot';
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'editing_email';
            hidden_input1.value = editing_email;
            const hidden_input2 = document.createElement('input');
            hidden_input2.type = 'hidden';
            hidden_input2.name = 'id';
            hidden_input2.value = id;

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);
            hidden_form.appendChild(hidden_input2);


    document.body.appendChild(hidden_form);
    hidden_form.submit();
}
function editreserved(email,editing_email,id){
    // Create form
    const hidden_form = document.createElement('form');

    // Set method to post by default
    hidden_form.method = 'post';
        
    // Set path
    hidden_form.action = '/studenteditedslot';
        
            const hidden_input0 = document.createElement('input');
            hidden_input0.type = 'hidden';
            hidden_input0.name = 'email';
            hidden_input0.value = email;
            const hidden_input1 = document.createElement('input');
            hidden_input1.type = 'hidden';
            hidden_input1.name = 'editing_email';
            hidden_input1.value = editing_email;
            const hidden_input2 = document.createElement('input');
            hidden_input2.type = 'hidden';
            hidden_input2.name = 'id';
            hidden_input2.value = id;
            const hidden_input6 = document.createElement('input');
            hidden_input6.type = 'hidden';
            hidden_input6.name = 'seat';
            hidden_input6.value = JSON.stringify(selectedSeats);

            hidden_form.appendChild(hidden_input0);
            hidden_form.appendChild(hidden_input1);
            hidden_form.appendChild(hidden_input2);
            hidden_form.appendChild(hidden_input6);


    document.body.appendChild(hidden_form);
    hidden_form.submit();
}