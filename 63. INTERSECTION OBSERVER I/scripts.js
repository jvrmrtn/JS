const boxes = document.querySelectorAll(".box")

const cb = (entries) =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.id, "is intersecting.")
        }
    })
}

const opts = {
    //root:
    //rootMargin: '500px', MARGEN AÑADIDO A ELEMENTO PARA OBSERVAR
    threshold: 0.25, //PORCENTAJE DE ELEMENTO QUE SE OBSERVA
}

const observer = new IntersectionObserver(cb, opts)
boxes.forEach(box=>observer.observe(box))

