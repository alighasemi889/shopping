// تنظیمات برای اسلایدر
const swiper = new Swiper('.mySwiper', {
  loop: true,  // برای اینکه اسلایدها به طور مداوم بچرخند
  autoplay: {
    delay: 3000,  // تغییر اسلایدها هر 3 ثانیه
    disableOnInteraction: false  // برای اینکه پس از تعامل با اسلایدر، اتوماتیک بودن متوقف نشود
  },
  navigation: {
    nextEl: '.swiper-button-next',  // دکمه بعدی
    prevEl: '.swiper-button-prev',  // دکمه قبلی
  },
  pagination: {
    el: '.swiper-pagination',  // برای نمایش نقاط دایره‌ای ناوبری
    clickable: true,  // اجازه کلیک بر روی نقاط
  },
});
