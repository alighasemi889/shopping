document.addEventListener('DOMContentLoaded', function () {
    const mySwiperInstance = new Swiper('.mySwiper2', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        }
      }
    });
  });