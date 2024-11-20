//Verifica el estado del clima (frío, templado o caliente).
//Variable para el estado del clima.
let temp = prompt("¿Cual es la temperatura?");

//Condicional para saber el estado del clima.
//Si la temperatura es baja, entonces entra en el rango de la primera opción.
if (temp >= -67 && temp <= 10){
    console.log("El clima es frío");
    //Si la temperatura es media, entonces entra en el rango de la segunda opción.
} else if (temp >= 11 && temp <=25){
    console.log("El clima es templado");
    //Si la temperatura es alta, entonces entra en el rango de la tercera opción.
}else if (temp >= 26){
    console.log("El clima es caliente");
}

//Fin.