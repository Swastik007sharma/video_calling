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
});



