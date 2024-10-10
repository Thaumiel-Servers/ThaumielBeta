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

function checkDevice() {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.getElementById('smartphoneWarning').style.display = 'block';
    }
}
function closePopup() {
    document.getElementById('smartphoneWarning').style.display = 'none';
}
window.onload = checkDevice;

function checkAnniversary() {
        const today = new Date();
        const anniversaryDate = new Date(today.getFullYear(), 10, 3); // November 3rd. Change to todays date to test. (month 0-11), (day)
        if (today.toDateString() === anniversaryDate.toDateString()) {
            document.getElementById("anniversaryModal").style.display = "block";
        }
    }
    function closeModal() {
        document.getElementById("anniversaryModal").style.display = "none";
    }
    function joinDiscord() {
    const newWindow = window.open('https://discord.gg/EpdARdjq2m', '_blank');
    if (newWindow) newWindow.opener = null;
    }   
    window.onload = checkAnniversary;

    function showPopup() {
            const popup = document.getElementById('welcomePopup');
            popup.style.display = 'block';
        }
        function hidePopup() {
            const popup = document.getElementById('welcomePopup');
            popup.style.display = 'none';
        }
        function dontShowAgain() {
            localStorage.setItem('dontShowPopup', 'true');
            hidePopup();
        }
        window.onload = function() {
            if (!localStorage.getItem('dontShowPopup', 'true')) {
                showPopup();
            }
        }
        document.getElementById('closeBtn').onclick = hidePopup;
        document.getElementById('dontShowAgainBtn').onclick = dontShowAgain;

        const repoOwner = 'Thaumiel-Servers';
        const repoName = 'Thaumielbeta';
        const apiUrl = `https://api.github.com/repos/Thaumiel-Servers/Thaumielbeta/commits`;

        async function checkForUpdates() {
            const lastCommitHash = localStorage.getItem('lastCommitHash');
            let hasNewCommits = false;

            try {
                const response = await fetch(apiUrl);
                const commits = await response.json();

                if (commits.length > 0) {
                    const latestCommit = commits[0].sha;

                    if (!lastCommitHash || lastCommitHash !== latestCommit) {
                        hasNewCommits = true;
                        displayChangelog(commits);
                        localStorage.setItem('lastCommitHash', latestCommit);
                    }
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                showNotification();
            }

            if (!hasNewCommits) {
                console.log("No new updates");
            }
        }

        function displayChangelog(commits) {
            const changelogBox = document.getElementById('changelogBox');
            changelogBox.value = '';

            const latestChanges = commits.slice(0, 1);
            latestChanges.forEach(commit => {
                changelogBox.value += `- ${commit.commit.message}\n`;
            });

            document.getElementById('changelogModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('changelogModal').style.display = 'none';
        }

        function showNotification() {
            const notification = document.getElementById('notificationPopup');
            notification.style.display = 'block';

            setTimeout(() => {
                notification.classList.add('fade-out');
            }, 5000);

            setTimeout(() => {
                notification.style.display = 'none';
                notification.classList.remove('fade-out');
            }, 6000);
        }

        window.onload = checkForUpdates;

// Beta stuffs remove before release
document.getElementById('beta-popup-close').addEventListener('click', function () {
    document.getElementById('beta-popup').style.display = 'none';
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




