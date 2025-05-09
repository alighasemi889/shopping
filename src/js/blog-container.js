const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.blog-button-next',
      prevEl: '.blog-button-prev',
    },
    pagination: {
      el: '.blog-pagination',
      clickable: true,
    },
    breakpoints: {
      320:  { slidesPerView: 1, spaceBetween: 10 },
      640:  { slidesPerView: 1, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    },
    lazy: { loadPrevNext: true },
  });