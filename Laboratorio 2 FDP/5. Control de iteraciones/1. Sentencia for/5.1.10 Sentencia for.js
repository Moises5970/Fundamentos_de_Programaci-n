//Cuenta cuántos números entre 1 y 100 son divisibles entre 3.
//Variable que llevara el conteo de los números divisibles entre 3.
let contador = 0;
//Sentencia for para imprimir los números entre 1 y 100 que son divisibles entre 3.
for (let inicio = 1; inicio<=100; inicio++){
    if (inicio % 3 === 0){
        console.log(inicio);
        //Incrementa el contador.
        contador++;
    }
}

console.log(`La cantidad de números divisibles entre 3 que hay del 1 al 100 es: ${contador}`);

//Fin.
