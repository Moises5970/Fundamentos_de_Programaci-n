//Verifica si un número es divisible por 2, 3 o ambos.
//Variable del número que el usuario va a ingresar.
let num =  prompt("Ingresa un número");

//Condicional para saber si el número es divisible por 2, 3 o ambos.
//Si el numero se puede dividir entre 2 y 3, entonces entra en la primera opción.
if (num % 2 === 0 && num % 3 === 0){
    console.log("El número es divisible por 2 y 3");
    //Si el número solo se puede dividir entre 2, entonces entra en la segunda opción.
}else if (num % 2 === 0){
    console.log("El número es divisible por 2");
    //Si el número solo se puede dividir entre 3, entonces entra en la tercera opción.
}else if (num % 3 ===0){
    console.log("El número es divisible por 3");  
}

//Fin.