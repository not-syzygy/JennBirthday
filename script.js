document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('section1').classList.add('active');
    startSlideshow();
});

function nextSection(sectionId) {
    const currentSection = document.querySelector('.content.active');
    const nextSection = document.getElementById(sectionId);
    
    if (currentSection) {
        currentSection.classList.remove('active');
    }
    
    if (nextSection) {
        nextSection.classList.add('active');
    }
}

function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    slides[currentSlide].style.display = 'block';

    setInterval(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }, 3000);
}
