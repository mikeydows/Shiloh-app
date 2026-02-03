const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
 
function openNavbar(){
    navbar.classList.remove("close");
    navbar.classList.add("open");
     overlay.style.display = "block";
}

function closenavbar(){
    navbar.classList.remove("open");
    navbar.classList.remove("close");
    overlay.style.display = "none";
}

overlay.addEventListener("click", closenavbar);

navbar.addEventListener("animationend", () => {
    if(navbar.classList.contains("close")){
        navbar.style.display = "none";
    }
})

let startX = 0;
navbar.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    let diff = startX - moveX;

    if(diff > 70){
        closenavbar();
    }
})
document.addEventListener("touchstart", (e) => {
    if(e.touches[0].clientX < 30){
        openNavbar();
    }
})
