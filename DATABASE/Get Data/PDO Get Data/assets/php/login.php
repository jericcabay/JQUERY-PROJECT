<?php
session_start();
require "../../database/connection.php";

$username = $_POST['users'] ?? '';
$password = $_POST['pswd'] ?? '';


$username = trim($username);
$password = trim($password);

try {
    $sql = "SELECT * FROM users WHERE username = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['username'] = $username;
        echo "success";
    } else {
        echo "Invalid username or password";
    }
} catch (PDOException $e) {
    echo "Connection Failed: " . $e->getMessage();
}
