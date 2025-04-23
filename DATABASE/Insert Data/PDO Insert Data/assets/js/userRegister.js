$('#userInfo').on('submit', function (e) {
    e.preventDefault();

    $.ajax({
        url: "assets/php/userRegister.php",
        type: "POST",
        data: $(this).serialize(),
        success: function (response) {
            $('#userInfo')[0].reset();
            console.log(response);
        }
    })
});