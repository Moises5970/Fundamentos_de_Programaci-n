//Cuenta cuántos números entre 1 y 50 son divisibles por 5.
//Variable inicial.
let num = 1;
//Variable del contador.
let cont = 0;
//Sentencia while para contar los numeros pedidos.
while (num<=50){
    //Sentenci if, para encontrar los numeros divisibles entre 5.
    if(num % 5 === 0){
        console.log(num);
        //Incrementa el contador.
        cont++
    }
    //Incrementa el número inical.
    num++
}

console.log(`La cantidad de números que hay entre 1 y 50 divisibles entre 5 es = ${cont}`);
//Fin