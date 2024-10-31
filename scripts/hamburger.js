document.addEventListener("DOMContentLoaded", function() {
	const hamburgerButton = document.getElementById('hamburger');
	const navLinks = document.getElementById('nav-links');

	hamburgerButton.addEventListener('click', function() {
			// Toggle the 'active' class on the nav links
			navLinks.classList.toggle('active');
			
			// Update the aria-expanded attribute
			const isExpanded = navLinks.classList.contains('active');
			hamburgerButton.setAttribute('aria-expanded', isExpanded);
	});
});