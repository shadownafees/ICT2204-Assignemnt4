<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Database credentials
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'adamspeak_db';

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement
$sql = "INSERT INTO hire (name, email, phone, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $phone, $message);

// Execute the statement
if ($stmt->execute()) {
    echo "Form submitted successfully! Await for my Reply!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
