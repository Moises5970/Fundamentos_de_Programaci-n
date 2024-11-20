//Imprime los primeros 10 términos de la serie Fibonacci.
//Variable de los dos primeros términos de la serie Fibonacci.
let fib = [0, 1];  
// Inicializa la secuencia con los dos primeros términos
for (let inicio = 2; inicio <= 10; inicio++) {
    fib[inicio] = fib[inicio - 1] + fib[inicio - 2];  // Cada término es la suma de los dos anteriores
}
console.log(fib);

//Fin.