new Swiper('.newest-products-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
      nextEl: '.newest-products-button-next',
      prevEl: '.newest-products-button-prev',
    },
    pagination: {
      el: '.newest-products-pagination',
      clickable: true,
    },
    breakpoints: {
      320:  { slidesPerView: 1, spaceBetween: 10 },
      640:  { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    },
    on: {
      slideChange: function() {
        document
          .querySelectorAll('.newest-products-slide')
          .forEach(slide => slide.classList.remove('newest-products-slide-active'));
        const active = this.slides[this.activeIndex];
        active.classList.add('newest-products-slide-active');
      }
    }
  });
  // فعال کردن کلاس بزرگ‌شدن روی اولین کارت
  document.querySelector('.newest-products-slide').classList.add('newest-products-slide-active');