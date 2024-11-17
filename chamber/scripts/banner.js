// banner.js

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('event-banner');
  const closeButton = document.getElementById('close-banner');

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Show the banner on Monday, Tuesday, and Wednesday (1, 2, 3)
  if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
      banner.classList.remove('hidden');
  } else {
      banner.classList.add('hidden');
  }

  // Close the banner when the close button is clicked
  closeButton.addEventListener('click', () => {
      banner.classList.add('hidden');
      // Optionally, you can store a flag in localStorage to remember that the user closed it
      localStorage.setItem('bannerClosed', 'true');
  });

  // If the user previously closed the banner, hide it
  if (localStorage.getItem('bannerClosed') === 'true') {
      banner.classList.add('hidden');
  }
});
