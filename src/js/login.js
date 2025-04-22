document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Add loading state to button
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="flex items-center justify-center"><i class="fa-solid fa-spinner fa-spin mr-2"></i> در حال ورود...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            // Here you would typically make an API call to authenticate the user
            console.log('Login attempt:', { email, password });
            
            // For demonstration, simulate successful login
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i> ورود موفقیت آمیز بود! در حال انتقال...';
            
            // Remove any existing messages
            const existingMessages = document.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach(msg => msg.remove());
            
            loginForm.prepend(successMessage);
            
            // Redirect after 1.5 seconds (for demonstration)
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }, 1000);
    });
    
    // Toggle password visibility
    const togglePassword = () => {
        const passwordField = document.getElementById('password');
        const icon = document.getElementById('login-password-toggle');
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.remove('fa-lock');
            icon.classList.add('fa-lock-open');
        } else {
            passwordField.type = 'password';
            icon.classList.remove('fa-lock-open');
            icon.classList.add('fa-lock');
        }
    };
    
    const passwordToggle = document.getElementById('login-password-toggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', togglePassword);
    }
    
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