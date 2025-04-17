function userRegisters() {
    $.ajax({
        type: 'POST',
        url: 'assets/php/UserRegister.php',
        data: {
            fname: $('#fname').val(),
            lname: $('#lname').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            gender: $("input[name='gender']:checked").val(),
            confirm_pass: $('#cpassword').val(),
        },
        success: function(response) {
            alert(response);

            //Clear The form
            clearRegisterForm();
        },
        error: function(xhr, status, error) {
            alert("Error: " + xhr.responseText);
        }
    });
}

$(document).ready(function() {
    $('#userRegister').on('submit', function(e) {
        e.preventDefault();
        userRegisters();
    })
});

function clearRegisterForm() {
    $('#fname').val('');
    $('#lname').val('');
    $('#username').val('');
    $('#email').val('');
    $("input[name='gender']").prop('checked', false);
    $("#psw").val('');
    $('#cpassword').val('');
};