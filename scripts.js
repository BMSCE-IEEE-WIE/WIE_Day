const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let counter = 1;
const slideWidth = 100;

function slide() {
    if (counter >= images.length) return;
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth * counter}px)`;
    counter++;
}

setInterval(slide, 2000);
