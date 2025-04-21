<?php
    $servername = "localhost";
    $username = "root";
    $database = "TimeKeeping_System";
    $password = "";

    try {
        $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        print("Connected successfully \n");
    }catch(PDOException $e) {
        print("Connection failed: " . $e->getMessage() . ' ');
    }
?>