const button = document.getElementById("button")
const geolocation = navigator.geolocation



const getPosition = (position) =>{
    console.log(position)
    console.log(`latitud: ${position.coords.latitude}`)
    console.log(`longitud: ${position.coords.longitude}`)
}

const error = (error) =>{
    console.log(error)
}

const options = {
    enableHighAccuracy: true, //activar recursos para mejorarlo
    timeout: 5000,  //tiempo de respuesta en milisegundos
    maximunAge: 0 //Para que no nos devuelva info en cache
}

button.addEventListener("click", ()=>{
    geolocation.getCurrentPosition(getPosition, error, options)
})