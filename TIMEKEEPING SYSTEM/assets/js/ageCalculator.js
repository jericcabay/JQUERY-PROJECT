$(document).ready(function() {
    $('#bdate').on('change', function() {
        const birthdate = new Date($(this).val());
        const today = new Date();

        if(!isNaN(birthdate)) {
            let age = today.getFullYear() - birthdate.getFullYear();
            const month = today.getMonth() - birthdate.getMonth();
            const day = today.getDate() - birthdate.getDate();

            if(month < 0 || (month === 0 && day < 0)) {
                age--;
            }

            $('#age').val(age);
        }else{
            $('#age').val('');
        }
    }); 
});