<!DOCTYPE html>
<html>
<head>
	<title>Tasting Heavens-Login</title>
	<meta charset="utf-8">

    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/LoginRegistro.css">

<body>
    <nav class="navbar navbar-inverse navbar-fixed" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Barra de Navegacion</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Tasting Heavens</a>
                <form class="form-inline navbar-form navbar-nav">
                    <input class="form-control " type="text" placeholder="Buscar">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        <span class=" glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </form>
            </div>
            <!-- /.navbar-collapse -->

            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
            	<li><a href="index.php" class="smoothScroll">INICIO</a></li>
                <li><a href="acerca.php" class="smoothScroll">ACERCA DE</a></li>
                <li><a href="contactanos.php" class="smoothScroll">CONTACTANOS</a></li>
            </ul>
        </div>
    </div>
        </div>
    </nav>	

    <div class="top-content inner-bg">
        <div class="container">
            <div class="row" style="margin: -100px">

                <!--Login-->
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                   	<div class="form-box">
                    	<div class="form-top">
                    		<div class="form-top-left">
                    			<h3>Ingresa a nuestro sitio</h3>
                        		<p>Ingresa tu nombre de usuario y contraseña:</p>
                    		</div>
                    		<div class="form-top-right">
                    			<i class="fa fa-lock"></i>
                    		</div>
                        </div>
                        <div class="form-bottom">
		                    <form role="form" action="loginConexion.php" method="post" class="login-form">
		                    	<div class="form-group">
		                    		<label class="sr-only" for="form-username">Usuario</label>
		                        	<input type="text" name="txt-usuario" placeholder="Usuario" class="form-username form-control" id="txt-usuario">
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only" for="form-password">Contraseña</label>
		                        	<input type="password" name="form-password" placeholder="Contraseña" class="form-password form-control" id="form-password">
		                        </div>
		                        <button type="submit" class="btn">Ingresar</button>
		                        <div class="cta"><a href="recovery-page.html">¿Olvidaste tu contraseña?</a></div>
</div>
                                <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                                <script src="js/index.js"></script>

		                        <div class="social-login">
                    				<h3>O Inicia sesion con:</h3>
                    				<div>
                        				<a class="btn btn-link-2" href="#">
                        				<i class="fa fa-facebook"></i> Facebook
                        				</a>
                    				</div>
                   				 </div>
		                    </form>
	                    </div>
                    </div>
                </div>
                <!--Fin del login-->

                
                <!--Registros-->
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                	
                	<div class="form-box">
                		<div class="form-top">
                    		<div class="form-top-left" style="margin-bottom: -20px">
                    			<h3>Registrate</h3>
                        		<p>Llena el formulario para tener acceso a la página:</p>
                        		
                        		<ul class="pagination"><!--lista de la navegacion-->
					    			<li><a id="IdUsuario">Usuario</a></li>
					    			<li><a id="IdRestaurante">Restaurante</a></li>
  								</ul>
                    		</div>
                    		<div class="form-top-right">
                    			<i class="fa fa-pencil"></i>
                    		</div>
                        </div>

                        <div class="form-bottom">
		                    <form role="form" action="conexion/registrarRestauranteWeb.php" method="post" class="registration-form" id="FU">
		                    	<div class="form-group">
		                    		<label class="sr-only">Nombre</label>
		                        	<input type="text" name="txt-nombre-usuario" placeholder="Nombre" class="form-control" id="txt-nombre-usuario">
		                        </div>
		                      
		                        <div class="form-group">
		                        	<label class="sr-only">Correo</label>
		                        	<input type="text" name="correo-usuario" placeholder="Correo" class="form-control"
		                        	id="correo-usuario">
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only">Contraseña</label>
		                        	<input type="password" name="contraseña-usuario" placeholder="Contraseña" class="form-control" id="contraseña-usuario">
		                        </div>

		                        <div class="form-group">
		                        	<label class="sr-only" >Dirección</label>
		                        	<input type="text" name="direccion" placeholder="Dirección" class="form-control" id="direccion">
		                        </div>

		                        <div class="form-group">
		                        	<label class="sr-only" >Teléfono</label>
		                        	<input type="tel" name="txt-telefono" placeholder="Teléfono" class="form-control" id="txt-telefono">
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only" >Suscripción</label>
		                        	<h5 style="color: #fff">Modo de Pago:</h5>
		                        	<select class="form-control" id="slc-suscripcion" name="slc-suscripcion">
		                        		<option value="1">Mensual</option>
		                        		<option value="2">Trtimestral</option>
		                        		<option value="3">Anual</option>
		                        	</select>
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only">Información sobre su restaurante:</label>
		                        	<textarea name="descripcion" placeholder="Información sobre su restaurante..." 
		                        				class="form-control" id="descripcion"></textarea>
		                        </div>
		                        <button type="submit" class="btn" name="btnRegistrarRestaurante">Registarse</button>
		                    </form>

		                    <form role="form" action="conexion/registrarUsuarioWeb.php" method="post" class="registration-form" id="FR">
		                    	<div class="form-group">
		                    		<label class="sr-only">Nombre</label>
		                        	<input type="text" name="txt-nombre-cliente" placeholder="Nombre" class="form-control" id="txt-nombre-cliente">
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only">Apellido</label>
		                        	<input type="text" name="txt-apellido-cliente" placeholder="Apellido" class="form-control" id="txt-apellido-cliente">
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only">Correo</label>
		                        	<input type="text" name="correo-cliente" placeholder="Correo" class="form-control" id="correo-cliente">
		                        </div>

		                        <div class="form-group">
		                        	<label class="sr-only">Contraseña</label>
		                        	<input type="password" name="contraseña-cliente" placeholder="Contraseña" class="form-control" id="contraseña-cliente">
		                        </div>
		                         <div class="form-group">
		                        	<label class="sr-only">Género</label>
		                        	<h5 style="color: #fff">Género</h5>
		                        	<h5 style="color: #fff"><label><input type="radio" name="rbt-genero" value="F">Femenino</label></h5>
		                        	<h5 style="color: #fff"><label><input type="radio" name="rbt-genero" value="M">Masculino</label></h5>
		                        	
		                        </div>
		                        <div class="form-group">
		                        	<label class="sr-only">Fecha de nacimiento</label>
		                        	<input type="date" name="fecha-nac" placeholder="MM/DD/AAAA" class=" form-control" id="fecha-nac">
		                        </div>
		                        <button type="submit" class="btn">Registrarse</button>
		                    </form>		                    
	                    </div>
                	</div>
                </div>   
        	</div>
        </div>
    </div>
    <hr>
    <!-- Footer -->
    <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Tasting Heavens 2017. Todos los derechos reservados.</p>

                </div>
            </div>
        </footer>
    <script src="js/bootstrap.min.js"></script>
	<!--datos para la navegacion en perfiles-->
	<script src="js/jquery.min.js"></script>
	<script src="js/navegacionLogin.js"></script>
</body>
</html>