  const swiper = new Swiper('.swiper-container-unique', {
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
      },
      pagination: {
        el: '.swiper-pagination-unique',
        clickable: true,
      },
    });

    const stories = document.querySelectorAll('.story');
    const swiperContainer = document.querySelector('.swiper-container-unique');
    const closeBtn = document.querySelector('.close-btn');

    stories.forEach(story => {
      story.addEventListener('click', () => {
        const storyIndex = parseInt(story.getAttribute('data-story')) - 1;
        swiper.slideTo(storyIndex);
        swiperContainer.classList.add('active');
      });
    });

    closeBtn.addEventListener('click', () => {
      swiperContainer.classList.remove('active');
    });

    swiperContainer.addEventListener('click', (e) => {
      if (e.target === swiperContainer) {
        swiperContainer.classList.remove('active');
      }
    });