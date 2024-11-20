// Realiza un programa que determine el signo zodiacal basado en el día y mes de nacimiento del usuario utilizando if-else anidados.
// Solicitar el día y mes de nacimiento al usuario
let dia = parseInt(prompt("Ingrese el día de nacimiento: "));
let mes = (prompt("Ingrese el mes de nacimiento: "));  // Se ingresa el nombre del mes como texto

if(mes=="marzo" && dia>=21 || mes=="abril" && dia<=20){
    console.log("Usted es Aries");
}
else if(mes=="abril" && dia>=21 || mes=="mayo" && dia<=21){
    console.log("Usted es Tauro");
}
else if(mes=="mayo" && dia>=22 || mes=="junio" && dia<=21){
    console.log("Usted es Géminis");
}
else if(mes=="junio" && dia>=22 || mes=="julio" && dia<=23){
    console.log("Usted es Cáncer");
}
else if(mes=="julio" && dia>=24 || mes=="agosto" && dia<=23){
    console.log("Usted es Leo");
}
else if(mes=="agosto" && dia>=24 || mes=="septiembre" && dia<=23){
    console.log("Usted es Virgo");
}
else if(mes=="septiembre" && dia>=24 || mes=="octubre" && dia<=23){
    console.log("Usted es Libra");
}
else if(mes=="octubre" && dia>=24 || mes=="noviembre" && dia<=22){
    console.log("Usted es Escorpio");
}
else if(mes=="noviembre" && dia>=23 || mes=="diciembre" && dia<=22){
    console.log("Usted es Sagitario");
}
else if(mes=="diciembre" && dia>=23 || mes=="enero" && dia<=20){
    console.log("Usted es Capricornio");
}
else{
    console.log("Usted no es un signo zodiacal");
}

//Fin.