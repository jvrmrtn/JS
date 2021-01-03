const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    const newPost = {
        title: "A new post",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        userId: 1
    }


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    })
        .then(res=>res.json())
        .then(res=>console.log(res))

/*  console.log(newPost);
    console.log(JSON.stringify(newPost)); //transformar JSON a string para poder mandar datos de un objeto. */

})