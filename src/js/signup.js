document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const strengthBars = [
        document.getElementById('strength-bar-1'),
        document.getElementById('strength-bar-2'),
        document.getElementById('strength-bar-3'),
        document.getElementById('strength-bar-4')
    ];
    
    // Password strength checker
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        // Calculate strength
        let strength = 0;
        
        if (password.length > 0) strength = 1; // At least something
        if (password.length >= 8) strength = 2; // Decent length
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength = 3; // Has upper and lowercase
        if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength = 4; // Has numbers and special chars
        
        // Update strength bars
        updateStrengthBars(strength);
    });
    
    function updateStrengthBars(strength) {
        // Reset all bars
        strengthBars.forEach(bar => {
            bar.className = 'strength-bar';
        });
        
        // Set colors based on strength
        const colors = ['#EF4444', '#F59E0B', '#10B981', '#6366F1'];
        
        // Update visible bars
        for (let i = 0; i < strength; i++) {
            strengthBars[i].style.backgroundColor = colors[Math.min(strength - 1, 3)];
        }
    }
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i> رمز عبور و تکرار آن مطابقت ندارند!';
            
            // Remove any existing error message
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            registerForm.prepend(errorMessage);
            return;
        }
        
        // Add loading state to button
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="flex items-center justify-center"><i class="fa-solid fa-spinner fa-spin mr-2"></i> در حال ثبت نام...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            // Here you would typically make an API call to register the user
            const formData = new FormData(registerForm);
            const userData = Object.fromEntries(formData);
            console.log('Registration data:', userData);
            
            // For demonstration, simulate successful registration
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i> ثبت نام با موفقیت انجام شد! در حال انتقال...';
            
            // Remove any existing messages
            const existingMessages = document.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach(msg => msg.remove());
            
            registerForm.prepend(successMessage);
            
            // Redirect after 1.5 seconds (for demonstration)
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }, 1000);
    });
    
    // Toggle password visibility
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
    
    // Add click handlers to password icons
    const passwordToggle = document.getElementById('password-toggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', function() {
            togglePassword(this, 'password');
        });
    }
    
    const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
    if (confirmPasswordToggle) {
        confirmPasswordToggle.addEventListener('click', function() {
            togglePassword(this, 'confirmPassword');
        });
    }
    
    // Refresh captcha
    document.querySelector('.captcha-refresh').addEventListener('click', function() {
        const captchaImg = document.querySelector('.captcha-image img');
        captchaImg.src = 'images/captcha.png?base-ok&' + new Date().getTime();
    });
    
    // Add input focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('input-focused');
        });
    });
});
