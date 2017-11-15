<?php
//$conexion = new mysqli("localhost","root","","prueba");


	$user= "root";
	$pass="";
	$server ="localhost";
	$db = "bfood";
	$conexion= new mysqli($server, $user, $pass, $db);

	error_reporting(0);
	
	if ($conexion->connect_errno) {
		echo "Nuestro sitio experimenta fallos";
		exit();
	}

?>