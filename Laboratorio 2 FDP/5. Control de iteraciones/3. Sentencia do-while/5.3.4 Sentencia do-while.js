//Calcula la factorial de un número.
let num = parseInt(prompt("Ingresa un número"));
let num2 = num;
let fact = 1;
//Sentencia do-while para calcular la factorial del número.
do{
    fact*=num;
    num--;
}
while (num>=1);
//Mostrar el resultado
console.log(`La factorial de ${num2} es ${fact}`)
//Fin.
