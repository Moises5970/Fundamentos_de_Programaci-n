//Verifica si una letra es vocal (solo considera minúsculas).
//Variable de la tera ingresada por el usurio.
let letra = prompt("Ingresa una letra");

//Condicional para saber si la letra es vocal.
//Si la letra es vocal, entonces entra en la primera opción.
switch(letra){
    //Al introducir una latra, se busca que coincida con una de las opciones y se impirme el mensaje correspondiente.
    case "a":
        console.log("La letra es vocal");
        break;
    case "e":
        console.log("La letra es vocal");
        break;
    case "i":
        console.log("La letra es vocal");
        break;
    case "o":
        console.log("La letra es vocal");
        break;
    case "u":
        console.log("La letra es vocal");
        break;
    default:
        console.log("La letra no es vocal");
        break;
}

//Fin.