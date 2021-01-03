let num = 2;

/* SABER SI UN NUMERO ES PAR O IMPAR */

/* OPERADOR TERNARIO */

(num % 2 == 0) ? console.log(`${num} es par.`) : console.log(`${num} es impar.`);

/* OPERADOR TERNARIO VARIAS SENTENCIAS */

(num % 2 == 0) ? 
    (console.log(`${num} es par.`),
    console.log(`Asique no es impar.`))
    : 
    (console.log(`${num} es impar.`),
    console.log(`Asique no es par.`));

/* IF */

if(num % 2 == 0){
    console.log(`${num} es par.`);
}else{
    console.log(`${num} es impar.`);
}