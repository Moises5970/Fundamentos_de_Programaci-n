//Comprueba si una letra es vocal o consonante.
//Variable para la letra ingresada por el usuario.
let letra = prompt("Ingresa una letra");

//Condicional para saber si la letra es vocal o consonante.
//Si es true, entonces entra en la primera opción.
//Si no, entonces entra en la segunda opción.
if (letra.match(/[aeiou]/i)) {
    console.log("La letra " + letra + " es vocal");
} else {
    console.log("La letra " + letra + " es consonante");
}

//Fin.