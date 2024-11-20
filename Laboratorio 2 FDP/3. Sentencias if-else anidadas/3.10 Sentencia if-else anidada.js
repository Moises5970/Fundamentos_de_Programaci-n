//Determina si un número es positivo y divisible entre 5.
//Variable del número que el usuario va a ingresar.
let num = prompt("Ingresa un número");

//Condicional para saber si el número es positivo y divisible por 5.
//Si el número es positivo y divisible entre 5, entonces entra en la primera opción.
if(num>=0 && num % 5 === 0){
    console.log("El número es positivo y divisible entre 5");
}   //Si el número solo es positivo, entonces entra en la segunda opción.
else if(num >= 0){
    console.log("El número solo es positivo");
} //Si el número solo es divisible entre 5, entonces entra en la tercera opción.
else if(num % 5 === 0){
    console.log("El número solo es divisible entre 5");
} 

//Fin.