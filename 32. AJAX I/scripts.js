const title = document.getElementById("title");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{

    //EVITAR TRAER LIBRERIA JQUERY
    let xhr;
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    xhr.addEventListener("load", (data)=>{
        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById("list");
        for(const userInfo of dataJSON){
            const listItem = document.createElement("li");
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem);
        }
    })
    
    xhr.send()

});