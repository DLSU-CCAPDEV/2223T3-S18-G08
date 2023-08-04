$(document).ready(function () {
   
    $('#find_email').keyup(function () {
        
        var email = $('#find_email').val();
        let index = email.indexOf("@");
        if ((email.substring(index, email.length) == "@dlsu.edu.ph")){
            $.get('/getSearchUserCheckEmail', {email: email}, function (result) {
                if(result.email == email) {
                    $('#find_email').css('background-color', 'white');
                    $('#searchuser_error').text('');
                    $('#submit').prop('disabled', false);
                }

                else {
                    $('#find_email').css('background-color', 'red');
                    $('#searchuser_error').text('Email does not exist');
                    $('#submit').prop('disabled', true);
                }
            });
        } else {
            $('#find_email').css('background-color', 'red');
            $('#searchuser_error').text('Email must be a DLSU email');
            $('#submit').prop('disabled', true);
        }
           
    });

  
});