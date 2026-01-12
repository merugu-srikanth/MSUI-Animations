import React, { useMemo } from 'react';

const PreviewRenderer = ({ code, htmlCode }) => {

    // Allow either prop name
    const finalCode = code || htmlCode || '';

    // We construct a full HTML document for the iframe
    // ensuring we load Tailwind via CDN for the arbitrary values to work
    const srcDoc = useMemo(() => {
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script>
                        tailwind.config = {
                            theme: {
                                extend: {
                                    colors: {
                                        brand: {
                                            primary: '#FA8520',
                                            dark: '#121212',
                                            secondary: '#322720'
                                        }
                                    },
                                    animation: {
                                        'glow': 'glow 2s ease-in-out infinite',
                                        'float': 'float 3s ease-in-out infinite',
                                        'pulse-soft': 'pulse-soft 1.5s ease-in-out infinite',
                                        'shimmer': 'shimmer 2s linear infinite',
                                        'wave': 'wave 1.5s linear infinite',
                                        'border-flow': 'borderFlow 3s linear infinite',
                                    },
                                    keyframes: {
                                        'glow': {
                                            '0%, 100%': { 'box-shadow': '0 0 10px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)' },
                                            '50%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' }
                                        },
                                        'float': {
                                            '0%, 100%': { transform: 'translateY(0)' },
                                            '50%': { transform: 'translateY(-5px)' }
                                        },
                                        'pulse-soft': {
                                            '0%, 100%': { opacity: 1 },
                                            '50%': { opacity: 0.7 }
                                        },
                                        'shimmer': {
                                            '0%': { backgroundPosition: '-200px 0' },
                                            '100%': { backgroundPosition: 'calc(200px + 100%) 0' }
                                        },
                                        'wave': {
                                            '0%': { transform: 'translateX(-100%)' },
                                            '100%': { transform: 'translateX(100%)' }
                                        },
                                        'borderFlow': {
                                            '0%, 100%': { backgroundPosition: '0% 50%' },
                                            '50%': { backgroundPosition: '100% 50%' }
                                        }
                                    },
                                    backgroundImage: {
                                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                                        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                                    }
                                }
                            }
                        }
                    </script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet">
                    <style>
                        body {
                            background-color: transparent;
                            margin: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            color: white;
                            font-family: sans-serif;
                            padding: 0;
                        }
                        .input-border-animation {
                            background: linear-gradient(90deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
                            background-size: 400% 100%;
                            animation: borderFlow 3s linear infinite;
                        }
                        .ripple-effect { position: relative; overflow: hidden; }
                        .ripple-effect::after { content: ''; position: absolute; top: 50%; left: 50%; width: 5px; height: 5px; background: rgba(255, 255, 255, 0.7); opacity: 0; border-radius: 100%; transform: scale(1, 1) translate(-50%); transform-origin: 50% 50%; }
                        .ripple-effect:focus::after { animation: ripple 0.6s linear; }
                        .floating-label { transition: all 0.3s ease; }
                        .floating-label.focused { transform: translateY(-24px) scale(0.85); color: #3B82F6; }
                        .glass-effect { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
                        .text-gradient { background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                        @keyframes borderFlow { 0%, 100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
                        @keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
                        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5) } 50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8) } }
                        @keyframes shake { 0%, 100% { transform: translateX(0) } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) } 20%, 40%, 60%, 80% { transform: translateX(5px) } }
                        @keyframes floatLabel { 0% { transform: translateY(0) scale(1); color: #9CA3AF } 100% { transform: translateY(-24px) scale(0.85); color: #3B82F6 } }
                        @keyframes slideUp { 0% { transform: translateY(10px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
                        @keyframes gradientShift { 0%, 100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
                        @keyframes slideInRight { 0% { transform: translateX(20px); opacity: 0 } 100% { transform: translateX(0); opacity: 1 } }
                        @keyframes bounceIn { 0% { transform: scale(0.3); opacity: 0 } 50% { transform: scale(1.05) } 70% { transform: scale(0.9) } 100% { transform: scale(1); opacity: 1 } }
                        @keyframes fadeIn { 0% { opacity: 0 } 100% { opacity: 1 } }
                        @keyframes typing { from { width: 0 } to { width: 100% } }
                        @keyframes cursorBlink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
                        
                        /* Custom Scrollbar */
                        ::-webkit-scrollbar {
                            width: 6px;
                            height: 6px;
                        }
                        ::-webkit-scrollbar-track {
                            background: rgba(255, 255, 255, 0.05);
                        }
                        ::-webkit-scrollbar-thumb {
                            background: #FA8520; /* Brand Primary */
                            border-radius: 3px;
                        }
                        ::-webkit-scrollbar-thumb:hover {
                            background: #d96d10;
                        }

                        /* Premium Card Styles */
                        @keyframes float2 { 0%, 100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-15px) rotate(2deg); } 66% { transform: translateY(-10px) rotate(-1deg); } }
                        @keyframes gradientFlow { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                        @keyframes slideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
                        @keyframes particleFloat { 0% { transform: translateY(100px) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100px) rotate(360deg); opacity: 0; } }
                        @keyframes borderRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        @keyframes tiltShake { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(1deg); } 75% { transform: rotate(-1deg); } }
                        @keyframes neonFlicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
                        @keyframes ripple { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }
                        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

                        .animate-float-2 { animation: float2 8s ease-in-out infinite; }
                        .animate-gradient-flow { animation: gradientFlow 8s ease infinite; }
                        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
                        .animate-particle-float { animation: particleFloat 10s linear infinite; }
                        .animate-border-rotate { animation: borderRotate 3s linear infinite; }
                        .animate-tilt-shake { animation: tiltShake 0.5s ease-in-out; }
                        .animate-neon-flicker { animation: neonFlicker 2s infinite; }
                        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

                        .glass-card {
                            background: rgba(255, 255, 255, 0.05);
                            backdrop-filter: blur(12px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                            transition: all 0.3s ease;
                        }
                        .glass-card:hover {
                            border: 1px solid rgba(255, 255, 255, 0.25);
                            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
                        }
                        .neon-border {
                            border: 2px solid transparent;
                            background: linear-gradient(45deg, #00f, #0ff, #f0f, #00f) border-box;
                            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                            -webkit-mask-composite: xor;
                            mask-composite: exclude;
                        }
                        .holographic-effect {
                            background: linear-gradient(45deg, rgba(255, 0, 255, 0.1) 0%, rgba(0, 255, 255, 0.1) 50%, rgba(255, 255, 0, 0.1) 100%);
                            background-size: 400% 400%;
                            animation: gradientFlow 8s ease infinite;
                        }
                        .perspective-1000 { perspective: 1000px; }
                        .card-flip-inner {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            transition: transform 0.8s;
                            transform-style: preserve-3d;
                        }
                        .card-flip:hover .card-flip-inner { transform: rotateY(180deg); }
                        .card-flip-front, .card-flip-back {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            backface-visibility: hidden;
                            border-radius: 1rem;
                            overflow: hidden;
                        }
                        .card-flip-back { transform: rotateY(180deg); }
                        .cyber-font { font-family: 'Orbitron', 'Courier New', Courier, monospace; }
                    </style>
                </head>
                <body>
            ${finalCode}
                </body>
            </html>
        `;
    }, [finalCode]);

    return (
        <iframe
            srcDoc={srcDoc}
            title="Component Preview"
            className="w-full h-full border-0 bg-transparent"
            sandbox="allow-scripts" // Allow Tailwind script
        />
    );
};

export default PreviewRenderer;
