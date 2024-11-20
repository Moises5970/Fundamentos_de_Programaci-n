//Convierte un número del 1 al 5 en su nombre en inglés.
//Variable del numero que el usuario ingresa.
let num = parseInt(prompt("Ingresa un numero del 1 al 5"));

//Sentencia swich case para saber que a numero le corresponde el nombre en inglés.
switch (num) {
    //Al introducir un numero, se busca que coincida con una de las opciones y se imprime el mensaje correspondiente.
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    //Si no coinide con ningan, se muestra el siguiente mensaje.
    default:
        console.log("No valido");
        break;
}

//Fin.