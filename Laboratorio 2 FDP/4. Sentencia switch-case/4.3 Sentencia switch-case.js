//Determina el mes del año a partir de un número.
//Variable del número que el usuario va a ingresar.
let mes = parseInt(prompt("Ingresa un número"));

//Sentencia swich case para encontara el mes del año. por un numero
switch(mes){
    //Al darse un numero, se busca que coincicda entre las opciones y se imprime el mensaje correspondiente.
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Mes no valido");
        break;
}

//Fin