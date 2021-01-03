const form = document.getElementById("form");
const keys = document.getElementById("keys");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

/*     const person = {
        name: "Dorian",
        age: 31,
        location: "Segovia"
    }

    sessionStorage.setItem("person", JSON.stringify(person)) */

    sessionStorage.setItem(form.key.value, form.value.value) //SI SE CIERRA NAVEGADOR SE PIERDE

    keys.innerHTML += `<option>${form.key.value}<option>`

    form.reset(); //Vaciar campos de form al activar evento
})

/* keys.addEventListener("change", ()=>{
    document.getElementById("infoValue").textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.clear(); //borra sesion storage
sessionStorage.removeItem("name"); */