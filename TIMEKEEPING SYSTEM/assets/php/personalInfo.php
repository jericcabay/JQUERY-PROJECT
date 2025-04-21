<?php
    require __DIR__ . '/../../connection/db.php';

    if($_SERVER['REQUEST_METHOD'] === "POST") {
        $firstname = $_POST['firstname'] ?? NULL;
        $middlename = $_POST['middlename'];
        $lastname = $_POST['lastname'] ?? NULL;
        $birthday = $_POST['birthdate'] ?? NULL;
        $age = $_POST['age'] ?? NULL;
        $gender = $_POST['gender'] ?? NULL;
        $email = $_POST['email'] ?? NULL;
        $number = $_POST['mnumber'] ?? NULL;

        $fullname = trim("$firstname $middlename $lastname");

        if(!filter_var($email, FILTER_VALIDATE_EMAIL) || !str_ends_with($email, 'gmail.com')) {
            print("Invalid Email Format.");
            exit;
        }

        try{
            $stmt = $pdo->prepare("INSERT INTO employee (Fullname, Birthday, Age, Gender, Email, Number) VALUES(?, ?, ?, ?, ?, ?)");
            $stmt->execute([$fullname, $birthday, $age, $gender, $email, $number]);
            print("✅ Register Successfull!");
        }catch(Exception $e) {
            print("❌ Error: " . $e->getMessage());
        }
    }
?>