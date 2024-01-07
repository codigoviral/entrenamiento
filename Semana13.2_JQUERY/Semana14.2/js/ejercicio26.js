// Jquery

$(function(){
  //Agregar texto al div1. Método text()
  //text()
  $(".div1").text("<p><strong>Texto para el div1.</strong></p>")  
  //Obtener la información del div1
  window.alert("div1 tiene: " + $(".div1").text())
  // Agregar código html al div2. Método html()
  $("#div2").html("<strong>Texto con Negrita para el div2</strong>")
  // Manejo de eventos. Método on()
  // Si se hace click en div2, se cambia el aspecto del div1.
$("#div2").on("click", function(){
    $(".div1").css("color", "red")
    $(".div1").css("background-color", "yellow")
    $(".div1").css("font-family", "calibri")
});
// Si se hace click en div3, volver a su normalidad el div1
/*$("#div3").on("click", function(){
  $(".div1").css("color", "black")
  $(".div1").css("background-color", "white")
  $(".div1").css("font-family", "times new roman")
  });*/
// Se crea un JSON para las propiedades de css a modificar.
var prop = {"color":"black", "background-color":"white","font-family":"times new roman"}
$("#div3").on("click", function(){
  $(".div1").css(prop)
});
// Modificar atributos. Método attr()
    let imagen = $("#imgOff");
    imagen.on("mouseover",function(){
      imagen.attr("src","img/lamp_on.jpg");
    })
    imagen.on("mouseout",function(){
      imagen.attr("src","img/lamp_off.jpg");
    })
  //setInterval: Permite definir la ejecución de una función
  //en intervalos de tiempo.
  setInterval(mostrarFecha, 1000)
  //Se muestra la fecha.
  mostrarFecha();
  //Efectos
  $("#aplicarEfecto").on("click", function(){
    //$("#efectos").hide(2000);
    //$("#efectos").slideUp(2000);
    //$("#efectos").fadeOut(2000);
    $("#efectos").toggle(2000);
  });
  $("#quitarEfecto").on("click", function(){
   //$("#efectos").show(2000);
    //$("#efectos").slideDown(2000);
    //$("#efectos").fadeIn(2000);
    $("#efectos").slideToggle(2000);
  });

});

// Función para mostrar la fecha y hora del sistema
function mostrarFecha(){
  var today = new Date();
  $("#fecha").html(today.toLocaleString('es-ES'));
}

