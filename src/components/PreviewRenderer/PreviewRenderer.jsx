import React, { useMemo } from 'react';

const PreviewRenderer = ({ code }) => {

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
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
                            padding: 20px;
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
                    </style>
                </head>
                <body>
                    ${code}
                </body>
            </html>
        `;
    }, [code]);

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
