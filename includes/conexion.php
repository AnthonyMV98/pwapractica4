<!-- Conexión a la base de datos -->

<?php
$servername = "localhost";      // Dirección del servidor de la base de datos
$username = "root";          // Nombre de usuario de la base de datos 
$password = "";               // Contraseña de la base de datos (No ay contraseña)
$dbname = "01_calif";        // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);   // Se crea una nueva instancia de la clase mysqli para establecer la conexión a la base de datos

if ($conn->connect_error) {   // Se verifica si hay un error de conexión
    die("Conexión fallida: " . $conn->connect_error);   // Si hay un error, se imprime un mensaje de error y se termina la ejecución del script
}
?>

