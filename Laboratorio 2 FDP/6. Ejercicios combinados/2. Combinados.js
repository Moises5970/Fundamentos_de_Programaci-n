//Crea un programa que calcule el total a pagar en un restaurante. Elige el tipo de cliente (normal, VIP,
//miembro) usando switch y aplica un descuento en base a eso.
let tipo = prompt("Ingrese el tipo de cliente (Normal, VIP, Miembro): ").toLowerCase(); // Convertir a minúsculas
let precio = parseFloat(prompt("Ingrese el precio del producto: ")); // Permitir decimales
let descuento = 0;
//Se crea un switch para determinar el tipo de cliente.
//Dependiendo del tipo de cliente se aplica un descuento.
//Se imprime el tipo de cliente, el precio y el descuento aplicado.
switch (tipo) {
    case "normal":
        console.log("Cliente Normal");
        console.log(precio);
        console.log("No hay descuento");
        break;
    case "vip":
        descuento = precio * 0.10;
        console.log("Cliente VIP");
        console.log("Descuento de 15%");
        console.log(`El precio después del descuento es de ${precio - descuento} pesos`);
        break;
    case "miembro":
        descuento = precio * 0.15;
        console.log("Cliente Miembro");
        console.log("Descuento de 20%");
        console.log(`El precio después del descuento es de ${precio - descuento} pesos`);
        break;
    default:
        console.log("Tipo de cliente no reconocido");
}

//Fin.

