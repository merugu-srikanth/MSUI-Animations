export const BUTTONS = [
  {
    id: 'btn-holographic',
    name: 'Holographic Shimmer',
    category: 'button',
    description: 'Rainbow holographic effect with moving gradient',
    tags: ['button', 'holographic', 'rainbow', 'shimmer'],
    bgConfig: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:animate-gradient-x',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-xl ${this.bgConfig} bg-[length:200%_auto] text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
  <span class="relative z-10 flex items-center"><i class="fas fa-sparkles mr-3 animate-pulse"></i> Holographic Magic</span>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_auto] hover:animate-gradient-x text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
  <span class="relative z-10 flex items-center"><i class="fas fa-sparkles mr-3 animate-pulse"></i> Holographic Magic</span>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
</button>`,
        react: `import React from 'react';

const HolographicButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_auto] hover:animate-gradient-x text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
        <span className="relative z-10 flex items-center"><i className="fas fa-sparkles mr-3 animate-pulse"></i> Holographic Magic</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
      </button>
    </>
  );
};

export default HolographicButton;`
      };
    }
  },
  {
    id: 'btn-neon-cyber',
    name: 'Cyber Neon Grid',
    category: 'button',
    description: 'Cyberpunk style with animated grid background',
    tags: ['button', 'cyberpunk', 'neon', 'grid'],
    bgConfig: 'bg-gray-900 border-2 border-cyan-400 hover:border-pink-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-lg ${this.bgConfig} text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff] hover:text-pink-300 overflow-hidden">
  <span class="relative z-10 flex items-center"><i class="fas fa-terminal mr-3"></i> GRANTED</span>
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,hsla(0,0%,100%,0.1)_1px)] bg-[size:20px_20px] animate-grid-move"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gray-900 border-2 border-cyan-400 hover:border-pink-500 text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff] hover:text-pink-300 overflow-hidden">
  <span class="relative z-10 flex items-center"><i class="fas fa-terminal mr-3"></i> ACCESS GRANTED</span>
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,hsla(0,0%,100%,0.1)_1px)] bg-[size:20px_20px] animate-grid-move"></div>
</button>`,
        react: `import React from 'react';

const CyberNeonButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gray-900 border-2 border-cyan-400 hover:border-pink-500 text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff] hover:text-pink-300 overflow-hidden">
        <span className="relative z-10 flex items-center"><i className="fas fa-terminal mr-3"></i> ACCESS GRANTED</span>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,hsla(0,0%,100%,0.1)_1px)] bg-[size:20px_20px] animate-grid-move"></div>
      </button>
    </>
  );
};

export default CyberNeonButton;`
      };
    }
  },
  {
    id: 'btn-liquid-metal',
    name: 'Liquid Mercury',
    category: 'button',
    description: 'Flowing liquid metal effect with ripples',
    tags: ['button', 'liquid', 'metal', 'mercury'],
    bgConfig: 'bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-2xl ${this.bgConfig} text-gray-200 font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-atom mr-3"></i> Liquid Mercury</span>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full group-hover:duration-1000 transition-transform"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] group-hover:animate-pulse"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800 text-gray-200 font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-atom mr-3"></i> Liquid Mercury</span>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full group-hover:duration-1000 transition-transform"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] group-hover:animate-pulse"></div>
</button>`,
        react: `import React from 'react';

const LiquidMetalButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800 text-gray-200 font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
        <span className="relative z-10 flex items-center"><i className="fas fa-atom mr-3"></i> Liquid Mercury</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full group-hover:duration-1000 transition-transform"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] group-hover:animate-pulse"></div>
      </button>
    </>
  );
};

