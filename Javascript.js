const body = document.body;
let colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');
if (!colorSchemeMetaTag) {
    colorSchemeMetaTag = document.createElement('meta');
    colorSchemeMetaTag.name = 'color-scheme';
    document.head.appendChild(colorSchemeMetaTag);
}

function isPhone() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
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

    document.documentElement.style.height = '100%';
    body.style.height = '100%';

    const defaultVar = 'var(--default)';
    const darkVar = 'var(--dark)';
    const gradient = isDark
        ? `linear-gradient(to bottom, ${darkVar}, ${darkVar}, #1E90FF, #5F005F 100%)`
        : `linear-gradient(to bottom, ${defaultVar}, ${defaultVar}, #1E90FF, #5F005F 100%)`;

    body.style.background = gradient;
    body.style.backgroundSize = 'cover'; // Ensure gradient covers the entire body
    body.style.backgroundRepeat = 'no-repeat'; // Prevent background from repeating
    body.style.backgroundAttachment = 'fixed'; // Ensure the background is fixed relative to the viewport

    body.style.margin = '0';
    body.style.padding = '0';

    adjustParagraphColors(isDark);
    adjustButtonStyle(isDark);

    colorSchemeMetaTag.content = isDark ? 'dark' : 'light';

    const buttonImage = document.getElementById('buttonImage');
    if (buttonImage) {
        buttonImage.src = isDark ? 'dark.png' : 'light.png';
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
}

applyTheme();

document.addEventListener('DOMContentLoaded', () => {
    const buttonImage = document.getElementById('buttonImage');
    if (buttonImage) {
        buttonImage.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            setTheme(!isDarkMode);
        });
    }
});


        checkAndShowImages();
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
        
function adjustZoom() {
    const targetWidth = 1920;
    const targetHeight = 1010;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Only apply scaling if the viewport width is greater than 600px
    if (viewportWidth > 600) {
        // Calculate the required scale factor to match the target resolution
        const scaleX = targetWidth / viewportWidth;
        const scaleY = targetHeight / viewportHeight;
        const scale = Math.min(scaleX, scaleY); // Use the smaller scale to fit within bounds

        // Apply the scale to the content
        const content = document.querySelector('.content');
        content.style.transform = `scale(${scale})`;

        // Adjust the size of the content container to match the target resolution
        content.style.width = `${targetWidth / scale}px`;
        content.style.height = `${targetHeight / scale}px`;
    }
}

// Adjust zoom on page load and when resizing
window.addEventListener('load', adjustZoom);
window.addEventListener('resize', adjustZoom);
// :3