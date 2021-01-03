


const numeros = document.getElementById("numeros");
const resultado = document.getElementById("resultado");

let a = parseInt(prompt("Introduzca el primer número."));
let b = parseInt(prompt("Introduzca el segundo número."));
let c = parseInt(prompt("Introduzca el tercer número."));

numeros.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}.`

if(a>b && a>c){
    if(b>c){
        console.log(`El orden de mayor a menor es: ${a}, ${b}, ${c}.`);
        resultado.textContent = `Los numeros ordenados son ${a}, ${b}, ${c}.`
    }else{
        console.log(`El orden de mayor a menor es: ${a}, ${c}, ${b}.`);
        resultado.textContent = `Los numeros ordenados son ${a}, ${c}, ${b}.`
    }
}else if(b>a && b>c){
    if(a>c){
        console.log(`El orden de mayor a menor es: ${b}, ${a}, ${c}.`);
        resultado.textContent = `Los numeros ordenados son ${b}, ${a}, ${c}.`
    }else{
        console.log(`El orden de mayor a menor es: ${b}, ${c}, ${a}.`);
        resultado.textContent = `Los numeros ordenados son ${b}, ${c}, ${a}.`
    }
}else if(c>a && c>b){
    if(a>b){
        console.log(`El orden de mayor a menor es: ${c}, ${a}, ${b}.`);
        resultado.textContent = `Los numeros ordenados son ${c}, ${a}, ${b}.`
    }else{
        console.log(`El orden de mayor a menor es: ${c}, ${b}, ${a}.`);
        resultado.textContent = `Los numeros ordenados son ${c}, ${b}, ${a}.`
    }
}