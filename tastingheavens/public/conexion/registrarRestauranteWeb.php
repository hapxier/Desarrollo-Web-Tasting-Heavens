<?php

include('conexion_web.php');

$name = $_POST['txt-nombre-usuario'];
$email= $_POST['correo-usuario'];
$password= $_POST['contraseña-usuario'];
$address= $_POST['direccion'];
$phone= $_POST['txt-telefono'];
$pay_mode= $_POST['slc-suscripcion'];
$information= $_POST['descripcion'];


$query = $conexion ->query("INSERT INTO `tbl_restaurants`(`id_restaurant`, `name`, `description`, `address`, `phone`, `birthdate`, `pay_mode`, `email`, `password`, `coverPhoto`) VALUES (NULL,'".$name."','".$information."','".$address."','".$phone."','".$birthdate."','".$pay_mode."','".$email."','".$password."', NULL)");

/*$query ->execute();
if(!$query){
	echo "No se han ingresado los datos";
	}
else{
              //echo "Los datos se ingresaron correctamente";
              header(' ../perfilRestaurante.php');
         }

*/
mysqli_close($conexion);

?>