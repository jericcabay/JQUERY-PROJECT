<?php
require "../../database/connection.php";

$fullname = $_POST['name'] ?? NULL;
$username = $_POST['users'] ?? NULL;
$rawpassword = $_POST['pswd'] ?? NULL;

$password = password_hash($rawpassword, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (fullname, username, password) VALUES(?, ?, ?)");
    $stmt->execute([$fullname, $username, $password]);

    echo "Register Successfully.";
} catch (PDOException $e) {
    echo "Database Error: " . $e->getMessage();
}
