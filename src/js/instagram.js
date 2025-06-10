 const storySlider = new Swiper('.story-slider', {
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

    // Fullview Slider
    const fullviewSlider = new Swiper('.fullview-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      speed: 400,
      effect: 'slide',
      on: {
        slideChange: function () {
          // Stop all videos
          document.querySelectorAll('.fullview-slide video').forEach(video => {
            video.pause();
            video.currentTime = 0;
          });
          // Play the current video
          const activeSlide = document.querySelector('.swiper-slide-active video');
          if (activeSlide) {
            activeSlide.play();
          }
        }
      }
    });

    const storyItems = document.querySelectorAll('.story-item');
    const fullviewSliderContainer = document.querySelector('.fullview-slider');
    const exitBtn = document.querySelector('.exit-btn');

    storyItems.forEach(story => {
      story.addEventListener('click', () => {
        const index = parseInt(story.getAttribute('data-story')) - 1;
        fullviewSlider.slideTo(index);
        fullviewSliderContainer.classList.add('active');
        document.body.classList.add('noscroll');
        // Play the video of the active slide
        const activeVideo = fullviewSliderContainer.querySelector('.swiper-slide-active video');
        if (activeVideo) {
          activeVideo.play();
        }
      });
    });

    exitBtn.addEventListener('click', () => {
      fullviewSliderContainer.classList.remove('active');
      document.body.classList.remove('noscroll');
      // Stop all videos when closing
      document.querySelectorAll('.fullview-slide video').forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    });

    fullviewSliderContainer.addEventListener('click', (e) => {
      if (e.target === fullviewSliderContainer) {
        fullviewSliderContainer.classList.remove('active');
        document.body.classList.remove('noscroll');
        // Stop all videos when closing
        document.querySelectorAll('.fullview-slide video').forEach(video => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });