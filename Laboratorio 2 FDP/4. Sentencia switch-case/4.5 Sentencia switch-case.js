//Verifica si una cadena es "Hola", "Adiós" o "Desconocido".
//Variable de la cadena ingresada por el usuario.
let cadena = prompt("Ingresa una cadena");

//Sentencia swich case para saber si la cadena es "Hola", "Adiós" o "Desconocido".
switch(cadena){
    //Al introducir una cadena, se busca que coincida con una de las opciones y se imprime el mensaje correspondiente.
    case "Hola":
        console.log("Es Hola");
        break;
    case "Adios":
        console.log("Es Adios");
        break;
    case "Desconocido":
        console.log("Es Desconocido");
        break;
    //Si no coinide con ningan, se muestra el siguiente mensaje.
    default:
        console.log("No valido");
        break;
}

//Fin.