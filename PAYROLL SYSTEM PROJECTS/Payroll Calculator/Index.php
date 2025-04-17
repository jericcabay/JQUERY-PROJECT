<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="assets/css/Styles.css">
    <title>Basic Payroll Calculator</title>
</head>
<body>
    <h1>Payroll Calculator</h1>

<!-- Form 1-->
<div class="form-container">
    <div class="form-grid">
        <h2>Total Rate</h2>
        <form>
            <label>Hours Worked:</label>
            <input type="number" id="hours" name="Hours"><br><br>

            <label>Hourly Rate:</label>
            <input type="number" id="rates" name="Rates"><br></br>

            <button type="button" id="calculateRate">Calculate</button><br><br>
        </form>
        <div id="resultRate"></div>
    </div>

<!-- Form 2-->
    <div class="form-grid">
        <h2>Total Salary</h2>
        <form>
            <label for="totalRate">Total Rate</label>
            <input type="number" id="totalRate" name="TotalRate"><br><br>

            <label>Days</label>
            <input type="number" id="day" name="Days"><br><br>

            <button type="button" id="calculateSalary">Calculate</button><br><br>
        </form>

        <div id="resultSalary"></div>
    </div>

<!-- Form 3-->
    <div class="form-grid">
        <h2>Income Tax</h2>
        <form>
            <label>Total Salary</label>
            <input type="number" id="totalSalary" name="TotalSalary"><br><br>
        
            <label>Rate Tax</label>
            <input type="text" id="tax" name="Tax"><br><br>

            <button type="button" id="calculateTax">Calculate</button><br><br>
        </form>
        <div id="resultTax"></div>
    </div>

<!-- Form 4-->
    <div class="form-grid">
        <h2>Social Security System (SSS)</h2>
        <form>
            <label>Total Salary</label>
            <input type="number" id="minusSss" name="minusSSS"><br><br>
        
            <label>SSS Rate</label>
            <input type="text" id="sss" name="Sss"><br><br>

            <button type="button" class="disabled" id="toggleSss">Calculate</button><br><br>
        </form>
        <div id="resultSss"></div>
    </div>

<!-- Form 5-->
    <div class="form-grid">
        <h2>PhilHealth</h2>
        <form>
            <label>Total Salary</label>
            <input type="number" id="minusPhil" name="minusPHIL"><br><br>
        
            <label>SSS Rate</label>
            <input type="text" id="phil" name="Phil"><br><br>

            <button type="button" class="disabled" id="togglePhil">Calculate</button><br><br>
        </form>
        <div id="resultPhil"></div>
    </div>

<!-- Form 6-->
    <div class="form-grid">
        <h2>PAG-IBIG</h2>
        <form>
            <label>Total Salary</label>
            <input type="number" id="minusIbig" name="minusIBIG"><br><br>
        
            <label>SSS Rate</label>
            <input type="text" id="ibig" name="Ibig"><br><br>

            <button type="button" class="disabled" id="toggleIbig">Calculate</button><br><br>
        </form>
        <div id="resultIbig"></div>
    </div>
</div>
    
<h1 id="view"></h1>
    <script src="assets/js/RateCalculator.js"></script>
</body>
</html>