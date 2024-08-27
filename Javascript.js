document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function setTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        body.classList.toggle('light-mode', !isDark);

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

    const buttonImage = document.getElementById('buttonImage');
    if (buttonImage) {
        buttonImage.addEventListener('click', () => {
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