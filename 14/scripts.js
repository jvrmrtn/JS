/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje
"Hola ____, tienes ____ años y el año que viene tendrás ____ años" 
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings */

/* let name = prompt("Introduce tu nombre:");
let age =  parseInt(prompt("Introduce tu edad:"));

console.log(`Hola ${name}, tienes ${age} años y
             el año que viene tendrás ${age+1} años.`); */

/* 2 - Escribe un programa que pueda calcular el área de 3 figuras 
geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área, 
después solicita los datos que necesites para calcularlo.
triángulo = b * h/2 
rectángulo = b * h 
círculo = π * r2 (pi * radio al cuadrado) */

/* do{
    figura = prompt("Introduce forma geometrica:").toLowerCase();

    if(figura == "triangulo" || figura == "triángulo"){
        base = parseInt(prompt("Introduce la base del triángulo:"));
        altura = parseInt(prompt("Introduce la altura del triángulo:"));
        areaTriangulo = base*(altura/2);
        console.log(`El área de tu ${figura} es ${areaTriangulo}.`);

    }else if(figura == "rectangulo" || figura == "rectángulo"){
        base = prompt("Introduce la base del rectángulo:"); //PRUEBA DATOS FLOAT.
        altura = prompt("Introduce la altura del rectángulo:");
        areaRectangulo = base*altura;
        console.log(`El área de tu ${figura} es ${areaRectangulo}.`);

    }else if(figura == "circulo" || figura == "círculo"){
        radio = parseInt(prompt("Introduce el radio del círculo:"));
        areaCirculo = Math.PI*Math.pow(radio,2);
        console.log(`El área de tu ${figura} es ${areaCirculo}.`);
    }

}while(figura !== "triangulo" &&  figura !== "triángulo" &&
       figura !== "rectangulo" && figura !== "rectángulo" &&
       figura !== "circulo" && figura !== "círculo"); */


/* 3 - Solicita un número e imprime todos los números pares e impares 
desde 1 hasta ese número con el mensaje "es par" o "es impar" 
si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - 
es impar 4 - es par 5 - es impar */

/* let numero = parseInt(prompt("Introduzca un numero:"));

for(let i=1; i<=numero; i++){
    if(i%2==0){
        console.log(`${i} - es par.`);
    }else{
        console.log(`${i} - es impar.`);
    }
} */

/* 4 - Escribe un programa que pida un número entero mayor que 1 y que 
escriba si el número primo o no. Un número primo es aquel que solo es 
divisible por sí mismo y la unidad */

/* let numero = parseInt(prompt("Introduzca un número entero mayor que 1:"));

    for(let i=1; i<numero; i++){
        let resto = numero%i;

        if(resto == 0 && i != 1 && numero != 2 ){
            console.log(`El ${numero} no es primo.`);
            break;
        }else if(i != 1 || numero == 2){
            console.log(`El ${numero} es primo.`);
            break;
        }
    
    }  */

/*     let numero = parseInt(prompt("Introduzca un número entero mayor que 1:"));
    let divisores = 0;

    if(numero === 1){
        console.log("El número no es válido.")
    }else{
        for(let i=1; i<numero;i++){
            if(numero%2==0){
                console.log(`El numero ${numero} no es primo.`);
                divisores++;
                break;
            }
        }
    }

    if(divisores==0){
        console.log(`El numero ${numero} es primo.`);
    } */

/* 5 - Escriba un programa que pida un número entero mayor que cero y 
calcule su factorial. El factorial es el resultado de multiplicar ese 
número por sus anteriores hasta la unidad.
!5 = 5*4*3*2*1 = 120 */

/* let number = parseInt(prompt("Introduce un numero entero mayor que 0:"));
let numberArray = [];
let resultado = number;

for(let i = 0; i<number; i++){ //guardar factoriales de un numero en array.
    let factorial = number-i;
    numberArray[i] = factorial;
}

for(let i = 1; i<numberArray.length; i++){ //recorre array, multiplica sus valores y los almacena en resultado.
    resultado = resultado * numberArray[i]; //i=1 en condicion para evitar que el numero de multiplique por si mismo.
}

console.log(`El factorial de ${number} es ${resultado}.`); */



/* let num = parseInt(prompt("introduce un numero:"));
let resultado = 1;

for(let i = num; i > 0; i--){
    resultado *= i;
}

console.log(`El factorial de ${num} es ${resultado}.`) */

