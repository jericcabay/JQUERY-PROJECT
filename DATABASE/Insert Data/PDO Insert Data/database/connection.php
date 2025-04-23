<?php
$servername = "localhost";
$username = "root";
$database = "sampledb";
$password = "1234567890";

try {
    $pdo = new PDO("mysql:host=$servername; dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connected failed: " . $e->getMessage();
}
