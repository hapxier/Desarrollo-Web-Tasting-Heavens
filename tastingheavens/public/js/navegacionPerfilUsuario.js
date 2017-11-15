$(document).ready(function(){
    $("#div1").show();	
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();
    $("#opcion1").toggleClass("active");

    $("#f1").click(function(){
        $("#opcion1").addClass("active");
        $("#opcion2").removeClass("active");
        $("#opcion3").removeClass("active");
        $("#opcion4").removeClass("active");

        $("#div1").show();  
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
    });
    $("#f2").click(function(){
        $("#opcion2").addClass("active");
        $("#opcion1").removeClass("active");
        $("#opcion3").removeClass("active");
        $("#opcion4").removeClass("active");

        $("#div2").show();	
        $("#div1").hide();
        $("#div3").hide();
        $("#div4").hide();

    });
    $("#f3").click(function(){
        $("#opcion3").addClass("active");
        $("#opcion1").removeClass("active");
        $("#opcion2").removeClass("active");
        $("#opcion4").removeClass("active");

        $("#div3").show();	
        $("#div1").hide();
        $("#div2").hide();
        $("#div4").hide();

    });
        $("#f4").click(function(){
        $("#opcion4").addClass("active");
        $("#opcion1").removeClass("active");
        $("#opcion2").removeClass("active");
        $("#opcion3").removeClass("active");

        $("#div4").show();
        $("#div3").hide();  
        $("#div1").hide();
        $("#div2").hide();
    });
});