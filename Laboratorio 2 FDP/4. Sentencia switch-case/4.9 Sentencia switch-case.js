//Verifica el tipo de usuario (admin, editor, usuario).
//Varable para el nivel que será ingraesado.
let nivel = prompt("Ingresa tu nivel");

//Sentencia switch-case para saber que rol le corresponde al nivel ingresado.
switch(nivel){
    case "Nivel 1":
        console.log("La persona es un administrador");
        break;
    case "Nivel 2":
        console.log("La persona es un editor");
        break;
    case "Nivel 3":
        console.log("La persona es un usuario");
        break;
    //Si lo ingresado no es ninguna de las anteriores, se muestra la opción siguinete.
    default:
        console.log("Tipo de persaona desconocida");
        break;
}

//Fin.