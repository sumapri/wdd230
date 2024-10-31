// darkMode.js

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Optionally, change the button text/icon based on the mode
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️'; // Change to sun icon
        } else {
            darkModeToggle.textContent = '🌙'; // Change to moon icon
        }
    });
});