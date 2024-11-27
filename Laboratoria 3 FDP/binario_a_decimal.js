//JOSÉ MOISÉS MARTÍNEZ HERNÁNDEZ
//Conversion de binario a decimal
let bn = prompt("Ingresa el numero binario"); // Numero en binario
let bnar = bn.split(''); //areglo del numero binario
let e = bnar.length; // Longitud del num binario
let n = 0; // Posicion del digito
let d = 0; // Valor en decimal

//Condicion para saber si lo ingresado por el usuario es valido.
//se busca si el arreglo contiene los digitos 1 o 0 que son los validos.
if (bnar.some(digito => digito !== '0' && digito !== '1')){
    //si no es un binario, se manda un mesaje que se ingrese un numero valido.
    console.log("Ingresa un número binario válido (solo 0 y 1).");
}else{
    //mientras la posicion es menor a la longitud del array
    while(n<e){
        //se recorre cada digito de derecha a izquierda
        let ud = parseInt(bnar[e - 1 - n]);
        //al ultimo digito se multiplica por 2 a la posicion
        d = d + (ud*2**n)
        //se incrementa la posicion del digito
        n++
    }
    //se muestra el resultado
    console.log(`El valor del binario en decimal es: ${d}`);
}

//Fin
