let num = 2;

switch(num){
    case 1:
        console.log(`Num tiene el valor 1.`);
        break;

    case 2:
        console.log(`Num tiene el valor 2.`);
        break;

    case 3:
        console.log(`Num tiene el valor 3.`);
        break;
    
    default:
        console.log(`Num no vale ni 1 ni 2 ni 3`);
}

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
    
    case 2:
    case 4:
    case 6:
        console.log(`${num} es par`);
        break;
}