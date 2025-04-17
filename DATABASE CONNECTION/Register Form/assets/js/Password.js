$(document).ready(function() {
    let timer;
    const delay = 2000;

    $('form').on('keyup', function() {
        clearTimeout(delay);

        let password = $('#psw').val().trim();
        let confirmedPassword = $('#cpassword').val().trim();

        timer = setTimeout(function () {
            if(confirmedPassword === "") {
                $('#confirmPassword').html("");
            }else if(confirmedPassword === password){
                $('#confirmPassword').html("<p style='color: green;'>Password Match</p>");
            }else {
                $('#confirmPassword').html("<p style='color: red;'>Password Not Match</p>");
            }
        }, delay);
    });

    // Timer 
    $('#psw, #cpassword').on('keydown', function() {
        clearTimeout(timer);
    });
});