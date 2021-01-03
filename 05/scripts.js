let num1 = 1;
let num2 = 5;

/* CONDICION SIMPLE */

/* if(num<0){
    console.log(`${num} es menor que 0.`);
} */

/* CONDICION COMPUESTA */

/* if(num<0){
    console.log(`${num} es menor que 0.`);
}else{
    console.log(`${num} es mayor que 0.`);
} */

/* CONDICION MULTIPLE */

/* if(num>0){
    console.log(`${num} es mayor que 0.`);
}else if(num<0){
    console.log(`${num} es menor que 0.`);
}else{
    console.log(`${num} es 0.`);
} */

/* OPERADORES LOGICOS */

if(num1>0 && num2>0){
    console.log(`${num1} y ${num2} son mayores que 0.`)
}

if(num1>0 || num2>0){
    console.log(`${num1} o ${num2} son mayores que 0.`)
}

/* ANIDAR IF */

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0.`)
    }
}