document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile nav after click
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        const expanded = navLinksContainer.classList.contains('active');
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
});