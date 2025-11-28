<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    echo "Nama: $nama <br>";
    echo "Email: $email <br>";
    echo "Password: $password <br>"; // Dalam sistem sebenar, jangan papar password.
}
?>
