//Conversion de binario a decimal
let bn = prompt("Ingresa el numero binario"); // Numero en binario
let bnar = bn.split(''); //areglo del numero binario
let e = bnar.length; // Longitud del num binario
let n = 0; // Posicion del digito
let d = 0; // Valor en decimal

while(n<e){
    let ud = parseInt(bnar[e - 1 - n]); 
    d = d + (ud*2**n)
    n++
}

console.log(d);
