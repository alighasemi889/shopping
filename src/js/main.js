"use strict"
const sidebar = document.getElementById("mobile__header");
const hambergerIcon = document.getElementById("mobile__hamberger");
sidebar.style.display = "none"


hambergerIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // جلوگیری از پخش شدن کلیک
    sidebar.style.display = "flex";
});


document.addEventListener("click", (event) => {
    // اگر کلیک خارج از سایدبار و آیکون هامبرگر بود، سایدبار بسته میشه
    if (!sidebar.contains(event.target) && event.target !== hambergerIcon) {
      sidebar.style.display = "none";
    }
 });