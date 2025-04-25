document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const strengthBars = [
        document.getElementById('strength-bar-1'),
        document.getElementById('strength-bar-2'),
        document.getElementById('strength-bar-3'),
        document.getElementById('strength-bar-4'),
    ];
    const phoneInput = document.getElementById('mobile');
    const phoneError = document.getElementById('mobile-error'); // استفاده از عنصر موجود در HTML

    // الگوی شماره موبایل ایران
    const mobilePattern = /^09[0-9]{9}$/;

    // اعتبارسنجی در زمان واقعی برای شماره موبایل
    phoneInput.addEventListener('input', function () {
        const phoneValue = phoneInput.value.trim();
        if (phoneValue === '') {
            phoneError.classList.add('hidden');
            phoneInput.classList.remove('border-red-500');
        } else if (!mobilePattern.test(phoneValue)) {
            phoneError.textContent = 'شماره موبایل باید ۱۱ رقم باشد و با 09 شروع شود.';
            phoneError.classList.remove('hidden');
            phoneInput.classList.add('border-red-500');
        } else {
            phoneError.classList.add('hidden');
            phoneInput.classList.remove('border-red-500');
        }
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // اعتبارسنجی رمز عبور
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i> رمز عبور و تکرار آن مطابقت ندارند!';
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            registerForm.prepend(errorMessage);
            return;
        }

        // اعتبارسنجی شماره موبایل هنگام ارسال
        const phoneValue = phoneInput.value.trim();
        if (!mobilePattern.test(phoneValue)) {
            phoneError.textContent = 'شماره موبایل باید ۱۱ رقم باشد و با 09 شروع شود.';
            phoneError.classList.remove('hidden');
            phoneInput.classList.add('border-red-500');
            return;
        } else {
            phoneError.classList.add('hidden');
            phoneInput.classList.remove('border-red-500');
        }

        // افزودن حالت لودینگ به دکمه
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="flex items-center justify-center"><i class="fa-solid fa-spinner fa-spin mr-2"></i> در حال ثبت نام...</span>';

        // شبیه‌سازی تأخیر API
        setTimeout(() => {
            const formData = new FormData(registerForm);
            const userData = Object.fromEntries(formData);
            console.log('Registration data:', userData);

            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i> ثبت نام با موفقیت انجام شد! در حال انتقال...';

            const existingMessages = document.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach((msg) => msg.remove());

            registerForm.prepend(successMessage);

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }, 1000);
    });

    // تغییر نوع فیلد رمز عبور
    const togglePassword = (element, inputId) => {
        const passwordField = document.getElementById(inputId);
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            element.classList.remove('fa-lock');
            element.classList.add('fa-lock-open');
        } else {
            passwordField.type = 'password';
            element.classList.remove('fa-lock-open');
            element.classList.add('fa-lock');
        }
    };

    // افزودن هندلر به آیکون‌های رمز عبور
    const passwordToggle = document.getElementById('password-toggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', function () {
            togglePassword(this, 'password');
        });
    }

    const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
    if (confirmPasswordToggle) {
        confirmPasswordToggle.addEventListener('click', function () {
            togglePassword(this, 'confirmPassword');
        });
    }

    // رفرش کپچا
    document.querySelector('.captcha-refresh').addEventListener('click', function () {
        const captchaImg = document.querySelector('.captcha-image img');
        captchaImg.src = 'images/captcha.png?base-ok&' + new Date().getTime();
    });

    // افزودن افکت فوکوس به ورودی‌ها
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('input-focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('input-focused');
        });
    });
});