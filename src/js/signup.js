import { createClient } from '@supabase/supabase-js';

// تنظیمات Supabase (از داشبورد Supabase بگیرید)
const supabaseUrl = 'https://cetwcfmdxhsywevrfbbk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNldHdjZm1keGhzeXdldnJmYmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NzQxOTgsImV4cCI6MjA2MjU1MDE5OH0.Z8XaXTtqXfzuuKWnKfvQkuNM7-Z7hvb6JwBjfoe3HjA';
const supabase = createClient(supabaseUrl, supabaseKey);

// گرفتن فرم و مدیریت ارسال
const form = document.getElementById('myForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // جلوگیری از رفرش صفحه

    // گرفتن داده‌های فرم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // ذخیره داده‌ها در جدول users
    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email }]);

    if (error) {
        console.error('خطا در ذخیره داده‌ها: ', error);
        alert('خطایی رخ داد. لطفاً دوباره امتحان کنید.');
    } else {
        alert('داده‌ها با موفقیت ذخیره شدند!');
        form.reset(); // پاک کردن فرم
    }
});