<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Tasting Heavens/Pagina de Inicio</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/landing.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
</head>

<body>
<!--Barra nav-->
    <nav class="navbar navbar-inverse navbar-fixed" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Barra de Navegacion</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Tasting Heavens</a>
                <form class="form-inline navbar-form navbar-nav">
                    <input class="form-control " type="text" placeholder="Buscar">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        <span class=" glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </form>
            </div>

            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index.php" class="smoothScroll">INICIO</a></li>
                <li><a href="login.php" class="smoothScroll">REGISTRARSE</a></li>
                <li><a href="acerca.php" class="smoothScroll">ACERCA DE</a></li>
                <li><a href="contactanos.php" class="smoothScroll">CONTACTANOS</a></li>
            </ul>
        </div>
    </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>

<section id="about">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12 text-center">
				<div class="section-title">
					<strong>ACERCA DE</strong>
					<h1 class="heading bold">NUESTRO SITIO</h1>
					<hr>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<img src="img/about-img.jpg" class="img-responsive" alt="about img">
			</div>
			<div class="col-md-6 col-sm-12">
				<h3 class="bold">Comunidad</h3>
				<h1 class="heading bold">La mejor forma de encontrar un lugar a corde nuestra peferencia</h1>

				<!-- Pestañas de navegación-->
				<ul class="nav nav-tabs" role="tablist">
					<li class="active"><a href="#design" aria-controls="design" role="tab" data-toggle="tab">DISEÑO</a></li>
					<li><a href="#mobile" aria-controls="mobile" role="tab" data-toggle="tab">MÓVIL</a></li>
					<li><a href="#social" aria-controls="social" role="tab" data-toggle="tab">SOCIAL</a></li>
				</ul>

				<!-- paneles de pestañas -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="design">
						<p>Duis aute irure dolor in <a href="#">reprehenderit</a> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed id est tincidunt, iaculis nulla vel, sodales metus. Morbi interdum accumsan augue, in accumsan neque lacinia sed. Fusce cursus eu ligula ut gravida.</p>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
					</div>
					<div role="tabpanel" class="tab-pane" id="mobile">
						<p>Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
						<p><a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
					</div>
					<div role="tabpanel" class="tab-pane" id="social">
						<p>Pellentesque elementum, lacus sit amet <a href="#">hendrerit</a> posuere, quam quam tristique nisi, nec ornare ligula magna id nisl. Donec blandit enim ac semper facilisis. Curabitur eu laoreet mauris, eget fermentum velit.</p>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>

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