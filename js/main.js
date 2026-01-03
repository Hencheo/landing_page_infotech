// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

// Open mobile menu with stagger animation
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    document.body.classList.add('overflow-hidden');

    // Stagger animation for menu links
    const menuLinks = mobileMenu.querySelectorAll('nav a');
    menuLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.4s ease-out';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 100 + (index * 100));
    });
});

// Close mobile menu
menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    document.body.classList.remove('overflow-hidden');
});

// Close menu when clicking on links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        document.body.classList.remove('overflow-hidden');
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL STATE
// ============================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('shadow-lg');
        header.classList.remove('border-b', 'border-slate-800');
    } else {
        header.classList.remove('shadow-lg');
        header.classList.add('border-b', 'border-slate-800');
    }

    lastScroll = currentScroll;
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');

            // Trigger counter animation for stats
            if (entry.target.hasAttribute('data-counter')) {
                animateCounter(entry.target);
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('section, .grid > div, .space-y-4 > li');

    elementsToAnimate.forEach((el, index) => {
        // Add initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        // Stagger animation delay
        setTimeout(() => {
            observer.observe(el);
        }, index * 50);
    });

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (element.getAttribute('data-suffix') || '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.getAttribute('data-suffix') || '');
        }
    };

    updateCounter();
}

// ============================================
// WHATSAPP BUTTON PULSE EFFECT
// ============================================
const whatsappBtn = document.querySelector('a[href*="wa.me"]');
if (whatsappBtn && whatsappBtn.classList.contains('fixed')) {
    // Initial bounce after page load
    setTimeout(() => {
        whatsappBtn.style.animation = 'bounce 1s ease-in-out';
        setTimeout(() => {
            whatsappBtn.style.animation = '';
        }, 1000);
    }, 2000);

    // Periodic subtle pulse
    setInterval(() => {
        whatsappBtn.classList.add('animate-pulse-ring');
        setTimeout(() => {
            whatsappBtn.classList.remove('animate-pulse-ring');
        }, 2000);
    }, 8000);
}

// ============================================
// CARD HOVER ENHANCEMENTS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grid > div');

    cards.forEach(card => {
        const icon = card.querySelector('i[data-lucide]');

        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotate(6deg)';
                icon.style.transition = 'transform 0.3s ease-out';
            });

            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });
});
