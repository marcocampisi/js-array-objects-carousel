const carouselImagesContainer = document.getElementById("carouselImagesContainer");
const carouselImages = carouselImagesContainer.getElementsByClassName("carouselImage");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
let activeIndex = 0;

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
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