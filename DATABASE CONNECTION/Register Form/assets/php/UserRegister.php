<?php
    require __DIR__ . '/../../database/db.php';


    if($_SERVER['REQUEST_METHOD'] === "POST") {
        $firstName = $_POST['fname'] ?? null;
        $lastName = $_POST['lname'] ?? null;
        $username = $_POST['username'] ?? null;
        $email = $_POST['email'] ?? null;
        $gender = $_POST['gender'] ?? null;
        $confirm_password = $_POST['confirm_pass'] ?? null;
    
        //Validate Email if right format
        if(!filter_var($email, FILTER_VALIDATE_EMAIL) || !str_ends_with($email, '@gmail.com')) {
            print("Invalid Email Format.");
            exit;
        }

        //Hash The Password
        $hashed_password = password_hash($confirm_password, PASSWORD_DEFAULT);

        try{
            $stmt = $pdo->prepare("INSERT INTO users (firstName, lastName, username, email, gender, password) VALUES(?, ?, ?, ?, ?, ?)");
            $stmt->execute([$firstName, $lastName, $username, $email, $gender, $hashed_password]);

            print("Register Successful!");
        } catch(Exception $e) {
            print("Error: " . $e->getMessage());
        }
    }
?>