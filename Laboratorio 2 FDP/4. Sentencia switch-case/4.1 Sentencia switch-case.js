//Determina el día de la semana a partir de un número.
//Variable del número que el usuario va a ingresar.
let día = parseInt(prompt("Ingresa un número"));
//Condicional para saber el día de la semana.
switch(día){
    //Al darse un numero, se busca entre las opcines y se imprime el mensaje correspondiente.
    case 1:
        console.log("El día es Domingo");
        break;
    case 2:
        console.log("El día es Lunes");
        break;
    case 3:
        console.log("El día es Martes");
        break;
    case 4:
        console.log("El día es Miercoles");
        break;
    case 5:
        console.log("El día es Jueves");
        break;
    case 6: 
        console.log("El día es Viernes");
        break;
    case 7:
        console.log("El día es Sábado");
        break;
    default:
        console.log("Día no valido");
        break;   
}

//Fin.