$(document).ready(function() {
    $('#search').on("keyup", function() {
        var searchQuery = $(this).val();

        if(searchQuery != "") {
            $.ajax({
                method: "POST",
                url: "../assets/php/searchEmployeeName.php",
                data: { search: searchQuery },
                success: function(response) {
                    var cleaned = response.replace("Connected successfully", " ").trim();
                    $("#searchResult").html(cleaned);

                    $("#searchResult").html(response);
                }
            });
        }else {
            $('#searchResult').empty();
        }
    });
});

09682218530
09682200486