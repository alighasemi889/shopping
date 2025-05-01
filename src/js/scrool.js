// دکمه برای اسکرول به بالا
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// وقتی صفحه اسکرول می‌شود
window.onscroll = function () {
  // اگر مقدار اسکرول بیشتر از 300 پیکسل بود، دکمه نمایش داده شود
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// برای اسکرول نرم به بالا با کلیک بر روی دکمه
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
