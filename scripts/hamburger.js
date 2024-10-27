// hamburger.js

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const navLinks = document.getElementById('nav-links');

	hamburger.addEventListener('click', function () {
			navLinks.classList.toggle('active'); // Toggle the active class
			if (navLinks.classList.contains('active')) {
					hamburger.textContent = '✖'; // Change to 'X' when menu is open
			} else {
					hamburger.textContent = '☰'; // Change back to hamburger icon
			}
	});
});
// darkMode.js

document.addEventListener('DOMContentLoaded', function () {
	const darkModeToggle = document.getElementById('dark-mode-checkbox');

	// Check local storage for dark mode preference
	if (localStorage.getItem('darkMode') === 'enabled') {
			document.body.classList.add('dark-mode');
			darkModeToggle.checked = true; // Set toggle to checked
	}

	darkModeToggle.addEventListener('change', function () {
			if (this.checked) {
					document.body.classList.add('dark-mode');
					localStorage.setItem('darkMode', 'enabled'); // Save preference
			} else {
					document.body.classList.remove('dark-mode');
					localStorage.setItem('darkMode', 'disabled'); // Save preference
			}
	});
});