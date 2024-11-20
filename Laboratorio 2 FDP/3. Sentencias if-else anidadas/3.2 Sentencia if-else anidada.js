//Verifica si una persona puede votar, conducir o ambas.
//Variable para la edad de la persona.
let edad = prompt("¿Cuál es su edad?");

//Condicional para saber si la persona es mayor de edad o no para votar.
//Si la edad es mayor o igual a 18 años, entonces entra en la primer opción.
//Si no, entonces entra en la segunda opción.
if (edad >= 18) {
    console.log("La persona puede votar y conducir");
}else if (edad >= 16) {
    console.log("La persona puede conducir");
} else if (edad < 16) {
    console.log("La persona no puede votar ni conducir");
}   

//Fin.