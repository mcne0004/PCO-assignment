function vineBoomEvent() {
    let a = document.getElementById("vine-boom-trigger")
    a.addEventListener("click", play)
}
function play() {
    let audio = document.getElementById("vine-boom-audio");
    audio.play();
}