document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // تابع برای نمایش کارت‌ها با انیمیشن
    function showCards(category) {
        // مخفی کردن همه کارت‌ها
        cards.forEach(card => {
            card.classList.remove('visible');
        });

        // نمایش کارت‌های مربوط به دسته‌بندی انتخاب‌شده
        setTimeout(() => {
            cards.forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.classList.add('visible');
                }
            });
        }, 100); // تاخیر کوچک برای انیمیشن
    }

    // مدیریت کلیک روی دکمه‌ها
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // حذف کلاس active از همه دکمه‌ها
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // اضافه کردن کلاس active به دکمه کلیک‌شده
            button.classList.add('active');

            const category = button.getAttribute('data-category');
            showCards(category);
        });
    });

    // نمایش کارت‌های پیش‌فرض (دسته‌بندی 1)
    showCards('category1');
});