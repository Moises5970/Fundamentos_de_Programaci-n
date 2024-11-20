//Determina si una cadena es "Sí" o "No".
//Variable de la cadena ingresada por el usuario.
let cadena = prompt("Ingresa una cadena");

//Sentencia swich case para saber si la cadena es "Sí" o "No".
switch(cadena){
    //Al introducir una cadena, se busca que coincida con una de las opciones y se imprime el mensaje correspondiente.
    case "sí":
        console.log("Es Sí");
        break;
    case "no":
        console.log("Es No");
        break;
    //Si no coinide con ningan, se muestra el siguiente mensaje.
    default:
        console.log("No valido");
        break;
}

//Fin.