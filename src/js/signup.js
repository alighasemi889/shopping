import { createClient } from '@supabase/supabase-js';

// تنظیمات Supabase (از داشبورد Supabase بگیرید)
const supabaseUrl = 'https://cetwcfmdxhsywevrfbbk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNldHdjZm1keGhzeXdldnJmYmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NzQxOTgsImV4cCI6MjA2MjU1MDE5OH0.Z8XaXTtqXfzuuKWnKfvQkuNM7-Z7hvb6JwBjfoe3HjA';
const supabase = createClient(supabaseUrl, supabaseKey);
// validation section part
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // پاک کردن پیام‌های قبلی
  nameError.textContent = '';
  emailError.textContent = '';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let hasError = false;

  // اعتبارسنجی نام
  if (!name) {
    nameError.textContent = 'لطفاً نام خود را وارد کنید.';
    hasError = true;
  }

  // اعتبارسنجی ایمیل
  if (!email) {
    emailError.textContent = 'لطفاً ایمیل خود را وارد کنید.';
    hasError = true;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'ایمیل وارد شده معتبر نیست.';
      hasError = true;
    }
  }

  if (hasError) return;

  // ارسال به Supabase
  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }]);

if (error) {
  if (error.code === '23505') {
    emailError.textContent = 'این ایمیل قبلاً ثبت شده است.';
    emailError.style.color = 'red';
  } else {
    emailError.textContent = 'خطا در ذخیره داده‌ها. لطفاً دوباره تلاش کنید.';
    emailError.style.color = 'red';
    console.error(error);
  }
} else {
  // موفقیت
  nameInput.value = '';
  emailInput.value = '';
  nameError.textContent = '';
  emailError.textContent = 'با موفقیت ثبت شد.';
  emailError.style.color = 'green';
}
});