//Comprueba si un número es múltiplo de 5.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número es múltiplo de 5. 
//Si es true, entonces entra en la primera opción.
//Si no, entonces entra en la segunda opción.
if (num % 5 === 0) {
    console.log("El número es múltiplo de 5"); 
} else {
    console.log("El número no es múltiplo de 5");
}

//Fin.
