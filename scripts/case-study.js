/**
 * Case Study JavaScript for Muscular System HHS(Human Health System)
 * Author: AI Assistant
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAppearAnimations();
    
    // Initialize flip card functionality
    initializeFlipCards();
    
    // Handle profile card flip
    initializeProfileCard();
    
    // Initialize timeline animations
    initializeTimeline();
});

/**
 * Initialize appear animations for elements as they enter the viewport
 */
function initializeAppearAnimations() {
    // Get all elements with appear-animation class
    const animatedElements = document.querySelectorAll('.appear-animation');
    
    // Create IntersectionObserver to detect when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in viewport
            if (entry.isIntersecting) {
                // Add animated class
                entry.target.classList.add('animated');
                // Stop observing element
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2, // Trigger when at least 20% of the target is visible
        rootMargin: '0px 0px -100px 0px' // Trigger before element is fully in view
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize flip card functionality
 */
function initializeFlipCards() {
    // Add click event listeners to flip cards
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        const cardInner = card.querySelector('.flip-card-inner');
        let isFlipped = false;
        
        card.addEventListener('click', () => {
            if (!isFlipped) {
                cardInner.style.transform = 'rotateY(180deg)';
                isFlipped = true;
            } else {
                cardInner.style.transform = 'rotateY(0deg)';
                isFlipped = false;
            }
        });
    });
}

/**
 * Initialize profile card functionality
 */
function initializeProfileCard() {
    const profileCard = document.querySelector('.profile-card');
    const profileCardInner = document.querySelector('.profile-card-inner');
    const flipBackBtn = document.querySelector('.flip-back-btn');
    
    if (profileCard && flipBackBtn) {
        // Track card flip state
        let isFlipped = false;
        
        // Add click event listener to profile card
        profileCard.addEventListener('click', () => {
            if (!isFlipped) {
                profileCardInner.style.transform = 'rotateY(180deg)';
                isFlipped = true;
            }
        });
        
        // Add click event listener to flip back button
        flipBackBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            profileCardInner.style.transform = 'rotateY(0deg)';
            isFlipped = false;
        });
        
        // Add 3D hover effect to profile card (only when not flipped)
        profileCard.addEventListener('mousemove', (e) => {
            if (!isFlipped) {
                const rect = profileCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                
                profileCardInner.style.transform = 
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        // Reset transform on mouse leave (only when not flipped)
        profileCard.addEventListener('mouseleave', () => {
            if (!isFlipped) {
                profileCardInner.style.transform = 'rotateX(0) rotateY(0)';
            } else {
                profileCardInner.style.transform = 'rotateY(180deg)';
            }
        });
    }
}

/**
 * Initialize timeline animations
 */
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create IntersectionObserver to detect when timeline items enter viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in viewport
            if (entry.isIntersecting) {
                // Add animated class with a delay based on index
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, Array.from(timelineItems).indexOf(entry.target) * 200);
                
                // Stop observing element
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Add hover effect to timeline items
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add hover class to content
            item.querySelector('.timeline-content').style.transform = 'translateY(-10px)';
            item.querySelector('.timeline-content').style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            // Remove hover class from content
            item.querySelector('.timeline-content').style.transform = '';
            item.querySelector('.timeline-content').style.boxShadow = '';
        });
    });
}

/**
 * Add parallax effect to hero section
 */
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.case-study-hero');
    const scrollPosition = window.pageYOffset;
    
    if (heroSection) {
        // Move background elements at different speeds
        heroSection.style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
        
        // Move hero content at a different speed
        const heroContent = heroSection.querySelector('.case-study-hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    }
});

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Add particle effect to the hero section
 */
function createParticles() {
    const heroSection = document.querySelector('.case-study-hero');
    
    if (!heroSection) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.zIndex = '0';
    
    heroSection.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 71, 87, 0.2)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        particleContainer.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(100px, 50px) rotate(90deg);
            }
            50% {
                transform: translate(50px, 100px) rotate(180deg);
            }
            75% {
                transform: translate(-50px, 50px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize particle effect
createParticles(); 