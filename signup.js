function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Username validation
    const username = document.getElementById('username').value.trim();
    if (!username) {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('ثبت‌نام با موفقیت انجام شد!');
        document.getElementById('signupForm').reset();
    }

    return isValid;
}