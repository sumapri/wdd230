function updateFooterDates() {
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  const copyrightElement = document.querySelector('footer p');
  copyrightElement.textContent = `© ${currentYear} ::: Sumara Prieto, Missouri :::`;

  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.textContent = `Last Updated: ${lastModified}`;
}

document.addEventListener('DOMContentLoaded', updateFooterDates);

