//Desarrolla un programa que determine si un número ingresado es perfecto (un número es perfecto si esigual a la suma de sus divisores propios) usando un ciclo for.
 let num = parseInt(prompt("Ingrese un número: "));
 let esPerfecto = true;
 let suma = 0;
 //Sentencia forpara comprbar si un número es perfecto.
 for (let i = 1; i <= num/2; i++) {
     if (num % i === 0) {
        //Suma de los divisores propios.
        suma += i;
     }
}
//Imprime si el número es perfecto.
if (suma === num) { 
    console.log(`${num} es un número perfecto.`);
}

//Fin.