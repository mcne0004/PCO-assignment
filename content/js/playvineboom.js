function addEvent() {
    var a = document.getElementById("vineboom")
    a.addEventListener("click", play)
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}