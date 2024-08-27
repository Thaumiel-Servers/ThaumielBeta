
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