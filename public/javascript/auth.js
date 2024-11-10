document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => {
                f.classList.remove('active');
                f.style.display = 'none';
            });

            tab.classList.add('active');
            const formId = `${tab.dataset.tab}-form`;
            const form = document.getElementById(formId);
            form.style.display = 'block';
            void form.offsetWidth;
            form.classList.add('active');
        });
    });

    // Handle Sign In
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = signinForm.querySelector('input[name="email"]').value;
        const password = signinForm.querySelector('input[name="password"]').value;

        try {
            const response = await fetch('/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                window.location.href = '/home';
            } else {
                const data = await response.json();
                alert(data.message || 'Sign in failed');
            }
        } catch (error) {
            console.error('Sign in error:', error);
            alert('Sign in failed. Please try again.');
        }
    });

    // Handle Sign Up
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('input[name="name"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;
        const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                window.location.href = '/home';
            } else {
                const data = await response.json();
                alert(data.message || 'Sign up failed');
            }
        } catch (error) {
            console.error('Sign up error:', error);
            alert('Sign up failed. Please try again.');
        }
    });
});
