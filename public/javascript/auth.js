document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            
            const formId = `${tab.dataset.tab}-form`;
            const form = document.getElementById(formId);
            form.classList.add('active');
        });
    });

    // Handle Sign In
    signinForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(signinForm);
            const response = await fetch('/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
                credentials: 'include'
            });

            const responseData = await response.json();
            
            if (response.ok) {
                showNotification('Sign in successful! Redirecting...', 'success');
                window.location.href = responseData.redirectUrl || '/home';
            } else {
                showNotification(responseData.message || 'Sign in failed', 'error');
            }
        } catch (error) {
            console.error('Sign in error:', error);
            showNotification('Sign in failed. Please try again.', 'error');
        }
    });

    // Handle Sign Up
    signupForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData);
            
            if (data.password !== data.confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }

            const response = await fetch('https://video-calling-keen.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            console.log('Response Status:', response.status);
            const responseData = await response.json();
            console.log('Response Data:', responseData);

            if (response.ok) {
                showNotification('Signup successful! Redirecting...', 'success');
                window.location.replace(responseData.redirectUrl || '/home');
            } else {
                showNotification(responseData.message || 'Sign up failed', 'error');
            }
        } catch (error) {
            console.error('Sign up error:', error);
            showNotification('Sign up failed. Please try again.', 'error');
        }
    });

    // Add close button functionality
    document.querySelector('.notification-close')?.addEventListener('click', () => {
        document.getElementById('notification').style.display = 'none';
    });
});

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = notification.querySelector('.notification-message');
    
    notification.className = `notification ${type}`;
    messageElement.textContent = message;
    notification.style.display = 'block';

    // Auto hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
