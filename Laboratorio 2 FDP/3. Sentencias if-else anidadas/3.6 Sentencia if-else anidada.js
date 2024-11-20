//Verifica si un número está entre 0 y 50, entre 51 y 100, o más de 100.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número está entre 0 y 50, entre 51 y 100, o más de 100.
//Si el número está entre 0 y 50, entonces entra en la primera opción.
if (num <= 0 && num >= 50) {
    console.log("El número está entre 0 y 50");
    //Si el número está entre 51 y 100, entonces entra en la segunda opción.
}else if (num <= 51 && num >= 100) {
    console.log("El número está entre 51 y 100");
    //Si el número es más de 100, entonces entra en la tercera opción.
}else if (num > 100) {
    console.log("El número es más de 100");
}

//Fin.