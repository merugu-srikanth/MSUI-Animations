import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const BrandRevealHero = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Animation sequence
        const timers = [
            setTimeout(() => setStage(1), 500),  // Start particles/glow
            setTimeout(() => setStage(2), 1500), // Reveal Logo
            setTimeout(() => setStage(3), 2500), // Reveal Text
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

            {/* Cinematic Background */}
            <div className={`absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent transition-opacity duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`} />

            {/* Central Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[100px] transition-all duration-3000 ease-out ${stage >= 2 ? 'scale-100 opacity-60' : 'scale-0 opacity-0'}`} />

            {/* Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.5
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Logo Container */}
                <div className={`relative mb-8 transition-all duration-1000 transform ${stage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-180'}`}>
                    <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-40 animate-pulse" />
                    <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center">
                        {/* Abstract Logo Shape */}
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                            <path
                                d="M50 10 L90 50 L50 90 L10 50 Z"
                                fill="none"
                                stroke="#fb923c"
                                strokeWidth="2"
                                className={`transition-all duration-2000 ease-in-out ${stage >= 2 ? 'stroke-dashoffset-0' : 'stroke-dashoffset-400'}`}
                                strokeDasharray="400"
                                strokeDashoffset="400"
                            />
                            <circle cx="50" cy="50" r="10" fill="white" className={`transition-all delay-500 duration-500 ${stage >= 2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                        </svg>
                    </div>
                </div>

                {/* Brand Name */}
                <h1 className="overflow-hidden mb-6">
                    <span className={`block text-6xl md:text-8xl font-bold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 transition-all duration-1000 transform ${stage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        Aura
                    </span>
                </h1>

                {/* Tagline */}
                <p className={`text-lg md:text-xl text-orange-400/80 font-medium tracking-widest uppercase transition-all duration-1000 delay-300 transform ${stage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Redefining Digital Presence
                </p>

                {/* Call to Action */}
                <div className={`mt-12 transition-all duration-1000 delay-700 transform ${stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <button className="group relative px-8 py-3 bg-transparent border border-white/20 hover:border-orange-500/50 rounded-full transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-orange-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2 text-sm font-medium tracking-wide">
                            Enter Experience <Sparkles size={16} className="text-orange-400" />
                        </span>
                    </button>
                </div>

            </div>

            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default BrandRevealHero;
