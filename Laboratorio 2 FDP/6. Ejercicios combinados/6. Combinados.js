//Haz un programa que simule un cajero automático, permitiendo varias transacciones con switch y repitiendo el proceso hasta que el usuario decida salir.
let saldo = 0;
let continuar = true;
do{
    let operacion = prompt("Ingrese la operación que desea realizar: ").toLowerCase();
switch (operacion) {
    case "depositar":
        let montoInput =  parseFloat(prompt("Ingresa el monto a depositar: "));
        if (montoInput > 0){
            saldo += montoInput;
            console.log(`Has depositado $${montoInput}. Saldo actual: $${saldo}`);
        break;
        }
    case "retirar":
        let montoOutput = parseFloat(prompt("Ingresa el monto a retirar: "));
        if (montoOutput > 0){
            saldo -= montoOutput;
            console.log(`Has retirado $${montoOutput}. Saldo actual: $${saldo}`);
        break;
        }
    case "ver saldo":
        console.log(`Saldo actual: $${saldo}`);	
        break;
    case "salir":
        continuar = false;
        break;
    default:
        console.log("Operación no reconocida");
}
}while(continuar);
//Fin.