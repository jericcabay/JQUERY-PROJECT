<?php
    $localhost = "localhost";
    $username = 'root';
    $database = "user_information";
    $password = "";

    try {
        $pdo = new PDO("mysql:host=$localhost; dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        error_log("Connected successfully.");
    } catch (PDOException $e) {
        die("Connected Failed: " . $e->getMessage());
    }
?>