export default LiquidMetalButton;`
      };
    }
  },
  {
    id: 'btn-galaxy-swirl',
    name: 'Galaxy Swirl',
    category: 'button',
    description: 'Spiral galaxy with twinkling stars',
    tags: ['button', 'galaxy', 'space', 'stars'],
    bgConfig: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-full ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-110 hover:rotate-12">
  <span class="relative z-10 flex items-center"><i class="fas fa-star-and-crescent mr-3 animate-spin-slow"></i> Galaxy Explorer</span>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-spin-slow"></div>
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
    <div class="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-300"></div>
    <div class="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-700"></div>
  </div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-110 hover:rotate-12">
  <span class="relative z-10 flex items-center"><i class="fas fa-star-and-crescent mr-3 animate-spin-slow"></i> Galaxy Explorer</span>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-spin-slow"></div>
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
    <div class="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-300"></div>
    <div class="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-700"></div>
  </div>
</button>`,
        react: `import React from 'react';

const GalaxyButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-110 hover:rotate-12">
        <span className="relative z-10 flex items-center"><i className="fas fa-star-and-crescent mr-3 animate-spin-slow"></i> Galaxy Explorer</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-spin-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-700"></div>
        </div>
      </button>
    </>
  );
};

export default GalaxyButton;`
      };
    }
  },
  {
    id: 'btn-fire-flame',
    name: 'Animated Fire',
    category: 'button',
    description: 'Realistic fire animation effect',
    tags: ['button', 'fire', 'flame', 'animated'],
    bgConfig: 'bg-gradient-to-b from-orange-700 via-red-600 to-orange-800',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-lg ${this.bgConfig} text-yellow-200 font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40">
  <span class="relative z-10 flex items-center"><i class="fas fa-fire mr-3 animate-bounce"></i> Ignite Passion</span>
  <div class="absolute inset-0 bg-gradient-to-t from-yellow-400/30 via-orange-500/20 to-transparent animate-fire-flicker"></div>
  <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fire-wave"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-700 via-red-600 to-orange-800 text-yellow-200 font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40">
  <span class="relative z-10 flex items-center"><i class="fas fa-fire mr-3 animate-bounce"></i> Ignite Passion</span>
  <div class="absolute inset-0 bg-gradient-to-t from-yellow-400/30 via-orange-500/20 to-transparent animate-fire-flicker"></div>
  <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fire-wave"></div>
</button>`,
        react: `import React from 'react';

const FireButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-700 via-red-600 to-orange-800 text-yellow-200 font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40">
        <span className="relative z-10 flex items-center"><i className="fas fa-fire mr-3 animate-bounce"></i> Ignite Passion</span>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 via-orange-500/20 to-transparent animate-fire-flicker"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fire-wave"></div>
      </button>
    </>
  );
};

export default FireButton;`
      };
    }
  },
  {
    id: 'btn-matrix-rain',
    name: 'Matrix Digital Rain',
    category: 'button',
    description: 'Falling green code characters like The Matrix',
    tags: ['button', 'matrix', 'digital', 'code'],
    bgConfig: 'bg-black border-2 border-green-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-md ${this.bgConfig} text-green-400 font-mono font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_#00ff00]">
  <span class="relative z-10 flex items-center"><i class="fas fa-code mr-3"></i> ENTER MATRIX</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div class="absolute top-0 left-1/4 animate-matrix-rain text-green-500 text-xs">1010</div>
    <div class="absolute top-0 left-1/2 animate-matrix-rain delay-300 text-green-500 text-xs">0101</div>
    <div class="absolute top-0 right-1/4 animate-matrix-rain delay-700 text-green-500 text-xs">1100</div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-md bg-black border-2 border-green-500 text-green-400 font-mono font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_#00ff00]">
  <span class="relative z-10 flex items-center"><i class="fas fa-code mr-3"></i> ENTER MATRIX</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div class="absolute top-0 left-1/4 animate-matrix-rain text-green-500 text-xs">1010</div>
    <div class="absolute top-0 left-1/2 animate-matrix-rain delay-300 text-green-500 text-xs">0101</div>
    <div class="absolute top-0 right-1/4 animate-matrix-rain delay-700 text-green-500 text-xs">1100</div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent"></div>
</button>`,
        react: `import React from 'react';

const MatrixButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-md bg-black border-2 border-green-500 text-green-400 font-mono font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_#00ff00]">
        <span className="relative z-10 flex items-center"><i className="fas fa-code mr-3"></i> ENTER MATRIX</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/4 animate-matrix-rain text-green-500 text-xs">1010</div>
          <div className="absolute top-0 left-1/2 animate-matrix-rain delay-300 text-green-500 text-xs">0101</div>
          <div className="absolute top-0 right-1/4 animate-matrix-rain delay-700 text-green-500 text-xs">1100</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent"></div>
      </button>
    </>
  );
};

export default MatrixButton;`
      };
    }
  },
  {
    id: 'btn-crystal-glass',
    name: 'Crystal Glass',
    category: 'button',
    description: 'Frosted glass with light refraction',
    tags: ['button', 'crystal', 'glass', 'refraction'],
    bgConfig: 'backdrop-blur-xl bg-white/5 border border-white/30',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-2xl ${this.bgConfig} text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-2xl">
  <span class="relative z-10 flex items-center"><i class="fas fa-gem mr-3 animate-spin-slow"></i> Crystal Clear</span>
  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-2xl backdrop-blur-xl bg-white/5 border border-white/30 text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-2xl">
  <span class="relative z-10 flex items-center"><i class="fas fa-gem mr-3 animate-spin-slow"></i> Crystal Clear</span>
  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
</button>`,
        react: `import React from 'react';

const CrystalButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-2xl backdrop-blur-xl bg-white/5 border border-white/30 text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-2xl">
        <span className="relative z-10 flex items-center"><i className="fas fa-gem mr-3 animate-spin-slow"></i> Crystal Clear</span>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
      </button>
    </>
  );
};

