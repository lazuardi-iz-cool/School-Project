document.addEventListener("click", function (e) {
    if (e.target.classList.contains("close")) {
        e.target.parentElement.remove();
    }
});