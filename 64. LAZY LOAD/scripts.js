const images = document.getElementById("images")

const getImages = () =>{
    axios("https://picsum.photos/images&limit=5")
        .then(res=>{
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement("img")
                newImage.src = element.download_url
                fragment.append(newImage)
            });
            images.append(fragment)
        })
}

getImages()