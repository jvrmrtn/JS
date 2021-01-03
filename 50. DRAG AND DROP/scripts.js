const crest = document.getElementById("crest")
const dzone = document.getElementById("dzone")


//EVENTOS PARA ARRASTRAR OBJETOS

/* crest.addEventListener("dragstart", ()=>{
    console.log("drag start");
})

crest.addEventListener("drag", ()=>{
    console.log("drag");
})

crest.addEventListener("dragend", ()=>{
    console.log("drag end");
}) */


//EVENTOS PARA ZONA DE DESTINO

dzone.addEventListener("dragenter", ()=>{
    console.log("drag enter");
})

dzone.addEventListener("dragover", (e)=>{
    e.preventDefault()
    console.log("drag over");
})

dzone.addEventListener("drop", ()=>{
    console.log("drop");
})

dzone.addEventListener("dragleave", ()=>{
    console.log("drag leave");
})
