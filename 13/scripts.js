/* let names = ["Paco", "Jose", "Maria", "Juan"]; */

/* for(let name of names){
    console.log(name);
}

for(let name of names){
    console.log(names.indexOf(name));
}

for(let index in names){
    console.log(index);
}

for(let index in names){
    console.log(names[index]);
} */

/* 2 iguales == comprueban valor// 3 iguales === comprueban valor y tipo */

let names = [0, 1, 2, 3];

for(let name of names){
    if(name=="2"){
        break;
    }
    console.log(name);
}

/* 2 y "2" con 3 iguales === no rompe bucle al ser distinto tipo (entero/string) */

for(let name of names){
    if(name==="2"){
        break;
    }
    console.log(name);
}

/* for(let name of names){
    if(name==="Maria"){
        break;
    }
    console.log(name);
}

for(let name of names){
    if(name=="Maria"){
        break;
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==2){
        continue;
    }
    console.log(index);
} */