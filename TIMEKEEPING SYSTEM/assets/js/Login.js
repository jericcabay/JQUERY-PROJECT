$(document).ready(function() {
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        $('#message').hide();

        var username = $('#users').val();
        var password = $('#password').val();

        if(username === "admin" && password === "123") {
            $('#message').text('Loading...').show();

            setTimeout(function() {
                window.location.href = 'html/navigation.html';
            }, 2000);
        }else {
            $('#message').text('Invalid username or password').show();

            setTimeout(function() {
                $('#message').fadeOut();
            }, 1000);
        }
    });
});