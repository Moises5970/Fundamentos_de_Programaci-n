//Verifica si una cadena tiene menos de 10 caracteres.
//Variable para la cadena ingresada por el usuario.
let cadena = prompt("Ingresa una cadena");

//Condicional para saber si la cadena tiene menos de 10 caracteres.
//Si es true, entonces entra en la primera opción.
//Si no, entonces entra en la segunda opción.
if (cadena.length < 10) {
    console.log("La cadena tiene menos de 10 caracteres");
} else {
    console.log("La cadena tiene más de 10 caracteres");
}

//Fin.