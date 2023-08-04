$(document).ready(function () {
   
    $('#email').keyup(function () {
        
        var email = $('#email').val();
        let index = email.indexOf("@");
        if ((email.substring(index, email.length) == "@dlsu.edu.ph")){
            $('#email').css('background-color', 'white');
            $('#email_error').text('');
            $('#submit').prop('disabled', false);

        } else {
            $('#email').css('background-color', 'red');
            $('#email_error').text('Email must be a DLSU email');
            $('#submit').prop('disabled', true);
        }
           
    });

  
});
