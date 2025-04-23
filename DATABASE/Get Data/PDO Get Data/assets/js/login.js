$(document).ready(function () {
    $('#userLogin').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: "assets/php/login.php",
            method: "POST",
            data: $(this).serialize(),
            success: function (response) {
                if (response.trim() === "success") {
                    window.location.href = "html/landingPage.html";

                } else {
                    $("#message").html("<p style='color:red'>" + response + "</p>");
                }
            }
        });
    });
});