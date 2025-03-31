/**
 * Main JavaScript for Muscular System HHS(Human Health System)
 * Author: AI Assistant
 * Version: 2.0
 */

// DOM Elements
const introPopup = document.getElementById('introPopup');
const mainContent = document.getElementById('mainContent');
const creatorName = document.querySelector('.creator-name');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show intro popup and hide main content initially
    if (introPopup && mainContent) {
        introPopup.style.display = 'flex';
        mainContent.style.display = 'none';
        
        // Create and animate loading progress bar
        const loadingBar = document.querySelector('.loading-bar');
        const loadingProgress = document.querySelector('.loading-progress');
        
        if (loadingBar && !loadingProgress) {
            const progress = document.createElement('div');
            progress.classList.add('loading-progress');
            loadingBar.appendChild(progress);
        }

        // After 5 seconds, transition to main content
        setTimeout(() => {
            // Fade out intro popup
            introPopup.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            
            // After the fadeOut animation completes, hide popup and show main content
            setTimeout(() => {
                introPopup.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.animation = 'fadeIn 0.5s ease-in-out forwards';
                
                // Initialize animations for elements that should animate on page load
                initializeAnimations();
                
                // Create background shapes
                createBackgroundShapes();
                
                // Initialize dynamic heading animation
                initializeAnimatedHeading();
            }, 500);
        }, 5000);
    } else {
        // If no intro popup (on pages other than home), initialize directly
        if (mainContent) {
            mainContent.style.display = 'block';
            initializeAnimations();
            createBackgroundShapes();
            initializeAnimatedHeading();
        }
    }

    // Add event listener for menu toggle on mobile
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize 3D effects for elements
    initializeThreeDEffects();
    
    // Initialize parallax effects
    initializeParallax();
    
    // Initialize custom cursor
    if (window.innerWidth > 768) {
        initializeCustomCursor();
    }

    // Call the function when the page loads
    loadImageWithFallbacks();
});

/**
 * Creates and animates dynamic background shapes
 */
function createBackgroundShapes() {
    const bgShapes = document.querySelector('.bg-shapes');
    if (!bgShapes) return;
    
    // Add additional random shapes for a more dynamic background
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.width = `${Math.random() * 100 + 50}px`;
        shape.style.height = shape.style.width;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.opacity = `${Math.random() * 0.1 + 0.05}`;
        shape.style.background = getRandomColor();
        shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        
        bgShapes.appendChild(shape);
    }
}

/**
 * Returns a random color from the theme colors
 */
function getRandomColor() {
    const colors = [
        'var(--primary-color)',
        'var(--secondary-color)',
        'var(--accent-color)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Initializes animations for elements that should be animated as they enter the viewport
 */
function initializeAnimations() {
    // Get all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.card, .step, .function-item, .section-title, .hero-content p, .cta-buttons, .hero-image');
    
    // Create IntersectionObserver to detect when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in viewport
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate');
                // Stop observing element
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 // Trigger when at least 10% of the target is visible
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
        // Add a base class for animations
        element.classList.add('animate-on-scroll');
    });
}

/**
 * Initializes the animated heading with text effects
 */
function initializeAnimatedHeading() {
    const animatedHeading = document.querySelector('.animated-heading');
    if (!animatedHeading) return;
    
    const text = animatedHeading.textContent;
    animatedHeading.innerHTML = '';
    
    Array.from(text).forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.05}s`;
        span.style.opacity = '0';
        span.style.animation = 'fadeInUp 0.5s forwards';
        span.style.display = 'inline-block';
        
        // Add highlight class to specific words if needed
        if (text.indexOf('Muscular') > -1 && 
            index >= text.indexOf('Muscular') && 
            index < text.indexOf('Muscular') + 8) {
            span.classList.add('highlight');
        }
        
        animatedHeading.appendChild(span);
    });
}

/**
 * Initializes 3D effects for buttons and interactive elements
 */
function initializeThreeDEffects() {
    // Apply 3D effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Mouse enter event
        button.addEventListener('mouseenter', function(e) {
            // Calculate the position of the mouse relative to the button
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Apply the transform
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-5px)`;
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        // Mouse move event for dynamic effect
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Add shine effect
            const shine = this.querySelector('.btn-shine') || document.createElement('div');
            if (!shine.classList.contains('btn-shine')) {
                shine.classList.add('btn-shine');
                this.appendChild(shine);
            }
            
            shine.style.top = `${y}px`;
            shine.style.left = `${x}px`;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-5px)`;
        });
        
        // Mouse leave event
        button.addEventListener('mouseleave', function() {
            // Reset transform
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateY(0)';
            this.style.boxShadow = '';
            
            // Remove shine
            const shine = this.querySelector('.btn-shine');
            if (shine) {
                shine.remove();
            }
        });
    });
    
    // Apply enhanced 3D effect to cards
    const cards = document.querySelectorAll('.card, .step, .function-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) translateZ(10px)`;
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            // Make internal elements pop out
            const cardIcon = this.querySelector('.card-icon i, .step-number');
            const cardTitle = this.querySelector('h3');
            const cardText = this.querySelector('p');
            
            if (cardIcon) cardIcon.style.transform = 'translateZ(50px)';
            if (cardTitle) cardTitle.style.transform = 'translateZ(30px)';
            if (cardText) cardText.style.transform = 'translateZ(20px)';
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) translateZ(0)';
            this.style.boxShadow = '';
            this.style.zIndex = '1';
            
            // Reset internal elements
            const cardIcon = this.querySelector('.card-icon i, .step-number');
            const cardTitle = this.querySelector('h3');
            const cardText = this.querySelector('p');
            
            if (cardIcon) cardIcon.style.transform = '';
            if (cardTitle) cardTitle.style.transform = '';
            if (cardText) cardText.style.transform = '';
        });
    });
}

/**
 * Initialize parallax effect for elements with the parallax class
 */
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        // Apply parallax effect to elements with data-speed attribute
        document.querySelectorAll('[data-parallax]').forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax') || 0.2);
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        // Add parallax attribute to some elements if not already set
        document.querySelectorAll('.hero::before, .hero::after, .shape').forEach(element => {
            if (!element.hasAttribute('data-parallax')) {
                const randomSpeed = (Math.random() * 0.2 + 0.1) * (Math.random() > 0.5 ? 1 : -1);
                element.setAttribute('data-parallax', randomSpeed.toString());
            }
        });
    });
}

/**
 * Initialize custom cursor effect
 */
function initializeCustomCursor() {
    // Create custom cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    // Track cursor position
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Add effects when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .step, .function-item, .faq-question');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
        });
    });
}

/**
 * Smooth scroll function for navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

/**
 * Add active class to navigation links based on scroll position
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/**
 * Initialize FAQ accordion functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    faqAnswer.style.maxHeight = '0px';
                });
                
                // Open clicked item if it was closed
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }
});

// Function to attempt loading images from multiple paths
function loadImageWithFallbacks() {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        const paths = img.getAttribute('data-src').split(',');
        
        // Try to load the first path
        img.src = paths[0].trim();
        
        // If the first path fails, try alternative paths
        img.onerror = function() {
            let loaded = false;
            
            // Try each alternative path
            for (let i = 1; i < paths.length; i++) {
                if (!loaded) {
                    const tempImg = new Image();
                    tempImg.onload = function() {
                        img.src = tempImg.src;
                        loaded = true;
                    };
                    tempImg.src = paths[i].trim();
                }
            }
            
            // If all paths fail, use the onerror attribute fallback
            if (!loaded && img.hasAttribute('onerror')) {
                // The default onerror handler will take care of it
            }
        };
    });
} 