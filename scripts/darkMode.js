// Select the dark mode checkbox
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode', darkModeCheckbox.checked);
}

// Event listener for checkbox change
darkModeCheckbox.addEventListener('change', toggleDarkMode);

// Optional: Initialize dark mode based on saved preference in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    darkModeCheckbox.checked = true;
    document.body.classList.add('dark-mode');
}

// Save the user's preference to local storage
darkModeCheckbox.addEventListener('change', function() {
    if (darkModeCheckbox.checked) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});