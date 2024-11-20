//Realiza un programa que solicite al usuario su edad y dependiendo de su respuesta, indique si puede votar.
//Luego, usa un ciclo for para imprimir los años que le faltan hasta la edad de retiro (65 años).
let edad = parseInt(prompt("Ingrese su edad: "));
//Se verifica si es mayor de edad con sentencia if.
if (edad >= 18){
    console.log("Puede votar");
}else{
    log("No puede votar");
}

let cont= -1;
for(let i = edad; i<=65; i++){
    cont++
}
console.log(`Le faltan ${cont} años para los 65`);

//Fin.
