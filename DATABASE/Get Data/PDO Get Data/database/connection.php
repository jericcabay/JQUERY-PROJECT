<?php
$servername = "localhost";
$username = "root";
$database = "Sampledb";
$password = "1234567890";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection Successfully: " . $e->getMessage();
}
