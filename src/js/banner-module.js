new Swiper('.swiper--brandContainer', {
    slidesPerView: 10,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 800,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 8 },
      1280: { slidesPerView: 10 },
    },
  });