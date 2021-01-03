

const buttonImg = document.getElementById("button-img");
const buttonPdf = document.getElementById("button-pdf");

buttonImg.addEventListener("click", ()=>{
    fetch("HZD.jpg")
        .then(res=>res.blob())// objeto binario largo
        .then(img=>{
            document.getElementById("img").src = URL.createObjectURL(img)
        })
})

buttonPdf.addEventListener("click", ()=>{
    fetch("DemoPDF.pdf")
        .then(res=>res.blob())
        .then(pdf=>{
            document.getElementById("pdf").href = URL.createObjectURL(pdf)
        })
})
