let totalRate = 0;
let totalSalary = 0;
let netSalary = 0;
let rateSss = 0.045;
let ratePhil = 0.025;
let rateIbig = 0.02;

$('#sss').val(rateSss);
$('#phil').val(ratePhil);
$('#ibig').val(rateIbig);

$(document).ready(function() {

    //Form 1
    $('#calculateRate').click(function() {
        let hours = parseFloat($('#hours').val());
        let rates = parseFloat($('#rates').val());
        
        totalRate = hours * rates;

        $('#totalRate').val(totalRate.toFixed(2));
        $('#resultRate').html('<h3>Total Rate: ₱' + totalRate.toFixed(2) + '</h3>');
    });

    //Form 2
    $('#calculateSalary').click(function() {

        let day = parseFloat($('#day').val());
        
        totalSalary = day * totalRate;

        $('#totalSalary').val(totalSalary.toFixed(2));
        $('#resultSalary').html('<h3>Total Salary: ₱' + totalSalary.toFixed(2) + '</h3>');

        if(totalSalary < 20000) {
            $('#tax').val('0%');
        }else if(totalSalary < 40000) {
            $('#tax').val('15%');
        }else if(totalSalary < 60000) {
            $('#tax').val('20%');
        }else if(totalSalary < 80000) {
            $('#tax').val('25%');
        }else if(totalSalary < 100000) {
            $('#tax').val('30%');
        }else {
            $('#tax').val('35%');
        }
    });

    //Form 3
    $('#calculateTax').click(function() {

        let totalTax = 0;

        if(totalSalary < 20000) {
            totalTax = 0;
        }else if(totalSalary < 40000) {
            totalTax = (totalSalary - 20000) * 0.15;
        }else if(totalSalary < 60000) {
            totalTax = (totalSalary - 40000) * 0.20;
        }else if(totalSalary < 80000) {
            totalTax = (totalSalary - 80000) * 0.25;
        }else if(totalSalary < 100000) {
            totalTax = (totalSalary - 20000) * 0.30;
        }else {
            totalTax = (totalSalary - 80000) * 0.35;
        }

        netSalary = totalSalary - totalTax;

        $('#resultTax').html('<h3>Total Income: ₱' + netSalary.toFixed(2) + '</h3>');
        $('#view').html('<h3>Total Salary: ₱' + netSalary.toFixed(2) + '</h3>');
        $('#minusSss').val(netSalary.toFixed(2));
        $('#minusPhil').val(netSalary.toFixed(2));
        $('#minusIbig').val(netSalary.toFixed(2));
    });

    // Form 4
    $('#toggleSss').on('click', function() {

        let salary = parseFloat($('#minusSss').val());
        let rate = parseFloat($('#sss').val());
        let deductionSSS = salary * rate;

        if($(this).hasClass('enabled')) {
            $(this).removeClass('enabled').addClass('disabled');
            $('#resultSss').html('<h3>Disabled Deduction</h3>');
        }else {
            $(this).removeClass('disabled').addClass('enabled');
            if(netSalary === 0) {
                $('#resultSss').html('<h3></h3>');    
            } else {
            $('#resultSss').html('<h3>SSS Deduction: ' + deductionSSS.toFixed(2) + '</h3>');
            }
        }
        updateView()
    });

    //Form 5
    $('#togglePhil').on('click', function() {
        let salary = parseFloat($('#minusPhil').val());
        let rate = parseFloat($('#phil').val());

        let deductionPhil = salary * rate;

        if($(this).hasClass('enabled')) {
            $(this).removeClass('enabled').addClass('disabled');
            $('#resultPhil').html('<h3>Disabled Deduction</h3>');
        }else {
            $(this).removeClass('disabled').addClass('enabled');
            if(netSalary === 0) {
                $('#resultPhil').html('<h3></h3>');
            }else {
            $('#resultPhil').html('<h3>PhilHealth Deduction: ₱' + deductionPhil.toFixed(2) + '</h3>');
            }
        }
        updateView()
    });

    //Form 6
    $('#toggleIbig').on('click', function() {
        let salary = parseFloat($('#minusIbig').val());
        let rate = parseFloat($('#ibig').val());

        let deductionIbig = salary * rate;
        if($(this).hasClass('enabled')) {
            $(this).removeClass('enabled').addClass('disabled');
            $('#resultIbig').html('<h3>Disabled Deduction</h3>');
        }else {
            $(this).removeClass('disabled').addClass('enabled');
            if(netSalary === 0) {
                $('#resultIbig').html('<h3></h3>');
            }else {
            $('#resultIbig').html('<h3>Pag-Ibig Deduction: ₱' + deductionIbig.toFixed(2) + '</h3>');
            }
        }
        updateView()
    });
});

function updateView() {
    let currentNet = netSalary;

    if ($('#toggleSss').hasClass('enabled')) {
        currentNet -= netSalary * rateSss;
    }

    if ($('#togglePhil').hasClass('enabled')) {
        currentNet -= netSalary * ratePhil;
    }

    if ($('#toggleIbig').hasClass('enabled')) {
        currentNet -= netSalary * rateIbig;
    }

    $('#view').html('<h3>Net Salary: ₱' + currentNet.toFixed(2) + '</h3>');
}

$('#resultSss').html('<h3>Disabled Deduction</h3>');
$('#resultPhil').html('<h3>Disabled Deduction</h3>');
$('#resultIbig').html('<h3>Disabled Deduction</h3>');