document.addEventListener("DOMContentLoaded", function () {
    function showProfile(){
        let profileElement = document.getElementById('profile-card');
        let currentDisplay = profileElement.style.display;
        if(currentDisplay === "none"){
            profileElement.style.display = "flex";
        } else {
            profileElement.style.display = "none";
        }
    }
    
    const profile_btn = document.getElementById('profile-container');
    profile_btn.addEventListener('click', showProfile);
});



