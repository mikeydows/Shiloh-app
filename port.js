const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

function openNavbar() {
    navbar.style.display = "block";
    navbar.classList.remove("close");
    navbar.classList.add("open");
    overlay.style.display = "block";
}

function closenavbar() {
    navbar.classList.remove("open");
    navbar.classList.add("close");
    overlay.style.display = "none";
}

overlay.addEventListener("click", closenavbar);

navbar.addEventListener("animationend", () => {
    if (navbar.classList.contains("close")) {
        navbar.style.display = "none";
    }
});

/* ===== Swipe logic ===== */
let startX = 0;
let moveX = 0;

navbar.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

navbar.addEventListener("touchmove", (e) => {
    moveX = e.touches[0].clientX;
});

navbar.addEventListener("touchend", () => {
    const diff = startX - moveX;

    // swipe left to close
    if (diff > 70) {
        closenavbar();
    }
});

/* Swipe from left edge to open */
document.addEventListener("touchstart", (e) => {
    if (e.touches[0].clientX < 30) {
        openNavbar();
    }
});

const photo = document.getElementById("photo");
const graphic = document.getElementById("graphic");
const photography = document.getElementById("photography");
const graphicPage = document.getElementById("graphicdesign");
const heading = document.getElementById("head");

function showPhotographyPage() {
    photo.style.backgroundColor = "black";
    graphic.style.backgroundColor = "";

    photography.style.display = "flex";
    heading.innerHTML = "Photography"
    graphicPage.style.display = "none";
}

function showGraphicPage() {
    graphic.style.backgroundColor = "black";
    photo.style.backgroundColor = "";

    heading.innerHTML = "Graphic Design"

    graphicPage.style.display = "flex";
    photography.style.display = "none";
}

photo.addEventListener("click", showPhotographyPage);
graphic.addEventListener("click", showGraphicPage);
