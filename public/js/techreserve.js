$(document).ready(function () {
   
    $('#student_email').keyup(function () {
        
        var email = $('#student_email').val();
        let index = email.indexOf("@");
        if ((email.substring(index, email.length) == "@dlsu.edu.ph")){
            $.get('/getTechReserveSearchUserCheckEmail', {email: email}, function (result) {
                if(result.email == email) {
                    $('#student_email').css('background-color', 'white');
                    $('#searchuser_error').text('');
                    $('#submit').prop('disabled', false);
                }

                else {
                    $('#student_email').css('background-color', 'red');
                    $('#searchuser_error').text('Email does not exist');
                    $('#submit').prop('disabled', true);
                }
            });
        } else {
            $('#student_email').css('background-color', 'red');
            $('#searchuser_error').text('Email must be a DLSU email');
            $('#submit').prop('disabled', true);
        }
           
    });

  
});