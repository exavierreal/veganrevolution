var video = document.getElementById("myVideo");
var button = document.getElementById("playVideoBtn");

function toggleVideo() {
    if (video.paused || video.ended) {
        video.play();
        button.style.display = "none";
        video.style.display = "block";
    } else {
        video.pause();
        button.style.display = "block";
        video.style.display = "none";
    }
}

video.addEventListener("pause", function() {
  button.style.display = "block";
});

video.addEventListener("ended", function() {
  button.style.display = "block";
});