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

 const button = document.getElementById('theme-toggle');
 const buttonImage = document.getElementById('buttonImage');

 const originalImage = 'light.png';
 const toggledImage = 'Dark.png';

 const savedImageState = localStorage.getItem('buttonImageState');

        if (savedImageState) {
            buttonImage.src = savedImageState;
        } else {
            buttonImage.src = originalImage;
        }

        button.addEventListener('click', () => {
            let currentImage = buttonImage.src.includes(originalImage) ? toggledImage : originalImage;

            buttonImage.src = currentImage;

            localStorage.setItem('buttonImageState', currentImage);
        });
        
        const buttonImageis = document.getElementById('buttonImage');
        const blackSquare1 = document.getElementById('blackSquare1');
        const blackSquare2 = document.getElementById('blackSquare2');

        const darkImage = 'Dark.png';

        function checkAndShowImages() {
            const currentImage = buttonImage.src.split('/').pop();

            if (currentImage === darkImage) {
                console.log('dark.png is the current image. Showing blacksquare images.');
                blackSquare1.style.display = 'block';
                blackSquare2.style.display = 'block';
            } else {
                console.log('dark.png is not the current image.');
                blackSquare1.style.display = 'none';
                blackSquare2.style.display = 'none';

            }
        }


        document.getElementById('theme-toggle').addEventListener('click', checkAndShowImages);

        checkAndShowImages();
function toggleIframe() {
    var iframe = document.getElementById('iframe-display');
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
}
function showPopup() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Show popup if on a mobile device
if (window.innerWidth < 1820) { // You can adjust this width as needed
    showPopup();
}
function showPopup() {
    // Display the popup and overlay
    document.getElementById('popup2').classList.add('active');
    document.getElementById('overlay2').classList.add('active');
}

function closePopup() {
    // Hide the popup and overlay
    document.getElementById('popup2').classList.remove('active');
    document.getElementById('overlay2').classList.remove('active');
}

function checkResolution() {
    if (window.innerWidth > 1900 && window.innerHeight > 1060) {
        showPopup();
    }
}

// Check resolution on page load and resize
window.addEventListener('load', checkResolution);
window.addEventListener('resize', checkResolution);
function adjustZoom() {
    // Get the screen width and height
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Desired resolution
    const targetWidth = 2035;
    const targetHeight = 1010;

    // Calculate zoom factor
    const zoomX = targetWidth / screenWidth;
    const zoomY = targetHeight / screenHeight;
    const zoomFactor = Math.min(zoomX, zoomY);

    // Apply the zoom factor to the page
    document.documentElement.style.setProperty('--zoom-factor', zoomFactor);
}

// Run the adjustZoom function on load
window.onload = adjustZoom;