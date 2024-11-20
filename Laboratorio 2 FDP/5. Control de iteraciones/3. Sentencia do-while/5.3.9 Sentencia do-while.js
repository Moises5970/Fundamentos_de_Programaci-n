//Cuenta cuántos números entre 1 y 30 son divisibles por 3.
//Variable inicial.
let num = 1;
//Variable del contador.
let cont = 0;
//Sentencia do-while para contar los numeros pedidos.
do{
    //Sentencia if, para encontrar los numeros divisibles entre 3.
    if(num % 3 === 0){
        console.log(num);
        //Incrementa el contador.
        cont++
    }
    //Incrementa el número inicial.
    num++
}
while (num<=30);

console.log(`La cantidad de números que hay entre 1 y 30 divisibles entre 3 es = ${cont}`);
//Fin.