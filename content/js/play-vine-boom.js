function addEvent() {
    let a = document.getElementById("vine-boom")
    a.addEventListener("click", play)
}
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}