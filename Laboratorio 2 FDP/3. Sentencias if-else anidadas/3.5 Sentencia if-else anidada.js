//Determina si una cadena tiene entre 5 y 10 caracteres.
//Variable para la cadena ingresada por el usuario.
let cadena = prompt("Ingresa una cadena");

//Condicional para saber si la cadena tiene entre 5 y 10 caracteres.
//Si la cadena tiene entre 5 y 10 caracteres, entonces entra en la primera opción y muestra cuentos tiene.
if(cadena.length <= 10 && cadena.length >= 5){
    console.log("La cadena tiene entre 5 y 10 caracteres");
    console.log(cadena.length);
    //Si la cadena tiene menos de 5 caracteres, entonces entra en la segunda opción y muestra cuantos caracteres tiene.
}else if(cadena.length <= 5){
    console.log("La cadena tiene menos de 5 caracteres");
    //Si la cadena tiene más de 10 caracteres, entonces entra en la tercera opción y muestra cuantos caracteres tiene.
    console.log(cadena.length);
}else if(cadena.length >= 10){
    console.log("La cadena tiene más de 10 caracteres");
    console.log(cadena.length);
}   

//Fin.  