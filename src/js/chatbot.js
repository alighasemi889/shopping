const chatWindow = document.getElementById("chatWindow");
const chatBody = document.getElementById("chatBody");

// سوال‌ها و جواب‌های FAQ
const faqResponses = {
  "قیمت محصول چنده؟": "قیمت محصول بستگی به مدل داره، لطفاً مدل رو بگو.",
  "چطور سفارش بدم؟": "برای سفارش، به سایت ما سر بزن و مراحل رو دنبال کن.",
  "ارسال چقدر طول میکشه؟": "ارسال معمولاً بین 2 تا 5 روز کاری طول می‌کشه.",
  "محصولات شما گارانتی دارن؟": "بله، همه محصولات ما 1 سال گارانتی دارن.",
};

// باز و بسته کردن پنجره چت
function toggleChat() {
  chatWindow.style.display =
    chatWindow.style.display === "flex" ? "none" : "flex";
}

// انتخاب سوال از FAQ
function selectFAQ(question) {
  // نمایش سوال کاربر
  const userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.textContent = question;
  chatBody.appendChild(userMessage);

  // پاسخ ربات
  const botResponse = faqResponses[question];
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = botResponse;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight; // اسکرول به پایین
  }, 500);

  chatBody.scrollTop = chatBody.scrollHeight;
}
