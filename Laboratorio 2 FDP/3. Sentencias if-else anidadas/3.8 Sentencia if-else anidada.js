//Verifica si un número es múltiplo de 2, 3 o ninguno.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número es múltiplo de 2, 3 o ninguno.
//Si el número es múltiplo de 2, entonces entra en la primera opción.
if (num % 2 === 0 && num % 3 === 0) {
    console.log("El número es múltiplo de 2 y de 3");
}else if (num % 2 === 0) {
        console.log("El número es múltiplo de 3");
    //Si el número es múltiplo de 3, entonces entra en la segunda opción.
}else if (num % 3 === 0) {
    console.log("El número es múltiplo de 3");
}else {
    console.log("El número no es múltiplo de 2 ni de 3");
}

//Fin.