function toggleIframe() {
    var iframe = document.getElementById('iframe-display');

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = 'https://forms.gle/kyjRRA4xEhLH1s3Z8';
    } else {
        if (iframe.style.display === 'none') {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

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

    body.classList.add('no-transition');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }

    setTimeout(() => {
        body.classList.remove('no-transition');
    }, 50);

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    window.addEventListener('beforeunload', () => {
        body.classList.add('no-transition');
    });
});

document.querySelector('.buttonstaff').addEventListener('click', function() {
    window.location.href = 'staff.html';
});
document.querySelector('.buttonsupport').addEventListener('click', function() {
    window.location.href = 'support.html';
});
document.querySelector('.buttoncontact').addEventListener('click', function() {
    window.location.href = 'contact.html';
});
document.querySelector('.buttoncredits').addEventListener('click', function() {
    window.location.href = 'credits.html';
});
document.querySelector('.buttonhistory').addEventListener('click', function() {
    window.location.href = 'History.html';
});

document.querySelector('.buttonbacktop').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.querySelector('.buttonhome').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.querySelector('.buttonstaffback').addEventListener('click', function() {
    window.location.href = 'staff.html';
});




