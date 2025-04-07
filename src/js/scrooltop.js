document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // مدیریت نمایش حاشیه مشکی هنگام اسکرول
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = window.scrollY;
        const threshold = scrollHeight - clientHeight - 200; // 200px قبل از انتهای صفحه

        if (scrollTop > threshold) {
            scrollToTopBtn.classList.add('active'); // اضافه کردن حاشیه مشکی
        } else {
            scrollToTopBtn.classList.remove('active'); // حذف حاشیه مشکی
        }
    });

    // برگشت نرم به بالای صفحه
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // اسکرول نرم و روان
        });
    });
});