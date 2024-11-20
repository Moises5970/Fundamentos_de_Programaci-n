//Escribe un programa que determine si un número es primo utilizando un ciclo while. Luego, imprime todos los números primos entre 1 y el número dado.
let num = parseInt(prompt("Ingrese un número: "));
let esPrimo = true;
let inicio = 2;

//Sentencia while para determinar si un número es primo.
while (inicio <= Math.sqrt(num)) {
    if (num % inicio === 0) {
        esPrimo = false;
        break;
    }
    inicio++;
}

//Imprime si el número es primo o no.
if (esPrimo && num >= 1) {
    console.log(`${num} es primo`);
} else {
    console.log(`${num} no es primo`);
}

//Sentencia for para imprimir los números primos entre 1 y el número dado.
console.log(`Números primos entre 1 y ${num}:`);
let i = 1;

while (i <= num) {
    let esPrimo = true;
    let j = 2;

    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
        j++;
    }

    if (esPrimo && i > 1) {
        console.log(i);
    }

    i++;
}
//Fin.