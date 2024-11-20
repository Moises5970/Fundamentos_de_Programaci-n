// Imprime los primeros 10 términos de la serie Fibonacci.
// Variable de inicio.
let inicio = 2;

// Variable de los primeros 2 términos.
let fib = [0, 1];

// Inicio de la sentencia do-while.
do {
    // Aplicación de la fórmula de Fibonacci.
    fib[inicio] = fib[inicio - 1] + fib[inicio - 2];
    inicio++;
} while (inicio <= 10);

// Mostrar los términos resultantes.
console.log(fib);
// Fin.
