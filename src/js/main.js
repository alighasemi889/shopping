"use strict";

// گرفتن عناصر
const sidebar = document.getElementById("mobile__header"); // سایدبار
const hamberger = document.getElementById("mobile__hamberger"); // دکمه همبرگر

// اول مخفی‌اش می‌کنیم
sidebar.style.display = "none";

// کلیک روی دکمه همبرگر => باز کردن سایدبار
hamberger.onclick = (e) => {
  e.stopPropagation(); // جلوی انتشار کلیک به document
  sidebar.style.display = "flex";
  sidebar.style.transition = "right 0.3s ease-in";
};

// کلیک روی document => اگر کلیک بیرون سایدبار و دکمه بود => بستن سایدبار
document.addEventListener("click", (e) => {
  const clickedOutsideSidebar = !sidebar.contains(e.target);
  const clickedOutsideButton = !hamberger.contains(e.target);
  const isSidebarOpen = sidebar.style.display === "flex";

  if (clickedOutsideSidebar && clickedOutsideButton && isSidebarOpen) {
    sidebar.style.display = "none";
  }
});
