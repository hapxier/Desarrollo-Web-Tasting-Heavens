//................................. Modulos Necesarios .................................  
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var session = require("express-session");
var sha1 = require("sha1");


//................................. Declaracion de Variable .................................  
var app = express();
app.use(express.static("public"));
var urlEncodeParser = bodyParser.urlencoded({extended:false});

app.use(session({secret:'Hola',resave:true,saveUninitialized:true}));

//................................. Conexion DB .................................  
var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"bfood"
});

//................................. Pagina de inicio .................................  
app.get("/",function(peticion, respuesta){
	respuesta.send("public/index.html");
});

//................................. LOGIN USER .................................  

app.post("/loginUser", urlEncodeParser, function(peticion, respuesta){
	conexion.query("select * from tbl_user where (email= ? and password = ? )",
		[peticion.body.email, sha1(peticion.body.password)], 
		function(err, filas, campos){
			if (filas.length != 0){
				peticion.session.idUser = filas[0].id_user;
				peticion.session.nameUser = filas[0].nameUser;
				peticion.session.status = "1";
				respuesta.send(JSON.stringify(filas));
			}
		respuesta.send();
	});
});

//................................. LOGIN RESTAURANTE .................................  

app.post("/loginRestaurante", urlEncodeParser, function(peticion, respuesta){
	conexion.query("select * from tbl_restaurants where (email = ? and password = ?)",
		[peticion.body.email, sha1(peticion.body.password)],
		function(err, filas, campos){
			if (filas.length != 0){
				peticion.session.idUser = filas[0].id_restaurant;
				peticion.session.nameUser = filas[0].name;
				peticion.session.status = "2";
				respuesta.send(JSON.stringify(filas));
			}
		respuesta.send();
	});
});

//.................................. FAVORITO ................................  
app.get("/favorito",function(peticion, respuesta){
	conexion.query("select * from tbl_favorites_restaurants as a inner join tbl_restaurants as b "+
				"where(a.id_user = ? and a.id_restaurant = b.id_restaurant)",
		[peticion.session.idUser],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//.................................. AGREGAR FAVORITO ................................  

app.get("/favorito",function(peticion, respuesta){
	conexion.query("INSERT INTO tbl_favorites_restaurants (id_user ,  id_restaurant ) VALUES (?,?)",
		[peticion.session.idUser, peticion.query.idRestaurante],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//................................ SEGUIDORES USUARIOS .................................  

app.get("/seguidoresUser",function(peticion, respuesta){
	conexion.query("",
		[peticion.session.idUser],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//................................ SEGUIDORES RESTAURANTES .................................  

app.get("/seguidoresRestaurant",function(peticion, respuesta){
	conexion.query("",
		[peticion.session.idUser],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//................................ RECOMENDACIONES .................................  

app.get("/recomendacionUser",function(peticion, respuesta){
	conexion.query("select * from tbl_restaurants order by rand() limit 30",
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//.............................. AGREGAR RESERVACIONES ..............................  

app.get("/agregarReservacion",function(peticion, respuesta){
	conexion.query("INSERT INTO tbl_reservations(date, hour, id_user, id_restaurant) VALUES (?,?,?,?)",
		[peticion.query.fecha,peticion.query.hora,peticion.session.idUser, peticion.query.idresataurant],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//.............................. RESERVACIONES ..............................  

app.get("/reservacion",function(peticion, respuesta){
	conexion.query("select * from tbl_reservations where (id_restaurant = ?)",
		[peticion.query.idresataurant],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});

//.............................. MENUS ..............................  

app.get("/menus",function(peticion, respuesta){
	conexion.query("select * from tbl_menus a inner join tbl_combos b where (a.id_combo = b.id_combo and a.id_restaurant =?)",
		[peticion.query.idresataurant],
		function(err, filas, campos){
			respuesta.send(JSON.stringify(filas));
	});
});




//.................................  .................................  


app.listen(3000);