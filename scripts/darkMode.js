// darkMode.js
document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
  if (this.checked) {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
});