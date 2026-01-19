import React from 'react';
import { Play } from 'lucide-react';

const NeonGridHero = () => {
    return (
        <div className="min-h-screen bg-[#020205] text-white flex flex-col relative overflow-hidden font-sans selection:bg-cyan-500/30">

            {/* Grid Background */}
            <div className="absolute inset-0 z-0 perspective-[500px]">
                {/* Floor Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff1a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_scale(2)] origin-top opacity-20 animate-[gridMove_20s_linear_infinite]" />

                {/* Horizon Glow */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#020205] via-[#020205] to-cyan-500/20 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent" />
            </div>

            {/* Decorative Orbs */}
            <div className="hidden lg:block absolute top-[10%] right-[20%] w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="hidden lg:block absolute bottom-[10%] left-[10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

            {/* Navbar */}
            <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
                <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    NEON<span className="text-white">SYS</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-400">
                    <a href="#" className="hover:text-cyan-400 transition-colors">Products</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">Vision</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">Roadmap</a>
                </div>
                <button className="px-6 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-all text-sm font-medium backdrop-blur-sm">
                    Access Console
                </button>
            </nav>

            {/* Hero Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 mt-[-80px]">

                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/30 backdrop-blur-md">
                    <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">System Online v4.0</span>
                </div>

                <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 relative">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        CYBER
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse">
                        REALITY
                    </span>
                    {/* Glitch Effect Behind */}
                    <span className="absolute top-0 left-1 text-red-500/50 mix-blend-screen opacity-0 hover:opacity-100 transition-opacity select-none lg:block hidden">CYBER</span>
                    <span className="absolute top-0 -left-1 text-cyan-500/50 mix-blend-screen opacity-0 hover:opacity-100 transition-opacity select-none lg:block hidden">CYBER</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                    Traverse the digital frontier with high-fidelity grid systems.
                    <br className="hidden md:block" />
                    The next evolution of interface is purely <span className="text-white font-medium">light and data</span>.
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <button className="group relative px-8 py-4 bg-cyan-600 text-white font-bold tracking-widest uppercase text-sm clip-path-polygon hover:bg-cyan-500 transition-all">
                        Initialize
                        <div className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                    </button>

                    <button className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                            <Play size={14} className="fill-current ml-0.5" />
                        </div>
                        Watch Demo
                    </button>
                </div>

            </main>

            {/* Footer Strip */}
            <div className="relative z-20 border-t border-white/5 bg-[#020205]/80 backdrop-blur-md py-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-wider">
                    <div>LOC: 34.0522° N, 118.2437° W</div>
                    <div className="flex gap-8">
                        <span>Latency: 12ms</span>
                        <span className="text-green-500">Secure</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(4rem); }
        }
        .clip-path-polygon {
          clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }
      `}</style>
        </div>
    );
};

export default NeonGridHero;
