const carouselImagesContainer = document.getElementById("carouselImagesContainer");
const carouselImages = carouselImagesContainer.getElementsByClassName("carouselImage");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
let activeIndex = 0;

const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

for (let i = 0; i < images.length; i++) {
    const image = document.createElement("img");
    image.className = "carouselImage";
    image.src = images[i];
    carouselImagesContainer.appendChild(image);
    if (i === 0) {
        image.classList.add("active");
    }
}

upButton.addEventListener('click',
    function() {
        carouselImages[activeIndex].classList.remove("active");
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = carouselImages.length - 1;
        }
        carouselImages[activeIndex].classList.add("active");
    }
);

downButton.addEventListener('click',
    function() {
        carouselImages[activeIndex].classList.remove("active");
        activeIndex++;
        if (activeIndex >= carouselImages.length) {
            activeIndex = 0;
        }
        carouselImages[activeIndex].classList.add("active");
    }
);