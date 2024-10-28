<script>
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');
    const weatherCard = document.querySelector('.weather-card');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        if (weatherCard) weatherCard.classList.toggle('dark-mode');
    });
</script>
if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        if (weatherCard) weatherCard.classList.toggle('dark-mode');
    });
}
