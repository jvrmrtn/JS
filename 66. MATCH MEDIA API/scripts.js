//constante matchMedia con media query igual que en css
const mql = matchMedia("(min-width:400px) and (orientation: landscape)")

//funcion que colorea el fondon segun "mql"
const applyMatchMedia = (mql) =>{
    mql.matches ?
        document.body.style.backgroundColor = "red"
        :
        document.body.style.backgroundColor = "blue"
}

//evento de escucha al redimensionar fondo
addEventListener("resize", ()=>{
    applyMatchMedia(mql)
})

//cargar la funcion con carga de la pagina
addEventListener("DOMContentLoaded", ()=>{  
    applyMatchMedia(mql)
})

console.log(mql)
