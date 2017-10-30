<?php



session_start();
ob_start();

$conexion = conectar();
$_SESSION['sesion_exito']=0;
$emailNickname= $_POST['txt-usuario'];
$password = $_POST['form-password'];

if($emailNickname==""||$password==""){
	//header('Location:../login.php');
	$_SESSION['sesion_exito']=2;#error de campos vacios = 2
}else{
	include('conexion_web');
$_SESSION['sesion_exito']=3; #datos incorrectos
$resultado = mysqli_query($conexion, "SELECT * FROM `tbl_user` where (email = '".$emailNickname."' OR nickname ='".$emailNickname."' )AND password='".$password."'");

while ($consulta = mysqli_fetch_array($resultado)) {
	$_SESSION['sesion_exito']=1;#inicio sesion
}
include('cerrar_conexion_web');
}

if ($_SESSION['sesion_exito']<> 1) {
	header('Location: ../login.php');
}

?>