let video = document.getElementById("video")

function adiantar(){
    video.currentTime += 15;
}
function retroceder(){
    video.currentTime -= 15;
}
function play(){
    video.play();
}
function pause(){
    video.pause();
}
function reiniciar(){
    video.currentTime = 0;
}
function velociade_maior(){
    video.playbackRate += 0.1;
}
function velociade_menor(){
    video.playbackRate -= 0.1;
}