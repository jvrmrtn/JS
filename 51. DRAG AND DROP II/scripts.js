const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks")

pendingTasks.addEventListener("dragstart", (e)=>{

    //dataTransfer - objeto que contiene toda la info
        //setData: establece la info que queremos compartir
        //getData: establece la info que queremos obtener

        e.dataTransfer.setData("text/plain", e.target.id)
        /* console.log(e.dataTransfer.getData("text")) */
})

pendingTasks.addEventListener("drag", (e)=>{
    e.target.classList.add("active");
})

pendingTasks.addEventListener("dragend", (e)=>{
    e.target.classList.remove("active");
})

finishedTasks.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
//SI NO HAY dragover NO FUNCIONA EL drop


finishedTasks.addEventListener("drop", (e)=>{
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData("text"))
    /* console.log(element.id) */
    finishedTasks.appendChild(pendingTasks.removeChild(element))
    element.classList.remove("active");
})




finishedTasks.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("text/plain", e.target.id)
})

finishedTasks.addEventListener("dragend", (e)=>{
    e.target.classList.remove("active");
})

finishedTasks.addEventListener("drag", (e)=>{
    e.target.classList.add("active");
})

pendingTasks.addEventListener("dragover", (e)=>{
    e.preventDefault();
})

pendingTasks.addEventListener("drop", (e)=>{
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData("text"))
    /* console.log(element.id) */
    pendingTasks.appendChild(finishedTasks.removeChild(element))
    element.classList.remove("active");
})