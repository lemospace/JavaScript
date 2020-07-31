const carousel = document.querySelector(".img-carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let carouselImages = document.querySelectorAll(".img-carousel div");

const nextCarousel = () => {
  if (carouselImages[carouselImages.length - 1]) {
    carousel.scrollTo(0, 0);
  }
  carousel.scrollBy(300, 0);
};

nextBtn.addEventListener("click", (e) => {
  nextCarousel();
});

const prevCarousel = () => {
  if (carouselImages[0]) {
    carousel.scrollTo(2400, 0);
  }
  carousel.scrollBy(-300, 0);
};

prevBtn.addEventListener("click", (e) => {
  prevCarousel();
});

const auto = true;
const intervalTime = 3000;
let sliderInterval;

if (auto) {
  sliderInterval = setInterval(nextCarousel, intervalTime);
}

carousel.addEventListener("mouseover", (stopInterval) => {
  clearInterval(sliderInterval);
});

carousel.addEventListener("mouseleave", (startInterval) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});
