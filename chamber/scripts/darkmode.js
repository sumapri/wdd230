// Get the dark mode toggle switch
const darkModeSwitch = document.getElementById('darkModeSwitch');

// Check if dark mode was previously set in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeSwitch.checked = true;
}

// Add event listener to toggle dark mode
darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');  // Save preference in localStorage
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');  // Save preference in localStorage
    }
});
