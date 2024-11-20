//Calcula el factorial de un número.
//Variable del nuúmero a procesar.
let num = parseInt(prompt("Ingresa un número"))
let num2 = num;
let fact = 1
//Sentencia while para calcuar el factorial del número.
while (num2>=1){
    fact*=num2
    num2-- 
}
//Mostrar el resultado
 console.log(`La factorial de ${num} es ${fact}`)
//Fin.