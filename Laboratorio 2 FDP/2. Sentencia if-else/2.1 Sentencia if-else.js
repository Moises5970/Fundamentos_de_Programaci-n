// Verifica si un número es par o impar.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número ingresado es par o impar.
//Si es true, entra a la primero opción, si no, entra a la segunda opción.
if(num % 2 === 0){
    console.log(num + " es par");
}else{
    console.log(num + " es impar");
}

//Fin.