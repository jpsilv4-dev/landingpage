// ===== SMOOTH SCROLL & NAVBAR BEHAVIOR =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .specialty-card, .timeline-content, .stat').forEach(el => {
    observer.observe(el);
});

// ===== PARTICLES ANIMATION =====
function createFloatingParticles() {
    const heroSection = document.querySelector('.hero');
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.1), rgba(157, 78, 221, 0.1));
            border-radius: 50%;
            filter: blur(40px);
            animation: float ${Math.random() * 10 + 15}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 0;
        `;
        
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        heroSection.appendChild(particle);
    }
}

createFloatingParticles();

// ===== CURSOR GLOW EFFECT =====
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    // Animate interactive elements on mouse move
    const interactiveElements = document.querySelectorAll('.tech-item, .specialty-card, .stat, .social-btn');
    
    interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(Math.pow(x - elCenterX, 2) + Math.pow(y - elCenterY, 2));
        
        if (distance < 150) {
            el.style.cursor = 'pointer';
        }
    });
});

// ===== SCROLL PROGRESS INDICATOR =====
window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    // You can add a progress bar here if desired
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
});

// ===== EMAIL & SOCIAL LINKS UPDATE =====
// Replace these with your actual information
function updateContactInfo() {
    const emailLink = document.querySelector('.contact-item a[href^="mailto:"]');
    const githubLink = document.querySelector('.contact-item a[href*="github"]');
    const linkedinLink = document.querySelector('.social-btn[href*="linkedin"]');
    const twitterLink = document.querySelector('.social-btn[href*="twitter"]');
    const headerGithub = document.querySelector('.social-btn[href*="github"]');

    // Update with your actual information
    // emailLink.href = 'mailto:seu.email@example.com';
    // emailLink.textContent = 'seu.email@example.com';
    
    // githubLink.href = 'https://github.com/seu-usuario';
    // githubLink.textContent = 'github.com/seu-usuario';
    
    // linkedinLink.href = 'https://linkedin.com/in/seu-usuario';
    // twitterLink.href = 'https://twitter.com/seu-usuario';
    // headerGithub.href = 'https://github.com/seu-usuario';
}

updateContactInfo();

// ===== TECH STACK HOVER EFFECT =====
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// ===== TIMELINE STAGGERED ANIMATION =====
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `slideIn 0.6s ease-out forwards`;
    item.style.animationDelay = `${index * 0.2}s`;
});

// ===== SPECIALTY CARDS GRID ANIMATION =====
const specialtyCards = document.querySelectorAll('.specialty-card');
specialtyCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===== ADD CSS ANIMATIONS DYNAMICALLY =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    /* Mobile Menu Styles */
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: rgba(10, 14, 39, 0.98);
        padding: 2rem;
        border-top: 1px solid var(--border);
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(9px, -9px);
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== PERFORMANCE: Lazy load images if any =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== LOG INITIALIZATION =====
console.log('Portfolio website loaded successfully!');
