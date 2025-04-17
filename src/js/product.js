// تنظیمات برای اسلایدر محصول
const productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 5, // در دسکتاپ 5 کارت نمایش داده می‌شود
  spaceBetween: 10, // فاصله بین کارت‌ها
  loop: true, // اسلایدها به طور مداوم بچرخند
  autoplay: {
    delay: 3000, // تغییر اسلایدها هر 3 ثانیه
    disableOnInteraction: false, // برای اینکه پس از تعامل با اسلایدر، اتوماتیک بودن متوقف نشود
  },
  navigation: {
    nextEl: ".swiper-button-next", // دکمه بعدی
    prevEl: ".swiper-button-prev", // دکمه قبلی
  },
  pagination: {
    el: ".swiper-pagination", // برای نمایش نقاط دایره‌ای ناوبری
    clickable: true, // اجازه کلیک بر روی نقاط
  },
  breakpoints: {
    1024: {
      slidesPerView: 4, // در دسکتاپ 5 کارت
    },
    768: {
      slidesPerView: 2, // در تبلت 3 کارت
    },
    480: {
      slidesPerView: 1, // در موبایل 1 کارت
    },
    0: {
      slidesPerView: 1,
    },
  },
});
