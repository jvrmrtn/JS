const button = document.getElementById("button");

const list = document.getElementById("list");
const fragment = document.createDocumentFragment();


button.addEventListener("click", () =>{

    //COMPROBAR SI FETCH FUNCIONA EN EL NAVEGADOR
    /* if(window.fetch != undefined) console.log("fetch ok")
    else console.log("fetch no ok") */

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res=>res.json())
        /* .then(res=> console.log(res)) */

        /* .then(res=>imprimirIdNombre(res)) */
        .then(res=>printUsername(res))

})

const imprimirIdNombre = (res) =>{
    for(const userInfo of res){
        const itemList = document.createElement("li");
        itemList.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.append(itemList);
    }
    list.append(fragment);
}

const printUsername = (res) =>{
    for(const userInfo of res){
        const itemList = document.createElement("li");
        itemList.textContent = `${userInfo.username}`;
        fragment.append(itemList);
    }
    list.append(fragment);
}