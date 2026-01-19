import React from 'react';

// ==========================================
// Batch 1: Geometric & Cyber
// ==========================================

const OrbitPulse = () => (
    <div className="relative flex items-center justify-center p-2">
        <div className="absolute h-12 w-12 animate-[spin_3s_linear_infinite] rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500" />
        <div className="absolute h-8 w-8 animate-[spin_2s_linear_infinite_reverse] rounded-full border-2 border-transparent border-t-purple-500 border-l-purple-500" />
        <div className="h-4 w-4 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
    </div>
);

const NeoGrid = () => (
    <div className="grid h-12 w-12 grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
            <div
                key={i}
                className="animate-pulse bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                style={{ animationDelay: `${i * 100}ms` }}
            />
        ))}
    </div>
);

const Morphix = () => (
    <div className="relative flex items-center justify-center">
        <div className="h-10 w-10 animate-[spin_3s_linear_infinite] bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg blur-sm opacity-50 absolute" />
        <div className="h-10 w-10 animate-[morph_4s_ease-in-out_infinite] bg-gradient-to-br from-pink-500 to-orange-500 shadow-xl" />
        <style jsx>{`
      @keyframes morph {
        0%, 100% { border-radius: 20%; transform: rotate(0deg); }
        33% { border-radius: 50%; transform: rotate(120deg); }
        66% { border-radius: 0%; transform: rotate(240deg); }
      }
    `}</style>
    </div>
);

const CodeFlow = () => (
    <div className="flex flex-col gap-1.5 w-12">
        <div className="h-1.5 w-full animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/80" style={{ animationDelay: '0ms' }} />
        <div className="h-1.5 w-3/4 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/60" style={{ animationDelay: '200ms' }} />
        <div className="h-1.5 w-full animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/40" style={{ animationDelay: '400ms' }} />
        <div className="h-1.5 w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/20" style={{ animationDelay: '600ms' }} />
    </div>
);

const LiquidDrop = () => (
    <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute h-12 w-12 animate-ping rounded-full border-2 border-blue-400 opacity-20 duration-2000" />
        <div className="relative flex items-center justify-center">
            <div className="h-6 w-6 animate-bounce rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
            <div className="absolute -bottom-2 h-2 w-8 animate-[pulse_1s_ease-in-out_infinite] rounded-[50%] bg-blue-500/30 blur-sm" />
        </div>
    </div>
);

// ==========================================
// Batch 2: Minimal & Abstract
// ==========================================

const InfinityDraw = () => (
    <div className="relative h-12 w-20">
        <svg viewBox="0 0 100 60" className="h-full w-full stroke-orange-500 stroke-[4] fill-none drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
            <path
                d="M20,30 C20,10 40,10 50,30 C60,50 80,50 80,30 C80,10 60,10 50,30 C40,50 20,50 20,30"
                className="animate-[dash_2s_linear_infinite]"
                strokeDasharray="200"
                strokeDashoffset="200"
            />
        </svg>
        <style jsx>{`
      @keyframes dash {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
    </div>
);

const DataRain = () => (
    <div className="flex gap-1 h-12 items-end">
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className="w-1.5 bg-green-500/80 animate-[rain_1s_ease-in-out_infinite]"
                style={{
                    height: '100%',
                    animationDelay: `${i * 100}ms`,
                    opacity: 0
                }}
            />
        ))}
        <style jsx>{`
      @keyframes rain {
        0%, 100% { height: 20%; opacity: 0.3; }
        50% { height: 100%; opacity: 1; }
      }
    `}</style>
    </div>
);

const GlassSpin = () => (
    <div className="relative flex items-center justify-center h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-white/20 backdrop-blur-md" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/80 animate-spin" />
        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 shadow-inner" />
    </div>
);

const SolarSync = () => (
    <div className="relative flex items-center justify-center h-16 w-16">
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-yellow-500/20">
            <div className="absolute top-0 left-1/2 -mt-1 h-2 w-2 -ml-1 rounded-full bg-yellow-500 shadow-[0_0_10px_orange]" />
        </div>
        <div className="absolute inset-2 animate-[spin_5s_linear_infinite] rounded-full border border-orange-500/30">
            <div className="absolute bottom-0 right-1/2 -mb-1 h-2.5 w-2.5 -mr-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_orange]" />
        </div>
        <div className="h-4 w-4 rounded-full bg-yellow-100 shadow-[0_0_20px_yellow]" />
    </div>
);

const WaveKit = () => (
    <div className="flex items-center gap-0.5 h-8">
        {[...Array(8)].map((_, i) => (
            <div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-violet-500 rounded-full animate-[wave_1s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 100}ms` }}
            />
        ))}
        <style jsx>{`
      @keyframes wave {
        0%, 100% { height: 20%; }
        50% { height: 100%; }
      }
    `}</style>
    </div>
);

