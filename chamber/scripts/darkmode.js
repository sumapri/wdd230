document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if dark mode was previously saved in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Show the sun icon if dark mode is enabled
    } else {
        darkModeToggle.textContent = '🌙'; // Show the moon icon if dark mode is not enabled
    }

    // Detect user's system preference for dark mode (optional)
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark && localStorage.getItem('dark-mode') === null) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Default to sun icon if system prefers dark mode
    }

    // Event listener for the dark mode toggle button
    darkModeToggle.addEventListener('click', function() {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Save the dark mode preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Change to sun icon
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Change to moon icon
        }
    });
});
setTimeout(function() {  
    // code here  
  }, 100);

