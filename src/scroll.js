import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupScroll(camera, scene) {
    // Initial camera setup
    camera.position.set(0, 3, 8);
    camera.rotation.set(0, 0, 0);

    // 1. Scene Animations (Driven by overall scroll)
    // Animate the camera through the z-axis as user scrolls down the page
    gsap.to(camera.position, {
        z: -30, // move deep into the scene
        y: 1,   // float down slightly
        ease: "none",
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // 1.5 seconds of smoothing
        }
    });

    // Slight camera rotation for a cinematic drift effect
    gsap.to(camera.rotation, {
        y: Math.PI * 0.1, // Slight turn
        x: 0.1,
        ease: "none",
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        }
    });

    // 2. HTML Overlay Animations
    const sections = document.querySelectorAll('.panel');

    sections.forEach((section, index) => {
        // Reveal text
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%", // Triggers when top of section hits 70% of viewport down
                    end: "bottom 30%",
                    toggleActions: "play reverse play reverse", // Fade out when leaving
                }
            }
        );
    });
}