export default CrystalButton;`
      };
    }
  },
  {
    id: 'btn-neon-pulse',
    name: 'Neon Heartbeat',
    category: 'button',
    description: 'Pulsing neon with heartbeat animation',
    tags: ['button', 'neon', 'pulse', 'heartbeat'],
    bgConfig: 'bg-black   border-2 border-pink-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-3 flex items-center justify-center rounded-lg ${this.bgConfig} text-pink-400 font-bold text-lg transition-all duration-300 animate-pulse-slow hover:animate-heartbeat">
  <span class="relative z-10 flex items-center"><i class="fas fa-heart mr-3 animate-bounce"></i> Love Pulse</span>
  <div class="absolute -inset-1 border-2 border-pink-400 rounded-lg blur opacity-0 group-hover:opacity-70 group-hover:animate-ping"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-black border-2 border-pink-500 text-pink-400 font-bold text-lg transition-all duration-300 animate-pulse-slow hover:animate-heartbeat">
  <span class="relative z-10 flex items-center"><i class="fas fa-heart mr-3 animate-bounce"></i> Love Pulse</span>
  <div class="absolute -inset-1 border-2 border-pink-400 rounded-lg blur opacity-0 group-hover:opacity-70 group-hover:animate-ping"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>`,
        react: `import React from 'react';

const NeonPulseButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-black border-2 border-pink-500 text-pink-400 font-bold text-lg transition-all duration-300 animate-pulse-slow hover:animate-heartbeat">
        <span className="relative z-10 flex items-center"><i className="fas fa-heart mr-3 animate-bounce"></i> Love Pulse</span>
        <div className="absolute -inset-1 border-2 border-pink-400 rounded-lg blur opacity-0 group-hover:opacity-70 group-hover:animate-ping"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>
    </>
  );
};

export default NeonPulseButton;`
      };
    }
  },
  {
    id: 'btn-ocean-wave',
    name: 'Ocean Waves',
    category: 'button',
    description: 'Calm ocean waves with foam effect',
    tags: ['button', 'ocean', 'waves', 'water'],
    bgConfig: 'bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-xl ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-water mr-3"></i> Ocean Waves</span>
  <div class="absolute inset-0">
    <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/30 to-transparent animate-wave"></div>
    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white/50 to-transparent animate-wave delay-300"></div>
  </div>
  <div class="absolute top-0 left-0 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
  <div class="absolute top-2 right-4 w-3 h-3 bg-white/15 rounded-full animate-float delay-500"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-water mr-3"></i> Ocean Waves</span>
  <div class="absolute inset-0">
    <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/30 to-transparent animate-wave"></div>
    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white/50 to-transparent animate-wave delay-300"></div>
  </div>
  <div class="absolute top-0 left-0 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
  <div class="absolute top-2 right-4 w-3 h-3 bg-white/15 rounded-full animate-float delay-500"></div>
</button>`,
        react: `import React from 'react';

const OceanButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
        <span className="relative z-10 flex items-center"><i className="fas fa-water mr-3"></i> Ocean Waves</span>
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/30 to-transparent animate-wave"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white/50 to-transparent animate-wave delay-300"></div>
        </div>
        <div className="absolute top-0 left-0 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-2 right-4 w-3 h-3 bg-white/15 rounded-full animate-float delay-500"></div>
      </button>
    </>
  );
};

