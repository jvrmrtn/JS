const fileInput = document.getElementById("file")
const loadBar = document.getElementById("load-bar")
const progress = document.getElementById("progress")

//BARRA DE PROGRESO CON 2 ELEMENTOS HTML

/* fileInput.addEventListener("change", (e)=>{
    const file = e.target.files[0]
    console.log(e.target.files[0].name)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener("progress", (e)=>{
        console.log(e.loaded) /* cuanto lleva cargado del tamaño del archivo" */
        /* console.log(e.total) */ /*peso total del tamaño del archivo"
        console.log(e.loaded*100/e.total)
        progress.style.width = Number.parseInt(e.loaded*100/e.total) +"%"
    })
}) */


//BARRA DE PROGRESO CON 1 ELEMENTO HTML

const root = document.documentElement

fileInput.addEventListener("change", (e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener("progress", (e)=>{

        root.style.setProperty("--bar-width", Number.parseInt(e.loaded*100/e.total) +"%")
    })
})
