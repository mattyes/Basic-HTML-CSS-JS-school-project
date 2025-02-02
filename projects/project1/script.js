const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = 
    document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});