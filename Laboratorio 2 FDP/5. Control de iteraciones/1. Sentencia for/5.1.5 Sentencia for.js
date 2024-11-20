//Calcula el factorial de un número.
//Sentencia for para calcular el factorial de un número.
let numero = parseInt(prompt("Ingrese un número: "));
let factorial = 1;
for(let inicio = 1; inicio<=numero; inicio++){
    factorial *= inicio;
}
//Mostrar el resultado
 console.log(`El factorial de ${numero} es ${factorial}`)
//Fin.