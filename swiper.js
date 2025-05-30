const mySwiper = new Swiper('.kzmtc-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.kzmtc-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.kzmtc-button-next',
    prevEl: '.kzmtc-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  rtl: true,
});
