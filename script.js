document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
            const distance = targetPosition - startPosition;
            const duration = 1000; // Adjust the duration (in milliseconds) for the animation
            
            let startTime = null;

            function step(timestamp) {
                if (!startTime) {
                    startTime = timestamp;
                }

                const progress = Math.min((timestamp - startTime) / duration, 1);
                window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            }

            requestAnimationFrame(step);
        }
    });
});

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

  document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var scrollButton = document.querySelector('.scroll-to-top-button');
    
    // Add a scroll event listener to track the user's position
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > window.innerHeight) {
        // If the user scrolls down beyond the height of the viewport, show the button
        scrollButton.style.display = 'block';
      } else {
        // If the user is at the top of the page, hide the button
        scrollButton.style.display = 'none';
      }
    });
  });

  // Function to store the scroll position
  function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  }

  // Function to restore the scroll position
  function restoreScrollPosition() {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
      sessionStorage.removeItem('scrollPosition'); // Remove the stored position
    }
  }
  
 

