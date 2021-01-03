/* const getName = () =>{
    return new Promise((resolve, reject)=>{
        resolve("JAVIER")
    })
}

getName().then(name=>console.log(name)) */


/* const getName = async () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Javier")
        }, 1500)
    })
}

const sayHello = async () =>{
    const name = await getName()
    return `Hello ${name}.`
}

sayHello().then(res=>console.log(res)) */

const users = [
    {
        id:1,
        name: "Dorian"
    },
    {
        id:2,
        name: "Juan"
    },
    {
        id:3,
        name: "Laura"
    },
];

const emails = [
    {
        id:1,
        email: "dorian@gmail.com"
    },
    {
        id:2,
        email: "juan@gmail.com"
    }
];


const getUser = async (id) => {
    const user = users.find(user=> user.id == id)
    if(!user) throw new Error(`No existe usuario con ese id.`)
    else return user
}

const getEmail = async (user) => {
    const email = emails.find(email=> email.id == user.id)
    if(!email) throw new Error(`El usuario no tiene email.`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async (id) => {
    try{
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    }catch(error){
        console.log(error)
    }
}

getInfo(2).then(res=>console.log(res))

