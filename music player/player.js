let play=document.getElementById("play")
let song=document.getElementById("paigaam")
function TogglePlay(){
    if(song.paused){
        song.play();
    }
    else{
        song.pause();
    }
}