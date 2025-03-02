document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let index = 0;

    function moveCarousel() {
        index = (index + 1) % totalSlides; // Garante loop infinito sem erro
        const offset = -index * (slides[0].offsetWidth + 20); // Calcula o deslocamento
        carousel.style.transform = `translateX(${offset}px)`;
    }

    setInterval(moveCarousel, 3000); // Alterna a cada 3s

    // MENU RESPONSIVO
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
