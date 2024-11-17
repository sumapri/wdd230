// formDate.js

document.addEventListener("DOMContentLoaded", function() {
  const formDate = document.getElementById("formDate");
  const currentDate = Date.now();
  formDate.value = currentDate; // Set the current date/time (milliseconds)
});
