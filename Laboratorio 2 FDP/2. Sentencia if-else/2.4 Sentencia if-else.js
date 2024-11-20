//Determina si un año es bisiesto o no.
//Variables del año ingresado por el usuario.
let año = prompt("Ingresa un año");

//Si el año es divisible entre 4, entonces es bisiesto.
if (año % 4 == 0) {
    console.log("El año es bisiesto");
    //Si no, entonces no es bisiesto.
}else{
    console.log("El año no es bisiesto");
}

//Fin.