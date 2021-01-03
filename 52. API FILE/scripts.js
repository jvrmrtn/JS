const fileInput = document.getElementById("file");
const img = document.getElementById("img");
const text = document.getElementById("text");

/* fileInput.addEventListener("change", (e)=>{
    const file = e.target.files[0] //obtenemos informacion pero no contenido

    const fileReader = new FileReader(); //OBTENEMOS CONTENIDO (ARCHIVOS DE TEXTO)
    fileReader.readAsText(file)
    fileReader.addEventListener("load", (e)=>{
        console.log(e.target.result); 
        text.textContent = e.target.result
    })

}) */

/* fileInput.addEventListener("change", (e)=>{
    const file = e.target.files[0] //obtenemos informacion pero no contenido

    const fileReader = new FileReader(); //OBTENEMOS CONTENIDO (ARCHIVOS DE TEXTO)
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("load", (e)=>{
        console.log(e.target.result);
        img.setAttribute("src", e.target.result);
    })

}) */


//MUESTRA MULTIPLE DE SUBIDA DE IMAGENES

const images = document.getElementById("images");

fileInput.addEventListener("change", (e)=>{
    const files = e.target.files 
    const fragment = document.createDocumentFragment();

    for(const file of files){
        const img = document.createElement("img")
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.addEventListener("load", (e)=>{
            img.setAttribute("src", e.target.result);
        })
        fragment.appendChild(img);
    }
    images.appendChild(fragment)
})