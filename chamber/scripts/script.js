// Select the DOM elements for output
const yearCopyright = document.querySelector("#currentYear");
const pageLastModified = document.querySelector("#lastModified");
const navbar = document.getElementById('navigation');
const hamburger = document.getElementById('hamburger'); // Ensure hamburger is defined

// Set the current year and last modified date dynamically
yearCopyright.textContent = new Date().getFullYear();
pageLastModified.textContent = document.lastModified; // Consider formatting if necessary

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open'); // Toggles the 'open' class for the navigation
});
