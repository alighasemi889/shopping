const uniqueProductSwiper = new Swiper('.unique-product-slider', {
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: '.unique-product-slider-next',
      prevEl: '.unique-product-slider-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
      480: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 30,
      },
      1200: {
          slidesPerView: 5,
          spaceBetween: 40,
      },
  },
});