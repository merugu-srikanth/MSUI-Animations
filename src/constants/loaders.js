
export const LOADERS = [
    {
        id: 'loader-orbit-pulse',
        name: 'Orbit Pulse',
        category: 'loader',
        variant: 'OrbitPulse',
        tags: ['loader', 'geometric', 'orbit'],
        code: {
            react: `<Loader variant="OrbitPulse" />`,
            html: `<div class="relative flex items-center justify-center p-2">
  <div class="absolute h-12 w-12 animate-[spin_3s_linear_infinite] rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500"></div>
  <div class="absolute h-8 w-8 animate-[spin_2s_linear_infinite_reverse] rounded-full border-2 border-transparent border-t-purple-500 border-l-purple-500"></div>
  <div class="h-4 w-4 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>`
        }
    },
    {
        id: 'loader-neo-grid',
        name: 'Neo Grid',
        category: 'loader',
        variant: 'NeoGrid',
        tags: ['loader', 'cyber', 'grid'],
        code: {
            react: `<Loader variant="NeoGrid" />`,
            html: `<div class="grid h-12 w-12 grid-cols-3 gap-1">
  <!-- Repeat 9 times -->
  <div class="animate-pulse bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" style="animation-delay: 0ms"></div>
  <div class="animate-pulse bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" style="animation-delay: 100ms"></div>
  <div class="animate-pulse bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" style="animation-delay: 200ms"></div>
  <!-- ... etc ... -->
</div>`
        }
    },
    {
        id: 'loader-morphix',
        name: 'Morphix',
        category: 'loader',
        variant: 'Morphix',
        tags: ['loader', 'shape', 'morph'],
        code: {
            react: `<Loader variant="Morphix" />`,
            html: `<div class="relative flex items-center justify-center">
  <div class="h-10 w-10 animate-[spin_3s_linear_infinite] bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg blur-sm opacity-50 absolute"></div>
  <div class="h-10 w-10 animate-[morph_4s_ease-in-out_infinite] bg-gradient-to-br from-pink-500 to-orange-500 shadow-xl"></div>
  <style>
    @keyframes morph {
      0%, 100% { border-radius: 20%; transform: rotate(0deg); }
      33% { border-radius: 50%; transform: rotate(120deg); }
      66% { border-radius: 0%; transform: rotate(240deg); }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-code-flow',
        name: 'Code Flow',
        category: 'loader',
        variant: 'CodeFlow',
        tags: ['loader', 'dev', 'code'],
        code: {
            react: `<Loader variant="CodeFlow" />`,
            html: `<div class="flex flex-col gap-1.5 w-12">
  <div class="h-1.5 w-full animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/80" style="animation-delay: 0ms"></div>
  <div class="h-1.5 w-3/4 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/60" style="animation-delay: 200ms"></div>
  <div class="h-1.5 w-full animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/40" style="animation-delay: 400ms"></div>
  <div class="h-1.5 w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-green-500/20" style="animation-delay: 600ms"></div>
</div>`
        }
    },
    {
        id: 'loader-liquid-drop',
        name: 'Liquid Drop',
        category: 'loader',
        variant: 'LiquidDrop',
        tags: ['loader', 'fluid', 'drop'],
        code: {
            react: `<Loader variant="LiquidDrop" />`,
            html: `<div class="relative flex h-14 w-14 items-center justify-center">
  <div class="absolute h-12 w-12 animate-ping rounded-full border-2 border-blue-400 opacity-20 duration-2000"></div>
  <div class="relative flex items-center justify-center">
    <div class="h-6 w-6 animate-bounce rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
    <div class="absolute -bottom-2 h-2 w-8 animate-[pulse_1s_ease-in-out_infinite] rounded-[50%] bg-blue-500/30 blur-sm"></div>
  </div>
</div>`
        }
    },
    {
        id: 'loader-infinity-draw',
        name: 'Infinity Draw',
        category: 'loader',
        variant: 'InfinityDraw',
        tags: ['loader', 'svg', 'draw'],
        code: {
            react: `<Loader variant="InfinityDraw" />`,
            html: `<div class="relative h-12 w-20">
  <svg viewBox="0 0 100 60" class="h-full w-full stroke-orange-500 stroke-[4] fill-none drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
     <path
       d="M20,30 C20,10 40,10 50,30 C60,50 80,50 80,30 C80,10 60,10 50,30 C40,50 20,50 20,30"
       class="animate-[dash_2s_linear_infinite]"
       stroke-dasharray="200"
       stroke-dashoffset="200"
     />
  </svg>
  <style>
    @keyframes dash {
      to { stroke-dashoffset: 0; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-data-rain',
        name: 'Data Rain',
        category: 'loader',
        variant: 'DataRain',
        tags: ['loader', 'matrix', 'data'],
        code: {
            react: `<Loader variant="DataRain" />`,
            html: `<div class="flex gap-1 h-12 items-end">
  <div class="w-1.5 bg-green-500/80 animate-[rain_1s_ease-in-out_infinite]" style="height: 100%; animation-delay: 0ms; opacity: 0"></div>
  <div class="w-1.5 bg-green-500/80 animate-[rain_1s_ease-in-out_infinite]" style="height: 100%; animation-delay: 100ms; opacity: 0"></div>
  <div class="w-1.5 bg-green-500/80 animate-[rain_1s_ease-in-out_infinite]" style="height: 100%; animation-delay: 200ms; opacity: 0"></div>
  <!-- ... -->
  <style>
    @keyframes rain {
      0%, 100% { height: 20%; opacity: 0.3; }
      50% { height: 100%; opacity: 1; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-glass-spin',
        name: 'Glass Spinner',
        category: 'loader',
        variant: 'GlassSpin',
        tags: ['loader', 'glassmorphism', 'spin'],
        code: {
            react: `<Loader variant="GlassSpin" />`,
            html: `<div class="relative flex items-center justify-center h-14 w-14">
  <div class="absolute inset-0 rounded-full border-4 border-white/20 backdrop-blur-md"></div>
  <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-white/80 animate-spin"></div>
  <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 shadow-inner"></div>
</div>`
        }
    },
    {
        id: 'loader-solar-sync',
        name: 'Solar Sync',
        category: 'loader',
        variant: 'SolarSync',
        tags: ['loader', 'orbit', 'solar'],
        code: {
            react: `<Loader variant="SolarSync" />`,
            html: `<div class="relative flex items-center justify-center h-16 w-16">
  <div class="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-yellow-500/20">
      <div class="absolute top-0 left-1/2 -mt-1 h-2 w-2 -ml-1 rounded-full bg-yellow-500 shadow-[0_0_10px_orange]"></div>
  </div>
  <div class="absolute inset-2 animate-[spin_5s_linear_infinite] rounded-full border border-orange-500/30">
      <div class="absolute bottom-0 right-1/2 -mb-1 h-2.5 w-2.5 -mr-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_orange]"></div>
  </div>
  <div class="h-4 w-4 rounded-full bg-yellow-100 shadow-[0_0_20px_yellow]"></div>
</div>`
        }
    },
    {
        id: 'loader-wave-kit',
        name: 'Wave Kit',
        category: 'loader',
        variant: 'WaveKit',
        tags: ['loader', 'audio', 'wave'],
        code: {
            react: `<Loader variant="WaveKit" />`,
            html: `<div class="flex items-center gap-0.5 h-8">
  <div class="w-1 bg-gradient-to-t from-pink-500 to-violet-500 rounded-full animate-[wave_1s_ease-in-out_infinite]" style="animation-delay: 0ms"></div>
  <div class="w-1 bg-gradient-to-t from-pink-500 to-violet-500 rounded-full animate-[wave_1s_ease-in-out_infinite]" style="animation-delay: 100ms"></div>
  <!-- ... repeat ... -->
  <style>
    @keyframes wave {
      0%, 100% { height: 20%; }
      50% { height: 100%; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-dot-trail',
        name: 'Dot Trail',
        category: 'loader',
        variant: 'DotTrail',
        tags: ['loader', 'dots', 'minimal'],
        code: {
            react: `<Loader variant="DotTrail" />`,
            html: `<div class="flex gap-2">
  <div class="h-3 w-3 rounded-full bg-blue-500 animate-[bounce_1s_infinite]" style="animation-delay: 0ms"></div>
  <div class="h-3 w-3 rounded-full bg-blue-500 animate-[bounce_1s_infinite]" style="animation-delay: 100ms"></div>
  <div class="h-3 w-3 rounded-full bg-blue-500 animate-[bounce_1s_infinite]" style="animation-delay: 200ms"></div>
  <div class="h-3 w-3 rounded-full bg-blue-500 animate-[bounce_1s_infinite]" style="animation-delay: 300ms"></div>
</div>`
        }
    },
    {
        id: 'loader-pulse-text',
        name: 'Pulse Text',
        category: 'loader',
        variant: 'PulseText',
        tags: ['loader', 'text', 'typography'],
        code: {
            react: `<Loader variant="PulseText" />`,
            html: `<div class="relative">
  <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-[pulse_1.5s_ease-in-out_infinite]">
    Loading...
  </span>
  <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
</div>`
        }
    },
    {
        id: 'loader-scan-line',
        name: 'Scan Line',
        category: 'loader',
        variant: 'ScanLine',
        tags: ['loader', 'scifi', 'scan'],
        code: {
            react: `<Loader variant="ScanLine" />`,
            html: `<div class="relative h-12 w-32 overflow-hidden rounded-md border border-cyan-500/30 bg-cyan-900/10">
  <div class="absolute inset-0 top-1/2 h-0.5 bg-cyan-400 shadow-[0_0_10px_cyan] animate-[scan_2s_ease-in-out_infinite]"></div>
  <div class="p-2 text-xs font-mono text-cyan-500 opacity-50">SCANNING...</div>
  <style>
    @keyframes scan {
      0%, 100% { transform: translateY(-20px); opacity: 0; }
      50% { transform: translateY(20px); opacity: 1; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-pixel-build',
        name: 'Pixel Build',
        category: 'loader',
        variant: 'PixelBuild',
        tags: ['loader', 'pixel', 'retro'],
        code: {
            react: `<Loader variant="PixelBuild" />`,
            html: `<div class="grid grid-cols-2 gap-1 w-10">
  <div class="h-4 w-4 bg-indigo-500 animate-[pulse_1s_steps(2,end)_infinite]" style="animation-delay: 0ms"></div>
  <div class="h-4 w-4 bg-indigo-500 animate-[pulse_1s_steps(2,end)_infinite]" style="animation-delay: 150ms"></div>
  <div class="h-4 w-4 bg-indigo-500 animate-[pulse_1s_steps(2,end)_infinite]" style="animation-delay: 300ms"></div>
  <div class="h-4 w-4 bg-indigo-500 animate-[pulse_1s_steps(2,end)_infinite]" style="animation-delay: 450ms"></div>
</div>`
        }
    },
    {
        id: 'loader-ring-stack',
        name: 'Ring Stack',
        category: 'loader',
        variant: 'RingStack',
        tags: ['loader', 'ring', 'spin'],
        code: {
            react: `<Loader variant="RingStack" />`,
            html: `<div class="relative h-14 w-14">
  <div class="absolute inset-0 rounded-full border-2 border-red-500/20 animate-[spin_3s_linear_infinite]"></div>
  <div class="absolute inset-2 rounded-full border-2 border-green-500/20 animate-[spin_2s_linear_infinite_reverse]"></div>
  <div class="absolute inset-4 rounded-full border-2 border-blue-500/20 animate-[spin_1s_linear_infinite]"></div>
</div>`
        }
    },
    {
        id: 'loader-glow-arc',
        name: 'Glow Arc',
        category: 'loader',
        variant: 'GlowArc',
        tags: ['loader', 'glow', 'arc'],
        code: {
            react: `<Loader variant="GlowArc" />`,
            html: `<div class="relative flex items-center justify-center h-14 w-14">
  <svg class="absolute inset-0 h-full w-full animate-spin">
    <circle class="stroke-gray-700" stroke-width="4" fill="none" r="24" cx="28" cy="28" />
    <circle class="stroke-lime-400 stroke-[4]" fill="none" r="24" cx="28" cy="28" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
  </svg>
  <div class="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_lime]"></div>
</div>`
        }
    },
    {
        id: 'loader-flip-card',
        name: 'Flip Card',
        category: 'loader',
        variant: 'FlipCard',
        tags: ['loader', 'ui', 'card'],
        code: {
            react: `<Loader variant="FlipCard" />`,
            html: `<div class="h-12 w-12 bg-rose-500 rounded-lg animate-[flip_2s_infinite]"></div>`
        }
    },
    {
        id: 'loader-loader-steps',
        name: 'Loader Steps',
        category: 'loader',
        variant: 'LoaderSteps',
        tags: ['loader', 'progress', 'steps'],
        code: {
            react: `<Loader variant="LoaderSteps" />`,
            html: `<div class="flex items-center gap-1">
  <div class="h-2 w-8 rounded-full bg-slate-700 overflow-hidden">
    <div class="h-full bg-blue-500 animate-[progress_2s_ease-in-out_infinite]" style="animation-delay: 0ms"></div>
  </div>
  <div class="h-2 w-8 rounded-full bg-slate-700 overflow-hidden">
    <div class="h-full bg-blue-500 animate-[progress_2s_ease-in-out_infinite]" style="animation-delay: 500ms"></div>
  </div>
  <!-- ... -->
  <style>
    @keyframes progress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-terminal-boot',
        name: 'Terminal Boot',
        category: 'loader',
        variant: 'TerminalBoot',
        tags: ['loader', 'dev', 'terminal'],
        code: {
            react: `<Loader variant="TerminalBoot" />`,
            html: `<div class="h-16 w-32 rounded bg-slate-900 p-2 font-mono text-[10px] text-green-400 leading-tight overflow-hidden">
  <div>&gt; SYSTEM_INIT</div>
  <div class="animate-pulse">&gt; LOADING_MODULES...</div>
  <div class="opacity-50">&gt; CHECK_INTEGRITY</div>
</div>`
        }
    },
    {
        id: 'loader-soft-spinner',
        name: 'Soft Spinner',
        category: 'loader',
        variant: 'SoftSpinner',
        tags: ['loader', 'minimal', 'spinner'],
        code: {
            react: `<Loader variant="SoftSpinner" />`,
            html: `<div class="relative h-12 w-12 text-teal-400">
  <svg class="animate-spin h-full w-full" viewBox="0 0 50 50">
    <circle class="opacity-25" cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4"></circle>
    <circle class="opacity-75" cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="80" stroke-dashoffset="60" stroke-linecap="round"></circle>
  </svg>
</div>`
        }
    },
    {
        id: 'loader-typing-cursor',
        name: 'Typing Cursor',
        category: 'loader',
        variant: 'TypingCursor',
        tags: ['loader', 'text', 'typing'],
        code: {
            react: `<Loader variant="TypingCursor" />`,
            html: `<div class="font-mono text-xl font-bold text-gray-200">
  typing<span class="animate-[blink_1s_step-start_infinite]">|</span>
  <style>
    @keyframes blink {
      50% { opacity: 0; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-cube-shift',
        name: 'Cube Shift',
        category: 'loader',
        variant: 'CubeShift',
        tags: ['loader', '3d', 'cube'],
        code: {
            react: `<Loader variant="CubeShift" />`,
            html: `<div class="relative">
    <div class="h-10 w-10 bg-indigo-500 animate-[cubeshift_2s_infinite]"></div>
    <style>
      @keyframes cubeshift {
        0% { transform: rotate(0deg); }
        25% { transform: translateX(20px) rotate(-90deg) scale(0.5); }
        50% { transform: translateX(20px) translateY(20px) rotate(-180deg); }
        75% { transform: translateX(0px) translateY(20px) rotate(-270deg) scale(0.5); }
        100% { transform: rotate(-360deg); }
      }
    </style>
</div>`
        }
    },
    {
        id: 'loader-line-wave',
        name: 'Line Wave',
        category: 'loader',
        variant: 'LineWave',
        tags: ['loader', 'wave', 'line'],
        code: {
            react: `<Loader variant="LineWave" />`,
            html: `<div class="flex items-center gap-1 h-10">
  <div class="h-full w-1.5 bg-rose-500 rounded-full animate-[linewave_1s_ease-in-out_infinite]" style="animation-delay: 0ms"></div>
  <div class="h-full w-1.5 bg-rose-500 rounded-full animate-[linewave_1s_ease-in-out_infinite]" style="animation-delay: 100ms"></div>
  <!-- ... -->
  <style>
    @keyframes linewave {
      0%, 100% { height: 20%; }
      50% { height: 100%; }
    }
  </style>
</div>`
        }
    },
    {
        id: 'loader-radar-scan',
        name: 'Radar Scan',
        category: 'loader',
        variant: 'RadarScan',
        tags: ['loader', 'radar', 'scan'],
        code: {
            react: `<Loader variant="RadarScan" />`,
            html: `<div class="relative h-16 w-16 overflow-hidden rounded-full border-2 border-green-500/50 bg-green-900/20">
  <div class="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.5)_60deg,transparent_65deg)] animate-[spin_2s_linear_infinite]"></div>
  <div class="absolute inset-0 grid grid-cols-2 grid-rows-2">
     <div class="border-r border-b border-green-500/30"></div>
     <div class="border-b border-green-500/30"></div>
     <div class="border-r border-green-500/30"></div>
     <div></div>
  </div>
</div>`
        }
    },
    {
        id: 'loader-brand-reveal',
        name: 'Brand Reveal',
        category: 'loader',
        variant: 'BrandReveal',
        tags: ['loader', 'brand', 'logo'],
        code: {
            react: `<Loader variant="BrandReveal" />`,
            html: `<div class="relative flex items-center justify-center p-4">
  <svg class="h-12 w-12" viewBox="0 0 50 50">
     <path
       d="M25,5 L45,45 L5,45 Z"
       fill="none"
       stroke="#F97316"
       stroke-width="3"
       class="animate-[draw_2s_ease-in-out_infinite]"
       stroke-dasharray="150" 
       stroke-dashoffset="150"
     />
  </svg>
  <div class="ml-3 font-bold text-white text-lg overflow-hidden whitespace-nowrap animate-[reveal_2s_steps(20,end)_infinite]">
     BrunoUI
  </div>
  <style>
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
  </style>
</div>`
        }
    }
];
