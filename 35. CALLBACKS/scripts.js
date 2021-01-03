
/* const getUser = (id, cb) =>{
    const user = {
        name: "Javier",
        id:id
    }

    cb(null, user);
}

getUser(1, (err, user) =>{
    if(err){
        return console.log(err);
    }else{
        console.log(`User Name is ${user.name}`);
    }
}); */

/* const saludar = (nombre) =>{
    alert(`Hola ${nombre}`)
}

const IntroducirNombre = (cb) =>{
    let nombre = prompt("Introduce tu nombre:");
    cb(nombre);
}


IntroducirNombre(saludar); */

/* function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar); */


const doHomework = (subj, cb) =>{
    alert(`Starting my ${subj} homework.`);
    cb();
}

const finishHomework = () =>{
    alert("Finish my homework")
}

doHomework("sex", finishHomework);
