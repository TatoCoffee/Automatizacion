<?php
//Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

//validar los datos
if ($username === 'usuario' && $password === 'password') {
    //inicio de sesion exitoso, redireccionar al nuevo index
    header('Location: Front\index.html');
    exit(); //asegura que el script se detenga despues de la redireccion 
} else {
    echo "Nombre de usuario o password incorrectos.";
}
?>