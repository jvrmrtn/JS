const title = document.getElementById("title");
const button = document.getElementById("button");
const list = document.getElementById("list");

/* button.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res=>res.json())
    .then(res=>{
        const fragment = document.createDocumentFragment();

        for(const userInfo of res){
            const listItem = document.createElement("li");
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
    list.appendChild(fragment);
    })
}) */

button.addEventListener("click", () => {
    axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            title: "A new Post",
            body: "Texto de relleno raro por probar",
            userId: 1
        }
    }).then(res=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err)
    })
})