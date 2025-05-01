document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  // الگوهای اعتبارسنجی
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // فرمت ایمیل
  const usernamePattern = /^[a-zA-Z0-9_-]{3,}$/; // نام کاربری: حداقل ۳ کاراکتر
  const passwordMinLength = 6;

  // اعتبارسنجی در زمان واقعی برای ایمیل/نام کاربری
  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      emailError.classList.add("hidden");
      emailInput.classList.remove("border-red-500");
    } else if (
      !emailPattern.test(emailValue) &&
      !usernamePattern.test(emailValue)
    ) {
      emailError.textContent = "لطفاً ایمیل یا نام کاربری معتبر وارد کنید.";
      emailError.classList.remove("hidden");
      emailInput.classList.add("border-red-500");
    } else {
      emailError.classList.add("hidden");
      emailInput.classList.remove("border-red-500");
    }
  });

  // اعتبارسنجی در زمان واقعی برای رمز عبور
  passwordInput.addEventListener("input", function () {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
      passwordError.classList.add("hidden");
      passwordInput.classList.remove("border-red-500");
    } else if (passwordValue.length < passwordMinLength) {
      passwordError.textContent = `رمز عبور باید حداقل ${passwordMinLength} کاراکتر باشد.`;
      passwordError.classList.remove("hidden");
      passwordInput.classList.add("border-red-500");
    } else {
      passwordError.classList.add("hidden");
      passwordInput.classList.remove("border-red-500");
    }
  });

  // ارسال فرم
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // اعتبارسنجی ایمیل/نام کاربری
    const emailValue = emailInput.value.trim();
    if (!emailPattern.test(emailValue) && !usernamePattern.test(emailValue)) {
      emailError.textContent = "لطفاً ایمیل یا نام کاربری معتبر وارد کنید.";
      emailError.classList.remove("hidden");
      emailInput.classList.add("border-red-500");
      return;
    } else {
      emailError.classList.add("hidden");
      emailInput.classList.remove("border-red-500");
    }

    // اعتبارسنجی رمز عبور
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < passwordMinLength) {
      passwordError.textContent = `رمز عبور باید حداقل ${passwordMinLength} کاراکتر باشد.`;
      passwordError.classList.remove("hidden");
      passwordInput.classList.add("border-red-500");
      return;
    } else {
      passwordError.classList.add("hidden");
      passwordInput.classList.remove("border-red-500");
    }

    // افزودن حالت لودینگ به دکمه
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<span class="flex items-center justify-center"><i class="fa-solid fa-spinner fa-spin mr-2"></i> در حال ورود...</span>';

    // شبیه‌سازی تأخیر API
    setTimeout(() => {
      const formData = new FormData(loginForm);
      const loginData = Object.fromEntries(formData);
      console.log("Login data:", loginData);

      const successMessage = document.createElement("div");
      successMessage.className =
        "success-message text-green-500 text-sm mt-2 flex items-center";
      successMessage.innerHTML =
        '<i class="fa-solid fa-check-circle mr-2"></i> ورود با موفقیت انجام شد! در حال انتقال...';

      const existingMessages = document.querySelectorAll(
        ".success-message, .error-message",
      );
      existingMessages.forEach((msg) => msg.remove());

      loginForm.prepend(successMessage);

      setTimeout(() => {
        window.location.href = "dashboard.html"; // یا صفحه مورد نظر
      }, 1500);
    }, 1000);
  });

  // تغییر نوع فیلد رمز عبور
  const togglePassword = (element, inputId) => {
    const passwordField = document.getElementById(inputId);
    if (passwordField.type === "password") {
      passwordField.type = "text";
      element.classList.remove("fa-lock");
      element.classList.add("fa-lock-open");
    } else {
      passwordField.type = "password";
      element.classList.remove("fa-lock-open");
      element.classList.add("fa-lock");
    }
  };

  // افزودن هندلر به آیکون رمز عبور
  const passwordToggle = document.getElementById("login-password-toggle");
  if (passwordToggle) {
    passwordToggle.addEventListener("click", function () {
      togglePassword(this, "password");
    });
  }

  // افزودن افکت فوکوس به ورودی‌ها
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("input-focused");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("input-focused");
    });
  });
});
