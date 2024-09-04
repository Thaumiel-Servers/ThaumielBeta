function toggleIframe() {
    var iframe = document.getElementById('iframe-display');

    // Check if the user is on a mobile device
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Redirect to a different URL if on a phone
        window.location.href = 'https://forms.gle/kyjRRA4xEhLH1s3Z8';
    } else {
        // Toggle iframe display for non-mobile devices
        if (iframe.style.display === 'none') {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    }
}

function togglePluginIframe() {
    var iframe = document.getElementById('iframe-display');

    // Check if the user is on a mobile device
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Redirect to a different URL if on a phone
        window.location.href = 'Google.com';
    } else {
        // Toggle iframe display for non-mobile devices
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

    // Function to set theme
    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            themeIcon.src = 'light.png'; // Show light icon for dark theme
            themeToggleButton.setAttribute('aria-label', 'Switch to Light Theme');
        } else {
            themeIcon.src = 'Dark.png'; // Show dark icon for light theme
            themeToggleButton.setAttribute('aria-label', 'Switch to Dark Theme');
        }
        localStorage.setItem('theme', theme);
    }

    // Check for a saved theme in localStorage and set it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light theme if no preference is saved
        setTheme('light');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});

async function translateWebsite(targetLang) {
    const elements = document.querySelectorAll('p, h1, h2, h3, span, div, li, blockquote, section, article');

    for (let element of elements) {
        element.childNodes.forEach(async (node) => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
                const response = await fetch('https://api-free.deepl.com/v2/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        auth_key: 'f6fc81c9-b17a-4a01-838b-1c1fc9369f88:fx',
                        text: node.nodeValue.trim(),
                        target_lang: targetLang
                    })
                });

                const result = await response.json();
                node.nodeValue = result.translations[0].text;
            }
        });
    }
}
// Beta stuffs remove before release
document.getElementById('beta-popup-close').addEventListener('click', function () {
    document.getElementById('beta-popup').style.display = 'none';
});
        