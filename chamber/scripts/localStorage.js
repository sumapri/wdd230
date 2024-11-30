// Check if last visit date is stored in localStorage  
let lastVisit = localStorage.getItem('lastVisit');  
let message = '';  
  
if (!lastVisit) {  
  // First time visit  
  message = "Welcome! Let us know if you have any questions.";  
} else {  
  // Calculate time difference in days  
  let now = Date.now();  
  let lastVisitDate = new Date(parseInt(lastVisit));  
  let diffInTime = now - lastVisitDate;  
  let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));  
  
  if (diffInDays < 1) {  
   // Less than a day  
   message = "Back so soon! Awesome!";  
  } else {  
   // More than a day  
   message = `You last visited ${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago.`;  
  }  
}  
  
// Display the message in the sidebar  
let visitMessageDiv = document.getElementById('visitMessage');  
if (visitMessageDiv) {  
  visitMessageDiv.innerHTML = `<p>${message}</p>`;  
} else {  
  let sidebar = document.querySelector('.sidebar');  
  let visitMessageHtml = `<div id="visitMessage"><p>${message}</p></div>`;  
  sidebar.innerHTML = visitMessageHtml + sidebar.innerHTML;  
}  
  
// Store the current visit date in localStorage  
localStorage.setItem('lastVisit', Date.now().toString());
