
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Add loading state to button
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="flex items-center justify-center"><i class="fa-solid fa-spinner fa-spin mr-2"></i> در حال ارسال...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            // Here you would typically make an API call to request password reset
            console.log('Password reset requested for:', email);
            
            // For demonstration, simulate successful request
            const infoMessage = document.createElement('div');
            infoMessage.className = 'info-message';
            infoMessage.innerHTML = `<i class="fa-solid fa-envelope-circle-check"></i> لینک بازیابی رمز عبور به ایمیل ${email} ارسال شد. لطفا ایمیل خود را بررسی کنید.`;
            
            // Remove any existing messages
            const existingMessages = document.querySelectorAll('.success-message, .error-message, .info-message');
            existingMessages.forEach(msg => msg.remove());
            
            forgotPasswordForm.prepend(infoMessage);
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Optionally redirect after some time
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
        }, 1500);
    });
    
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