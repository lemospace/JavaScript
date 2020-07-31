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

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
