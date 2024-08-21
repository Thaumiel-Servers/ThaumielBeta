const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');

function setTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    body.classList.toggle('light-mode', !isDark);
    
    const defaultVar = 'var(--default)';
    const darkVar = 'var(--dark)';
    const gradient = isDark
        ? `linear-gradient(to bottom, ${darkVar}, ${darkVar}, #1E90FF, #5F005F)`
        : `linear-gradient(to bottom, ${defaultVar}, ${defaultVar}, #1E90FF, #5F005F)`;
    
    body.style.background = gradient;

    if (colorSchemeMetaTag) {
        colorSchemeMetaTag.content = isDark ? 'dark' : 'light';
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    setTheme(!isDarkMode);
});

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');
