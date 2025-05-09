const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
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
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    lazy: { loadPrevNext: true },
  });