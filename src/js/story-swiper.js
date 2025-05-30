document.addEventListener('DOMContentLoaded', () => {
  // Swiper Initialization
  const swiper = new Swiper('.story-swiper', {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: false,
    pagination: {
      el: '.story-swiper-pagination',
      clickable: true,
      bulletClass: 'story-swiper-pagination-bullet',
      bulletActiveClass: 'story-swiper-pagination-bullet-active',
    },
    navigation: {
      nextEl: '.story-swiper-button-next',
      prevEl: '.story-swiper-button-prev',
    },
    containerClass: 'story-swiper',
    wrapperClass: 'story-swiper-wrapper',
    slideClass: 'story-swiper-slide',
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });

  // Modal Functionality
  const modal = document.getElementById('videoModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.querySelector('.close-modal');

  document.querySelectorAll('.story-swiper-slide').forEach(slide => {
    slide.addEventListener('click', () => {
      const videos = JSON.parse(slide.dataset.videos);
      modalContent.innerHTML = videos.map(video => `
        <video class="modal-video" controls autoplay>
          <source src="${video}" type="video/mp4">
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      `).join('');
      modal.style.display = 'flex';
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
    }
  });
});
