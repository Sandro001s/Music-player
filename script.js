let progress = document.getElementById("progress");
let song = document.getElementById("song");
let strIcons = document.getElementById("ctrIcons");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(strIcons.classList.contains("fa-pause")){
        song.pause();
        strIcons.classList.remove("fa-pause");
        strIcons.classList.add("fa-play");
    }else{
        song.play()
        strIcons.classList.add("fa-pause");
        strIcons.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}
