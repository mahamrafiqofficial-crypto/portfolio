import { useEffect, useRef } from "react";

export const ParticlesBg = ({ variant = 'stars' }) => {
    const containerRef = useRef(null);

    const variantConfig = {
        stars:   { color: '#ffd700', count: 60, size: 2, speed: 0.3 },
        bubbles: { color: '#bf5fff', count: 25, size: 8, speed: 0.5 },
        matrix:  { color: '#00ff88', count: 40, size: 3, speed: 1.5 },
        orbs:    { color: '#00e5ff', count: 35, size: 6, speed: 0.4 },
        dots:    { color: '#ffffff', count: 50, size: 1.5, speed: 0.2 },
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const config = variantConfig[variant];
        const particles = [];

        for (let i = 0; i < config.count; i++) {
            const dot = document.createElement('div');
            const size = Math.random() * config.size + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;

            dot.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${config.color};
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                opacity: ${Math.random() * 0.6 + 0.2};
                animation: floatParticle ${duration}s ${delay}s infinite ease-in-out alternate;
                pointer-events: none;
            `;
            container.appendChild(dot);
            particles.push(dot);
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, [variant]);

    return (
        <>
            <style>{`
                @keyframes floatParticle {
                    0%   { transform: translate(0, 0) scale(1); opacity: 0.3; }
                    50%  { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random() * 20 + 5)}px, -${Math.floor(Math.random() * 20 + 5)}px) scale(1.2); opacity: 0.8; }
                    100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                }
            `}</style>
            <div
                ref={containerRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            />
        </>
    );
};