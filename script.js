// --- Intersection Observer for Scroll Animations ---
document.addEventListener('DOMContentLoaded', () => {
    // Nav bar background change on scroll
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine if there's a staggered delay (like in projects grid)
                const delay = entry.target.style.getPropertyValue('--delay') || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

// --- Dynamic Canvas Particles Background ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
        // Determine color based on deep purple / cyan palette
        const colors = ['rgba(0, 240, 255, 0.4)', 'rgba(112, 0, 255, 0.4)', 'rgba(255, 255, 255, 0.2)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges smoothly
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    
    let particleCount = (canvas.width * canvas.height) / 10000;
    if (particleCount > 200) particleCount = 200; // Cap particles for performance
    
    for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Optional: draw lines between close particles (constellation effect)
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 - distance/800})`; // Fades based on distance
                ctx.lineWidth = 0.5;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    initParticles();
});

// Initialize canvas and animation loop
initParticles();
animateParticles();

// --- Glitch Text Effect Hover ---
const glitchText = document.querySelector('.glitch-subtitle');
if (glitchText) {
    setInterval(() => {
        if(Math.random() > 0.95) {
            glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            glitchText.style.textShadow = `
                ${Math.random() * 10 - 5}px 0 rgba(255,0,255,0.7), 
                ${Math.random() * -10 + 5}px 0 rgba(0,255,255,0.7)
            `;
            
            setTimeout(() => {
                glitchText.style.transform = 'translate(0,0)';
                glitchText.style.textShadow = 'none';
            }, 50);
        }
    }, 200);
}
