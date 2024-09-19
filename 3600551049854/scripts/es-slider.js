const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  disableOnInteraction: true,
  pauseOnMouseEnter: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    nextSlideMessage: "Następny slajd",
    prevSlideMessage: "Poprzedni slajd",
  },
});
