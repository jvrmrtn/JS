/* let word = "Hola Mundo";
console.log(Array.from(word)); */

/* const letters = ["b", "z", "x", "a"];
console.log(letters);
console.log(letters.sort());

const numbers = [1,8,3,300,100];
console.log(numbers.sort());
//sort compara parejas(1,8/8,3/3,300/...)
//a es el primer numero de la pareja, b es el segundo
//(a,b)=>a-b  ==  1-8=-7  ==  a<b == 1,8
//                8-3= 5  ==  a>b == 3,8
//y asi sucesivamente hasta ordenar todos los numeros.
//
//(a,b) => b-a  ==  ordenar de mayor a menor.
//
console.log(numbers.sort((a,b)=>a-b)); */

/* const numbers = [12,25,43,67,98];
numbers.forEach((a,i)=>console.log(`El numero ${a} está en la posicion ${i}.`)); */

/* const words = ["Hola", "Adios", "Buenas", "Venga"];
console.log(words.some(word => word.length>5));
console.log(words.every(word => word.length>5)); */

/* const numbers = [12,25,43,67,98];
const numbers2 = numbers.map((number)=>number*2);
console.log(numbers2); */

/* const numbers = [12,25,43,67,98];
const numbers2 = numbers.filter((number)=>number>50);
console.log(numbers2); */

/* const numbers = [2,10,12,25];
console.log(numbers.reduce((a,b)=>a+b)); */