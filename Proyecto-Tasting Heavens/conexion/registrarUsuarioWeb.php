<?php
	
	//conectamos el servidor

//$conectar = @mysql_connect('localhost','root','');

//verificamos la conexion

include('conexion_web.php');

$name = $_POST['txt-nombre-cliente'];
$lastName= $_POST['txt-apellido-cliente'];
$email= $_POST['correo-cliente'];
$password= $_POST['contraseña-cliente'];
$gender= $_POST['rbt-genero'];
$birthday= $_POST['fecha-nac'];

$conexion ->query("INSERT INTO `tbl_user`(`id_user`, `nameUser`, `lastName`, `nickname`, `birthday`, `address`, `phone`, `gender`, `email`, `password`)
    VALUES (NULL,'".$name."','".$lastName."',NULL,'".$birthday."',NULL,NULL,'".$gender."','".$email."','".$password."')");


include('cerrar_conexion_web.php');


?>