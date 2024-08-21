const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Detect system preference and set initial theme
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
body.classList.add(isSystemDark ? 'dark-mode' : 'light-mode');
