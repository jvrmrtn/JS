const permissions = document.getElementById("permissions")

permissions.addEventListener("click", ()=>{
    Notification.requestPermission()

    if(Notification.permission !== "granted"){
        getPermissions()
    }else{
        notify()
    }
})

const getPermissions = ()=>{
    Notification.requestPermission()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

const notify = () =>{
    const options = {
        body: "Esto es el texto de la notificacion.",
        icon: "favicon.png",
        data: "datos extra que no se muestran pero se mandan",
        tag: "etiquetas"
    }

    const notification = new Notification("TULO DE NOTIFICACION", options)

    notification.addEventListener("close", ()=> console.log("close"))
    notification.addEventListener("show", ()=> console.log("show"))
}