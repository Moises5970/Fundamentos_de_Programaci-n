//Imprime la tabla de multiplicar del 8.
//Variable de inicio.
let num = 1;
//Variable de la tabla pedida.
let tabla=8;
//Sentencia do-while para imprimir la tabla.
do{
    let tab = tabla*num
    //Al imprimir la tabla se multiplica la tabla por el numero.
    console.log(`${tabla} x ${num} = ${tab}`);
    num++
}
while (num<=10);