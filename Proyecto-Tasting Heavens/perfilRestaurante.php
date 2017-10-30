<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Tasting Heavens-Perfil Restaurante</title>
    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

</head>

<body>
    
    <!-- ..................................... Barra de Navigacion...................................... -->
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

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <div class="collapse navbar-collapse">
                   <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.php" class="smoothScroll">INICIO</a></li>
                    <li><a href="acerca.php" class="smoothScroll">ACERCA DE</a></li>
                    <li><a href="contactanos.php" class="smoothScroll">CONTACTANOS</a></li>
                    <li>
                        <a href="login.php">CERRAR SESION</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>

        <!-- listados para la navegacion-->
    <div class="container">
        <ul class="nav nav-tabs navbar-right">
            <li role="presentation" id="opcion1"><a id="f1">Informacion<span class="badge"></a></li>
            <li role="presentation" id="opcion2"><a id="f2">Menu<span class="badge"></span></a></li>
            <li role="presentation" id="opcion3"><a id="f3">Reservaciones<span class="badge"></span></a></li>
            <li role="presentation" id="opcion4"><a id="f4">Localizacion</a></li>
        </ul>
    </div>

    <!-- Pagina contenido -->
    <div class="container">
      <br>
      <div class="row">
        <!-- ..........................Informacion del Restaurante.........................-->
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-3" >
            <img class="img-rounded img-responsive img-center" src="img/r1.jpg" alt="Imagen de P" >
            <h3>Nombre Restaurante</h3>
            <div class="ratings">
              <p>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
              </p>
            </div>          
            <button type="button" class="btn btn-default ">
                seguidores <span class=" badge glyphicon glyphicon-star" aria-hidden="true"> 3</span>
            </button><br>
            <br>
            <button type="button" class="btn btn-default ">
                Visita <span class=" badge glyphicon glyphicon-eye-open" aria-hidden="true"> 1</span>
            </button><br>
            <br>
             <button class="btn btn-success btn-center" type="submit">Editar</button>
            <br>
            <br>                
        </div>

        <!-- ..........................Informacion del Contenido .........................-->
        <div class="col-lg-9 col-md-9 col-sm-8">
          <div class="row">
            
            <!--Informacion-->
            <div id="div1">
            <div class="row" style="margin-left: 100px">
                 <div class="thumbnail col-lg-7">
                  <h1>Informacion:</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non interdum erat. Suspendisse sed libero non nisl lobortis ultricies vel eu diam. Proin ultricies, enim eu dictum bibendum, magna tellus aliquam nulla, sit amet euismod lorem diam in orci. Sed consectetur sit amet neque eu feugiat. Suspendisse ornare et urna quis congue. Etiam volutpat nec quam nec varius. Pellentesque ultricies metus et magna facilisis, a fringilla massa scelerisque. 
                  </p>
                </div>
                <div class="thumbnail col-lg-5" >
                  <h1>Horarios:</h1>
                  <p>
                    Domingo: 08:00 a 00:00<br>
                    Lunes: 08:00 a 00:00<br>
                    Martes: 08:00 a 00:00<br>
                    Miercoles: 08:00 a 00:00<br>
                    Jueves: 08:00 a 00:00<br>
                    Viernes: 08:00 a 00:00<br>
                    Sabado: 08:00 a 00:00<br>
                  </p>
                </div>
              </div>
            </div>
            <!--Fin de Informacion-->

            <!--Menu-->
            <div id="div2">
              <div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                  <img src="img/plato1.jpg" alt="">
                  <div class="caption">
                      <h4 class="pull-right">L. 200.99</h4>
                      <h4><a href="#">Plato 1</a>
                      </h4> <span class="glyphicon glyphicon-star"></span>
                           <span class="glyphicon glyphicon-star"></span>
                           <span class="glyphicon glyphicon-star"></span>
                           <span class="glyphicon glyphicon-star"></span>
                           <span class="glyphicon glyphicon-star"></span>
                      <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-lg-4 col-md-4">
                  <div class="thumbnail">
                      <img src="img/plato2.jpg" alt="">
                      <div class="caption">
                          <h4 class="pull-right">L. 400.99</h4>
                          <h4><a href="#">Plato 2</a>
                          </h4>   <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                          <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                  </div>
              </div>
                    
              <div class="col-sm-4 col-lg-4 col-md-4">
                  <div class="thumbnail">
                      <img src="img/plato3.jpg" alt="">
                      <div class="caption">
                          <h4 class="pull-right">L. 200.99</h4>
                          <h4><a href="#">Plato 3</a>
                          </h4>   <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                          <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                  </div>
              </div>

              <div class="col-sm-4 col-lg-4 col-md-4">
                  <div class="thumbnail">
                      <img src="img/plato4.jpg" alt="">
                      <div class="caption">
                          <h4 class="pull-right">L. 100.99</h4>
                          <h4><a href="#">Plato 4</a>
                          </h4>   <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                          <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                  </div>
              </div>

              <div class="col-sm-4 col-lg-4 col-md-4">
                  <div class="thumbnail">
                      <img src="img/plato4.jpg" alt="">
                      <div class="caption">
                          <h4 class="pull-right">L. 100.99</h4>
                          <h4><a href="#">Plato 5</a>
                          </h4>   <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                          <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                  </div>
              </div>

              <div class="col-sm-4 col-lg-4 col-md-4">
                  <div class="thumbnail">
                      <img src="img/plato4.jpg" alt="">
                      <div class="caption">
                          <h4 class="pull-right">L. 200.99</h4>
                          <h4><a href="#">Plato 6</a>
                          </h4>   <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                          <p>Descripcion plato 1. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                  </div>
              </div>
            </div> <!--Fin de Menu-->

            <!--reservaciones-->
            <div id="div3">
              <section id="buttons">
                <div class="page-header">
                  <h1>Reservaciones-Horarios</h1>
                </div>
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Domingo</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miercoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a class="btn" href="#">Default</a></td>
                      <td><a class="btn btn-large" href="#">Default</a></td>
                      <td><a class="btn btn-small" href="#">Default</a></td>
                      <td><a class="btn disabled" href="#">Default</a></td>
                      <td><a class="btn" href="#"><i class="icon-cog"></i> Default</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn" href="#">Default</a>
                          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-primary" href="#">Primary</a></td>
                      <td><a class="btn btn-primary btn-large" href="#">Primary</a></td>
                      <td><a class="btn btn-primary btn-small" href="#">Primary</a></td>
                      <td><a class="btn btn-primary disabled" href="#">Primary</a></td>
                      <td><a class="btn btn-primary" href="#"><i class="icon-shopping-cart icon-white"></i> Primary</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-primary" href="#">Primary</a>
                          <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-info" href="#">Info</a></td>
                      <td><a class="btn btn-info btn-large" href="#">Info</a></td>
                      <td><a class="btn btn-info btn-small" href="#">Info</a></td>
                      <td><a class="btn btn-info disabled" href="#">Info</a></td>
                      <td><a class="btn btn-info" href="#"><i class="icon-exclamation-sign icon-white"></i> Info</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-info" href="#">Info</a>
                          <a class="btn btn-info dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-success" href="#">Success</a></td>
                      <td><a class="btn btn-success btn-large" href="#">Success</a></td>
                      <td><a class="btn btn-success btn-small" href="#">Success</a></td>
                      <td><a class="btn btn-success disabled" href="#">Success</a></td>
                      <td><a class="btn btn-success" href="#"><i class="icon-ok icon-white"></i> Success</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-success" href="#">Success</a>
                          <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-warning" href="#">Warning</a></td>
                      <td><a class="btn btn-warning btn-large" href="#">Warning</a></td>
                      <td><a class="btn btn-warning btn-small" href="#">Warning</a></td>
                      <td><a class="btn btn-warning disabled" href="#">Warning</a></td>
                      <td><a class="btn btn-warning" href="#"><i class="icon-warning-sign icon-white"></i> Warning</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-warning" href="#">Warning</a>
                          <a class="btn btn-warning dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-danger" href="#">Danger</a></td>
                      <td><a class="btn btn-danger btn-large" href="#">Danger</a></td>
                      <td><a class="btn btn-danger btn-small" href="#">Danger</a></td>
                      <td><a class="btn btn-danger disabled" href="#">Danger</a></td>
                      <td><a class="btn btn-danger" href="#"><i class="icon-remove icon-white"></i> Danger</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-danger" href="#">Danger</a>
                          <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    <tr>
                      <td><a class="btn btn-inverse" href="#">Inverse</a></td>
                      <td><a class="btn btn-inverse btn-large" href="#">Inverse</a></td>
                      <td><a class="btn btn-inverse btn-small" href="#">Inverse</a></td>
                      <td><a class="btn btn-inverse disabled" href="#">Inverse</a></td>
                      <td><a class="btn btn-inverse" href="#"><i class="icon-random icon-white"></i> Inverse</a></td>
                      <td>
                        <div class="btn-group">
                          <a class="btn btn-inverse" href="#">Inverse</a>
                          <a class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div><!-- /btn-group -->
                      </td>
                    </tr>
                    </tbody>
                   </table>
              </section>
            </div>
            <!--Fin de reservaciones-->

            <!--Ubicacion-->
            <div id="div4">
              <div class="thumbnail" style="margin-left: 200px">
                <h1>Ubicacion</h1>
                <img src="img/map.png">
              </div>
            </div>
            <!--Fin de Ubicacion-->
          </div> 
        </div>
      </div>

      <!-- Pie de pagina-->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Tasting Heavens 2017. Todos los derechos reservados.</p>

                </div>
            </div>
        </footer>
    </div>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/navegacionPerfilRestaurante.js"></script>

</body>

</html>