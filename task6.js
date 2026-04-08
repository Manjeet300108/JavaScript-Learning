let container = document.querySelector("#container");

window.addEventListener('mousemove', function (e) {
    container.style.top = e.clientY + "px";
    container.style.left = e.clientX + "px";
})