new Swiper('.custom-swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.custom-swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev'
  },
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 25 },
    1280: { slidesPerView: 6, spaceBetween: 30 }
  }
});