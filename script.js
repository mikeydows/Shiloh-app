const socialOne = document.getElementById("social1");
const socialTwo = document.getElementById("social2");
const socialThree = document.getElementById("social3");
const socialFour = document.getElementById("social4");
const socialFive = document.getElementById("social5");
const socialSix = document.getElementById("social6");

//buttons
const first = document.getElementById("firstBtn");
const second = document.getElementById("secondBtn");
const third = document.getElementById("thirdBtn");
const fourth = document.getElementById("fourthBtn");
const fifth = document.getElementById("fifthBtn");
const sixth = document.getElementById("sixBtn");

function ShowGraphicDesign(){
    if(window.getComputedStyle(socialOne).display === "none"){
        socialOne.style.display = "block";
        first.innerHTML = "Cancel";
        socialOne.style.animationPlayState = "running";
    }
    else{
        first.innerHTML = "Reach Us";
        socialOne.style.display = "none";
    }
}

socialOne.addEventListener("animationend", () => {
    socialOne.style.top = "0px";
})

function ShowAnimation(){
    if(window.getComputedStyle(socialTwo).display === "none"){
        socialTwo.style.display = "block";
        second.innerHTML = "Cancel";
        socialTwo.style.animationPlayState = "running";

    }
    else{
        second.innerHTML = "Reach Us";
        socialTwo.style.display = "none";
    }
}

socialTwo.addEventListener("animationend", () => {
    socialTwo.style.top = "0px";
})

function ShowVideo(){
    if(window.getComputedStyle(socialThree).display === "none"){
        socialThree.style.display = "block";
        third.innerHTML = "Cancel";
        socialThree.style.animationPlayState = "running";
    }
    else{
        third.innerHTML = "Reach Us";
        socialThree.style.display = "none";
    }
}

socialThree.addEventListener("animationend", () => {
    socialThree.style.top = "0px";
})


function ShowPhoto(){
    if(window.getComputedStyle(socialFour).display === "none"){
        socialFour.style.display = "block";
        fifth.innerHTML = "Cancel";
        socialFour.style.animationPlayState = "running";
    }
    else{
        fourth.innerHTML = "Reach Us";
        socialFour.style.display = "none";
    }
}

socialFour.addEventListener("animationend", () => {
    socialFour.style.top = "0px";
})


function ShowWeb(){
    if(window.getComputedStyle(socialFive).display === "none"){
        socialFive.style.display = "block";
        fifth.innerHTML = "Cancel";
        socialFive.style.animationPlayState = "running";
    }
    else{
        fifth.innerHTML = "Reach Us";
        socialFive.style.display = "none";
    }
}

socialFive.addEventListener("animationend", () => {
    socialFive.style.top = "0px";
})


function ShowSocial(){
    if(window.getComputedStyle(socialSix).display === "none"){
        socialSix.style.display = "block";
        sixth.innerHTML = "Cancel";
        socialSix.style.animationPlayState = "running";
    }
    else{
        sixth.innerHTML = "Reach Us";
        socialSix.style.display = "none";
    }
}

socialSix.addEventListener("animationend", () => {
    socialSix.style.top = "0px";
})


//navbar
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

//video
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    video.play().catch(() => {
        console.log("Autoplay blocked");
    });
});
