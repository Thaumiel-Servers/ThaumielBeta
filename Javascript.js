const body = document.body;
let colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');
if (!colorSchemeMetaTag) {
    colorSchemeMetaTag = document.createElement('meta');
    colorSchemeMetaTag.name = 'color-scheme';
    document.head.appendChild(colorSchemeMetaTag);
}
function adjustParagraphColors(isDark) {
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        const color = window.getComputedStyle(p).color;
        if (color === 'rgb(0, 0, 0)' || color === '#000000' || color === 'rgb(255, 255, 255)' || color === '#ffffff') {
            p.style.color = isDark ? '#ffffff' : '#000000';
        }
    }
}
function adjustButtonStyle(isDark) {
    const staffButton = document.getElementsByClassName('buttonstaff');
    const creditButton = document.getElementsByClassName('buttoncredits');

    function adjustColor(button, originalColor) {
        const color = window.getComputedStyle(button).color;
        if (isDark) {
            button.style.color = '';
        } else if (color === originalColor) {
            button.style.color = '#00008B';
        }
    }

    for (let button of staffButton) {
        adjustColor(button, 'rgb(72, 255, 0)');
    }

    for (let button of creditButton) {
        adjustColor(button, 'rgb(0, 255, 162)');
    }
}
function setTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    body.classList.toggle('light-mode', !isDark);

    const defaultVar = 'var(--default)';
    const darkVar = 'var(--dark)';
    const gradient = isDark
        ? `linear-gradient(to bottom, ${darkVar}, ${darkVar}, #1E90FF, #5F005F)`
        : `linear-gradient(to bottom, ${defaultVar}, ${defaultVar}, #1E90FF, #5F005F)`;

    body.style.background = gradient;

    adjustParagraphColors(isDark);
    adjustButtonStyle(isDark);

    colorSchemeMetaTag.content = isDark ? 'dark' : 'light';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
}
applyTheme();
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            setTheme(!isDarkMode);
        });
    }
});
