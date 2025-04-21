<?php
    require __DIR__. '/../../connection/db.php';

    if(isset($_POST['search'])) {
        $search = $_POST['search'];
    
        $stmt = $pdo->prepare("SELECT Fullname FROM employee WHERE Fullname LIKE :search LIMIT 5");
        $stmt->bindvalue(':search', "%$search%", PDO::PARAM_STR);
        $stmt->execute();

        $results = $stmt->FetchAll(PDO::FETCH_ASSOC);

        if($results) {
            foreach($results as $row) {
                print ("<p>" . htmlspecialchars($row['Fullname']) . "<p>"); 
            }
        }else {
            print ("<p>No results Found</p>");
        }
    }
?>