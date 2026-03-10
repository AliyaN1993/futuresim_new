document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    const navCta = document.querySelector('.nav-cta');
    const header = document.querySelector('header');

    // Simple mobile menu function
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('active');
            navCta.classList.toggle('active');
            navToggle.classList.toggle('open');
            // Basic styles applied via JS for brevity
            if (desktopNav.classList.contains('active')) {
                desktopNav.style.display = 'flex';
                desktopNav.style.flexDirection = 'column';
                desktopNav.style.position = 'absolute';
                desktopNav.style.top = '80px';
                desktopNav.style.left = '0';
                desktopNav.style.width = '100%';
                desktopNav.style.backgroundColor = 'rgba(11, 20, 38, 0.95)';
                desktopNav.style.padding = '20px';
                desktopNav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
            } else {
                desktopNav.style.display = 'none';
            }
        });
    }

    // --- Header Scroll Effect ---
    // Makes the header less transparent when the user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 20, 38, 0.98)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
        } else {
            header.style.backgroundColor = 'rgba(11, 20, 38, 0.9)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });

    // --- Smooth Scrolling For Anchor Links ---
    // Standard behavior for modern browsers, but ensures smooth experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu on link click
            if (desktopNav.classList.contains('active')) {
                desktopNav.classList.remove('active');
                navToggle.classList.remove('open');
                desktopNav.style.display = 'none';
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
