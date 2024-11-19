function toggleIframe() {
    const iframe = document.getElementById('iframe-display');
    if (!iframe) return;  // If its null return
    
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = 'https://forms.gle/kyjRRA4xEhLH1s3Z8';
    } else {
        iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (!themeToggleButton || !themeIcon) return;  // If either is null return

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            themeIcon.src = 'light.png';
            themeToggleButton.setAttribute('aria-label', 'Switch to Light Theme');
        } else {
            themeIcon.src = 'Dark.png';
            themeToggleButton.setAttribute('aria-label', 'Switch to Dark Theme');
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    const navButtons = {
        '.buttonstaff': 'staff.html',
        '.buttonsupport': 'support.html',
        '.buttoncontact': 'contact.html',
        '.buttoncredits': 'credits.html',
        '.buttonhistory': 'History.html',
        '.buttonbacktop': 'index.html',
        '.buttonhome': 'index.html',
        '.buttonstaffback': 'staff.html'
    };

    Object.entries(navButtons).forEach(([selector, url]) => {
        document.querySelector(selector)?.addEventListener('click', () => window.location.href = url);
    });
});