/* 6 - Escribe un programa que permita ir introduciendo una serie 
indeterminada de números mientras su suma no supere 50. 
Cuando esto ocurra, se debe mostrar el total acumulado y el contador de 
cuantos números se han introducido */

/* let number;
let suma = 0;
let limite = 50;
let contador = 0;

do{
    number = parseInt(prompt("Introduzca un número a sumar:"));
    suma = suma + number;
    //suma+= parseInt(prompt("Intriduce un numero:"));
    contador += 1;
    //contador++;

}while(suma<limite);

console.log(`Has sumado ${contador} números. La suma asciende a ${suma}.`); */


/* 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará 
pares y el tercero impares, ambos estarán vacíos. 
Después multiplica cada uno de los números del primer array 
por un número aleatorio entre 1 y 10, si el resultado es par guarda 
ese número en el array de pares y si es impar en el array de impares.
Muestra por consola: -la multiplicación que se produce junto con su 
resultado con el formato 2 x 3 = 6 -el array de pares e impares */

/* let numerosArray = [5, 10, 15, 20, 25];
let paresArray = [];
let imparesArray = [];
let numero = 0;
let variablePar = 0;
let variableImpar = 0;
let aleatorio = 0;

for(let i=0; i<numerosArray.length; i++){

    aleatorio = Math.round(Math.random()*(10-1)+1); //guardamos numero random entre 10-1
    numero = numerosArray[i]*aleatorio; // resultado de la multiplicacion
    
    if(numero%2 == 0){ //si el numero es par
        paresArray[variablePar] = numero; //guardamos resultado en array
        //paresArray.push(numero);
        variablePar += 1;
        console.log(`${numerosArray[i]} x ${aleatorio} = ${numero}. El Array de pares = ${paresArray}.`);

    }else{ //si el numero es impar
        imparesArray[variableImpar] = numero;
        variableImpar += 1;
        console.log(`${numerosArray[i]} x ${aleatorio} = ${numero}. El Array de impares = ${imparesArray}.`);
    }
} */


/* 8 - Dado un array de letras, 
solicita un número de DNI y calcula que letra le corresponde. 
El número no puede ser negativo ni tener más de 8 dígitos. 
La posición de la letra es el resultado del módulo del número introducido 
entre 23 */


/* const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDni = 0;

do{
    numeroDni = prompt("Introduce tu dni:");

    let posicionLetra = numeroDni%23;
    console.log(`La letra de tu DNI es: ${letras[posicionLetra]}.`);

}while(numeroDni.length > 8); */


/* 9 - Solicitar al usuario una palabra y mostrar por consola el número de 
consonantes, vocales y longitud de la palabra. */

let palabra = prompt("introduce una palabra:").toLowerCase();
let arrayCons = [];
let arrayVocs = [];
let indiceVocs = 0;
let indiceCons = 0;
let letra = "";


//for(let letra of palabra){
for(let i=0; i<palabra.length; i++){
    letra = palabra.substring(i,i+1); //extrae letra por letra la palabra.

    if(letra === "a" || letra === "á" ||
       letra === "e" || letra === "é" ||
       letra === "i" || letra === "í" ||
       letra === "o" || letra === "ó" ||
       letra === "u" || letra === "ú"){
        //vocales++;
        arrayVocs[indiceVocs] = letra;
        indiceVocs +=1;
    }else{
        //consonantes++;
        arrayCons[indiceCons] = letra;
        indiceCons +=1;
    }
}

console.log(`Palabra introducida: ${palabra}.`);
console.log(`Número de consonantes: ${arrayCons.length}.`);
console.log(`Número de vocales: ${arrayVocs.length}.`);
console.log(`Número de caracteres: ${palabra.length}.`);


/* 10 - Dado un array que contiene 
["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color 
introducido por el usuario a través de un prompt se encuentra dentro 
del array o no. */

/* let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
let color = prompt("Introduce un color:").toLowerCase();
let contador = 0; */

//if(colores.indexOf(color) !== -1){
//  console.log("Tu color se encuentra en el array.");
//}else{
//  console.log("Tu color no se encuentra en el array.");
//}

/* for(let i=0; i<colores.length; i++){
    if(color == colores[i]){
        console.log(`El color ${color} se encuentra en el array.`)

    }else{
        contador += 1;
        if(contador == colores.length){
            console.log(`El color ${color} no se encuentra en el array.`)
        }
    }
} */