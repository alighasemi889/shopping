  const storiesSwiper = new Swiper('.stories-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      grabCursor: true,
      speed: 400,
      breakpoints: {
        320: { spaceBetween: 8 },
        768: { spaceBetween: 10 },
        1024: { spaceBetween: 12 }
      }
    });

    // Fullscreen Swiper
    const fullscreenSwiper = new Swiper('.fullscreen-swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      speed: 400,
      effect: 'slide'
    });

    const stories = document.querySelectorAll('.story');
    const fullscreenSwiperContainer = document.querySelector('.fullscreen-swiper');
    const closeBtn = document.querySelector('.close-btn');

    stories.forEach(story => {
      story.addEventListener('click', () => {
        const index = parseInt(story.getAttribute('data-story')) - 1;
        fullscreenSwiper.slideTo(index);
        fullscreenSwiperContainer.classList.add('active');
        document.body.classList.add('noscroll');
      });
    });

    closeBtn.addEventListener('click', () => {
      fullscreenSwiperContainer.classList.remove('active');
      document.body.classList.remove('noscroll');
    });

    fullscreenSwiperContainer.addEventListener('click', (e) => {
      if (e.target === fullscreenSwiperContainer) {
        fullscreenSwiperContainer.classList.remove('active');
        document.body.classList.remove('noscroll');
      }
    });