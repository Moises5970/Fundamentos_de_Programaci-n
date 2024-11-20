//Realiza un programa que pida 5 números y los ordene de mayor a menor usando un ciclo for y if.
//Se pide que el usuario ingrese los números separados por comas.
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingrese un número: "));
    numeros.push(numero);
}
// Ordenar con for e if
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] < numeros[j]) {
            let temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

// Mostrar el resultado
console.log("Números ordenados de mayor a menor:", numeros);