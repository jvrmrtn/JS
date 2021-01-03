const video = document.getElementById("video")
const song = document.getElementById("song")

addEventListener("visibilitychange", (e)=>{
    /* console.log(document.visibilityState) */

    if(document.visibilityState === "visible"){
        console.log("PLAY")
        video.play()
    }else if(document.visibilityState === "hidden"){
        console.log("PAUSE")
        video.pause()
    }
})


//OPERADOR TERNARIO

addEventListener("visibilitychange", (e)=>{
    document.visibilityState === "visible" ? video.play() : video.pause()
})

addEventListener("visibilitychange", (e)=>{
    document.visibilityState === "visible" ? song.play() : song.pause()
})