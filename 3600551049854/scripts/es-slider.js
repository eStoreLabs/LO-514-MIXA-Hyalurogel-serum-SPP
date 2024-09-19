const slides = document.querySelectorAll(".swiper-slide");
const dotsContainer = document.createElement("ul");
dotsContainer.classList.add("slick-dots");
document.querySelector(".es-slider__content").appendChild(dotsContainer);

let currentSlide = 0;

function showSlide(index) {
//   slides.forEach((slide) => slide.classList.remove("prev"));
  slides[currentSlide].style.display = "none";
  slides[index].style.display = "block";
  slides[currentSlide].classList.remove("active");
//   slides[currentSlide].classList.add("prev");
  slides[index].classList.add("active");
  currentSlide = index;
  updateDots();
}

function nextSlide() {
  let nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex === slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex);
}

function prevSlide() {
  let prevSlideIndex = currentSlide - 1;
  if (prevSlideIndex < 0) {
    prevSlideIndex = slides.length - 1;
  }
  showSlide(prevSlideIndex);
}

function updateDots() {
  const dots = document.querySelectorAll(".slick-dots li");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("slick-active");
    } else {
      dot.classList.remove("slick-active");
    }
  });
}

slides.forEach((slide, index) => {
  const dot = document.createElement("li");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

document
  .querySelector(".slick-button-next")
  .addEventListener("click", nextSlide);
document
  .querySelector(".slick-button-prev")
  .addEventListener("click", prevSlide);

showSlide(currentSlide);
