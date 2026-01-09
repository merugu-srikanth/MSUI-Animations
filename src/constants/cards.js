import React from 'react';
import { RefreshCw, Zap,  Code2, Terminal, Waves, Droplets, Fish, Wind, Sun, Thermometer, Mountain, Flame, Atom, Cpu, MemoryStick, Network, X, Minus, Plus, ShoppingBag } from 'lucide-react';

export const CARDS = [
    {
        id: 'card-neon-flip',
        name: 'Neon Cyber Flip',
        category: 'card',
        description: 'Cyberpunk style 3D flip card with neon glow effects.',
        tags: ['card', '3d', 'flip', 'neon', 'cyberpunk'],
        preview: `<div class="group h-full w-full cursor-pointer [perspective:1000px]">
                <div class="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <!-- Front Side -->
                    <div class="absolute inset-0 w-full h-full bg-linear-to-br from-violet-900/90 via-purple-900/90 to-fuchsia-900/90 rounded-2xl overflow-hidden border border-violet-500/40 [backface-visibility:hidden]">
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent bg-linear-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
                        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
                        <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-fuchsia-400 animate-ping [animation-delay:0.2s]"></div>
                        <div class="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping [animation-delay:0.4s]"></div>
                        <div class="relative z-10 p-6 h-full flex flex-col">
                            <div class="flex justify-between items-start mb-4">
                                <span class="px-3 py-1.5 bg-linear-to-r from-violet-600/30 to-fuchsia-600/30 backdrop-blur-md rounded-full text-xs font-semibold text-violet-100 border border-violet-500/50">NEON FLIP</span>
                                <div class="w-10 h-10 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center animate-spin [animation-duration:3s] shadow-lg shadow-violet-500/40">
                                    <i class="fas fa-sync-alt text-white text-sm"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Cyber Flip</h2>
                                <p class="text-gray-300 mb-6 leading-relaxed text-sm">Experience 3D flip with neon glow effects and cyberpunk aesthetics.</p>
                                <div class="space-y-3 mb-6">
                                    <div class="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-violet-500">
                                        <div class="w-8 h-8 rounded-full bg-linear-to-r from-violet-500/30 to-fuchsia-500/30 flex items-center justify-center">
                                            <i class="fas fa-bolt text-violet-300 animate-pulse text-sm"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="font-semibold text-white text-sm">Pulsing glow</p>
                                            <p class="text-xs text-violet-200/70">Neon animation</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-purple-500">
                                        <div class="w-8 h-8 rounded-full bg-linear-to-r from-purple-500/30 to-violet-500/30 flex items-center justify-center">
                                            <i class="fas fa-cube text-purple-300 animate-[spin_2s_linear_infinite] text-sm"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="font-semibold text-white text-sm">3D Transform</p>
                                            <p class="text-xs text-purple-200/70">Smooth rotation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-4 border-t border-violet-500/30">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center space-x-2">
                                        <div class="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
                                        <div>
                                            <p class="text-gray-300 text-xs">Neon Mode Active</p>
                                            <p class="text-white font-semibold text-sm">Hover to flip →</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Back Side -->
                    <div class="absolute inset-0 w-full h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-cyan-500/40">
                        <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
                        <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse"></div>
                        <div class="relative z-10 p-6 h-full flex flex-col justify-center">
                            <div class="text-center mb-6">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center animate-pulse shadow-lg shadow-cyan-500/40">
                                    <i class="fas fa-terminal text-white text-2xl"></i>
                                </div>
                                <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">System Back</h2>
                                <p class="text-gray-300 text-sm">Cyberpunk circuit patterns</p>
                            </div>
                            <div class="mb-6">
                                <div class="p-3 bg-linear-to-r from-cyan-900/20 to-fuchsia-900/20 rounded-xl border border-cyan-500/30 mb-4">
                                    <p class="text-center text-gray-200 text-sm">Advanced 3D CSS transforms</p>
                                </div>
                                <div class="flex justify-center space-x-6">
                                    <div class="text-center group/icon">
                                        <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-linear-to-r from-cyan-500/20 to-cyan-700/20 flex items-center justify-center border border-cyan-500/30 group-hover/icon:border-cyan-300 transition-all duration-300">
                                            <i class="fas fa-code text-cyan-300 text-sm group-hover/icon:scale-110 transition-transform duration-300"></i>
                                        </div>
                                        <p class="text-xs text-cyan-300">Cyber</p>
                                    </div>
                                    <div class="text-center group/icon">
                                        <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-linear-to-r from-fuchsia-500/20 to-fuchsia-700/20 flex items-center justify-center border border-fuchsia-500/30 group-hover/icon:border-fuchsia-300 transition-all duration-300">
                                            <i class="fas fa-bolt text-fuchsia-300 text-sm group-hover/icon:scale-110 transition-transform duration-300"></i>
                                        </div>
                                        <p class="text-xs text-fuchsia-300">Neon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        code: {
            html: `<div class="group h-full w-full cursor-pointer [perspective:1000px]">
  <div class="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <!-- Front Side -->
    <div class="absolute inset-0 w-full h-full bg-linear-to-br from-violet-900/90 via-purple-900/90 to-fuchsia-900/90 rounded-2xl overflow-hidden border border-violet-500/40 [backface-visibility:hidden]">
      <!-- Content here... -->
    </div>
    <!-- Back Side -->
    <div class="absolute inset-0 w-full h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <!-- Content here... -->
    </div>
  </div>
</div>`,
            react: `import React from 'react';
import { RefreshCw, Zap, Cube, Code2, Terminal } from 'lucide-react';

const NeonFlipCard = () => {
return (
<div className="group h-full w-full cursor-pointer [perspective:1000px]">
  <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    {/* Front Side */}
    <div className="absolute inset-0 w-full h-full bg-linear-to-br from-violet-900/90 via-purple-900/90 to-fuchsia-900/90 rounded-2xl overflow-hidden border border-violet-500/40 [backface-visibility:hidden]">
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1.5 bg-linear-to-r from-violet-600/30 to-fuchsia-600/30 backdrop-blur-md rounded-full text-xs font-semibold text-violet-100 border border-violet-500/50">NEON FLIP</span>
          <div className="w-10 h-10 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center animate-spin [animation-duration:3s] shadow-lg shadow-violet-500/40">
           <RefreshCw className="w-4 h-4 text-white" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3 bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Cyber Flip</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm">Experience 3D flip with neon glow effects and cyberpunk aesthetics.</p>
          
          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-violet-500">
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-violet-500/30 to-fuchsia-500/30 flex items-center justify-center">
                 <Zap className="w-3.5 h-3.5 text-violet-300 animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Pulsing glow</p>
                <p className="text-xs text-violet-200/70">Neon animation</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-purple-500">
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-500/30 to-violet-500/30 flex items-center justify-center">
                 <Cube className="w-3.5 h-3.5 text-purple-300 animate-[spin_2s_linear_infinite]" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">3D Transform</p>
                <p className="text-xs text-purple-200/70">Smooth rotation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="pt-4 border-t border-violet-500/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
              <div>
                <p className="text-gray-300 text-xs">Neon Mode Active</p>
                <p className="text-white font-semibold text-sm">Hover to flip →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Back Side */}
    <div className="absolute inset-0 w-full h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-cyan-500/40">
       {/* Back content... */}
    </div>
  </div>
</div>
);
};
export default NeonFlipCard;`
        }
    },
    {
        id: 'card-ocean-wave',
        name: 'Ocean Wave Card',
        category: 'card',
        description: 'Ocean themed card with wave animations and floating bubbles.',
        tags: ['card', 'ocean', 'wave', 'animation', 'nature'],
        preview: `<div class="group h-full w-full cursor-pointer">
                <div class="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-transparent group-hover:border-teal-400/50">
                    <div class="absolute inset-0 bg-linear-to-br from-teal-900/90 via-cyan-900/90 to-emerald-900/90"></div>
                    <div class="absolute inset-0 bg-linear-to-b from-transparent via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-wave"></div>
                    <div class="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-linear-to-r from-teal-400/30 to-cyan-400/30 blur-sm animate-[bubble_4s_ease-in-out_infinite]"></div>
                    <div class="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-linear-to-r from-cyan-400/40 to-emerald-400/40 blur-sm animate-[bubble_5s_ease-in-out_infinite]" style="animation-delay:0.5s"></div>
                    <div class="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-emerald-900/60 to-transparent"></div>
                    <div class="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-b from-teal-400/30 to-transparent"></div>
                    <div class="relative z-10 p-6 h-full flex flex-col">
                        <div class="flex justify-between items-start mb-4">
                            <span class="px-3 py-1.5 bg-teal-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-teal-100 border border-teal-400/50">OCEAN WAVE</span>
                            <div class="w-10 h-10 rounded-full bg-linear-to-r from-teal-400 to-cyan-400 flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/40">
                                <i class="fas fa-water text-white text-sm"></i>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
                            <p class="text-gray-300 mb-6 leading-relaxed text-sm">Experience ocean waves with bubble animations and marine themed elements.</p>
                            <div class="mb-6">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-white font-semibold text-sm">Wave Intensity</span>
                                    <span class="text-teal-300 font-bold text-sm animate-pulse">78%</span>
                                </div>
                                <div class="h-2 bg-teal-900/50 rounded-full overflow-hidden border border-teal-400/30">
                                    <div class="h-full bg-linear-to-r from-teal-400 to-cyan-400 rounded-full w-4/5 relative overflow-hidden">
                                        <div class="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
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
            html: `<div class="group h-full w-full cursor-pointer">
   <div class="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-transparent group-hover:border-teal-400/50">
       <div class="relative z-10 p-6 h-full flex flex-col">
           <div class="flex-1">
               <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
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
<div className="group h-full w-full cursor-pointer">
   <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-transparent group-hover:border-teal-400/50">
       
       {/* Ocean gradient */}
       <div className="absolute inset-0 bg-linear-to-br from-teal-900/90 via-cyan-900/90 to-emerald-900/90"></div>
       
       {/* Wave animation layer */}
       <div className="absolute inset-0 bg-linear-to-b from-transparent via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-wave"></div>
       
       {/* Bubbles */}
       <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-linear-to-r from-teal-400/30 to-cyan-400/30 blur-sm animate-[bubble_4s_ease-in-out_infinite]"></div>
       <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-linear-to-r from-cyan-400/40 to-emerald-400/40 blur-sm animate-[bubble_5s_ease-in-out_infinite]" style={{animationDelay: "0.5s"}}></div>
       
       <div className="relative z-10 p-6 h-full flex flex-col">
           {/* Header */}
           <div className="flex justify-between items-start mb-4">
               <span className="px-3 py-1.5 bg-teal-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-teal-100 border border-teal-400/50">OCEAN WAVE</span>
               <div className="w-10 h-10 rounded-full bg-linear-to-r from-teal-400 to-cyan-400 flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/40">
                   <Waves className="w-4 h-4 text-white" />
               </div>
           </div>
           
           <div className="flex-1">
               <h2 className="text-2xl font-bold mb-3 bg-linear-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Ocean Breeze</h2>
               <p className="text-gray-300 mb-6 leading-relaxed text-sm">Experience ocean waves with bubble animations and marine themed elements.</p>
               
               {/* Progress */}
               <div className="mb-6">
                   <div className="flex items-center justify-between mb-3">
                       <span className="text-white font-semibold text-sm">Wave Intensity</span>
                       <span className="text-teal-300 font-bold text-sm animate-pulse">78%</span>
                   </div>
                   <div className="h-2 bg-teal-900/50 rounded-full overflow-hidden border border-teal-400/30">
                       <div className="h-full bg-linear-to-r from-teal-400 to-cyan-400 rounded-full w-4/5 relative overflow-hidden">
                           <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
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
    id: 'card-desert-sunset',
        name: 'Desert Sunset Card',
            category: 'card',
                description: 'Warm desert sunset card with sand fall animations and heat effects.',
                    tags: ['card', 'desert', 'sunset', 'sand', 'heat'],
                        preview: `<div class="group h-full w-full cursor-pointer overflow-hidden rounded-2xl relative">
                <div class="absolute inset-0 bg-linear-to-br from-orange-900/60 via-amber-900/50 to-yellow-900/40"></div>
                <div class="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-linear-to-r from-yellow-500/20 to-orange-500/20 blur-2xl group-hover:scale-125 transition-all duration-1000"></div>
                <div class="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-amber-900/60 to-transparent"></div>
                <div class="absolute bottom-10 left-0 w-full h-6 bg-linear-to-r from-transparent via-amber-700/40 to-transparent rounded-t-full"></div>
                <div class="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-300/40 animate-[sand-fall_8s_linear_infinite]"></div>
                <div class="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-yellow-300/30 animate-[sand-fall_10s_linear_infinite]" style="animation-delay:1s"></div>
                <div class="absolute inset-0 bg-linear-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 backdrop-blur-xl border border-amber-500/30 group-hover:border-orange-500/50 transition-all duration-500"></div>
                <div class="relative z-10 p-6 h-full flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-3 py-1.5 bg-amber-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-amber-100 border border-amber-500/50">DESERT SUNSET</span>
                        <div class="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center animate-pulse shadow-lg shadow-orange-500/40">
                             <i class="fas fa-sun text-white text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Desert Mirage</h2>
                        <p class="text-gray-300 mb-6 leading-relaxed text-sm">Warm desert sunset with heat wave visualization and floating sand particles.</p>
                        <div class="mb-6 p-3 bg-linear-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-md rounded-xl border border-amber-500/30 group-hover:bg-amber-900/40 transition-all duration-300">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-white font-semibold text-sm">Heat Intensity</span>
                                <span class="text-orange-300 font-bold text-sm animate-pulse">94°F</span>
                            </div>
                            <div class="h-2 bg-amber-900/40 rounded-full overflow-hidden border border-amber-500/20">
                                <div class="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full w-11/12 relative overflow-hidden">
                                    <div class="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3 mb-6">
                            <div class="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-amber-500/20">
                                <i class="fas fa-wind text-amber-300 text-xl mb-2 animate-pulse"></i>
                                <p class="font-semibold text-white text-sm">Heat Waves</p>
                            </div>
                            <div class="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-orange-500/20" style="transition-delay:0.1s">
                                <i class="fas fa-mountain text-orange-300 text-xl mb-2"></i>
                                <p class="font-semibold text-white text-sm">Desert</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-4 border-t border-amber-500/30">
                        <div class="flex items-center space-x-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
                            <p class="text-amber-200 text-xs">Sunset mode active</p>
                        </div>
                    </div>
                </div>
            </div>`,
                            code: {
        html: `<div class="group h-full w-full cursor-pointer overflow-hidden rounded-2xl relative">
   <div class="relative z-10 p-6 h-full flex flex-col">
       <div class="flex-1">
           <h2 class="text-2xl font-bold mb-3 bg-linear-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Desert Mirage</h2>
           <p class="text-gray-300 mb-6 leading-relaxed text-sm">Warm desert sunset with heat wave visualization and floating sand particles.</p>
           <!-- Content... -->
       </div>
   </div>
</div>`,
            react: `import React from 'react';
import { Sun, Thermometer, Wind, Mountain, Flame } from 'lucide-react';

const DesertCard = () => {
return (
<div className="group h-full w-full cursor-pointer overflow-hidden rounded-2xl relative">
    {/* Sunset gradient */}
    <div className="absolute inset-0 bg-linear-to-br from-orange-900/60 via-amber-900/50 to-yellow-900/40"></div>
    
    {/* Sun effect */}
    <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-linear-to-r from-yellow-500/20 to-orange-500/20 blur-2xl group-hover:scale-125 transition-all duration-1000"></div>
    
    {/* Floating sand particles */}
    <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-300/40 animate-[sand-fall_8s_linear_infinite]"></div>
    <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-yellow-300/30 animate-[sand-fall_10s_linear_infinite]" style={{animationDelay: "1s"}}></div>
    
    {/* Glass effect */}
    <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 backdrop-blur-xl border border-amber-500/30 group-hover:border-orange-500/50 transition-all duration-500"></div>
    
    <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1.5 bg-amber-900/50 backdrop-blur-md rounded-full text-xs font-semibold text-amber-100 border border-amber-500/50">DESERT SUNSET</span>
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center animate-pulse shadow-lg shadow-orange-500/40">
                 <Sun className="w-4 h-4 text-white" />
            </div>
        </div>
        
        <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3 bg-linear-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Desert Mirage</h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">Warm desert sunset with heat wave visualization and floating sand particles.</p>
            
            {/* Heat Progress */}
            <div className="mb-6 p-3 bg-linear-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-md rounded-xl border border-amber-500/30 group-hover:bg-amber-900/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Heat Intensity</span>
                    <span class="text-orange-300 font-bold text-sm animate-pulse">94°F</span>
                </div>
                <div className="h-2 bg-amber-900/40 rounded-full overflow-hidden border border-amber-500/20">
                    <div className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full w-11/12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-amber-500/20">
                    <Wind className="w-5 h-5 text-amber-300 mx-auto mb-2 animate-pulse" />
                    <p className="font-semibold text-white text-sm">Heat Waves</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:translate-y-[-5px] border border-orange-500/20" style={{transitionDelay: "0.1s"}}>
                    <Mountain className="w-5 h-5 text-orange-300 mx-auto mb-2" />
                    <p className="font-semibold text-white text-sm">Desert</p>
                </div>
            </div>
        </div>
        
        {/* Footer */}
        <div className="pt-4 border-t border-amber-500/30">
            <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
                <p className="text-amber-200 text-xs">Sunset mode active</p>
            </div>
        </div>
    </div>
</div>
);
};
export default DesertCard;`
    }
},
{
    id: 'card-quantum-glass',
        name: 'Quantum Glass Card',
            category: 'card',
                description: 'Futuristic glassmorphic card with orbital animations and data visualization.',
                    tags: ['card', 'glassmorphism', 'animation', 'future', 'dark'],
                        preview: `<div class="group relative w-full h-full overflow-hidden rounded-2xl bg-[#050510] border border-white/10 shadow-2xl">
                <!-- Dynamic Background -->
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_70%)]"></div>
                <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                
                <!-- Orbital Core System -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative w-3/5 aspect-square max-w-[280px]">
                        <!-- Outer Ring -->
                        <div class="absolute inset-0 rounded-full border border-indigo-500/30 border-t-indigo-400 border-l-transparent animate-[spin_8s_linear_infinite]"></div>
                        <div class="absolute inset-2 rounded-full border border-purple-500/20 border-b-purple-400 border-r-transparent animate-[spin_12s_linear_infinite_reverse]"></div>
                        
                        <!-- Core Glow -->
                        <div class="absolute inset-[25%] rounded-full bg-indigo-600/20 blur-2xl animate-pulse"></div>
                        
                        <!-- Center Object -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 rotate-45 animate-[pulse_4s_ease-in-out_infinite] shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center border border-white/20">
                                <i class="fas fa-atom text-white text-2xl -rotate-45"></i>
                            </div>
                        </div>

                        <!-- Satellite -->
                        <div class="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite]">
                            <div class="absolute -top-3 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                        </div>
                    </div>
                </div>

                <!-- Glass Data Panel -->
                <div class="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-[#050510] via-[#050510]/95 to-transparent pt-12">
                     <div class="relative z-10 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-center justify-between mb-3">
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-tight">Quantum Core</h3>
                                <p className="text-indigo-300 text-xs font-medium tracking-wide uppercase">System Stable</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="relative flex h-2 w-2">
                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span class="text-white font-mono text-sm">98.4%</span>
                            </div>
                        </div>
                        
                        <!-- Dynamic Bar -->
                        <div class="w-full h-1.5 bg-indigo-900/30 rounded-full overflow-hidden mb-3">
                             <div class="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 w-[98%] rounded-full animate-pulse"></div>
                        </div>

                        <div class="grid grid-cols-3 gap-2">
                            <div class="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <i class="fas fa-microchip text-indigo-400 mb-1 text-xs block"></i>
                                <span class="text-[10px] text-gray-400 uppercase">CPU</span>
                            </div>
                            <div class="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <i class="fas fa-memory text-purple-400 mb-1 text-xs block"></i>
                                <span class="text-[10px] text-gray-400 uppercase">RAM</span>
                            </div>
                            <div class="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <i class="fas fa-network-wired text-cyan-400 mb-1 text-xs block"></i>
                                <span class="text-[10px] text-gray-400 uppercase">NET</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>`,
                            code: {
        html: `<div class="group relative w-full h-full overflow-hidden rounded-2xl bg-[#050510] border border-white/10 shadow-2xl">
  <!-- Dynamic Background -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_70%)]"></div>
  <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
  
  <!-- Orbital Core System -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="relative w-3/5 aspect-square max-w-[280px]">
      <!-- Rings & Core... -->
    </div>
  </div>

  <!-- Glass Data Panel -->
  <div class="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-[#050510] via-[#050510]/95 to-transparent pt-12">
       <!-- Content... -->
  </div>
