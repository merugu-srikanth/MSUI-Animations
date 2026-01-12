import React from 'react';
import { RefreshCw, Zap, Code2, Terminal, Waves, Droplets, Fish, Wind, Sun, Thermometer, Mountain, Flame, Atom, Cpu, MemoryStick, Network, X, Minus, Plus, ShoppingBag } from 'lucide-react';

export const CARDS = [
  {
    id: 'card-neon-flip',
    name: 'Neon Cyber Flip',
    category: 'card',
    description: 'Cyberpunk style 3D flip card with neon glow and holographic effects.',
    tags: ['card', '3d', 'flip', 'neon', 'cyberpunk'],
    preview: `
      <div class="group relative w-full max-w-[80%] h-[420px] cursor-pointer [perspective:1200px]">
  <div class="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900/90 via-purple-900/90 to-fuchsia-900/90 border border-violet-500/40 overflow-hidden [backface-visibility:hidden]">
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,.3)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-20 blur-xl"></div>

      <div class="relative z-10 p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-5">
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 border border-violet-500/40 text-violet-200">
            NEON FLIP
          </span>
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center animate-spin [animation-duration:3s] shadow-lg shadow-fuchsia-500/40">
            ↻
          </div>
        </div>

        <h3 class="text-2xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent mb-2">
          Cyber Flip
        </h3>
        <p class="text-gray-300 text-sm mb-6">
          3D neon flip card with cyberpunk glow aesthetics.
        </p>

        <div class="space-y-3 flex-1">
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border-l-4 border-violet-500">
            <div class="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">⚡</div>
            <div>
              <p class="text-sm font-semibold text-white">Neon Glow</p>
              <p class="text-xs text-violet-300/70">Animated pulse</p>
            </div>
          </div>

          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border-l-4 border-purple-500">
            <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">⬢</div>
            <div>
              <p class="text-sm font-semibold text-white">3D Transform</p>
              <p class="text-xs text-purple-300/70">Smooth rotation</p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-violet-500/30">
          <p class="text-xs text-gray-300">Hover to flip →</p>
        </div>
      </div>
    </div>

    <!-- BACK -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-500/40 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <div class="absolute inset-0 opacity-10 bg-[gradient-gradient(90deg,rgba(34,211,238,.15)_1px,transparent_1px),gradient-gradient(rgba(34,211,238,.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div class="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
        <div class="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/40">
          ⌘
        </div>
        <h3 class="text-xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent mb-2">
          System Back
        </h3>
        <p class="text-sm text-gray-300">
          Advanced cyber-style 3D interaction
        </p>
      </div>
    </div>

  </div>
</div>
`,
    code: {
      html: `
<div class="group relative w-full max-w-[320px] h-[420px] [perspective:1200px]">
  <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <div class="absolute inset-0 [backface-visibility:hidden]">Front</div>
    <div class="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">Back</div>
  </div>
</div>
`,
      react: `
import React from 'react';

const NeonFlipCard = () => {
  return (
    <div className="group relative w-full max-w-[320px] h-[420px] [perspective:1200px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 border border-violet-500/40 [backface-visibility:hidden] p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Cyber Flip</h3>
          <p className="text-sm text-gray-300">Neon cyberpunk card</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-500/40 [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 text-white flex items-center justify-center">
          <p>Back Side</p>
        </div>

      </div>
    </div>
  );
};

export default NeonFlipCard;
`
    }
  },


  {
    id: 'card-ocean-wave',
    name: 'Ocean Wave Card',
    category: 'card',
    description: 'Ocean themed card with wave animations and floating bubbles.',
    tags: ['card', 'ocean', 'wave', 'animation', 'nature'],
    preview: `<div class=" group h-full w-full max-w-[80%]  cursor-pointer">
                <div class="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-teal-400/20 group-hover:border-teal-400/50">
                    <div class="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-cyan-900/90 to-emerald-900/90"></div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-wave"></div>
                    <div class="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-sm animate-[bubble_4s_ease-in-out_infinite]"></div>
                    <div class="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 blur-sm animate-[bubble_5s_ease-in-out_infinite]" style="animation-delay:0.5s"></div>
                    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                    <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-b from-teal-400/30 to-transparent"></div>
                    <div class="relative z-10 p-6 h-full flex flex-col">
                        <div class="flex justify-between items-start mb-4">
                            <span class="px-3 py-1.5 bg-teal-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-teal-100 border border-teal-400/50">OCEAN WAVE</span>
                            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/40">
                                <i class="fas fa-water text-white text-sm"></i>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
                            <p class="text-gray-300 mb-6 leading-relaxed text-sm">Experience ocean waves with bubble animations and marine themed elements.</p>
                            <div class="mb-6">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-white font-semibold text-sm">Wave Intensity</span>
                                    <span class="text-teal-300 font-bold text-sm animate-pulse">78%</span>
                                </div>
                                <div class="h-2 bg-teal-900/50 rounded-full overflow-hidden border border-teal-400/30">
                                    <div class="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full w-4/5 relative overflow-hidden">
                                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-3 mb-6">
                                <div class="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-teal-500/20">
                                    <i class="fas fa-water text-teal-300 text-xl mb-2 animate-wave"></i>
                                    <p class="font-semibold text-white text-sm">Wave Effect</p>
                                </div>
                                <div class="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-cyan-500/20" style="transition-delay:0.1s">
                                    <i class="fas fa-soap text-cyan-300 text-xl mb-2 animate-bounce"></i>
                                    <p class="font-semibold text-white text-sm">Bubbles</p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 border-t border-teal-500/30">
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                <p class="text-teal-200 text-xs">Active marine environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    code: {
      html: `<div class="group h-full w-full group h-full w-full max-w-[80%] cursor-pointer">
   <div class="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-transparent group-hover:border-teal-400/50">
       <div class="relative z-10 p-6 h-full flex flex-col">
           <div class="flex-1">
               <h2 class="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
               <p class="text-gray-300 mb-6 leading-relaxed text-sm">Experience ocean waves with bubble animations and marine themed elements.</p>
               <!-- Content... -->
           </div>
       </div>
   </div>
</div>`,
      react: `import React from 'react';
import { Waves, Droplets, Fish, Wind } from 'lucide-react';

const OceanCard = () => {
return (
<div className="group h-full w-full group h-full w-full max-w-[80%] cursor-pointer">
   <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-transparent group-hover:border-teal-400/50">
       
       {/* Ocean gradient */}
       <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-cyan-900/90 to-emerald-900/90"></div>
       
       {/* Wave animation layer */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-wave"></div>
       
       {/* Bubbles */}
       <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-sm animate-[bubble_4s_ease-in-out_infinite]"></div>
       <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 blur-sm animate-[bubble_5s_ease-in-out_infinite]" style={{animationDelay: "0.5s"}}></div>
       
       <div className="relative z-10 p-6 h-full flex flex-col">
           {/* Header */}
           <div className="flex justify-between items-start mb-4">
               <span className="px-3 py-1.5 bg-teal-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-teal-100 border border-teal-400/50">OCEAN WAVE</span>
               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/40">
                   <Waves className="w-4 h-4 text-white" />
               </div>
           </div>
           
           <div className="flex-1">
               <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
               <p className="text-gray-300 mb-6 leading-relaxed text-sm">Experience ocean waves with bubble animations and marine themed elements.</p>
               
               {/* Progress */}
               <div className="mb-6">
                   <div className="flex items-center justify-between mb-3">
                       <span className="text-white font-semibold text-sm">Wave Intensity</span>
                       <span className="text-teal-300 font-bold text-sm animate-pulse">78%</span>
                   </div>
                   <div className="h-2 bg-teal-900/50 rounded-full overflow-hidden border border-teal-400/30">
                       <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full w-4/5 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                       </div>
                   </div>
               </div>
               
               {/* Features */}
               <div className="grid grid-cols-2 gap-3 mb-6">
                   <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-teal-500/20">
                       <Waves className="w-5 h-5 text-teal-300 mx-auto mb-2 animate-wave" />
                       <p className="font-semibold text-white text-sm">Wave Effect</p>
                   </div>
                   <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-cyan-500/20" style={{transitionDelay: "0.1s"}}>
                       <Droplets className="w-5 h-5 text-cyan-300 mx-auto mb-2 animate-bounce" />
                       <p className="font-semibold text-white text-sm">Bubbles</p>
                   </div>
               </div>
           </div>
           
           {/* Footer */}
           <div className="pt-4 border-t border-teal-500/30">
               <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                   <p className="text-teal-200 text-xs">Active marine environment</p>
               </div>
           </div>
       </div>
   </div>
</div>
);
};
export default OceanCard;`
    }
  },
  {
    id: "card-arctic-glow",
    name: "Arctic Glow Card",
    category: "card",
    description:
      "Cool arctic-inspired glass card with glowing blue border, shimmer effects, and ambient particles.",
    tags: ["card", "blue", "glassmorphism", "glow", "modern"],

    preview: `
<div class="group relative h-full w-full max-w-[75%] cursor-pointer overflow-hidden rounded-2xl">

  <!-- Shining Border -->
  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-70 blur-[2px] animate-[spin_6s_gradient_infinite]"></div>
  <div class="absolute inset-[1px] rounded-2xl bg-[#050b1a]"></div>

  <!-- Background Glow -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_60%)]"></div>
  <div class="absolute inset-0 bg-[gradient-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),gradient-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

  <!-- Floating Particles -->
  <div class="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-ping"></div>
  <div class="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse"></div>

  <!-- Glass Layer -->
  <div class="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10"></div>

  <!-- Content -->
  <div class="relative z-10 p-6 h-full flex flex-col">
    
    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <span class="px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-100 bg-cyan-900/40 border border-cyan-400/40">
        ARCTIC MODE
      </span>
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40 animate-pulse">
        ❄️
      </div>
    </div>

    <!-- Body -->
    <div class="flex-1">
      <h2 class="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
        Arctic Control
      </h2>
      <p class="text-blue-100/70 text-sm mb-6 leading-relaxed">
        Cool glass interface with shimmering borders and ambient blue glow.
      </p>

      <!-- Status Panel -->
      <div class="mb-6 p-3 rounded-xl bg-blue-900/30 border border-blue-400/30 backdrop-blur-md">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-semibold text-sm">Core Stability</span>
          <span class="text-cyan-300 font-bold text-sm">99.2%</span>
        </div>
        <div class="h-2 bg-blue-950/60 rounded-full overflow-hidden">
          <div class="h-full w-[99%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-3">
        <div class="p-3 rounded-xl bg-white/5 border border-cyan-400/20 hover:bg-white/10 transition text-center">
          <p class="text-cyan-300 text-sm font-semibold">Cooling</p>
        </div>
        <div class="p-3 rounded-xl bg-white/5 border border-blue-400/20 hover:bg-white/10 transition text-center">
          <p class="text-blue-300 text-sm font-semibold">Stability</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="pt-4 border-t border-blue-400/20 mt-4">
      <div class="flex items-center gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
        <p class="text-blue-200 text-xs">Blue system active</p>
      </div>
    </div>
  </div>
</div>
  `,

    code: {
      html: `<div class="arctic-glow-card">...</div>`,

      react: `import React from "react";
import { Snowflake, Shield, Gauge } from "lucide-react";

const ArcticGlowCard = () => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050b1a] border border-blue-400/20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-30 animate-spin" />
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-bold text-cyan-300">Arctic Control</h3>
        <p className="text-blue-200/70 text-sm mt-2">
          Blue glass system with glowing borders
        </p>
      </div>
    </div>
  );
};

