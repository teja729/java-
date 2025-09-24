<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);
$role = $data['role'];
$contact = $data['contact'];

$sql = "INSERT INTO users (name, email, password, role, contact) VALUES (?,?,?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $password, $role, $contact);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully!"]);
} else {
    echo json_encode(["error" => "Email already exists or query failed"]);
}
?>
