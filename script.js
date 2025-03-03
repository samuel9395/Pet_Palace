document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let index = 0;
    let direction = 1; // 1 para frente, -1 para trás

    function moveCarousel() {
        index += direction;

        // Inverter direção ao atingir as extremidades
        if (index >= totalSlides - 4) {
            direction = -1;
        } else if (index <= 0) {
            direction = 1;
        }

        const offset = -index * (slides[0].offsetWidth + 20); // Considera a margem entre slides
        carousel.style.transform = `translateX(${offset}px)`;
    }

    setInterval(moveCarousel, 2000); // Ajuste o tempo conforme necessário


    // MENU RESPONSIVO
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
