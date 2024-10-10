<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "sj.zuurbier@ziggo.nl";
        $subject = "User  Request";
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        mail($to, $subject, $body);
        echo "Email sent successfully!";
    }
?>