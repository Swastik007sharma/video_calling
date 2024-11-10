document.addEventListener("DOMContentLoaded", function () {
    const profileCard = document.getElementById('profile-card');
    const profileContainer = document.getElementById('profile-container');
    
    function toggleProfile(e) {
        e.stopPropagation();
        let currentDisplay = profileCard.style.display;
        profileCard.style.display = currentDisplay === "none" || currentDisplay === "" ? "flex" : "none";
    }
    
    // Close profile card when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileContainer.contains(e.target)) {
            profileCard.style.display = "none";
        }
    });
    
    profileContainer.addEventListener('click', toggleProfile);

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    });
});



