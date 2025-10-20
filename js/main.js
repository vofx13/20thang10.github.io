// Device detection and scaling
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTablet = /tablet|ipad|playbook|silk/i.test(userAgent);
    
    if (isMobile && !isTablet) {
        document.body.classList.add('mobile');
        console.log('Mobile device detected - applying mobile scaling');
    } else if (isTablet) {
        document.body.classList.add('tablet');
        console.log('Tablet device detected - applying tablet scaling');
    } else {
        document.body.classList.add('desktop');
        console.log('Desktop device detected - using default scaling');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    detectDevice();
    
    // Remove not-loaded class to start animations
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 1000);

    // Set title text with typing effect
    const titleElement = document.getElementById('title');
    const titleText = "Chúc mừng ngày phụ nữ Việt Nam 20/10";
    let index = 0;

    function typeTitle() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeTitle, 1500);
});

// Handle orientation changes for mobile devices
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        location.reload();
    }, 500);
});

// Handle window resize
window.addEventListener('resize', function() {
    // You can add responsive behavior here if needed
});