</div>`,
            react: `import React from 'react';
import { Atom, Cpu, MemoryStick, Network } from 'lucide-react';

const QuantumCard = () => {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-[#050510] border border-white/10 shadow-2xl">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Orbital Core System */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-3/5 aspect-square max-w-[280px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/30 border-t-indigo-400 border-l-transparent animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-purple-500/20 border-b-purple-400 border-r-transparent animate-[spin_12s_linear_infinite_reverse]" />
          
          {/* Core Glow */}
          <div className="absolute inset-[25%] rounded-full bg-indigo-600/20 blur-2xl animate-pulse" />
          
          {/* Center Object */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 rotate-45 animate-[pulse_4s_ease-in-out_infinite] shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center border border-white/20">
              <Atom className="text-white w-8 h-8 -rotate-45" />
            </div>
          </div>

          {/* Satellite */}
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite]">
            <div className="absolute -top-3 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>
        </div>
      </div>

      {/* Glass Data Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-[#050510] via-[#050510]/95 to-transparent pt-12">
        <div className="relative z-10 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight">Quantum Core</h3>
              <p className="text-indigo-300 text-xs font-medium tracking-wide uppercase">System Stable</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-white font-mono text-sm">98.4%</span>
            </div>
          </div>
          
          {/* Dynamic Bar */}
          <div className="w-full h-1.5 bg-indigo-900/30 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 w-[98%] rounded-full animate-pulse" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
              <Cpu className="text-indigo-400 w-4 h-4 mx-auto mb-1" />
              <span className="text-[10px] text-gray-400 uppercase">CPU</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
              <MemoryStick className="text-purple-400 w-4 h-4 mx-auto mb-1" />
              <span className="text-[10px] text-gray-400 uppercase">RAM</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
              <Network className="text-cyan-400 w-4 h-4 mx-auto mb-1" />
              <span className="text-[10px] text-gray-400 uppercase">NET</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumCard;`
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
    id: 'item-cart-overlay',
        name: 'Shopping Cart Overlay',
            category: 'card',
                description: 'Slide-over shopping cart with product list and total calculation.',
                    tags: ['ecommerce', 'cart', 'overlay', 'ui'],
                        preview: `<div className="w-full h-full bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative flex flex-col">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">Shopping Cart (3)</h2>
        <button className="text-gray-400 hover:text-white transition-colors"><i className="fas fa-times"></i></button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
        <!-- Item 1 -->
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">👟</div>
          <div className="flex-1">
             <h3 className="text-white font-medium">Urban Sneakers</h3>
             <p className="text-gray-400 text-sm">Size: 10 | Color: Black</p>
             <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-2 py-1">
                   <button className="text-gray-400 hover:text-white">-</button>
                   <span className="text-white text-sm">1</span>
                   <button className="text-gray-400 hover:text-white">+</button>
                </div>
                <span className="text-white font-bold">$129.00</span>
             </div>
          </div>
        </div>
        
         <!-- Item 2 -->
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">🎧</div>
          <div className="flex-1">
             <h3 className="text-white font-medium">Pro Headphones</h3>
             <p className="text-gray-400 text-sm">Noise Cancelling</p>
             <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-2 py-1">
                   <button className="text-gray-400 hover:text-white">-</button>
                   <span className="text-white text-sm">1</span>
                   <button className="text-gray-400 hover:text-white">+</button>
                </div>
                <span className="text-white font-bold">$249.00</span>
             </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-black/20 border-t border-white/10">
         <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white font-bold text-xl">$378.00</span>
         </div>
         <button className="w-full bg-brand-primary hover:bg-[#d66e15] text-black font-bold py-3 rounded-xl transition-colors">Checkout Now</button>
      </div>
    </div>`,
                            code: {
        html: `<!-- Interactive Cart Component HTML -->
<div class="cart-container">...</div>`,
            react: `import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const ShoppingCart = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Urban Sneakers", price: 129.00, quantity: 1, image: "👟", size: "10", color: "Black" },
        { id: 2, name: "Pro Headphones", price: 249.00, quantity: 1, image: "🎧", variant: "Noise Cancelling" }
    ]);

    const updateQuantity = (id, change) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="w-full max-w-md bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl font-sans">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="text-orange-500" size={20} />
                    <h2 className="text-lg font-bold text-white">Shopping Cart ({items.length})</h2>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors hover:bg-white/10 p-2 rounded-full">
                    <X size={20} />
                </button>
            </div>
            
            <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                {items.map(item => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-3xl shadow-inner relative overflow-hidden">
                             <span className="relative z-10">{item.image}</span>
                             <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-white font-medium leading-tight">{item.name}</h3>
                                <p className="text-gray-400 text-xs mt-1">
                                    {item.size ? \`Size: \${item.size} | Color: \${item.color}\` : item.variant}
                                </p>
                            </div>
                            <div className="flex justify-between items-end mt-2">
                                <div className="flex items-center gap-3 bg-black/40 rounded-lg px-2 py-1 border border-white/5">
                                    <button 
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="text-gray-400 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="text-white text-sm font-medium w-4 text-center">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="text-gray-400 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <span className="text-white font-bold tracking-wide">$\{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-5 bg-black/40 border-t border-white/10 backdrop-blur-sm">
                <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="text-white font-medium">$\${subtotal.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Shipping</span>
                        <span className="text-green-400">Free</span>
                    </div>
                     <div className="flex justify-between items-center text-lg pt-2 border-t border-white/5 mt-2">
                        <span className="text-white font-bold">Total</span>
                        <span className="text-orange-500 font-bold">$\${subtotal.toFixed(2)}</span>
                    </div>
                </div>
                <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                    Checkout Now <span className="text-xs bg-black/20 px-2 py-0.5 rounded text-black/60">→</span>
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;`
    }
},
{
    id: 'card-shopping-cart',
        name: 'Glassmorphism Cart',
            category: 'card',
                description: 'Interactive shopping cart with totals and clear functionality.',
                    tags: ['card', 'cart', 'glass', 'interactive'],
                        preview: `<div class="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl h-full w-full relative flex flex-col justify-between">
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
    <button class="px-6 py-3 rounded-lg bg-linear-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300 w-full">Clear Cart</button>
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
    <button id="clear-cart" class="px-6 py-3 rounded-lg bg-linear-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">
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
          className="px-6 py-3 rounded-lg bg-linear-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300 w-full"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;`
    }
}
];
