<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Tasting Heavens-Perfil Usuario</title>
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
    
    <div class="container">
        <ul class="nav nav-tabs navbar-right">
            <li role="presentation" id="opcion1"><a id="f1">Favoritos <span class="badge">3</a></li>
            <li role="presentation" id="opcion2"><a id="f2">Seguidores <span class="badge">4</span></a></li>
            <li role="presentation" id="opcion3"><a id="f3">Siguiendo <span class="badge">5</span></a></li>
            <li role="presentation" id="opcion4"><a id="f4">Recomendacion</a></li>
        </ul>
    </div>

    <!-- Pagina contenido -->
    <div class="container">
    <br>
        <div class="row">
            <!-- ..........................Informacion del usuario .........................-->
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-3" >
                <img class="img-rounded img-responsive img-center" src="img/10003.png" alt="Imagen de P" >
                    <h3>Nombre Usuario</h3>            
                <button class="btn btn-success btn-center" type="submit">Editar</button>
                <br>
                <br>    
                <button type="button" class="btn btn-default ">
                    Cupon <span class=" badge glyphicon glyphicon-star" aria-hidden="true"> 3</span>
                </button><br>
                <br>
                <button type="button" class="btn btn-default ">
                    Visita <span class=" badge glyphicon glyphicon-eye-open" aria-hidden="true"> 1</span>
                </button><br>
                <br>            
            </div>
            

             <!-- ..........................Informacion del Contenido .........................-->
            <div class="col-lg-9 col-md-9 col-sm-8">
                <div class="row">
                    <div id="div1">
                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R1.jpg" alt="">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 1</a>
                                    </h4>
                                    <p>Descripcion restaurante1</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R2.jpg" alt="" height="">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 2</a>
                                    </h4>
                                    <p>Descripcion restaurante2</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star-empty"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R3.jpg" alt="" height="5">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 3</a>
                                    </h4>
                                    <p>Descripcion restaurante3</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="div2">
                        <table class="table text-center">
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-primary">seguir</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-primary">seguir</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-default">siguiendo</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-primary">seguir</button></td>
                            </tr>
                        </table>
                    </div>

                    <div id="div3">
                        <table class="table text-center">
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-default"> dejar de seguir</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-default"> dejar de seguir</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-default"> dejar de seguir</button></td>
                            </tr>
                            <tr>
                                <td class="col-lg-2 col-md-2 col-xs-0"></td>
                                <td class= "col-lg-1 col-md-1 col-xs-2"><img src="img/usuario.jpg" alt="" class="img-thumbnail img-circle"></td>
                                <td class="text-center"><h4>Nombre Usuario</h4></td>
                                <td> <button type="button" class="btn btn-default"> dejar de seguir</button></td>
                            </tr>
                        </table>
                    </div>

                    <div id="div4">
                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R1.jpg" alt="">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 1</a>
                                    </h4>
                                    <p>Descripcion restaurante1</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R2.jpg" alt="" height="">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 2</a>
                                    </h4>
                                    <p>Descripcion restaurante2</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star-empty"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6">
                            <div class="thumbnail">
                                <img src="img/R3.jpg" alt="" height="5">
                                <div class="caption">
                                    <h4><a href="#">Restaurante 3</a>
                                    </h4>
                                    <p>Descripcion restaurante3</p>
                                </div>
                                <div class="ratings">
                                    <p>
                                    <button type="button" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                    </button>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    </p>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div> 
            </div>

        

        <!-- pie de pagina-->
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
    <script src="js/navegacionPerfilUsuario.js"></script>

</body>

</html>
