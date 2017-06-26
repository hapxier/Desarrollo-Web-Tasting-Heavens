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