export default ArcticGlowCard;`
    }
  },



  {
    id: 'card-basic',
    name: 'Basic Card',
    category: 'card',
    description: 'Simple card container with padding and rounded corners.',
    tags: ['card', 'container', 'layout'],
    preview: `<div class="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm h-full w-full">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`,
    code: {
      html: `<div class="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`,
      react: `import React from 'react';

const Card = () => {
  return (
    <>
      <div className="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm">
        <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
        <p className="text-gray-400">This is a simple card component used for displaying content.</p>
      </div>
    </>
  );
};

export default Card;`,
      tailwind: `<div class="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`
    }
  },
  {
    id: "item-cart-overlay",
    name: "Shopping Cart Overlay",
    category: "card",
    description:
      "Premium slide-over shopping cart with quantity control, subtotal calculation, and modern glass UI.",
    tags: ["ecommerce", "cart", "overlay", "checkout", "ui"],

    preview: `
<div class="group w-full h-full  max-w-[80%] bg-[#0f0f0f] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
  
  <!-- Header -->
  <div class="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
    <div class="flex items-center gap-2">
      <span class="text-orange-500 text-lg">🛍️</span>
      <h2 class="text-white font-semibold">Shopping Cart (<span class="text-orange-500">2</span>)</h2>
    </div>
    <span class="text-gray-400 cursor-pointer">✕</span>
  </div>

  <!-- Items -->
  <div class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
    
    <div class="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition">
      <div class="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl">
        👟
      </div>
      <div class="flex-1">
        <h3 class="text-white font-medium text-sm">Urban Sneakers</h3>
        <p class="text-gray-400 text-xs">Size 10 • Black</p>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center gap-2 bg-black/40 border border-white/10 rounded-md px-2 py-1">
            <span class="text-gray-400">−</span>
            <span class="text-white text-sm">1</span>
            <span class="text-gray-400">+</span>
          </div>
          <span class="text-white font-semibold">$129.00</span>
        </div>
      </div>
    </div>

    <div class="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition">
      <div class="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl">
        🎧
      </div>
      <div class="flex-1">
        <h3 class="text-white font-medium text-sm">Pro Headphones</h3>
        <p class="text-gray-400 text-xs">Noise Cancelling</p>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center gap-2 bg-black/40 border border-white/10 rounded-md px-2 py-1">
            <span class="text-gray-400">−</span>
            <span class="text-white text-sm">1</span>
            <span class="text-gray-400">+</span>
          </div>
          <span class="text-white font-semibold">$249.00</span>
        </div>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="p-4 border-t border-white/10 bg-black/40">
    <div class="flex justify-between mb-3 text-sm">
      <span class="text-gray-400">Subtotal</span>
      <span class="text-white font-semibold">$378.00</span>
    </div>
    <button class="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-black hover:to-orange-700 transition">
      Checkout Now →
    </button>
  </div>
</div>
  `,

    code: {
      html: `<!-- Static preview version -->
<div class="cart-overlay">...</div>`,

      react: `import React, { useState } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Urban Sneakers", price: 129, qty: 1, emoji: "👟", meta: "Size 10 • Black" },
    { id: 2, name: "Pro Headphones", price: 249, qty: 1, emoji: "🎧", meta: "Noise Cancelling" }
  ]);

  const updateQty = (id, v) => {
    setItems(items.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty + v) } : i
    ));
  };

  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div className="max-w-md bg-[#0f0f0f] rounded-2xl border border-white/10 overflow-hidden">
      <header className="flex justify-between items-center p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-orange-500" size={18} />
          <h2 className="text-white font-semibold">Shopping Cart</h2>
        </div>
        <X className="text-gray-400 cursor-pointer" />
      </header>

      <div className="p-4 space-y-4 max-h-[360px] overflow-y-auto scrollbar-none">
        {items.map(item => (
          <div key={item.id} className="flex gap-4 p-3 rounded-xl hover:bg-white/5">
            <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl">
              {item.emoji}
            </div>
            <div className="flex-1">
              <h3 className="text-white text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-400">{item.meta}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-md px-2 py-1">
                  <button onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                  <span className="text-white text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                </div>
                <span className="text-white font-semibold">
                  $\${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="p-4 border-t border-white/10">
        <div className="flex justify-between mb-3 text-sm">
          <span className="text-gray-400">Total</span>
          <span className="text-orange-500 font-bold">\${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-3 rounded-xl bg-orange-500 font-bold text-black">
          Checkout Now →
        </button>
      </footer>
    </div>
  );
};

export default ShoppingCart;`
    }
  }
  ,
  {
    id: 'card-shopping-cart',
    name: 'Glassmorphism Cart',
    category: 'card',
    description: 'Interactive shopping cart with totals and clear functionality.',
    tags: ['card', 'cart', 'glass', 'interactive'],
    preview: `<div class="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl h-full w-full max-w-[80%] relative flex flex-col justify-between">
  <h2 class="text-2xl font-bold mb-4 text-center text-cyan-300">Shopping Cart</h2>
  <div class="space-y-4 mb-6 flex-1 overflow-auto custom-scrollbar">
    <div class="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
      <div>
        <p class="font-medium text-white">Glowing Pulse Item</p>
        <p class="text-sm text-cyan-400">$24.99</p>
      </div>
      <button class="text-red-400 hover:text-red-300"><i class="fas fa-times"></i></button>
    </div>
    <div class="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
      <div>
        <p class="font-medium text-white">Neon Border Item</p>
        <p class="text-sm text-cyan-400">$34.99</p>
      </div>
      <button class="text-red-400 hover:text-red-300"><i class="fas fa-times"></i></button>
    </div>
  </div>
  <div class="text-center text-white mt-auto">
    <p class="text-lg font-semibold mb-2">Total: $59.98</p>
    <button class="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300 w-full">Clear Cart</button>
  </div>
</div>`,
    code: {
      html: `<div class="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl max-w-md mx-auto">
  <h2 class="text-2xl font-bold mb-4 text-center text-cyan-300">Shopping Cart</h2>
  <!-- Cart Items -->
  <div class="space-y-4 mb-6" id="cart-items">
    <p class="text-gray-400 text-center" id="empty-cart-message">Your cart is empty</p>
  </div>
  <!-- Totals -->
  <div class="text-center">
    <p class="text-lg font-semibold mb-2">Total: $<span id="cart-total">0.00</span></p>
    <button id="clear-cart" class="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">
      Clear Cart
    </button>
  </div>
</div>`,
      react: `import React, { useState } from 'react';
import { X } from 'lucide-react';

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Glowing Pulse Item', price: 24.99 },
    { id: 2, name: 'Neon Border Item', price: 34.99 }
  ]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <div className="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl max-w-md mx-auto shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Shopping Cart</h2>
      
      <div className="space-y-4 mb-6 min-h-[100px]">
        {items.length === 0 ? (
          <p className="text-gray-400 text-center py-4">Your cart is empty</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg animate-fade-in-up">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-cyan-400">\${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors p-2"
              >
                <X size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="text-center text-white border-t border-white/10 pt-4">
        <p className="text-lg font-semibold mb-4">Total: \${total.toFixed(2)}</p>
        <button 
          onClick={clearCart}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300 w-full"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;`
    }
  },
  {
    id: 'card-3d-float',
    name: '3D Floating Profile',
    category: 'card',
    description: '3D floating animation card with glassmorphism.',
    tags: ['card', 'profile', '3d', 'glass'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center group animate-float hover:animate-none relative overflow-hidden w-full h-full max-w-[80%] mx-auto">
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="relative w-32 h-32 mx-auto mb-6">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1 animate-border-rotate"></div>
              <img class="w-full h-full rounded-full object-cover" 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80">
            </div>
            <h3 class="text-2xl font-bold mb-2 text-white">Alex Sterling</h3>
            <p class="text-cyan-300 mb-4">Senior Frontend Architect</p>
            <div class="flex justify-center gap-4 mb-6 text-white">
              <div class="text-center">
                <p class="text-lg font-bold">42</p>
                <p class="text-xs text-gray-400">Projects</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold">1.2K</p>
                <p class="text-xs text-gray-400">Followers</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold">89</p>
                <p class="text-xs text-gray-400">Following</p>
              </div>
            </div>
            <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:scale-105 transition-all text-white group-hover:animate-pulse-glow flex items-center justify-center mx-auto">
              Launch Profile
            </button>
          </div>
        </div>`,
    code: {
      html: `<div class="glass-card p-8 rounded-2xl text-center group animate-float">...</div>`,
      react: `import React from 'react';
import { Rocket } from 'lucide-react';

const FloatingProfileCard = () => {
  return (
    <div className="glass-card p-8 rounded-2xl text-center group animate-float hover:animate-none relative overflow-hidden max-w-sm mx-auto">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1 animate-border-rotate"></div>
          <img className="w-full h-full rounded-full object-cover p-1 bg-transparent" 
               src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
               alt="Profile" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Alex Sterling</h3>
        <p className="text-cyan-300 mb-4">Senior Frontend Architect</p>
        <div className="flex justify-center gap-4 mb-6 text-white">
          <div className="text-center">
            <p className="text-lg font-bold">42</p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">1.2K</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">89</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:scale-105 transition-all text-white group-hover:animate-pulse-glow flex items-center justify-center mx-auto gap-2">
          <Rocket size={18} /> Launch Profile
        </button>
      </div>
    </div>
  );
};

export default FloatingProfileCard;`
    }
  },
  {
    id: 'card-particle-interactive',
    name: 'Particle Interactive',
    category: 'card',
    description: 'Interactive card with floating particles.',
    tags: ['card', 'particle', 'interactive'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center relative overflow-hidden max-w-sm mx-auto">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          
          <div class="relative z-10">
            <div class="w-28 h-28 mx-auto mb-6 relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <img class="w-full h-full rounded-full object-cover relative z-10 animate-float-2" 
                   src="https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80">
              <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center z-20">
                <span class="text-white text-sm">👑</span>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-white">Sophia Chen</h3>
            <p class="text-pink-300 mb-4">Creative UI/UX Director</p>
            <p class="text-gray-300 text-sm mb-6">Crafting immersive digital experiences with passion and precision</p>
            
            <div class="flex justify-center gap-3">
              <button class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition text-white">
                <i class="fab fa-twitter"></i>
              </button>
              <button class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:scale-110 transition text-white">
                <i class="fab fa-linkedin-in"></i>
              </button>
              <button class="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-red-500 flex items-center justify-center hover:scale-110 transition text-white">
                <i class="fab fa-dribbble"></i>
              </button>
            </div>
          </div>
        </div>`,
    code: {
      html: `<div class="glass-card p-8 rounded-2xl text-center relative overflow-hidden">...</div>`,
      react: `import React from 'react';
import { Twitter, Linkedin, Dribbble, Crown } from 'lucide-react';

const ParticleCard = () => {
  return (
    <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-particle-float opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-pink-400 rounded-full animate-particle-float opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-particle-float opacity-50" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        <div className="w-28 h-28 mx-auto mb-6 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <img className="w-full h-full rounded-full object-cover relative z-10 animate-float-2" 
               src="https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
               alt="Profile" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center z-20">
            <Crown size={14} className="text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Sophia Chen</h3>
        <p className="text-pink-300 mb-4">Creative UI/UX Director</p>
        <p className="text-gray-300 text-sm mb-6">Crafting immersive digital experiences with passion and precision</p>
        
        <div className="flex justify-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition text-white">
            <Twitter size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:scale-110 transition text-white">
            <Linkedin size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-red-500 flex items-center justify-center hover:scale-110 transition text-white">
            <Dribbble size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticleCard;`
    }
  },
  {
    id: 'card-gradient-flow',
    name: 'Gradient Flow',
    category: 'card',
    description: 'Animated gradient background card.',
    tags: ['card', 'gradient', 'animated'],
    preview: `<div class="rounded-2xl p-8 text-center bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative overflow-hidden group w-full h-full max-w-[80%] mx-auto" 
             style="background: bg-gradient-to-br from-purple-900/20 to-pink-900/20;
                    background-size: 300% 300%;
                    animation: gradientFlow 8s ease infinite;">
          <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          
          <div class="relative z-10">
            <div class="w-32 h-32 mx-auto mb-6 relative">
              <div class="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
              <img class="w-full h-full rounded-full object-cover border-4 border-white/30" 
                   src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80">
            </div>
            
            <h3 class="text-2xl font-bold mb-2 text-white">Marcus Rivera</h3>
            <p class="text-white/90 mb-4">Full-Stack Developer</p>
            
            <div class="mb-6 w-full max-w-[200px] mx-auto">
              <div class="flex justify-between mb-1 text-white">
                <span class="text-sm">React Expertise</span>
                <span class="text-sm font-bold">94%</span>
              </div>
              <div class="h-2 bg-white/30 rounded-full overflow-hidden">
                <div class="h-full bg-white w-[94%] rounded-full"></div>
              </div>
            </div>
            
            <button class="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>`,
    code: {
      html: `<div class="rounded-2xl p-8 text-center relative overflow-hidden animate-gradient-flow">...</div>`,
      react: `import React from 'react';

const GradientFlowCard = () => {
  return (
    <div className="rounded-2xl p-8 text-center relative overflow-hidden group max-w-sm mx-auto" 
         style={{
           background: 'gradient-gradient(45deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9)',
           backgroundSize: '300% 300%',
           animation: 'gradientFlow 8s ease infinite'
         }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
          <img className="w-full h-full rounded-full object-cover border-4 border-white/30" 
               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
               alt="Marcus" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-white">Marcus Rivera</h3>
        <p className="text-white/90 mb-4">Full-Stack Developer</p>
        
        <div className="mb-6 w-full max-w-[200px] mx-auto">
          <div className="flex justify-between mb-1 text-white">
            <span className="text-sm">React Expertise</span>
            <span className="text-sm font-bold">94%</span>
          </div>
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white w-[94%] rounded-full"></div>
          </div>
        </div>
        
        <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default GradientFlowCard;`
    }
  },
  {
    id: 'card-3d-flip-rotate',
    name: '3D Flip Rotate',
    category: 'card',
    description: 'Interactive 3D card flip on hover.',
    tags: ['card', '3d', 'flip', 'interactive'],
    preview: `<div class="card-flip h-96 perspective-1000 w-full max-w-sm mx-auto group">
          <div class="card-flip-inner w-full h-full">
            <!-- Front Side -->
            <div class="card-flip-front glass-card p-8 rounded-2xl flex flex-col items-center justify-center">
              <div class="w-28 h-28 rounded-full mb-6 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl">
                <i class="fas fa-code"></i>
              </div>
              <h3 class="text-2xl font-bold mb-2 text-white">Jordan Lee</h3>
              <p class="text-amber-300 mb-4">DevOps Engineer</p>
              <p class="text-center text-gray-300 text-sm">Hover to flip & discover</p>
            </div>
            
            <!-- Back Side -->
            <div class="card-flip-back glass-card p-8 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-amber-900/30 to-orange-900/30">
              <h3 class="text-2xl font-bold mb-4 text-white">Skills & Tech</h3>
              <div class="space-y-3 w-full text-white">
                <div class="flex justify-between">
                  <span>Docker</span> 
                  <span class="font-bold">95%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[95%]"></div>
                </div>
                <div>
                   <div class="flex justify-between"><span>AWS</span> <span class="font-bold">92%</span></div>
                   <div class="h-2 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-amber-600 w-[92%]"></div></div>
                </div>
              </div>
              <button class="mt-8 px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full font-medium text-white">
                Contact Jordan
              </button>
            </div>
          </div>
        </div>`,
    code: {
      html: `<div class="card-flip h-96 perspective-1000">...</div>`,
      react: `import React from 'react';
import { Code } from 'lucide-react';

const FlipCard = () => {
  return (
    <div className="h-96 w-full max-w-sm mx-auto perspective-1000 group cursor-pointer">
      <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
        
        {/* Front */}
        <div className="absolute w-full h-full glass-card p-8 rounded-2xl flex flex-col items-center justify-center backface-hidden">
          <div className="w-28 h-28 rounded-full mb-6 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl">
            <Code size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Jordan Lee</h3>
          <p className="text-amber-300 mb-4">DevOps Engineer</p>
          <p className="text-center text-gray-300 text-sm">Hover to flip & discover</p>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full glass-card p-8 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-amber-900/30 to-orange-900/30 backface-hidden rotate-y-180">
          <h3 className="text-2xl font-bold mb-4 text-white">Skills & Tech</h3>
          <div className="space-y-4 w-full text-white text-sm">
            <div>
              <div className="flex justify-between mb-1"><span>Docker</span> <span className="font-bold">95%</span></div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[95%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1"><span>Kubernetes</span> <span className="font-bold">88%</span></div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[88%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1"><span>AWS</span> <span className="font-bold">92%</span></div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-amber-600 w-[92%]"></div></div>
            </div>
          </div>
          <button className="mt-8 px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full font-medium text-white shadow-lg hover:from-amber-500 hover:to-orange-500">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default FlipCard;`
    }
  },
  {
    id: 'card-holographic',
    name: 'Holographic Profile',
    category: 'card',
    description: 'Profile card with holographic shimmer.',
    tags: ['card', 'holographic', 'shimmer'],
    preview: `<div class="glass-card p-8 rounded-2xl relative overflow-hidden group max-w-sm mx-auto">
          <div class="absolute inset-0 holographic-effect opacity-50"></div>
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <div class="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-white/20">
                <img class="w-full h-full object-cover" 
                     src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80">
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Taylor Reed</h3>
                <p class="text-cyan-300">AR/VR Developer</p>
                <div class="flex mt-2 text-yellow-400 gap-1 text-xs">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            
            <p class="text-gray-300 text-sm mb-6">Creating immersive realities and pushing the boundaries of digital experience design.</p>
            
            <div class="space-y-4 text-white/90">
              <div class="flex justify-between">
                <span class="text-sm">Projects Completed</span>
                <span class="font-bold">24</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Client Satisfaction</span>
                <span class="font-bold">100%</span>
              </div>
            </div>
            
            <button class="w-full mt-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition relative overflow-hidden group/btn text-white">
              <span class="relative z-10">View Holographic Portfolio</span>
            </button>
          </div>
        </div>`,
    code: {
      html: `<div class="glass-card holographic-effect">...</div>`,
      react: `import React from 'react';
import { Star } from 'lucide-react';

const HolographicCard = () => {
  return (
    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 animate-gradient-flow opacity-50"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-white/20">
            <img className="w-full h-full object-cover" 
                 src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                 alt="Taylor" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Taylor Reed</h3>
            <p className="text-cyan-300">AR/VR Developer</p>
            <div className="flex mt-2 text-yellow-400 gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6">Creating immersive realities and pushing the boundaries of digital experience design.</p>
        
        <div className="space-y-4 text-white/90">
          <div className="flex justify-between">
            <span className="text-sm">Projects Completed</span>
            <span className="font-bold">24</span>
          </div>
          <div className="flex justify-between">
             <span className="text-sm">Client Satisfaction</span>
             <span className="font-bold">100%</span>
          </div>
        </div>
        
        <button className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition relative overflow-hidden group/btn text-white shadow-lg">
          <span className="relative z-10">View Holographic Portfolio</span>
        </button>
      </div>
    </div>
  );
};
export default HolographicCard;`
    }
  },
  {
    id: 'card-cyber-neon',
    name: 'Cyber Neon',
    category: 'card',
    description: 'Cyberpunk neon card.',
    tags: ['card', 'cyberpunk', 'neon'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center neon-border animate-neon-flicker cyber-font relative overflow-hidden max-w-sm mx-auto">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
          <div class="relative z-10">
            <div class="w-28 h-28 mx-auto mb-6 relative">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
              <img class="w-full h-full rounded-full object-cover relative z-10 p-1 bg-black" 
                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80">
            </div>
            
            <h3 class="text-2xl font-bold mb-2 text-cyan-300 tracking-widest">NE0N-47</h3>
            <p class="text-purple-300 mb-4 tracking-wider text-xs">CYBER SECURITY</p>
            
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-2 bg-gray-900/50 rounded-lg border border-cyan-500/30">
                <p class="text-cyan-300 font-bold">128</p>
                <p class="text-[10px] text-gray-400">SECURE</p>
              </div>
              <div class="text-center p-2 bg-gray-900/50 rounded-lg border border-purple-500/30">
                <p class="text-purple-300 font-bold">99%</p>
                <p class="text-[10px] text-gray-400">UPTIME</p>
              </div>
              <div class="text-center p-2 bg-gray-900/50 rounded-lg border border-pink-500/30">
                <p class="text-pink-300 font-bold">A+</p>
                <p class="text-[10px] text-gray-400">RATING</p>
              </div>
            </div>
            
            <button class="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition text-white">
              ACCESS TERMINAL
            </button>
          </div>
        </div>`,
    code: {
      html: `<div class="glass-card neon-border animate-neon-flicker">...</div>`,
      react: `import React from 'react';
import { Shield } from 'lucide-react';

const CyberNeonCard = () => {
  return (
    <div className="glass-card p-8 rounded-2xl text-center neon-border animate-neon-flicker cyber-font relative overflow-hidden max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      
      <div className="relative z-10">
        <div className="w-28 h-28 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
          <img class="w-full h-full rounded-full object-cover relative z-10 p-1 bg-black" 
               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
               alt="Avatar" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-cyan-300 tracking-widest">NE0N-47</h3>
        <p className="text-purple-300 mb-4 tracking-wider text-xs">CYBER SECURITY</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-300 font-bold">128</p>
            <p className="text-[10px] text-gray-400">SECURE</p>
          </div>
          <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-purple-500/30">
            <p className="text-purple-300 font-bold">99%</p>
            <p className="text-[10px] text-gray-400">UPTIME</p>
          </div>
          <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-pink-500/30">
            <p className="text-pink-300 font-bold">A+</p>
            <p className="text-[10px] text-gray-400">RATING</p>
          </div>
        </div>
        
        <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition text-white flex justify-center items-center gap-2">
          <Shield size={16} /> ACCESS TERMINAL
        </button>
      </div>
    </div>
  );
};
export default CyberNeonCard;`
    }
  },
  {
    id: 'card-wave-motion',
    name: 'Wave Motion',
    category: 'card',
    description: 'Fluid wave animation card.',
    tags: ['card', 'wave', 'fluid'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center relative overflow-hidden group max-w-sm mx-auto">
           <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20"></div>
           <div class="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-wave"></div>
           <div class="absolute -bottom-20 left-10 right-10 h-20 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full animate-wave" style="animation-delay: 0.5s"></div>
           
           <div class="relative z-10 text-white">
             <div class="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-emerald-500/50 overflow-hidden group-hover:animate-tilt-shake">
               <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80">
             </div>
             <h3 class="text-2xl font-bold mb-2">Liam Parker</h3>
             <p class="text-emerald-300 mb-4">Motion Designer</p>
             <button class="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full font-medium shadow-lg">Watch Demo Reel</button>
           </div>
        </div>`,
    code: {
      html: `<!-- Wave Card HTML -->`,
      react: `import React from 'react';
const WaveCard = () => (
  <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden group max-w-sm mx-auto">
     <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20"></div>
     <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-wave"></div>
     <div className="absolute -bottom-20 left-10 right-10 h-20 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full animate-wave" style={{animationDelay: '0.5s'}}></div>
     
     <div className="relative z-10 text-white">
       <div className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-emerald-500/50 overflow-hidden group-hover:animate-tilt-shake">
         <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" alt="Liam" />
       </div>
       <h3 className="text-2xl font-bold mb-2">Liam Parker</h3>
       <p className="text-emerald-300 mb-4">Motion Designer</p>
       <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full font-medium shadow-lg hover:scale-105 transition">Watch Demo Reel</button>
     </div>
  </div>
);
export default WaveCard;`
    }
  },
  {
    id: 'card-cosmic-space',
    name: 'Cosmic Space',
    category: 'card',
    description: 'Space themed profile card.',
    tags: ['card', 'space', 'cosmic'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center relative overflow-hidden max-w-sm mx-auto">
          <div class="absolute inset-0 bg-black/80"></div>
          <div class="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-spin-slow blur-sm opacity-50"></div>
          
          <div class="relative z-10 text-white">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center border border-indigo-500/30">
              <span class="text-5xl">👩‍🚀</span>
            </div>
            
            <h3 class="text-2xl font-bold mb-2">Dr. Nova Sterling</h3>
            <p class="text-indigo-300 mb-4">Quantum Researcher</p>
            
            <button class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition shadow-lg shadow-indigo-500/20">
              Explore Research
            </button>
          </div>
        </div>`,
    code: {
      html: `<!-- Space Card HTML -->`,
      react: `import React from 'react';
import { Rocket } from 'lucide-react';
const SpaceCard = () => (
  <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden max-w-sm mx-auto">
    <div className="absolute inset-0 bg-black/80"></div>
    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-spin-slow blur-sm opacity-50"></div>
    
    <div className="relative z-10 text-white">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center border border-indigo-500/30">
         <Rocket size={48} />
      </div>
      
      <h3 className="text-2xl font-bold mb-2">Dr. Nova Sterling</h3>
      <p className="text-indigo-300 mb-4">Quantum Researcher</p>
      
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition shadow-lg shadow-indigo-500/20">
        Explore Research
      </button>
    </div>
  </div>
);
export default SpaceCard;`
    }
  },
  {
    id: 'card-liquid-metal',
    name: 'Liquid Metal',
    category: 'card',
    description: 'Metallic liquid effect card.',
    tags: ['card', 'metal', 'liquid'],
    preview: `<div class="glass-card p-8 rounded-2xl text-center relative overflow-hidden group max-w-sm mx-auto">
           <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
           <div class="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-gray-400/10 to-gray-600/20 animate-shimmer"></div>
           
           <div class="relative z-10 text-white">
             <div class="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-500 group-hover:border-gray-300 transition-colors">
               <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80">
             </div>
             
             <h3 class="text-2xl font-bold mb-2">Kai Zhang</h3>
             <p class="text-gray-300 mb-4">Industrial Designer</p>
             
             <div class="flex justify-center gap-4">
               <button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">Portfolio</button>
               <button class="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg transition border border-gray-600">Contact</button>
             </div>
           </div>
        </div>`,
    code: {
      html: `<!-- Texture Card HTML -->`,
      react: `import React from 'react';
const LiquidMetalCard = () => (
  <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden group max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-gray-400/10 to-gray-600/20 animate-shimmer"></div>
      
      <div className="relative z-10 text-white">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-500 group-hover:border-gray-300 transition-colors">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" alt="Kai" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2">Kai Zhang</h3>
        <p className="text-gray-300 mb-4">Industrial Designer</p>
        
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">Portfolio</button>
          <button className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg transition border border-gray-600">Contact</button>
        </div>
      </div>
  </div>
);
export default LiquidMetalCard;`
    }
  }
];
