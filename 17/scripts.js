const person = {
    name: "Juan",
    age: 26,
    sons: ["Laura", "Diego"]
}

console.log(person);

console.log(person.name);
console.log(person["name"]);

for(const key in person){ //imprime keys (name, age, sons)
    console.log(key);
}

for(const key in person){ //imprime valores (juan, 26, [Laura, Diego])
    console.log(person[key]);
}

for(const son in person.sons){ //imprime indice de array sons
    console.log(son);
}

for(const son of person.sons){ //imprime valores de array sons
    console.log(son);
}

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons}.`);

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(", ")}.`);