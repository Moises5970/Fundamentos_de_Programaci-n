//Encuentra el primer número divisible por 9 después de 50.
//Variable inicial.
let num = 50;
//Variable para el contador.
let cont = 0;
//Inicio de ls entencia while.
do{
    //Sentencia if, para encontrar los numero divisibles entre 9.
    if(num % 9 == 0){
        cont++
        //Sentencia if, para encontrar el pirmer numero divisible entre 9.
        if (cont == 1){
            console.log(`El primer número divisible por 9 después de 50 es = ${num}`);
            break;
        }
    }
    num++
}
while (num>=50);

//Fin.