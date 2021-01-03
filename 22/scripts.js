/* const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(numbers);
console.log(...numbers); */


//Enviar elementos de un array a una funcion
/* const addNumbers = (a,b,c) =>{
    result = a+b+c;
    console.log(result);

}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd); */



//Añadir array a otro array
/* let users = ["javier", "david", "rosa", "juan"];
let newUsers = ["marta", "jaime"];

users.push(...newUsers);

console.log(users); */



//copiar arrays
/* let array1 = [1, 2, 3];
let array2 = [...array1];

console.log(array2); */



//CONCATENAR ARRAYS
/* let array1 = [1,2,3];
let arrray2 = [4,5,6];

let arrayConcat = [...array1, ...arrray2];

console.log(arrayConcat); */


//Enviar numero indefinido de argumentos a una funcion
/* const restParam = (...array) => {
    console.log(array);
}

restParam(1,2,3,4,5,5); */


//LIBRERIA MATH
/* const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(Math.max(numbers));
console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */


//ELIMINAR ELEMNETOS DUPLICADOS
/* const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(new Set(numbers));
console.log([...new Set(numbers)]); */