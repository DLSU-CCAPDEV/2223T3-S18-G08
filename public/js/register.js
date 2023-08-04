$(document).ready(function () {
   
    $('#email').keyup(function () {
        
        var email = $('#email').val();
        let index = email.indexOf("@");
        if ((email.substring(index, email.length) == "@dlsu.edu.ph")){
            $.get('/getRegisterCheckEmail', {email: email}, function (result) {
                if(result.email == email) {
                    $('#email').css('background-color', 'red');
                    $('#email_error').text('Email already registered');
                    $('#submit').prop('disabled', true);
                }

                else {
                    $('#email').css('background-color', 'white');
                    $('#email_error').text('');
                    $('#submit').prop('disabled', false);
                }
            });
        } else {
            $('#email').css('background-color', 'red');
            $('#email_error').text('Email must be a DLSU email');
            $('#submit').prop('disabled', true);
        }
           
    });

    $('#confirmpassword').keyup(function () {
        var confirmpassword = $("#confirmpassword").val();
        var password = $("#password").val();

        if(confirmpassword == password) {
            $('#confirmpassword').css('background-color', 'white');
            $('#confirmpassword_error').text('');
            $('#submit').prop('disabled', false);
        }
        else {
            $('#confirmpassword').css('background-color', 'red');
            $('#confirmpassword_error').text('Password and Confirm Password do not match');
            $('#submit').prop('disabled', true);
        }
    });
  
});

