//Verifica el estado de una batería (bajo, medio, alto).
//Variable del estado de la batería que el usuario va a ingresar.
let porcentaje = prompt("Ingresa el porcentaje de batería");

//Condicional para saber el estado de la batería.
//Si el porcentaje de batería es bajo, entonces entra en la primera opción.
if (porcentaje >= 0 && porcentaje <= 20) {
    console.log("Batería baja");
    //Si el porcentaje de batería es medio, entonces entra en la segunda opción.
} else if (porcentaje >= 21 && porcentaje <= 80) {
    console.log("Batería media");
    //Si el porcentaje de batería es alto, entonces entra en la tercera opción.
} else if (porcentaje >= 81 && porcentaje <= 100){
    console.log("Batería alta");
}

//Fin.