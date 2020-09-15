window.onmousemove = function () {
    const follower = document.querySelector('.cursor');
    follower.style.left = window.event.clientX + "px";
    follower.style.top = window.event.clientY + "px";
}
var types = ["wavesSimple","hexagon", "celtic"]
var i = 0
function nextBackground() {
    const backgrounds = document.querySelectorAll('.' + types[i]);
    i++;
    if (i > types.length - 1) i = 0
    console.log(types[i])
    for (let j = 0; j < backgrounds.length; j++) {
        backgrounds[j].className = types[i]
    }
}