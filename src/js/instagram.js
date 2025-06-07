const storySwiper = new Swiper(".story-slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
  });

  // گالری
  const galleryModal = document.getElementById("gallery-modal");
  const galleryWrapper = galleryModal.querySelector(".swiper-wrapper");
  let gallerySwiper = null;

  document.querySelectorAll(".story-slider .swiper-slide").forEach((slide) => {
    slide.addEventListener("click", () => {
      const images = JSON.parse(slide.getAttribute("data-gallery"));
      galleryWrapper.innerHTML = "";
      images.forEach((img) => {
        const slideEl = document.createElement("div");
        slideEl.classList.add("swiper-slide");
        slideEl.innerHTML = `<img src="${img}" alt="" />`;
        galleryWrapper.appendChild(slideEl);
      });
      galleryModal.style.display = "flex";

      if (gallerySwiper) {
        gallerySwiper.update();
        gallerySwiper.slideTo(0);
      } else {
        gallerySwiper = new Swiper(".gallery-swiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          loop: true,
        });
      }
    });
  });

  // بستن گالری
  document.getElementById("close-gallery").addEventListener("click", () => {
    galleryModal.style.display = "none";
  });
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      galleryModal.style.display = "none";
    }
  });