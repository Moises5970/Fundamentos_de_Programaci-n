//Implementa un programa que imprima los múltiplos de 3, 5 y 7, usando un for. Si un número es múltiplo de varios, indícalo.
// Definimos el rango de números
let rango = parseInt(prompt("Ingrese el rango de números: "));
for (let i = 1; i <= rango; i++) {
    let esMultiplo = false; 
    let mensaje = `El número ${i} es múltiplo de: `;

    // Verificamos si es múltiplo de 3
    if (i % 3 === 0) {
        mensaje += "3 ";
        esMultiplo = true;
    }
    
    // Verificamos si es múltiplo de 5
    if (i % 5 === 0) {
        mensaje += "5 ";
        esMultiplo = true;
    }

    // Verificamos si es múltiplo de 7
    if (i % 7 === 0) {
        mensaje += "7 ";
        esMultiplo = true;
    }
    if (esMultiplo) {
        console.log(mensaje); // Muestra todos los múltiplos juntos
    }
}
//Fin.