export default OceanButton;`
      };
    }
  },
  {
    id: 'btn-cyber-circuit',
    name: 'Circuit Board',
    category: 'button',
    description: 'Animated circuit board with flowing electricity',
    tags: ['button', 'circuit', 'tech', 'electricity'],
    bgConfig: 'bg-gray-900 border border-blue-500/50',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-md ${this.bgConfig} text-blue-400 font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]">
  <span class="relative z-10 flex items-center"><i class="fas fa-microchip mr-3"></i> Activate Circuit</span>
  <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[length:20px_20px]"></div>
  <div class="absolute top-0 left-0 w-full h-0.5 bg-blue-500 animate-circuit-flow"></div>
  <div class="absolute bottom-0 right-0 w-0.5 h-full bg-blue-500 animate-circuit-flow delay-1000"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-md bg-gray-900 border border-blue-500/50 text-blue-400 font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]">
  <span class="relative z-10 flex items-center"><i class="fas fa-microchip mr-3"></i> Activate Circuit</span>
  <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[length:20px_20px]"></div>
  <div class="absolute top-0 left-0 w-full h-0.5 bg-blue-500 animate-circuit-flow"></div>
  <div class="absolute bottom-0 right-0 w-0.5 h-full bg-blue-500 animate-circuit-flow delay-1000"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</button>`,
        react: `import React from 'react';

const CircuitButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-md bg-gray-900 border border-blue-500/50 text-blue-400 font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]">
        <span className="relative z-10 flex items-center"><i className="fas fa-microchip mr-3"></i> Activate Circuit</span>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 animate-circuit-flow"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-blue-500 animate-circuit-flow delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </button>
    </>
  );
};

export default CircuitButton;`
      };
    }
  },
  {
    id: 'btn-magic-sparkle',
    name: 'Magic Sparkle',
    category: 'button',
    description: 'Magical sparkling dust effect',
    tags: ['button', 'magic', 'sparkle', 'fairy'],
    bgConfig: 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-full ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
  <span class="relative z-10 flex items-center"><i class="fas fa-magic mr-3 animate-spin"></i> Magic Dust</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
    <div class="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-sparkle delay-200"></div>
    <div class="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-sparkle delay-400"></div>
    <div class="absolute bottom-6 right-3 w-1 h-1 bg-white rounded-full animate-sparkle delay-600"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
  <span class="relative z-10 flex items-center"><i class="fas fa-magic mr-3 animate-spin"></i> Magic Dust</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
    <div class="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-sparkle delay-200"></div>
    <div class="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-sparkle delay-400"></div>
    <div class="absolute bottom-6 right-3 w-1 h-1 bg-white rounded-full animate-sparkle delay-600"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
</button>`,
        react: `import React from 'react';

const MagicButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
        <span className="relative z-10 flex items-center"><i className="fas fa-magic mr-3 animate-spin"></i> Magic Dust</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
          <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-sparkle delay-200"></div>
          <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-sparkle delay-400"></div>
          <div className="absolute bottom-6 right-3 w-1 h-1 bg-white rounded-full animate-sparkle delay-600"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </>
  );
};

