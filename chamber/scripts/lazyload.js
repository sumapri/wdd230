// lazyload.js

document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");

  const lazyLoad = () => {
      const windowHeight = window.innerHeight;
      lazyImages.forEach((img) => {
          const rect = img.getBoundingClientRect();
          if (rect.top <= windowHeight && rect.bottom >= 0) {
              // Replace data-src with src and remove lazy class
              img.src = img.getAttribute("data-src");
              img.classList.remove("lazy");
          }
      });
  };

  // Initial load
  lazyLoad();

  // Event listener to trigger lazy loading on scroll
  window.addEventListener("scroll", lazyLoad);
});
