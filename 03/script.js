let cadena = "Hola Mundo";

console.log(cadena.length);

console.log(cadena.toUpperCase());

console.log(cadena.toLowerCase());

console.log(cadena.indexOf("H"));

console.log(cadena.replace("Mundo", "Sierra Tango"));

console.log(cadena.substring(1,4)); 

console.log(cadena.slice(-8, 6));


let cadena2 = "   Hola Youtube, estamos trabajando con cadenas      ";
console.log(cadena2);
console.log(cadena2.trim());

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("O"));
console.log(cadena.endsWith("a", 4));

console.log(cadena.includes("x"));
console.log(cadena.includes("o"));
console.log(cadena.includes("a",4));

console.log(cadena.repeat(3));

/* TEMPLATE STRINGS */

let nombre = "Jose";
let apellido = "Ramirez";
let edad = 31;

console.log("Hola "+ nombre +" "+ apellido +". Tienes "+ edad +" años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
