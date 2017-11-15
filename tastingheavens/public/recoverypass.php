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
<div class="login-wrapper"></div>
 

<div class="pen-title"></div>
<!-- Modulo de Recuperación-->
 <div class="form-gap"></div>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">¿Se te olvidó tu contraseña?</h2>
                  <p>Puedes restablecer tu contraseña aquí.</p>
                  <div class="panel-body">
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" class="form-control"  type="email">
                        </div>
                      </div>
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-primary" value="Reset Password" type="submit">
                      </div>
                      <input type="hidden" class="hide" name="token" id="token" value=""> 
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>

    <script src="js/index.js"></script>

<!-- sección de pie de página -->
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