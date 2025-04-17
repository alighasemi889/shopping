const stories = {
  1: "https://via.placeholder.com/1080x1920/FF0000/FFFFFF?text=Full+Story+1",
  2: "https://via.placeholder.com/1080x1920/00FF00/FFFFFF?text=Full+Story+2",
  3: "https://via.placeholder.com/1080x1920/0000FF/FFFFFF?text=Full+Story+3",
  4: "https://via.placeholder.com/1080x1920/FFFF00/FFFFFF?text=Full+Story+4",
  5: "https://via.placeholder.com/1080x1920/FF00FF/FFFFFF?text=Full+Story+5",
  6: "https://via.placeholder.com/1080x1920/00FFFF/FFFFFF?text=Full+Story+6",
  7: "https://via.placeholder.com/1080x1920/FFA500/FFFFFF?text=Full+Story+7",
  8: "https://via.placeholder.com/1080x1920/800080/FFFFFF?text=Full+Story+8",
  9: "https://via.placeholder.com/1080x1920/008000/FFFFFF?text=Full+Story+9",
  10: "https://via.placeholder.com/1080x1920/FFC0CB/FFFFFF?text=Full+Story+10",
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
