//Verifica si una persona puede votar (mayor o igual a 18 años).
//Variable para la edad de la persona.
let edad = prompt("¿Cuál es su edad?");

//Condicional para saber si la perosona es maypr de edad o no para vorar.
//Si la edad es mayor o igual a 18 años, entonces entra en la primer opción.
//Si no, entonces entra en la segunda opción.
if (edad >= 18) {
    console.log("¡Puede votar!");
} else {
    console.log("No puede votar");
}

//Fin.