const stories = {
  1: "images/product1.webp",
  2: "images/product1.webp",
  3: "images/product1.webp",
  4: "images/product1.webp",
  5: "images/product1.webp",
  6: "images/product1.webp",
  7: "images/product1.webp",
  8: "images/product1.webp",
  9: "images/product1.webp",
  10: "images/product.webp",
};

document.querySelectorAll(".ig-story-circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    const storyId = circle.getAttribute("data-story");
    const storyImage = document.getElementById("storyImage");
    storyImage.src = stories[storyId];
    document.getElementById("storyViewer").style.display = "flex";
  });
});

function closeStory() {
  document.getElementById("storyViewer").style.display = "none";
}

const slider = document.querySelector(".ig-mobile-slider");
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
  isDragging = false;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
