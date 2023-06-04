document.getElementById("resumenForm").addEventListener("click", validarForm);
document.getElementById("botonBorrarForm").addEventListener("click", borrarForm);
var precioFinal;
var precioEntradaGeneral = 200;
var errorNombre = document.getElementById("errorNombre");
var errorApellido= document.getElementById("errorApellido");
var errorEmail= document.getElementById("errorEmail");
const expresionValidarEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var errorCantidad= document.getElementById("errorCantidad");


function validarForm() {
    var nombre = document.getElementById("inputnombre").value;
    var apellido = document.getElementById("inputapellido").value;
    var email = document.getElementById("inputemail").value;
    var cantidad = document.getElementById("inputcantidad").value;
if (!nombre || !isNaN(nombre) ) {
    errorNombre.className += "mostrar";
    errorNombre.innerHTML = "Por favor, escribí tu nombre. No escribas números aquí";
    var nombreValido = false;
} else {
    var nombreValido = true;
    errorNombre.style.display="none";
}
if (!apellido  || !isNaN(apellido) ) {
    errorApellido.className += "mostrar";
    errorApellido.innerHTML = "Por favor, escribí tu apellido. No escribas números aquí";
    var apellidoValido =false;
} else {
    var apellidoValido = true;
    errorApellido.style.display="none";
}
if (expresionValidarEmail.test(email)) {
    var emailValido = true;
    errorEmail.style.display="none";
} else{
    errorEmail.className += "mostrar";
    errorEmail.innerHTML = "Por favor, escribí una dirección de email válida";
    var emailValido =false;
}

if (!cantidad || isNaN(cantidad ) || cantidad =="0") {
    errorCantidad.className += "mostrar";
    errorCantidad.innerHTML = "Por favor, escribí sólo números enteros positivos";
    var cantidadValida =false;
} else {
    var cantidadValida = true;
    errorCantidad.style.display="none";
}
if (apellidoValido ==true && nombreValido ==true && cantidadValida ==true && emailValido ==true ){
procesarForm ();
}
}

function procesarForm (){
var nombre = document.getElementById("inputnombre").value;
var apellido = document.getElementById("inputapellido").value;
var email = document.getElementById("inputemail").value;
var cantidad = document.getElementById("inputcantidad").value;
var tipoEntrada = document.getElementById("inputtipoentrada").value;

switch(tipoEntrada) {
    case "general":
        precioCadaEntrada = precioEntradaGeneral
    precioFinal = cantidad * precioEntradaGeneral;
      break;
    case "estudiante":
            precioCadaEntrada = precioEntradaGeneral - (precioEntradaGeneral*0.8);
      precioFinal = cantidad * precioCadaEntrada;
      break;
    case "trainee":
        
        precioCadaEntrada = precioEntradaGeneral - (precioEntradaGeneral*0.5);
        precioFinal = cantidad * precioCadaEntrada;
      break;
      case "junior":
        precioCadaEntrada = precioEntradaGeneral - (precioEntradaGeneral*0.15);
        precioFinal = cantidad * precioCadaEntrada;
        break;
    default:
        precioFinal = cantidad * (precioEntradaGeneral);
  }
  document.getElementById("totalPagar").className += "mostrar";
    document.getElementById("totalPagar").innerHTML = "<h5>¡Hola "+nombre+"!</h5    ><p> Vas a comprar " + cantidad + " entradas para " + tipoEntrada+"</p><p>El precio de cada entrada, con el descuento aplicado, es de <b>$"+precioCadaEntrada+"</b></p><p> El total a pagar es de <b>$"+precioFinal+"</b></p>";
    
    document.getElementById("botonpagar").className += "mostrar";
}

function borrarForm () {
    document.getElementById("compratickets").reset();
    errorCantidad.style.display="none";
    errorEmail.style.display="none";
    errorNombre.style.display="none";
    errorApellido.style.display="none";
}
