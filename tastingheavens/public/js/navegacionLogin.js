$(document).ready(function(){
    $("#FR").show();	
    $("#FU").hide();

    $("#IdRestaurante").click(function(){
        $("#FU").show();	
        $("#FR").hide();
    });
    $("#IdUsuario").click(function(){
        $("#FR").show();	
        $("#FU").hide();
    });
});

function validacionIngresar(){
    if ($("#txt-usuario").val().length == 0 || $("#login-password").val().length == 0) {
        alert('[ERROR] Los campos no pueden estar vacio para iniciar sesion');
        return false;
    }
}

function validacionRestaurante(){
    if ($("#txt-nombre-usuario").val().length == 0 || $("#correo-usuario").val().length == 0 
        || $("#contrasena-usuario").val().length == 0 ) {
        alert('[ERROR] Los campos no pueden estar vacio para registro de Restaurante');
        return false;
    }
}

function validacionUsuario() {
    if ($("#txt-nombre-cliente").val().length == 0 || $("#txt-apellido-cliente").val().length == 0
            || $("#correo-cliente").val().length == 0 || $("#contrasena-cliente").val().length == 0 ) {
        // Si no se cumple la condicion...
        alert('[ERROR] Los campos no pueden estar vacio para registrar usuarios');
        return false;
    }else if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("#correo-cliente").val())) ) {
        alert("Correo Invalido");
        return false;
    }else if (!($("#FR input[name='rbt-genero']:radio").is(':checked'))){
        alert("Selecione un genero");
        return false;
    }else if($("#txt-nombre-cliente").val().length == 0 ){
        alert("fecha invalida");
        return false;
    }

}