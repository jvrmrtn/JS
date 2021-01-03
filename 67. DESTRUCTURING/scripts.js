const person  = {
    name: "Javier",
    age: 31,
    email: "javier@gmail.com"
}

//FORMA TRADICIONAL
/* const name = person.name
const age = person.age
const email = person.email
console.log(name, age, email) */

//DESTRUCTURING
const {name, age, email} = person
console.log(name, age, email)

const {name: nombre, age: edad, email: correo} = person
console.log(nombre, edad, correo)


//DESTRUCTURING EN ARRAYS
const numbers = [1, 2, 3, 4]

const [primeraPosicion] = numbers

const [a, b, terceraPosicion] = numbers

console.log(primeraPosicion)
console.log(terceraPosicion)

const printPerson = (person) =>{
    console.log(person)
}

printPerson(person)

const printPersonDestructuring = ({name}) =>{
    console.log(name)
}

printPersonDestructuring(person)


//DESTRUCTURING EN AXIOS

const getUser = async () =>{
    const{data: users} = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(users)
}

getUser()