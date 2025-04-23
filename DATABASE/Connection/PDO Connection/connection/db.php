<?php
$servername = "localhost";
$username = "root";
$database = "SampleDB";
$password = "1234567890";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected Successfull.";
} catch (PDOException $e) {
    echo "Connected Failed: " . $e->getMessage() . ' ';
}
