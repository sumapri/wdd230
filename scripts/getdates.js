
document.addEventListener("DOMContentLoaded", function() {
  function getCopyrightYear() {
      const year = new Date().getFullYear();
      return ` ${year}`;
  }
  document.getElementById("cYear").innerHTML = getCopyrightYear();
  
  
 