export default MagicButton;`
      };
    }
  },
  {
    id: 'btn-nebula-swirl',
    name: 'Nebula Swirl',
    category: 'button',
    description: 'Cosmic nebula with swirling colors',
    tags: ['button', 'nebula', 'cosmic', 'space'],
    bgConfig: 'bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-3xl ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-galaxy mr-3"></i> Cosmic Nebula</span>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.4),transparent_50%)] animate-nebula-pulse"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.3),transparent_50%)] animate-nebula-pulse delay-1000"></div>
  <div class="absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-nebula-swirl"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-galaxy mr-3"></i> Cosmic Nebula</span>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.4),transparent_50%)] animate-nebula-pulse"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.3),transparent_50%)] animate-nebula-pulse delay-1000"></div>
  <div class="absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-nebula-swirl"></div>
</button>`,
        react: `import React from 'react';

const NebulaButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
        <span className="relative z-10 flex items-center"><i className="fas fa-galaxy mr-3"></i> Cosmic Nebula</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.4),transparent_50%)] animate-nebula-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.3),transparent_50%)] animate-nebula-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-nebula-swirl"></div>
      </button>
    </>
  );
};

export default NebulaButton;`
      };
    }
  },
  {
    id: 'btn-liquid-rainbow',
    name: 'Liquid Rainbow',
    category: 'button',
    description: 'Flowing rainbow colors like liquid',
    tags: ['button', 'rainbow', 'liquid', 'flowing'],
    bgConfig: 'bg-gradient-to-r from-red-500 via-yellow-500,green-500,blue-500 to-purple-500 hover:bg-gradient-to-r from-red-500 via-yellow-500,green-500,blue-500 to-purple-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-xl ${this.bgConfig} bg-[length:400%_auto] text-white font-bold text-lg transition-all duration-500 hover:animate-rainbow-flow">
  <span class="relative z-10 flex items-center backdrop-blur-sm px-4 py-1 rounded-lg bg-black/30"><i class="fas fa-rainbow mr-3"></i>  Rainbow</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-color-flow"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-color-flow delay-500"></div>
  </div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-yellow-500,green-500,blue-500 to-purple-500 bg-[length:400%_auto] text-white font-bold text-lg transition-all duration-500 hover:animate-rainbow-flow">
  <span class="relative z-10 flex items-center backdrop-blur-sm px-4 py-1 rounded-lg bg-black/30"><i class="fas fa-rainbow mr-3"></i> Liquid Rainbow</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-color-flow"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-color-flow delay-500"></div>
  </div>
</button>`,
        react: `import React from 'react';

const LiquidRainbowButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-yellow-500,green-500,blue-500 to-purple-500 bg-[length:400%_auto] text-white font-bold text-lg transition-all duration-500 hover:animate-rainbow-flow">
        <span className="relative z-10 flex items-center backdrop-blur-sm px-4 py-1 rounded-lg bg-black/30"><i className="fas fa-rainbow mr-3"></i> Liquid Rainbow</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-color-flow"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-color-flow delay-500"></div>
        </div>
      </button>
    </>
  );
};

export default LiquidRainbowButton;`
      };
    }
  },
  {
    id: 'btn-glitch-cyber',
    name: 'Glitch Cyber',
    category: 'button',
    description: 'Glitching cyberpunk style button',
    tags: ['button', 'glitch', 'cyberpunk', 'distortion'],
    bgConfig: 'bg-black border-2 border-green-400',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-md ${this.bgConfig} text-green-300 font-mono font-bold text-lg overflow-hidden transition-all duration-100 hover:animate-glitch">
  <span class="relative z-10 flex items-center"><i class="fas fa-exclamation-triangle mr-3"></i> SYSTEM GLITCH</span>
  <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-text">SYS7EM GL!TCH</span>
  <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-pink-400 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-text-alt">SY5T3M 6L!TCH</span>
  <div class="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-md bg-black border-2 border-green-400 text-green-300 font-mono font-bold text-lg overflow-hidden transition-all duration-100 hover:animate-glitch">
  <span class="relative z-10 flex items-center"><i class="fas fa-exclamation-triangle mr-3"></i> SYSTEM GLITCH</span>
  <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-text">SYS7EM GL!TCH</span>
  <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-pink-400 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-text-alt">SY5T3M 6L!TCH</span>
  <div class="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>`,
        react: `import React from 'react';

const GlitchCyberButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-md bg-black border-2 border-green-400 text-green-300 font-mono font-bold text-lg overflow-hidden transition-all duration-100 hover:animate-glitch">
        <span className="relative z-10 flex items-center"><i className="fas fa-exclamation-triangle mr-3"></i> SYSTEM GLITCH</span>
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-text">SYS7EM GL!TCH</span>
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-pink-400 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-text-alt">SY5T3M 6L!TCH</span>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </>
  );
};

export default GlitchCyberButton;`
      };
    }
  },
  {
    id: 'btn-stardust',
    name: 'Stardust Trail',
    category: 'button',
    description: 'Particles following cursor like stardust',
    tags: ['button', 'stardust', 'particles', 'trail'],
    bgConfig: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-lg ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-star mr-3 animate-spin-slow"></i> Stardust Trail</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div class="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-stardust"></div>
    <div class="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-stardust delay-100"></div>
    <div class="absolute bottom-3 left-1/4 w-1 h-1 bg-white rounded-full animate-stardust delay-200"></div>
    <div class="absolute bottom-2 right-1/3 w-1 h-1 bg-white rounded-full animate-stardust delay-300"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-star mr-3 animate-spin-slow"></i> Stardust Trail</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div class="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-stardust"></div>
    <div class="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-stardust delay-100"></div>
    <div class="absolute bottom-3 left-1/4 w-1 h-1 bg-white rounded-full animate-stardust delay-200"></div>
    <div class="absolute bottom-2 right-1/3 w-1 h-1 bg-white rounded-full animate-stardust delay-300"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</button>`,
        react: `import React from 'react';

const StardustButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
        <span className="relative z-10 flex items-center"><i className="fas fa-star mr-3 animate-spin-slow"></i> Stardust Trail</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-stardust"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-stardust delay-100"></div>
          <div className="absolute bottom-3 left-1/4 w-1 h-1 bg-white rounded-full animate-stardust delay-200"></div>
          <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-white rounded-full animate-stardust delay-300"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </button>
    </>
  );
};

