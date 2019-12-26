const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''; // When we closing the nav make also animation.
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` // We use index to take every single list item and with index / 7(7 seconds) we animated every one of them the first one it show after 0.2s, second after 0.4s etc. Without Index we animated them all togeyher and same.
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();