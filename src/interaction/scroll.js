import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { zones } from '../world/zones.js';

gsap.registerPlugin(ScrollTrigger);

export function setupScroll(camera, scene) {
    // Start camera slightly back from the first zone (hero is z:0)
    camera.position.set(0, 3, 8);
    camera.rotation.set(0, 0, 0);

    // Z-axis scroll bounds based on zones map
    const minZ = 8;
    const maxZ = zones[zones.length - 1].z - 5; // Go a bit past contact zone

    // Continuous cinematic camera drift based on scroll position
    gsap.to(camera.position, {
        z: maxZ,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
            onUpdate: (self) => {
                // Continuous drift connected to Z position
                const currentZ = camera.position.z;
                camera.position.x = Math.sin(currentZ * 0.15) * 2;
                camera.position.y = 4 + Math.sin(currentZ * 0.08) * 0.5;

                // Keep the camera looking slightly forward
                camera.rotation.y = Math.sin(currentZ * 0.05) * 0.1;
                camera.rotation.x = Math.sin(currentZ * 0.03) * 0.05;
            }
        }
    });

    // UI Panel Fade-ins
    const sections = document.querySelectorAll('.panel');
    sections.forEach((section) => {
        gsap.fromTo(section,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    });
}
