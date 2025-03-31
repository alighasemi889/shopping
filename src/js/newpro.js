// ساخت Swiper و تنظیمات
const mySwiperInstance = new Swiper('.mySwiper2', {
    slidesPerView: 4, // نمایش ۴ کارت در دسکتاپ
    spaceBetween: 20, // فاصله بین کارت‌ها
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // تنظیمات برای نمایش در دستگاه‌های مختلف
        1024: {
            slidesPerView: 4, // نمایش ۳ کارت در تبلت
        },
        768: {
            slidesPerView: 2, // نمایش ۲ کارت در موبایل
        },
        480: {
            slidesPerView: 1, // نمایش ۱ کارت در موبایل کوچک
        }
    }
});
