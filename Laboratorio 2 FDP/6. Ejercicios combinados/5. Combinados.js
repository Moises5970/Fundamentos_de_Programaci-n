//Escribe un programa que permita ingresar una serie de calificaciones y determine la cantidad de aprobados y reprobados usando while y if-else.
// Inicializamos variables
let contAprobados = 0;
let contReprobados = 0;
let continuar = true;
//Sentencia while para repetir el proceso hasta que el usuario decida terminar de ingresar calificaciones.
while (continuar){
    let cal = parseFloat(prompt("Ingrese una serie de calificaciones: "));
    if (cal<0){
        continuar = false;
        break;
    }
    else{
        if(cal>=70 && cal<=100){
            contAprobados++
            console.log("Aprobado");
            console.log(cal);
        }else if (cal<70){
            contReprobados++
            console.log("Reprobado");
            console.log(cal);
        }
    }
}
//Mostrar los resultados.
console.log(`Aprobados: ${contAprobados}`);
console.log(`Reprobados: ${contReprobados}`);
 //Fin.
