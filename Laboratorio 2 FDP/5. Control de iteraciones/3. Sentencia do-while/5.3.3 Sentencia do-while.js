//Imprime los números impares entre 1 y 20.
//Variable de inicio.
let num = 1;
//Sentencia do-while con la condición que el limite sea menor o igual a 20.
do{
    //condicional if para solo imprimr los números impares.
    if (num % 2 == 1){
        console.log(num);
    }
    //Incrementa el numero.
    num++;
}
while (num<=20);

//Fin.