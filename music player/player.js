let song = document.getElementById("audio");
let songs = [
    "songs/BAADSHAHI.mp3",
    "songs/DASS KUDIYE.mp3",
    "songs/Dildarian - Amrinder Gill.mp3",
    "songs/DOORIYAN.mp3",
    "songs/DUNIYA.mp3",
    "songs/PAIGAAM.mp3",
    "songs/PARDHAANI.mp3",
    "songs/QUEEN.mp3",
    "songs/SAMJHA.mp3",
    "songs/SEARCHING.mp3",
    "songs/WHY.mp3"
];

function TogglePlay() {
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}

function PlayRandom() {
    let randomIndex = Math.floor(Math.random() * songs.length);
    song.src = songs[randomIndex];
    song.play();
}

