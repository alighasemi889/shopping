const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.getElementById('closeBtn');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modalImage.src = thumbnail.dataset.image;
        modalTitle.textContent = thumbnail.dataset.title;
        modalDesc.textContent = thumbnail.dataset.desc;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});