export default StardustButton;`
      };
    }
  },
  {
    id: 'btn-hologram',
    name: 'Hologram Projection',
    category: 'button',
    description: 'Sci-fi hologram projection effect',
    tags: ['button', 'hologram', 'scifi', 'projection'],
    bgConfig: 'bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/50',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-lg ${this.bgConfig} text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff]">
  <span class="relative z-10 flex items-center"><i class="fas fa-satellite-dish mr-3"></i> HOLOGRAM</span>
  <div class="absolute -inset-1 border border-cyan-300 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/50 text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff]">
  <span class="relative z-10 flex items-center"><i class="fas fa-satellite-dish mr-3"></i> HOLOGRAM ACTIVE</span>
  <div class="absolute -inset-1 border border-cyan-300 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>`,
        react: `import React from 'react';

const HologramButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/50 text-cyan-300 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff]">
        <span className="relative z-10 flex items-center"><i className="fas fa-satellite-dish mr-3"></i> HOLOGRAM ACTIVE</span>
        <div className="absolute -inset-1 border border-cyan-300 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>
    </>
  );
};

export default HologramButton;`
      };
    }
  },
  {
    id: 'btn-neon-scribble',
    name: 'Neon Scribble',
    category: 'button',
    description: 'Hand-drawn neon scribble effect',
    tags: ['button', 'neon', 'scribble', 'hand-drawn'],
    bgConfig: 'bg-black border-2 border-pink-500',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-lg ${this.bgConfig} text-pink-400 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_25px_#ec4899]">
  <span class="relative z-10 flex items-center"><i class="fas fa-paint-brush mr-3"></i> Neon Scribble</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-1 left-2 w-6 h-1 bg-pink-500 rounded-full animate-scribble-1"></div>
    <div class="absolute bottom-2 right-3 w-4 h-1 bg-cyan-500 rounded-full animate-scribble-2"></div>
    <div class="absolute top-3 right-2 w-5 h-1 bg-purple-500 rounded-full animate-scribble-3"></div>
  </div>
  <div class="absolute -inset-2 border-2 border-yellow-400 rounded-lg blur opacity-0 group-hover:opacity-30 group-hover:animate-pulse"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-lg bg-black border-2 border-pink-500 text-pink-400 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_25px_#ec4899]">
  <span class="relative z-10 flex items-center"><i class="fas fa-paint-brush mr-3"></i> Neon Scribble</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-1 left-2 w-6 h-1 bg-pink-500 rounded-full animate-scribble-1"></div>
    <div class="absolute bottom-2 right-3 w-4 h-1 bg-cyan-500 rounded-full animate-scribble-2"></div>
    <div class="absolute top-3 right-2 w-5 h-1 bg-purple-500 rounded-full animate-scribble-3"></div>
  </div>
  <div class="absolute -inset-2 border-2 border-yellow-400 rounded-lg blur opacity-0 group-hover:opacity-30 group-hover:animate-pulse"></div>
</button>`,
        react: `import React from 'react';

const NeonScribbleButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-lg bg-black border-2 border-pink-500 text-pink-400 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_25px_#ec4899]">
        <span className="relative z-10 flex items-center"><i className="fas fa-paint-brush mr-3"></i> Neon Scribble</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1 left-2 w-6 h-1 bg-pink-500 rounded-full animate-scribble-1"></div>
          <div className="absolute bottom-2 right-3 w-4 h-1 bg-cyan-500 rounded-full animate-scribble-2"></div>
          <div className="absolute top-3 right-2 w-5 h-1 bg-purple-500 rounded-full animate-scribble-3"></div>
        </div>
        <div className="absolute -inset-2 border-2 border-yellow-400 rounded-lg blur opacity-0 group-hover:opacity-30 group-hover:animate-pulse"></div>
      </button>
    </>
  );
};

