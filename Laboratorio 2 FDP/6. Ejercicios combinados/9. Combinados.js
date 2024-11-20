//Crea un programa que solicite una contraseña al usuario y permita tres intentos. Si falla, muestra un mensaje de bloqueo, usando do-while.
let contraseñaCorrecta = prompt("Ingresa una contraseña"); // Define la contraseña correcta
let intentos = 0; // Inicializa el contador de intentos.
let bloqueado = false; // Inicializa el estado de bloqueo.

do{
    // Solicita la contraseña del usuario.
    let contraseña = prompt("Ingresa la contraseña");{
    if (contraseña === contraseñaCorrecta) {
        console.log("Bienvenido");
        break; // Salir del bucle
    } else {
        // Incrementar el contador de intentos.
        intentos++;
        alert(`Contrseña incorrecta. Intentos restantes: ${3-intentos}`);
    }}
    if (intentos>=3){
        console.log("Bloqueado");
        bloqueado = true;
    }
}
while(intentos<3); // Hacer que el bucle se repita hasta que se cumplan los 3 intentos.
