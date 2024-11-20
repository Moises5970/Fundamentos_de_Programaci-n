//Imprime los primeros 10 términos de la serie Fibonacci.
//Variable de inicio.
let inicio = 2;
//Varaible de los primeros 2 terminos.
let fib = [0, 1];
//Inicio de la sentencia while.
while (inicio<=9){
    //Aplicación de la formula de fibonacci.
    fib[inicio] = fib[inicio - 1] + fib[inicio - 2];
    inicio++
}
//Mostrar los terminso resultantes
console.log(fib);
//Fin.
