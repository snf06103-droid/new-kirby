document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector(".all img")
    const dropMenu = document.querySelector(".old")

    dropBtn.addEventListener("click", function() {
        dropMenu.classList.toggle("on")
    })
});