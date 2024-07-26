// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.documentElement.classList.add('dark');
    }
    
    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled');
      }
    });
  });
  