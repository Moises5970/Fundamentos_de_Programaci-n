//Determina el color del semáforo (rojo, amarillo, verde).
//Vraiba del la sñola de semaforo.
let señal = prompt("Ingresa la señal");
//Sentencia switch case para saber que color le corresponde la señal.
switch (señal){
    case "Siga":
        console.log("El color es verde");
        break;
    case "Precaución":
        console.log("El color es amarillo");
        break;
    case "Alto":
        console.log("El color es rojo");
        break;
        //Si no coinide con ninguna, se muestra el siguiente mensaje.
    default:
        console.log("Señal no válida");
        break;
}
//Fin.