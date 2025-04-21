$(document).ready(function() {
    $('#RegisterInfo').on('submit', function(e) {
        e.preventDefault();
            
        $.ajax({
            url: '../assets/php/personalInfo.php',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                console.log("✅ DB Response:", response);
                if (response.includes("Success")) {
                    $('#RegisterInfo')[0].reset();
                }
            },
            error: function(xhr, status, error) {
                console.error("❌ AJAX error:", error);
            }
        });
    });


    $.ajax({
        url: '../assets/php/personalInfo.php',
        method: 'GET',
        success: function(response) {
            console.log("✅ DB Response:", response);
        },
        error: function(xhr, status, error) {
            console.error("❌ AJAX error:", error);
        }
    });
});