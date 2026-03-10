document.addEventListener('DOMContentLoaded', () => {

    // Используем делегирование событий — это самый надежный способ
    document.addEventListener('click', (event) => {
        // Проверяем, что нажатый элемент содержит нужный класс
        if (event.target.classList.contains('btn-primary')) {
            console.log('Кнопка нажата!');
            if (typeof ym !== "undefined") {
                ym(107245981, 'reachGoal', 'click_try_service');
                console.log('Цель click_try_service отправлена в Метрику');
            } else {
                console.warn('Метрика (ym) не найдена. Проверьте блокировщики рекламы.');
            }
        }
    });

    // ... остальной код (меню, скролл и т.д.)
});


    // --- Mobile Menu Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    const navCta = document.querySelector('.nav-cta');
    const header = document.querySelector('header');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('active');
            navCta.classList.toggle('active');
            navToggle.classList.toggle('open');
            
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 20, 38, 0.98)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
        } else {
            header.style.backgroundColor = 'rgba(11, 20, 38, 0.9)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (desktopNav && desktopNav.classList.contains('active')) {
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
