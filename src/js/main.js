// "use strict";
// const sidebar = document.getElementById("mobile__header");
// const hambergerIcon = document.getElementById("mobile__hamberger");
// sidebar.style.display = "none";

// hambergerIcon.addEventListener("click", (event) => {
//   event.stopPropagation(); // جلوگیری از پخش شدن کلیک
//   sidebar.style.display = "flex";
// });

// document.addEventListener("click", (event) => {
//   // اگر کلیک خارج از سایدبار و آیکون هامبرگر بود، سایدبار بسته میشه
//   if (!sidebar.contains(event.target) && event.target !== hambergerIcon) {
//     sidebar.style.display = "none";
//   }
// });
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // لود هدر برای همه صفحات
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerContainer = document.getElementById("header-container");
      if (headerContainer) {
        headerContainer.innerHTML = data;
        initializeSidebar();
      } else {
        console.error("Header container not found");
      }
    })
    .catch((error) => console.error("Error loading header:", error));

  // تابع برای مقداردهی سایدبار
  function initializeSidebar() {
    const sidebar = document.getElementById("mobile__header");
    const hambergerIcon = document.getElementById("mobile__hamberger");

    if (!sidebar || !hambergerIcon) {
      console.error("One or both elements (mobile__header, mobile__hamberger) not found");
      return;
    }

    sidebar.style.display = "none";

    hambergerIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      sidebar.style.display = sidebar.style.display === "none" ? "flex" : "none";
    });
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && event.target !== hambergerIcon) {
        sidebar.style.display = "none";
      }
    });
  }
});