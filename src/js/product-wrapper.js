const swiper3 = new Swiper(".cosmeticSlider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  wrapperClass: "swiper-wrapper",  // حتما باید همین باشه چون داخل ساختار هست
  slideClass: "swiper-slide",      // این هم باید همین باشه
  pagination: {
    el: ".cosmetic-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  navigation: {
    nextEl: ".cosmetic-button-next",
    prevEl: ".cosmetic-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 10 },
    400: { slidesPerView: 2, spaceBetween: 15 },
    600: { slidesPerView: 5, spaceBetween: 20 },
    1024: { slidesPerView: 6, spaceBetween: 20 },
  },
});

// card click function``
const modalwrapper = document.getElementById("modalwrapper");
const dragImage = document.getElementById("drag")
const closeModal = document.getElementById("closeModal")
// function to hide the modal
modalwrapper.style.display = "none";


dragImage.addEventListener("click", () => {
  modalwrapper.style.display = "flex";
});



closeModal.addEventListener("click", (e) => {
      modalwrapper.style.display = "none";

  // modalwrapper.style.display = "none";
});


modalwrapper.addEventListener("click" , (e) => {
  if (e.target === modalwrapper) {
    modalwrapper.style.display = "none"
  }
})