export default NeonScribbleButton;`
      };
    }
  },
  {
    id: 'btn-cyber-core',
    name: 'Cyber Energy Core',
    category: 'button',
    description: 'Glowing energy core with power lines',
    tags: ['button', 'cyber', 'energy', 'core'],
    bgConfig: 'bg-gray-900 border border-blue-500/30',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-full ${this.bgConfig} text-blue-300 font-bold text-lg transition-all duration-500 hover:scale-110">
  <span class="relative z-10 flex items-center"><i class="fas fa-bolt mr-3 animate-pulse"></i> ENERGY CORE</span>
  <div class="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
  <div class="absolute inset-4 rounded-full bg-gradient-radial from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
  <div class="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow"></div>
  <div class="absolute bottom-0 left-1/2 w-0.5 h-4 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow delay-500"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-blue-500/30 text-blue-300 font-bold text-lg transition-all duration-500 hover:scale-110">
  <span class="relative z-10 flex items-center"><i class="fas fa-bolt mr-3 animate-pulse"></i> ENERGY CORE</span>
  <div class="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
  <div class="absolute inset-4 rounded-full bg-gradient-radial from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
  <div class="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow"></div>
  <div class="absolute bottom-0 left-1/2 w-0.5 h-4 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow delay-500"></div>
</button>`,
        react: `import React from 'react';

const CyberCoreButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-blue-500/30 text-blue-300 font-bold text-lg transition-all duration-500 hover:scale-110">
        <span className="relative z-10 flex items-center"><i className="fas fa-bolt mr-3 animate-pulse"></i> ENERGY CORE</span>
        <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        <div className="absolute inset-4 rounded-full bg-gradient-radial from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow"></div>
        <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-energy-flow delay-500"></div>
      </button>
    </>
  );
};

export default CyberCoreButton;`
      };
    }
  },
  {
    id: 'btn-aurora-borealis',
    name: 'Aurora Borealis',
    category: 'button',
    description: 'Northern lights effect with flowing colors',
    tags: ['button', 'aurora', 'northern-lights', 'flowing'],
    bgConfig: 'bg-gradient-to-b from-gray-900 via-black to-gray-900',
    get preview() {
      return `<button class="group relative w-full max-w-[80%] py-4 flex items-center justify-center rounded-xl ${this.bgConfig} text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-mountain mr-3"></i> Aurora Magic</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-500/30 via-teal-500/40 to-blue-500/30 animate-aurora-flow"></div>
    <div class="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-rose-500/30 animate-aurora-flow delay-1000"></div>
    <div class="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-cyan-500/30 via-blue-500/40 to-indigo-500/30 animate-aurora-flow delay-2000"></div>
  </div>
  <div class="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
  <div class="absolute top-4 right-6 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-500"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
  <span class="relative z-10 flex items-center"><i class="fas fa-mountain mr-3"></i> Aurora Magic</span>
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-500/30 via-teal-500/40 to-blue-500/30 animate-aurora-flow"></div>
    <div class="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-rose-500/30 animate-aurora-flow delay-1000"></div>
    <div class="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-cyan-500/30 via-blue-500/40 to-indigo-500/30 animate-aurora-flow delay-2000"></div>
  </div>
  <div class="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
  <div class="absolute top-4 right-6 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-500"></div>
</button>`,
        react: `import React from 'react';

const AuroraButton = () => {
  return (
    <>
      <button className="relative w-64 h-16 flex items-center justify-center rounded-xl bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-bold text-lg overflow-hidden transition-all duration-700 hover:scale-105">
        <span className="relative z-10 flex items-center"><i className="fas fa-mountain mr-3"></i> Aurora Magic</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-500/30 via-teal-500/40 to-blue-500/30 animate-aurora-flow"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-rose-500/30 animate-aurora-flow delay-1000"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-cyan-500/30 via-blue-500/40 to-indigo-500/30 animate-aurora-flow delay-2000"></div>
        </div>
        <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-500"></div>
      </button>
    </>
  );
};

export default AuroraButton;`
      };
    }
  }
];