// ==========================================
// Batch 3: UI & Typography
// ==========================================

const DotTrail = () => (
    <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                className="h-3 w-3 rounded-full bg-blue-500 animate-[bounce_1s_infinite]"
                style={{ animationDelay: `${i * 100}ms` }}
            />
        ))}
    </div>
);

const PulseText = () => (
    <div className="relative">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-[pulse_1.5s_ease-in-out_infinite]">
            Loading...
        </span>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]" />
    </div>
);

const ScanLine = () => (
    <div className="relative h-12 w-32 overflow-hidden rounded-md border border-cyan-500/30 bg-cyan-900/10">
        <div className="absolute inset-0 top-1/2 h-0.5 bg-cyan-400 shadow-[0_0_10px_cyan] animate-[scan_2s_ease-in-out_infinite]" />
        <div className="p-2 text-xs font-mono text-cyan-500 opacity-50">SCANNING...</div>
        <style jsx>{`
      @keyframes scan {
        0%, 100% { transform: translateY(-20px); opacity: 0; }
        50% { transform: translateY(20px); opacity: 1; }
      }
    `}</style>
    </div>
);

const PixelBuild = () => (
    <div className="grid grid-cols-2 gap-1 w-10">
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                className="h-4 w-4 bg-indigo-500 animate-[pulse_1s_steps(2,end)_infinite]"
                style={{ animationDelay: `${i * 150}ms` }}
            />
        ))}
    </div>
);

const RingStack = () => (
    <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-red-500/20 animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border-2 border-green-500/20 animate-[spin_2s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border-2 border-blue-500/20 animate-[spin_1s_linear_infinite]" />
    </div>
);

// ==========================================
// Batch 4: Progress & 3D
// ==========================================

const GlowArc = () => (
    <div className="relative flex items-center justify-center h-14 w-14">
        <svg className="absolute inset-0 h-full w-full animate-spin">
            <circle className="stroke-gray-700" strokeWidth="4" fill="none" r="24" cx="28" cy="28" />
            <circle className="stroke-lime-400 stroke-[4]" fill="none" r="24" cx="28" cy="28" strokeDasharray="100" strokeDashoffset="50" strokeLinecap="round" />
        </svg>
        <div className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_lime]" />
    </div>
);

const FlipCard = () => (
    <div className="h-12 w-12 bg-rose-500 rounded-lg animate-[flip_2s_infinite]" />
);

const LoaderSteps = () => (
    <div className="flex items-center gap-1">
        {[...Array(3)].map((_, i) => (
            <div
                key={i}
                className="h-2 w-8 rounded-full bg-slate-700 overflow-hidden"
            >
                <div className="h-full bg-blue-500 animate-[progress_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 500}ms` }} />
            </div>
        ))}
        <style jsx>{`
      @keyframes progress {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
        @keyframes flip {
        0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
        50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
        100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
      }
    `}</style>
    </div>
);

const TerminalBoot = () => (
    <div className="h-16 w-32 rounded bg-slate-900 p-2 font-mono text-[10px] text-green-400 leading-tight overflow-hidden">
        <div>&gt; SYSTEM_INIT</div>
        <div className="animate-pulse">&gt; LOADING_MODULES...</div>
        <div className="opacity-50">&gt; CHECK_INTEGRITY</div>
    </div>
);

