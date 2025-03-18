// Toggle the sliding menu
function toggleMenu() {
    const sliderMenu = document.getElementById("sliderMenu");
    const overlay = document.getElementById("overlay");
    if (sliderMenu.style.left === "0px") {
        sliderMenu.style.left = "-250px";
        overlay.classList.remove("active");
    } else {
        sliderMenu.style.left = "0px";
        overlay.classList.add("active");
    }
}

// Close the sliding menu
function closeMenu() {
    const sliderMenu = document.getElementById("sliderMenu");
    const overlay = document.getElementById("overlay");
    sliderMenu.style.left = "-250px";
    overlay.classList.remove("active");
}
