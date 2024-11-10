document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider > div');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Add active class to current slide
        slides[index].classList.add('active');
    }

    // Show first slide initially
    showSlide(currentSlide);

    // Function for next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function for previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add click events to arrows
    if (leftArrow) leftArrow.addEventListener('click', prevSlide);
    if (rightArrow) rightArrow.addEventListener('click', nextSlide);

    // Auto advance slides every 3 seconds
    setInterval(nextSlide, 3000);
});