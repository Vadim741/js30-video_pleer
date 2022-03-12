//Плеер-------------------------------------------------------------------//
document.querySelector('.volume').oninput = videoVolume;

const video = document.querySelector('.viewer'),
    playBtn = document.querySelector('.play-btn'),
    play = document.querySelector('.play'),
    progress = document.querySelector('.progress'),
    controls = document.querySelector('.controls__video'),
    volume = document.querySelector('.volume'),
    volumeIcon = document.querySelector('.volume-icon')
    



video.onclick = toggleVideoStatus;
// Play & Pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        playBtn.classList.add("active");
        play.classList.add("pause");
        controls.classList.add("controls");
        video.classList.remove("full");
    } else {
        video.pause()
        playBtn.classList.remove("active");
        play.classList.remove("pause");
        controls.classList.remove("controls");
        video.classList.add("full");
    }
}
playBtn.addEventListener('click', toggleVideoStatus)
play.addEventListener('click', toggleVideoStatus)

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100
}
video.addEventListener('timeupdate', updateProgress)

//Set progress
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}
progress.addEventListener('change', setProgress)


function videoVolume() {
    let v = this.value;
    console.log(v);
    video.volume = v / 100;
}


function volumeMut() {
    if (video.volume>0) {
        video.volume = 0;
        volumeIcon.classList.add("mut");
    } else if (video.volume === 0){
        video.volume = 0.5;
        volumeIcon.classList.remove("mut");
    }
}

volumeIcon.addEventListener('click', volumeMut)
