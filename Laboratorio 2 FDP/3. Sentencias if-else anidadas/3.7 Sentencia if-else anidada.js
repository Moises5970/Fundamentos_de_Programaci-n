// Verifica si una letra es vocal o consonante, y si es mayúscula o minúscula.
// Variable para la letra ingresada por el usuario.
let letra = prompt("Ingresa una letra");

// Condicional para saber si la letra es vocal o consonante, y si es mayúscula o minúscula.
// Si la letra es vocal y mayúscula, entonces entra en la primera opción.
if (letra.match(/[AEIOU]/)) {
    console.log("La letra " + letra + " es vocal y mayúscula");
    // Si la letra es vocal y minúscula, entonces entra en la segunda opción.
} else if (letra.match(/[aeiou]/)) {
    console.log("La letra " + letra + " es vocal y minúscula");
    // Si la letra es consonante y mayúscula, entonces entra en la tercera opción.
} else if (letra.match(/[BCDFGHJKLMNPQRSTVWXYZ]/)) {
    console.log("La letra " + letra + " es consonante y mayúscula");
    // Si la letra es consonante y minúscula, entonces entra en la cuarta opción.
} else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
    console.log("La letra " + letra + " es consonante y minúscula");
}

// Fin.
