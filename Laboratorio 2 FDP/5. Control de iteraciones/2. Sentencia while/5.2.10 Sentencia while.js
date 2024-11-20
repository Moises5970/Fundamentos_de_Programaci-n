//Encuentra el primer número divisible por 7 después de 100.
//Variable inicial.
let num = 100;
//Variable para el contador.
let cont = 0;
//Inicio de ls entencia while.
while (num>=100){
    //Sentencia if, para encontrar los numero divisibles entre 7.
    if(num % 7 == 0){
        cont++
        //Sentencia if, para encontrar el pirmer numero divisible entre 7.
        if (cont == 1){
            console.log(`El primer número divisible entre 7 después de 100 es = ${num}`);
            break;
        }
    }
    num++
}