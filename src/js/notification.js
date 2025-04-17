const notification = document.getElementById("notification");
const content = document.getElementById("content__notif");

// تابع برای نشون دادن نوتیفیکیشن
function showNotification(message, isOnline) {
  notification.textContent = message;
  notification.classList.add("show");
  if (isOnline) {
    notification.classList.add("online");
  } else {
    notification.classList.remove("online");
  }
  // بعد از 3 ثانیه محو بشه
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// بررسی وضعیت اولیه
if (navigator.onLine) {
  content.style.display = "block"; // نمایش محتوا
} else {
  showNotification("شما آفلاین هستید!", false);
}

// رویداد آفلاین شدن
window.addEventListener("offline", () => {
  showNotification("شما آفلاین شدید!", false);
  content.style.display = "none"; // مخفی کردن محتوا
});

// رویداد آنلاین شدن
window.addEventListener("online", () => {
  showNotification("شما دوباره آنلاین شدید!", true);
  content.style.display = "block"; // نمایش محتوا
});
