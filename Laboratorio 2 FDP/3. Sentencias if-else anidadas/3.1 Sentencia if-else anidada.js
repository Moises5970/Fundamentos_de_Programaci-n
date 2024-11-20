//Determina si un número es positivo, negativo o cero.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número es positivo, negativo o cero.
//Si el número es positivo, entonces entra en la primera opción.
if (num > 0) {
    console.log("El número es positivo");
    //Si el número es negativo, entonces entra en la segunda opción.
} else if (num < 0) {
    console.log("El número es negativo");
    //Si el número es cero, entonces entra en la tercera opción.
} else if (num === 0) {
    console.log("El número es cero");
}

//Fin.