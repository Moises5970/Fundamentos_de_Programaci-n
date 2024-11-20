//Verifica la estación del año a partir de un mes.
//Variable de la estación del año y la variable de mes.
let mes = prompt("Ingresa la estación del año");

//Sentencia swich case para saber que estación le corresponde la estación del año.
switch (mes) {
    //Al introducir una estación del año, se busca que coincida con una de las opciones y se imprime el mensaje correspondiente.
    case "Ynero":
        console.log("Es invierno");
        break;
    case "Febrero":
        console.log("Es invierno");
        break;
    case "marzo":
        console.log("Termina invierno y comienza primavera");
        break;
    case "Abril":
        console.log("Es primavera");
        break;
    case "Mayo":
        console.log("Es primavera");
        break;
    case "Junio":
        console.log("Termina primavera y comienza verano");
        break;
    case "Julio":
        console.log("Es verano");
        break;
    case "Agosto":
        console.log("Es verano");
        break;
    case "Septiembre":
        console.log("Termina verano y comienza otoño");
        break;
    case "Octubre":
        console.log("Es otoño");
        break;
    case "Noviembre":
        console.log("Es otoño");
        break;
    case "Diciembre":
        console.log("Termina otoño y comienza invierno");
        break;
    //Si no coinide con ningan, se muestra el siguiente mensaje.
    default:
        console.log("No valido");
}

//Fin.