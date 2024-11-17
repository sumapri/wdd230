// visitMessage.js

document.addEventListener("DOMContentLoaded", function() {
  const visitMessageElement = document.getElementById("visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = Date.now();

  if (!lastVisit) {
      visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

      if (daysSinceLastVisit < 1) {
          visitMessageElement.textContent = "Back so soon! Awesome!";
      } else {
          visitMessageElement.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
      }
  }

  // Store the current visit date in localStorage
  localStorage.setItem("lastVisit", currentVisit);
});
