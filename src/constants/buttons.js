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
  ,
  {
    id: 'btn-v2-neon-border',
    name: 'Neon Border Pulse',
    category: 'button',
    description: 'Neon border that travels around the button',
    tags: ['button', 'neon', 'border', 'animated'],
    bgConfig: 'bg-black',
    get preview() {
      return `<button class="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
    Neon Pulse
  </span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative inline-flex overflow-hidden rounded-lg p-[1px]">
  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
    Neon Pulse
  </span>
</button>`,
        react: `import React from 'react';

const NeonBorderButton = () => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
        Neon Pulse
      </span>
    </button>
  );
};
export default NeonBorderButton;`
      };
    }
  },
  {
    id: 'btn-v2-glitch-shift',
    name: 'Glitch Text Shift',
    category: 'button',
    description: 'Text splits into RGB channels on hover',
    tags: ['button', 'glitch', 'rgb', 'hover'],
    bgConfig: 'bg-zinc-900',
    get preview() {
      return `<button class="group relative px-8 py-4 bg-zinc-900 text-white font-bold rounded-md overflow-hidden">
  <div class="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
  <span class="relative block group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:text-red-500 transition-transform duration-100">GLITCH</span>
  <span class="absolute inset-0 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 transition-all duration-100 pointer-events-none font-bold">GLITCH</span>
  <span class="absolute inset-0 flex items-center justify-center text-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-100 pointer-events-none font-bold mix-blend-screen">GLITCH</span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative px-8 py-4 bg-zinc-900 text-white font-bold rounded-md overflow-hidden">
  <span class="relative block group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-red-500 transition-transform">GLITCH</span>
  <span class="absolute inset-0 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-all font-bold">GLITCH</span>
</button>`,
        react: `import React from 'react';

const GlitchTextButton = () => {
  return (
    <button className="group relative px-8 py-4 bg-zinc-900 text-white font-bold rounded-md overflow-hidden">
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <span className="relative block group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:text-red-500 transition-transform duration-100">GLITCH</span>
      <span className="absolute inset-0 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 transition-all duration-100 pointer-events-none font-bold">GLITCH</span>
      <span className="absolute inset-0 flex items-center justify-center text-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-100 pointer-events-none font-bold mix-blend-screen">GLITCH</span>
    </button>
  );
};
export default GlitchTextButton;`
      };
    }
  },
  {
    id: 'btn-v2-velocity',
    name: 'Speed Velocity',
    category: 'button',
    description: 'Text flies out top, new text flies in from bottom',
    tags: ['button', 'hover', 'text-effect', 'velocity'],
    bgConfig: 'bg-emerald-600',
    get preview() {
      return `<button class="group relative px-8 py-3 bg-emerald-600 rounded-full overflow-hidden text-white font-semibold transition-all hover:bg-emerald-700">
         <span class="inline-block transition-transform duration-300 group-hover:-translate-y-12">Add to Cart</span>
         <span class="absolute left-0 right-0 inline-block transition-transform duration-300 translate-y-12 group-hover:-translate-y-1/2 top-1/2">Checkout Now</span>
       </button>`;
    },
    get code() {
      return {
        html: `<button class="group relative px-8 py-3 bg-emerald-600 rounded-full overflow-hidden text-white font-semibold hover:bg-emerald-700">
  <span class="inline-block transition-transform duration-300 group-hover:-translate-y-12">Add to Cart</span>
  <span class="absolute left-0 right-0 inline-block transition-transform duration-300 translate-y-12 group-hover:-translate-y-1/2 top-1/2">Checkout Now</span>
</button>`,
        react: `import React from 'react';

const VelocityButton = () => {
  return (
    <button className="group relative px-8 py-3 bg-emerald-600 rounded-full overflow-hidden text-white font-semibold transition-all hover:bg-emerald-700">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-12">Add to Cart</span>
      <span className="absolute left-0 right-0 inline-block transition-transform duration-300 translate-y-12 group-hover:-translate-y-1/2 top-1/2 text-center w-full">Checkout Now</span>
    </button>
  );
};
export default VelocityButton;`
      };
    }
  },
  {
    id: 'btn-v2-iridescent',
    name: 'Iridescent Sheen',
    category: 'button',
    description: 'Pearl-like iridescent gradient hover effect',
    tags: ['button', 'gradient', 'iridescent', 'shiny'],
    bgConfig: 'bg-white',
    get preview() {
      return `<button class="relative px-8 py-3 rounded-xl bg-white text-zinc-800 font-bold border border-zinc-200 overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
        <div class="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-indigo-300/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span class="relative z-10 flex items-center gap-2">Explore <span class="group-hover:translate-x-1 transition-transform">→</span></span>
      </button>`;
    },
    get code() {
      return {
        html: `<button class="relative px-8 py-3 rounded-xl bg-white text-zinc-800 font-bold border border-zinc-200 overflow-hidden group shadow-sm hover:shadow-lg transition-all">
  <div class="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-indigo-300/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
  <span class="relative z-10 flex items-center gap-2">Explore <span class="group-hover:translate-x-1 transition-transform">→</span></span>
</button>`,
        react: `import React from 'react';
import { ArrowRight } from 'lucide-react';

const IridescentButton = () => {
  return (
    <button className="relative px-8 py-3 rounded-xl bg-white text-zinc-800 font-bold border border-zinc-200 overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-indigo-300/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <span className="relative z-10 flex items-center gap-2">
        Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};
export default IridescentButton;`
      };
    }
  },
  {
    id: 'btn-v2-laser-sweep',
    name: 'Laser Sweep',
    category: 'button',
    description: 'High tech laser beam sweep',
    tags: ['button', 'laser', 'tech', 'sweep'],
    bgConfig: 'bg-slate-900',
    get preview() {
      return `<button class="relative px-10 py-3 bg-slate-900 rounded-lg text-red-500 font-mono font-bold tracking-widest overflow-hidden group border border-red-900/50 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
        <span class="relative z-10">TERMINATE</span>
        <div class="absolute inset-0 bg-red-600/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
        <div class="absolute top-0 left-0 w-full h-[2px] bg-red-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1s] delay-75"></div>
        <div class="absolute bottom-0 right-0 w-full h-[2px] bg-red-500 translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-[1s] delay-75"></div>
      </button>`;
    },
    get code() {
      return {
        html: `<button class="relative px-10 py-3 bg-slate-900 rounded-lg text-red-500 font-mono font-bold tracking-widest overflow-hidden group border border-red-900/50 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all">
  <span class="relative z-10">TERMINATE</span>
  <div class="absolute inset-0 bg-red-600/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
  <div class="absolute top-0 left-0 w-full h-[2px] bg-red-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1s]"></div>
</button>`,
        react: `import React from 'react';

const LaserButton = () => {
  return (
    <button className="relative px-10 py-3 bg-slate-900 rounded-lg text-red-500 font-mono font-bold tracking-widest overflow-hidden group border border-red-900/50 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
      <span className="relative z-10">TERMINATE</span>
      <div className="absolute inset-0 bg-red-600/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1s] delay-75"></div>
      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-red-500 translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-[1s] delay-75"></div>
    </button>
  );
};
export default LaserButton;`
      };
    }
  }
  ,
  {
    id: 'btn-v2-add-cart-liquid',
    name: 'Liquid Add to Cart',
    category: 'button',
    description: 'Button fills with liquid animation on click/hover',
    tags: ['button', 'ecommerce', 'cart', 'liquid'],
    bgConfig: 'bg-white',
    get preview() {
      return `<button class="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-slate-950 shadow-md transition-all hover:bg-slate-50 hover:shadow-lg active:scale-95">
  <span class="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    Add to Cart
  </span>
  <div class="absolute inset-0 h-full w-full scale-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-100 group-active:bg-blue-700"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-slate-950 shadow-md transition-all hover:bg-slate-50 hover:shadow-lg active:scale-95">
  <span class="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-300">
    <!-- Icon SVG here -->
    Add to Cart
  </span>
  <div class="absolute inset-0 h-full w-full scale-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-100"></div>
</button>`,
        react: `import React from 'react';
import { ShoppingCart } from 'lucide-react';

const LiquidCartButton = () => {
  return (
    <button className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-slate-950 shadow-md transition-all hover:bg-slate-50 hover:shadow-lg active:scale-95">
      <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-300">
        <ShoppingCart size={20} />
        Add to Cart
      </span>
      <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-100 group-active:bg-blue-700" />
    </button>
  );
};
export default LiquidCartButton;`
      };
    }
  },
  {
    id: 'btn-v2-payment-success',
    name: 'Payment Process',
    category: 'button',
    description: 'Morphs from Pay Now to loading to Success',
    tags: ['button', 'payment', 'animated', 'morph'],
    bgConfig: 'bg-indigo-600',
    get preview() {
      return `<button class="relative flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-white transition-all hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 group">
  <span class="flex items-center gap-2 font-semibold">
    Pay Now $99
  </span>
</button>`;
    },
    get code() {
      return {
        html: `<!-- Requires JS state for full effect, simple CSS version below -->
<button class="relative flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-white transition-all hover:bg-indigo-700">
  <span class="font-semibold">Pay Now</span>
</button>`,
        react: `import React, { useState } from 'react';
import { Check, Loader2, CreditCard } from 'lucide-react';

const PaymentButton = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleClick = () => {
    if (status !== 'idle') return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={\`relative flex items-center justify-center rounded-lg px-8 py-3 text-white transition-all duration-300 \${
        status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
      } \${status === 'loading' ? 'cursor-wait' : ''}\`}
    >
      <span className={\`flex items-center gap-2 font-semibold transition-all duration-300 \${
        status !== 'idle' ? 'opacity-0 scale-50 absolute' : 'opacity-100 scale-100'
      }\`}>
        <CreditCard size={18} /> Pay Now
      </span>

      <span className={\`absolute transition-all duration-300 \${
        status === 'loading' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }\`}>
        <Loader2 className="animate-spin" />
      </span>

      <span className={\`flex items-center gap-2 font-semibold transition-all duration-300 \${
        status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'
      }\`}>
        <Check size={18} /> Paid
      </span>
    </button>
  );
};
export default PaymentButton;`
      };
    }
  },
  {
    id: 'btn-v2-download-progress',
    name: 'Download Progress',
    category: 'button',
    description: 'Button turns into progress bar',
    tags: ['button', 'download', 'progress', 'interaction'],
    bgConfig: 'bg-slate-900',
    get preview() {
      return `<button class="relative overflow-hidden rounded-md bg-slate-900 px-6 py-2.5 text-white shadow-md transition-all">
  <span class="relative z-10 flex items-center gap-2 font-medium">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
    Download
  </span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative overflow-hidden rounded-md bg-slate-900 px-6 py-2.5 text-white">
  <span class="relative z-10 flex items-center gap-2 font-medium">Download</span>
</button>`,
        react: `import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startDownload = () => {
    if (downloading) return;
    setDownloading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 2; // speed
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setDownloading(false);
          setProgress(0);
        }, 1000);
      }
    }, 30);
  };

  return (
    <button
      onClick={startDownload}
      className="relative overflow-hidden rounded-md bg-slate-900 px-6 py-2.5 text-white shadow-md transition-all active:scale-95"
    >
      <div 
        className="absolute bottom-0 left-0 top-0 bg-blue-600 transition-all duration-100 ease-linear"
        style={{ width: \`\${progress}%\` }}
      />
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {progress === 100 ? (
          <>
            <Check size={18} /> Done
          </>
        ) : (
          <>
            <Download size={18} className={downloading ? 'animate-bounce' : ''} />
            {downloading ? 'Downloading...' : 'Download'}
          </>
        )}
      </span>
    </button>
  );
};
export default DownloadButton;`
      };
    }
  },
  {
    id: 'btn-v2-delete-shake',
    name: 'Delete Shake',
    category: 'button',
    description: 'Shakes violently on hover to warn user',
    tags: ['button', 'danger', 'delete', 'shake'],
    bgConfig: 'bg-red-500',
    get preview() {
      return `<button class="group relative rounded-lg bg-red-500 px-6 py-2.5 text-white font-semibold transition-all hover:bg-red-600 hover:animate-[shake_0.5s_ease-in-out_infinite]">
  <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    Delete Item
  </div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="rounded-lg bg-red-500 px-6 py-2.5 text-white font-semibold hover:bg-red-600 hover:animate-ping">
      <!-- Standard shake animation needs custom keyframes or an arbitrary utility like animate-[shake_0.5s_infinite] defined in tailwind config or arbitrary values if supported -->
  Delete
</button>`,
        react: `import React from 'react';
import { Trash2 } from 'lucide-react';

const DeleteButton = () => {
  return (
    <button className="group relative rounded-lg bg-red-500 px-6 py-2.5 text-white font-semibold transition-all hover:bg-red-600 hover:animate-[shake_0.5s_ease-in-out_infinite]">
      <div className="flex items-center gap-2">
        <Trash2 className="group-hover:rotate-12 transition-transform" size={18} />
        Delete Item
      </div>
    </button>
  );
};
export default DeleteButton;`
      };
    }
  },
  {
    id: 'btn-v2-subscribe-bell',
    name: 'Subscribe Bell',
    category: 'button',
    description: 'Subscribe text with ringing bell animation',
    tags: ['button', 'social', 'subscribe', 'bell'],
    bgConfig: 'bg-red-600',
    get preview() {
      return `<button class="group flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md active:scale-95">
  <span class="group-hover:animate-[wiggle_1s_ease-in-out_infinite]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></span>
  SUBSCRIBE
</button>`;
    },
    get code() {
      return {
        html: `<button class="group flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-700 transition-all">
  <span class="group-hover:animate-bounce">🔔</span>
  SUBSCRIBE
</button>`,
        react: `import React from 'react';
import { Bell } from 'lucide-react';

const SubscribeButton = () => {
  return (
    <button className="group flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md active:scale-95">
      <Bell className="group-hover:animate-[wiggle_1s_ease-in-out_infinite] fill-transparent group-hover:fill-white/30 transition-colors" size={18} />
      SUBSCRIBE
    </button>
  );
};
export default SubscribeButton;`
      };
    }
  },
  {
    id: 'btn-v2-neumorphic-press',
    name: 'Neumorphic Press',
    category: 'button',
    description: 'Soft UI button with realistic pressed state',
    tags: ['button', 'neumorphism', 'soft-ui', 'pressed'],
    bgConfig: 'bg-[#e0e5ec]',
    get preview() {
      return `<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 font-bold text-slate-700 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] transition-all hover:text-blue-600 active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] active:scale-95">
  Soft Press
</button>`;
    },
    get code() {
      return {
        html: `<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 font-bold text-slate-700 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] transition-all hover:text-blue-600 active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] active:scale-95">
  Soft Press
</button>`,
        react: `import React from 'react';

const NeumorphicButton = () => {
  return (
    <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 font-bold text-slate-700 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] transition-all hover:text-blue-600 active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] active:scale-95">
      Soft Press
    </button>
  );
};
export default NeumorphicButton;`
      };
    }
  },
  {
    id: 'btn-v2-glassmorphism-shine',
    name: 'Glass Reflection',
    category: 'button',
    description: 'Glassy button with sliding reflection',
    tags: ['button', 'glass', 'reflection', 'shine'],
    bgConfig: 'bg-white/10',
    get preview() {
      return `<button class="group relative overflow-hidden rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-lg transition-all hover:bg-white/20">
  <div class="absolute top-0 left-[-100%] h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 transition-transform duration-1000 group-hover:translate-x-[400%]" />
  <span class="relative">Glass Shine</span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative overflow-hidden rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-lg transition-all hover:bg-white/20">
  <div class="absolute top-0 left-[-100%] h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 transition-transform duration-1000 group-hover:translate-x-[400%]" />
  <span class="relative">Glass Shine</span>
</button>`,
        react: `import React from 'react';

const GlassShineButton = () => {
  return (
    <button className="group relative overflow-hidden rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-lg transition-all hover:bg-white/20">
      <div className="absolute top-0 left-[-100%] h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 transition-transform duration-1000 group-hover:translate-x-[400%]" />
      <span className="relative">Glass Shine</span>
    </button>
  );
};
export default GlassShineButton;`
      };
    }
  },
  {
    id: 'btn-v2-magnetic-hover',
    name: 'Magnetic Cursor',
    category: 'button',
    description: 'Button follows cursor slightly (Simulated with CSS translate)',
    tags: ['button', 'magnetic', 'hover', 'interaction'],
    bgConfig: 'bg-violet-600',
    get preview() {
      return `<button class="group relative rounded-full bg-violet-600 px-8 py-3 text-white transition-transform duration-100 ease-linear hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl active:scale-95">
  <span class="relative z-10 font-bold">Magnetic</span>
  <div class="absolute inset-0 z-0 rounded-full bg-violet-600 blur-lg transition-opacity opacity-0 group-hover:opacity-50"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative rounded-full bg-violet-600 px-8 py-3 text-white transition-transform duration-100 ease-linear hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl active:scale-95">
  <span class="relative z-10 font-bold">Magnetic</span>
  <div class="absolute inset-0 z-0 rounded-full bg-violet-600 blur-lg transition-opacity opacity-0 group-hover:opacity-50"></div>
</button>`,
        react: `import React, { useRef, useState } from 'react';

const MagneticButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // magnetic strength
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: \`translate(\${position.x}px, \${position.y}px)\` }}
      className="relative rounded-full bg-violet-600 px-8 py-3 text-white shadow-lg transition-transform duration-100 ease-out active:scale-95"
    >
      <span className="font-bold">Magnetic</span>
    </button>
  );
};
export default MagneticButton;`
      };
    }
  },
  {
    id: 'btn-v2-gradient-rotate-border',
    name: 'Rotating Gradient Border',
    category: 'button',
    description: 'Gradient border spins continuously',
    tags: ['button', 'gradient', 'border', 'spin'],
    bgConfig: 'bg-black',
    get preview() {
      return `<button class="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Spin
  </span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="relative inline-flex h-12 overflow-hidden rounded-full p-px">
  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Spin
  </span>
</button>`,
        react: `import React from 'react';

const RotatingBorderButton = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Border Spin
      </span>
    </button>
  );
};
export default RotatingBorderButton;`
      };
    }
  },
  {
    id: 'btn-v2-ghost-reveal',
    name: 'Ghost Reveal',
    category: 'button',
    description: 'Transparent button fills with color from center',
    tags: ['button', 'ghost', 'fill', 'hover'],
    bgConfig: 'bg-transparent',
    get preview() {
      return `<button class="group relative rounded-lg border-2 border-fuchsia-600 bg-transparent px-8 py-3 font-bold text-fuchsia-600 transition-colors hover:text-white overflow-hidden">
  <span class="relative z-10">Ghost Fill</span>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="h-0 w-0 rounded-full bg-fuchsia-600 transition-all duration-300 group-hover:h-96 group-hover:w-96 opacity-100"></div>
  </div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative rounded-lg border-2 border-fuchsia-600 bg-transparent px-8 py-3 font-bold text-fuchsia-600 transition-colors hover:text-white overflow-hidden">
  <span class="relative z-10">Ghost Fill</span>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="h-0 w-0 rounded-full bg-fuchsia-600 transition-all duration-300 group-hover:h-96 group-hover:w-96"></div>
  </div>
</button>`,
        react: `import React from 'react';

const GhostButton = () => {
  return (
    <button className="group relative rounded-lg border-2 border-fuchsia-600 bg-transparent px-8 py-3 font-bold text-fuchsia-600 transition-colors hover:text-white overflow-hidden">
      <span className="relative z-10">Ghost Fill</span>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-0 w-0 rounded-full bg-fuchsia-600 transition-all duration-300 group-hover:h-96 group-hover:w-96" />
      </div>
    </button>
  );
};
export default GhostButton;`
      };
    }
  },
  {
    id: 'btn-v2-social-expand',
    name: 'Social Expand',
    category: 'button',
    description: 'Button expands to show social links',
    tags: ['button', 'social', 'expand', 'share'],
    bgConfig: 'bg-blue-600',
    get preview() {
      return `<div class="flex items-center gap-2 group">
  <button class="flex h-12 w-12 items-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:w-48 overflow-hidden">
    <div class="flex h-12 w-12 shrink-0 items-center justify-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
    </div>
    <span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap delay-100 pl-2">Share This</span>
  </button>
</div>`;
    },
    get code() {
      return {
        html: `<div class="flex items-center gap-2 group">
  <button class="flex h-12 w-12 items-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:w-48 overflow-hidden">
    <div class="flex h-12 w-12 shrink-0 items-center justify-center">
      <!-- Icon -->
    </div>
    <span class="opacity-0 group-hover:opacity-100 transition-opacity pl-2 whitespace-nowrap">Share This</span>
  </button>
</div>`,
        react: `import React from 'react';
import { Share2 } from 'lucide-react';

const SocialExpandButton = () => {
  return (
    <div className="flex items-center gap-2 group">
      <button className="flex h-12 w-12 items-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:w-48 overflow-hidden">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <Share2 size={20} />
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-medium whitespace-nowrap pl-2">Share This</span>
      </button>
    </div>
  );
};
export default SocialExpandButton;`
      };
    }
  },
  {
    id: 'btn-v2-blob-morph',
    name: 'Blob Morph',
    category: 'button',
    description: 'Button shape morphs like a blob on hover',
    tags: ['button', 'blob', 'morph', 'organic'],
    bgConfig: 'bg-orange-500',
    get preview() {
      return `<button class="h-16 w-40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-orange-500 text-white font-bold transition-all duration-500 hover:rounded-[70%_30%_30%_70%/70%_70%_30%_30%] hover:scale-110 active:scale-95 shadow-xl">
  Morph
</button>`;
    },
    get code() {
      return {
        html: `<button class="h-16 w-40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-orange-500 text-white font-bold transition-all duration-500 hover:rounded-[70%_30%_30%_70%/70%_70%_30%_30%] hover:scale-110 active:scale-95 shadow-xl">
  Morph
</button>`,
        react: `import React from 'react';

const BlobButton = () => {
  return (
    <button className="h-16 w-40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-orange-500 text-white font-bold transition-all duration-500 hover:rounded-[70%_30%_30%_70%/70%_70%_30%_30%] hover:scale-110 active:scale-95 shadow-xl">
      Morph
    </button>
  );
};
export default BlobButton;`
      };
    }
  },
  {
    id: 'btn-v2-confetti-pop',
    name: 'Confetti Pop',
    category: 'button',
    description: 'Particle effect on hover/active',
    tags: ['button', 'confetti', 'pop', 'celebrate'],
    bgConfig: 'bg-yellow-400',
    get preview() {
      return `<button class="group relative rounded-full bg-yellow-400 px-8 py-3 font-bold text-yellow-900 transition-transform active:scale-90">
  <span class="relative z-10">Celebrate!</span>
  <div class="absolute -top-4 -left-4 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-all group-hover:top-[-20px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:animate-ping"></div>
  <div class="absolute -top-4 -right-4 h-2 w-2 rounded-full bg-blue-500 opacity-0 transition-all group-hover:top-[-20px] group-hover:right-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-75"></div>
  <div class="absolute -bottom-4 -left-4 h-2 w-2 rounded-full bg-green-500 opacity-0 transition-all group-hover:bottom-[-20px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-150"></div>
  <div class="absolute -bottom-4 -right-4 h-2 w-2 rounded-full bg-purple-500 opacity-0 transition-all group-hover:bottom-[-20px] group-hover:right-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative rounded-full bg-yellow-400 px-8 py-3 font-bold text-yellow-900 transition-transform active:scale-90">
  <span class="relative z-10">Celebrate!</span>
  <div class="absolute inset-0 z-0">
    <div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 opacity-0 group-active:animate-ping"></div>
  </div>
</button>`,
        react: `import React from 'react';

const ConfettiButton = () => {
  return (
    <button className="group relative rounded-full bg-yellow-400 px-8 py-3 font-bold text-yellow-900 transition-transform active:scale-90">
      <span className="relative z-10">Celebrate!</span>
      <div className="absolute -top-4 -left-4 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-all group-hover:top-[-20px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:animate-ping"></div>
      <div class="absolute -top-4 -right-4 h-2 w-2 rounded-full bg-blue-500 opacity-0 transition-all group-hover:top-[-20px] group-hover:right-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-75"></div>
      <div class="absolute -bottom-4 -left-4 h-2 w-2 rounded-full bg-green-500 opacity-0 transition-all group-hover:bottom-[-20px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-150"></div>
      <div class="absolute -bottom-4 -right-4 h-2 w-2 rounded-full bg-purple-500 opacity-0 transition-all group-hover:bottom-[-20px] group-hover:right-[-20px] group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
    </button>
  );
};
export default ConfettiButton;`
      };
    }
  },
  {
    id: 'btn-v2-spotlight-reveal',
    name: 'Spotlight Reveal',
    category: 'button',
    description: 'Hover to reveal hidden text like a spotlight',
    tags: ['button', 'spotlight', 'reveal', 'hover'],
    bgConfig: 'bg-black',
    get preview() {
      return `<button class="group relative overflow-hidden rounded-lg bg-black px-8 py-3 font-mono text-white transition-all">
  <span class="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></span>
  <span class="relative z-10 group-hover:text-black transition-colors duration-300">Hover Me</span>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative overflow-hidden rounded-lg bg-black px-8 py-3 font-mono text-white transition-all">
  <span class="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></span>
  <span class="relative z-10 group-hover:text-black transition-colors duration-300">Hover Me</span>
</button>`,
        react: `import React from 'react';

const SpotlightButton = () => {
  return (
    <button className="group relative overflow-hidden rounded-lg bg-black px-8 py-3 font-mono text-white transition-all">
      <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0" />
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">Hover Me</span>
    </button>
  );
};
export default SpotlightButton;`
      };
    }
  },
  {
    id: 'btn-v2-paper-fold',
    name: 'Paper Fold',
    category: 'button',
    description: 'Corner folds down on hover',
    tags: ['button', 'paper', 'fold', 'creative'],
    bgConfig: 'bg-stone-200',
    get preview() {
      return `<button class="relative h-12 w-32 bg-stone-200 text-stone-800 font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
  <span class="relative z-10">Fold</span>
  <div class="absolute top-0 right-0 h-4 w-4 bg-stone-300 transition-all duration-300 origin-bottom-left group-hover:rotate-90 group-hover:shadow-sm"></div>
  <div class="absolute top-0 right-0 h-0 w-0 border-t-[16px] border-l-[16px] border-t-white border-l-transparent drop-shadow-sm transition-all duration-300"></div>
</button>`;
    },
    get code() {
      return {
        html: `<button class="group relative h-12 w-32 bg-stone-200 text-stone-800 font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
  <span class="relative z-10">Fold</span>
  <div class="absolute top-0 right-0 h-0 w-0 border-t-[20px] border-l-[20px] border-t-white/50 border-l-transparent transition-all duration-300 group-hover:border-t-white group-hover:border-l-stone-400 group-hover:scale-110"></div>
</button>`,
        react: `import React from 'react';

const PaperFoldButton = () => {
  return (
    <button className="group relative h-12 w-32 bg-stone-200 text-stone-800 font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
      <span className="relative z-10">Fold</span>
      <div className="absolute top-0 right-0 h-0 w-0 border-t-[20px] border-l-[20px] border-t-white border-l-transparent transition-all duration-300 group-hover:border-stone-400 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm" />
    </button>
  );
};
export default PaperFoldButton;`
      };
    }
  }
];