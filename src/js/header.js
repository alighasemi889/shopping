"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // تابع برای مقداردهی سایدبار
  function initializeSidebar() {
    const sidebar = document.getElementById("mobile__header");
    const hambergerIcon = document.getElementById("mobile__hamberger");

    if (!sidebar || !hambergerIcon) {
      console.error(
        "One or both elements (mobile__header, mobile__hamberger) not found",
      );
      return;
    }

    // مخفی کردن سایدبار
    sidebar.style.display = "none";

    // رویداد کلیک برای همبرگر
    hambergerIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      sidebar.style.display =
        sidebar.style.display === "none" ? "flex" : "none";
    });

    // بستن سایدبار با کلیک خارج
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && event.target !== hambergerIcon) {
        sidebar.style.display = "none";
      }
    });
  }

  // چک کردن اینکه صفحه index.html هست یا نه
  if (
    window.location.pathname !== "/index.html" &&
    window.location.pathname !== "/"
  ) {
    // برای صفحات غیر اصلی (مثل contact.html)
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        const headerContainer = document.getElementById("header-container");
        if (headerContainer) {
          headerContainer.innerHTML = data;
          initializeSidebar(); // بعد از لود هدر، سایدبار رو مقداردهی کن
        }
      })
      .catch((error) => console.error("Error loading header:", error));
  } else {
    // برای index.html
    initializeSidebar();
  }
});