const SoftSpinner = () => (
    <div className="relative h-12 w-12 text-teal-400">
        <svg className="animate-spin h-full w-full" viewBox="0 0 50 50">
            <circle className="opacity-25" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4"></circle>
            <circle className="opacity-75" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="80" strokeDashoffset="60" strokeLinecap="round"></circle>
        </svg>
    </div>
);

// ==========================================
// Batch 5: Creative & Branding
// ==========================================

const TypingCursor = () => (
    <div className="font-mono text-xl font-bold text-gray-200">
        typing<span className="animate-[blink_1s_step-start_infinite]">|</span>
        <style jsx>{`
      @keyframes blink {
        50% { opacity: 0; }
      }
    `}</style>
    </div>
);

const CubeShift = () => (
    <div className="relative">
        <div className="h-10 w-10 bg-indigo-500 animate-[cubeshift_2s_infinite]" />
        <style jsx>{`
      @keyframes cubeshift {
        0% { transform: rotate(0deg); }
        25% { transform: translateX(20px) rotate(-90deg) scale(0.5); }
        50% { transform: translateX(20px) translateY(20px) rotate(-180deg); }
        75% { transform: translateX(0px) translateY(20px) rotate(-270deg) scale(0.5); }
        100% { transform: rotate(-360deg); }
      }
    `}</style>
    </div>
);

const LineWave = () => (
    <div className="flex items-center gap-1 h-10">
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className="h-full w-1.5 bg-rose-500 rounded-full animate-[linewave_1s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 100}ms` }}
            />
        ))}
        <style jsx>{`
      @keyframes linewave {
        0%, 100% { height: 20%; }
        50% { height: 100%; }
      }
    `}</style>
    </div>
);

const RadarScan = () => (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-green-500/50 bg-green-900/20">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.5)_60deg,transparent_65deg)] animate-[spin_2s_linear_infinite]" />
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-r border-b border-green-500/30" />
            <div className="border-b border-green-500/30" />
            <div className="border-r border-green-500/30" />
            <div />
        </div>
    </div>
);

const BrandReveal = () => (
    <div className="relative flex items-center justify-center p-4">
        <svg className="h-12 w-12" viewBox="0 0 50 50">
            <path
                d="M25,5 L45,45 L5,45 Z"
                fill="none"
                stroke="#F97316"
                strokeWidth="3"
                className="animate-[draw_2s_ease-in-out_infinite]"
                strokeDasharray="150"
                strokeDashoffset="150"
            />
        </svg>
        <div className="ml-3 font-bold text-white text-lg overflow-hidden whitespace-nowrap animate-[reveal_2s_steps(20,end)_infinite]">
            BrunoUI
        </div>
        <style jsx>{`
      @keyframes draw {
        0% { stroke-dashoffset: 150; fill: transparent; }
        50% { stroke-dashoffset: 0; fill: transparent; }
        75% { fill: rgba(249,115,22,0.5); }
        100% { stroke-dashoffset: 150; fill: transparent; }
      }
      @keyframes reveal {
        0% { width: 0; opacity: 0; }
        50% { width: 100px; opacity: 1; }
        90% { width: 100px; opacity: 1; }
        100% { width: 0; opacity: 0; }
      }
    `}</style>
    </div>
);

// ==========================================
// Main Component
// ==========================================

const Loader = ({ variant, color = 'blue', size = 'md', className = '', ...props }) => {
    const loaders = {
        OrbitPulse,
        NeoGrid,
        Morphix,
        CodeFlow,
        LiquidDrop,
        InfinityDraw,
        DataRain,
        GlassSpin,
        SolarSync,
        WaveKit,
        DotTrail,
        PulseText,
        ScanLine,
        PixelBuild,
        RingStack,
        GlowArc,
        FlipCard,
        LoaderSteps,
        TerminalBoot,
        SoftSpinner,
        TypingCursor,
        CubeShift,
        LineWave,
        RadarScan,
        BrandReveal,
        // Add subsequent batches here
    };

    const Component = loaders[variant];

    if (!Component) {
        console.warn(`Loader variant "${variant}" not found.`);
        return null;
    }

    return (
        <div className={`inline-flex items-center justify-center ${className}`} {...props}>
            <Component />
        </div>
    );
};

export default Loader;
