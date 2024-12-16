window.onload = function () {
    const toggleViewModeButton = document.getElementById("toggleViewMode");

    toggleViewModeButton.addEventListener("click", toggleViewModeHandler);

    setInterval(redraw, 10);
};

// Toggle View Mode
function toggleViewModeHandler() {
    const bodyClassList = document.body.classList;
    bodyClassList.toggle("dark-mode");
}
