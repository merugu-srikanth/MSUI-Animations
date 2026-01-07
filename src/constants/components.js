export const CATEGORIES = [
  { id: 'all', name: 'All Components' },
  { id: 'button', name: 'Buttons' },
  { id: 'card', name: 'Cards' },
  { id: 'badge', name: 'Badges' },
  { id: 'input', name: 'Inputs' },
  { id: 'navigation', name: 'Navigation' },
];

export const COMPONENTS = [
  // --- Existing Components ---
  {
    id: 'btn-primary',
    name: 'Primary Button',
    category: 'button',
    description: 'Standard primary button with hover effect.',
    tags: ['button', 'primary', 'hover'],
    preview: `<button class="w-64 h-14 flex items-center justify-center bg-[#FA8520] hover:bg-[#d66e15] text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-orange-500/30"><i class="fas fa-check mr-2"></i> Click Me</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center bg-[#FA8520] hover:bg-[#d66e15] text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-orange-500/30">
  <i class="fas fa-check mr-2"></i> Click Me
</button>`,
      react: `const Button = () => (
  <button className="w-64 h-14 flex items-center justify-center bg-brand-primary hover:bg-orange-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-orange-500/30">
    <i className="fas fa-check mr-2"></i> Click Me
  </button>
);`,
      tailwind: `<button class="w-64 h-14 flex items-center justify-center bg-brand-primary hover:bg-brand-primary/80 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-brand-primary/30">
  <i class="fas fa-check mr-2"></i> Click Me
</button>`
    }
  },
  {
    id: 'card-basic',
    name: 'Basic Card',
    category: 'card',
    description: 'Simple card container with padding and rounded corners.',
    tags: ['card', 'container', 'layout'],
    preview: `<div class="bg-[#322720] border border-white/10 rounded-xl p-6 max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`,
    code: {
      html: `<div class="bg-[#322720] border border-white/10 rounded-xl p-6 max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`,
      react: `const Card = () => (
  <div className="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm">
    <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
    <p className="text-gray-400">This is a simple card component used for displaying content.</p>
  </div>
);`,
      tailwind: `<div class="bg-brand-secondary border border-white/10 rounded-xl p-6 max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Card Title</h3>
  <p class="text-gray-400">This is a simple card component used for displaying content.</p>
</div>`
    }
  },
  {
    id: 'badge-status',
    name: 'Status Badge',
    category: 'badge',
    description: 'Small status indicator badge.',
    tags: ['badge', 'status', 'label'],
    preview: `<span class="bg-[#FA8520]/20 text-[#FA8520] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-[#FA8520]/30">
  Active
</span>`,
    code: {
      html: `<span class="bg-[#FA8520]/20 text-[#FA8520] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-[#FA8520]/30">
  Active
</span>`,
      react: `const Badge = ({ children }) => (
  <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
    {children}
  </span>
);`,
      tailwind: `<span class="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
  Active
</span>`
    }
  },
  // --- New Button Designs ---
  {
    id: 'btn-glow-pulse',
    name: 'Glowing Pulse',
    category: 'button',
    description: 'Button with a glowing pulse shadow effect on hover.',
    tags: ['button', 'glow', 'pulse', 'shadow'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105"><i class="fas fa-bolt mr-2"></i> Add to Cart</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105">
  <i class="fas fa-bolt mr-2"></i> Add to Cart
</button>`,
      react: `const GlowingPulseButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105">
    <i className="fas fa-bolt mr-2"></i> Add to Cart
  </button>
);`
    }
  },
  {
    id: 'btn-neon-border',
    name: 'Neon Border',
    category: 'button',
    description: 'Dark button with a neon purple border reveal on hover.',
    tags: ['button', 'neon', 'border'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_#a855f7] hover:bg-gray-800"><i class="fas fa-star mr-2"></i> Premium</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_#a855f7] hover:bg-gray-800">
  <i class="fas fa-star mr-2"></i> Premium
</button>`,
      react: `const NeonBorderButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_#a855f7] hover:bg-gray-800">
    <i className="fas fa-star mr-2"></i> Premium
  </button>
);`
    }
  },
  {
    id: 'btn-liquid-fill',
    name: 'Liquid Fill',
    category: 'button',
    description: 'Button with a liquid filling effect on hover.',
    tags: ['button', 'liquid', 'fill', 'effect'],
    preview: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-800 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
  <span class="relative z-10"><i class="fas fa-fill-drip mr-2"></i> Liquid Effect</span>
  <div class="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity duration-500 hover:opacity-30"></div>
</button>`,
    code: {
      html: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-800 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
  <span class="relative z-10"><i class="fas fa-fill-drip mr-2"></i> Liquid Effect</span>
  <div class="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity duration-500 hover:opacity-30"></div>
</button>`,
      react: `const LiquidFillButton = () => (
  <button className="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-800 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
    <span className="relative z-10"><i className="fas fa-fill-drip mr-2"></i> Liquid Effect</span>
    <div className="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity duration-500 hover:opacity-30"></div>
  </button>
);`
    }
  },
  {
    id: 'btn-shake',
    name: 'Shake Effect',
    category: 'button',
    description: 'Pulsing shake effect on hover.',
    tags: ['button', 'shake', 'hover'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-x-1 hover:translate-y-1 hover:shadow-xl hover:shadow-red-500/30"><i class="fas fa-heart mr-2"></i> Favorite</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-x-1 hover:translate-y-1 hover:shadow-xl hover:shadow-red-500/30">
  <i class="fas fa-heart mr-2"></i> Favorite
</button>`,
      react: `const ShakeButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-x-1 hover:translate-y-1 hover:shadow-xl hover:shadow-red-500/30">
    <i className="fas fa-heart mr-2"></i> Favorite
  </button>
);`
    }
  },
  {
    id: 'btn-3d-press',
    name: '3D Press',
    category: 'button',
    description: 'Button that looks like it is pressed down.',
    tags: ['button', '3d', 'press'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 text-white font-bold text-lg shadow-[0_6px_0_rgb(194,65,12)] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(194,65,12)] active:translate-y-2 active:shadow-none"><i class="fas fa-cube mr-2"></i> 3D Button</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 text-white font-bold text-lg shadow-[0_6px_0_rgb(194,65,12)] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(194,65,12)] active:translate-y-2 active:shadow-none">
  <i class="fas fa-cube mr-2"></i> 3D Button
</button>`,
      react: `const PressButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 text-white font-bold text-lg shadow-[0_6px_0_rgb(194,65,12)] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(194,65,12)] active:translate-y-2 active:shadow-none">
    <i className="fas fa-cube mr-2"></i> 3D Button
  </button>
);`
    }
  },
  {
    id: 'btn-expand',
    name: 'Expand Width',
    category: 'button',
    description: 'Expands in width on hover.',
    tags: ['button', 'expand', 'width'],
    preview: `<button class="w-64 h-14 hover:w-72 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-yellow-500/50"><i class="fas fa-expand-alt mr-2"></i> Expand</button>`,
    code: {
      html: `<button class="w-64 h-14 hover:w-72 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-yellow-500/50">
  <i class="fas fa-expand-alt mr-2"></i> Expand
</button>`,
      react: `const ExpandButton = () => (
  <button className="w-64 h-14 hover:w-72 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-yellow-500/50">
    <i className="fas fa-expand-alt mr-2"></i> Expand
  </button>
);`
    }
  },
  {
    id: 'btn-glass',
    name: 'Glass Morphism',
    category: 'button',
    description: 'Glass-morphism style button.',
    tags: ['button', 'glass', 'modern'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"><i class="fas fa-glass-cheers mr-2"></i> Glass Effect</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
  <i class="fas fa-glass-cheers mr-2"></i> Glass Effect
</button>`,
      react: `const GlassButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
    <i className="fas fa-glass-cheers mr-2"></i> Glass Effect
  </button>
);`
    }
  },
  {
    id: 'btn-icon-spin',
    name: 'Icon Spin',
    category: 'button',
    description: 'The icon spins on hover.',
    tags: ['button', 'spin', 'icon'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-105 group"><i class="fas fa-sync-alt mr-2 group-hover:rotate-180 transition-transform duration-500"></i> Refresh</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-105 group">
  <i class="fas fa-sync-alt mr-2 group-hover:rotate-180 transition-transform duration-500"></i> Refresh
</button>`,
      react: `const IconSpinButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-105 group">
    <i className="fas fa-sync-alt mr-2 group-hover:rotate-180 transition-transform duration-500"></i> Refresh
  </button>
);`
    }
  },
  {
    id: 'btn-text-reveal',
    name: 'Text Reveal',
    category: 'button',
    description: 'Reveals hidden text/icon on hover.',
    tags: ['button', 'reveal', 'hover'],
    preview: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold text-lg overflow-hidden transition-all duration-500 group">
  <span class="transition-all duration-500 group-hover:translate-x-2 flex items-center"><i class="fas fa-eye mr-2"></i> Reveal Text</span>
  <span class="absolute right-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-8">→</span>
</button>`,
    code: {
      html: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold text-lg overflow-hidden transition-all duration-500 group">
  <span class="transition-all duration-500 group-hover:translate-x-2 flex items-center"><i class="fas fa-eye mr-2"></i> Reveal Text</span>
  <span class="absolute right-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-8">→</span>
</button>`,
      react: `const TextRevealButton = () => (
  <button className="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold text-lg overflow-hidden transition-all duration-500 group">
    <span className="transition-all duration-500 group-hover:translate-x-2 flex items-center"><i className="fas fa-eye mr-2"></i> Reveal Text</span>
    <span className="absolute right-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-8">→</span>
  </button>
);`
    }
  },
  {
    id: 'btn-shadow-grow',
    name: 'Shadow Grow',
    category: 'button',
    description: 'Shadow expands on hover.',
    tags: ['button', 'shadow', 'grow'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-700 to-pink-700 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/50 hover:-translate-y-1"><i class="fas fa-cloud mr-2"></i> Shadow Effect</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-700 to-pink-700 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/50 hover:-translate-y-1">
  <i class="fas fa-cloud mr-2"></i> Shadow Effect
</button>`,
      react: `const ShadowGrowButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-700 to-pink-700 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/50 hover:-translate-y-1">
    <i className="fas fa-cloud mr-2"></i> Shadow Effect
  </button>
);`
    }
  },
  {
    id: 'btn-bounce',
    name: 'Bounce Up',
    category: 'button',
    description: 'Bounces up slightly on hover.',
    tags: ['button', 'bounce', 'animation'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-lime-600 to-green-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-500/30"><i class="fas fa-arrow-up mr-2"></i> Bounce Up</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-lime-600 to-green-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-500/30">
  <i class="fas fa-arrow-up mr-2"></i> Bounce Up
</button>`,
      react: `const BounceButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-lime-600 to-green-600 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-500/30">
    <i className="fas fa-arrow-up mr-2"></i> Bounce Up
  </button>
);`
    }
  },
  {
    id: 'btn-flip',
    name: 'Flip Effect',
    category: 'button',
    description: '3D flip/skew effect.',
    tags: ['button', 'flip', 'skew', '3d'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg transition-all duration-500 hover:rotate-1 hover:skew-x-2 hover:shadow-violet-500/50 hover:shadow-lg"><i class="fas fa-retweet mr-2"></i> Flip Card</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg transition-all duration-500 hover:rotate-1 hover:skew-x-2 hover:shadow-violet-500/50 hover:shadow-lg">
  <i class="fas fa-retweet mr-2"></i> Flip Card
</button>`,
      react: `const FlipButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg transition-all duration-500 hover:rotate-1 hover:skew-x-2 hover:shadow-violet-500/50 hover:shadow-lg">
    <i className="fas fa-retweet mr-2"></i> Flip Card
  </button>
);`
    }
  },
  {
    id: 'btn-border-draw',
    name: 'Border Draw',
    category: 'button',
    description: 'Border draws itself on hover.',
    tags: ['button', 'border', 'animation'],
    preview: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-700 hover:border-amber-500 hover:shadow-[0_0_15px_#f59e0b]"><span><i class="fas fa-pencil-alt mr-2"></i> Draw Border</span></button>`,
    code: {
      html: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-700 hover:border-amber-500 hover:shadow-[0_0_15px_#f59e0b]">
  <span><i class="fas fa-pencil-alt mr-2"></i> Draw Border</span>
</button>`,
      react: `const BorderDrawButton = () => (
  <button className="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-lg border-2 border-transparent transition-all duration-700 hover:border-amber-500 hover:shadow-[0_0_15px_#f59e0b]">
    <span><i className="fas fa-pencil-alt mr-2"></i> Draw Border</span>
  </button>
);`
    }
  },
  {
    id: 'btn-particle',
    name: 'Particle Burst',
    category: 'button',
    description: 'Particle effect on hover.',
    tags: ['button', 'particle', 'burst'],
    preview: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-sky-700 group shadow-lg hover:shadow-sky-500/50"><span class="relative z-10"><i class="fas fa-fire mr-2"></i> Particles</span><div class="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div></button>`,
    code: {
      html: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-sky-700 group shadow-lg hover:shadow-sky-500/50">
  <span class="relative z-10"><i class="fas fa-fire mr-2"></i> Particles</span>
  <div class="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div>
</button>`,
      react: `const ParticleButton = () => (
  <button className="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-sky-700 group shadow-lg hover:shadow-sky-500/50">
    <span className="relative z-10"><i className="fas fa-fire mr-2"></i> Particles</span>
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div>
  </button>
);`
    }
  },
  {
    id: 'btn-invert',
    name: 'Color Invert',
    category: 'button',
    description: 'Inverts colors on hover.',
    tags: ['button', 'invert', 'color'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-white text-gray-900 font-bold text-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border hover:border-white shadow-lg"><i class="fas fa-adjust mr-2"></i> Invert Colors</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-white text-gray-900 font-bold text-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border hover:border-white shadow-lg">
  <i class="fas fa-adjust mr-2"></i> Invert Colors
</button>`,
      react: `const InvertButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-white text-gray-900 font-bold text-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border hover:border-white shadow-lg">
    <i className="fas fa-adjust mr-2"></i> Invert Colors
  </button>
);`
    }
  },
  {
    id: 'btn-underline',
    name: 'Slide Underline',
    category: 'button',
    description: 'Underline slides in on hover.',
    tags: ['button', 'underline', 'slide'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-green-800 text-white font-bold text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-700 group shadow-lg"><span class="relative"><i class="fas fa-underline mr-2"></i> Underline <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span></span></button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-green-800 text-white font-bold text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-700 group shadow-lg">
  <span class="relative">
    <i class="fas fa-underline mr-2"></i> Underline
    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>
</button>`,
      react: `const UnderlineButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-700 to-green-800 text-white font-bold text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-700 group shadow-lg">
    <span className="relative">
      <i className="fas fa-underline mr-2"></i> Underline
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </span>
  </button>
);`
    }
  },
  {
    id: 'btn-metallic',
    name: 'Metallic Shine',
    category: 'button',
    description: 'Metallic gradient shine.',
    tags: ['button', 'metallic', 'shine'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 text-gray-900 font-bold text-lg shadow-inner transition-all duration-300 hover:brightness-110 hover:from-gray-200 hover:via-gray-100 hover:to-gray-300 hover:shadow-lg"><i class="fas fa-cog mr-2"></i> Metallic</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 text-gray-900 font-bold text-lg shadow-inner transition-all duration-300 hover:brightness-110 hover:from-gray-200 hover:via-gray-100 hover:to-gray-300 hover:shadow-lg">
  <i class="fas fa-cog mr-2"></i> Metallic
</button>`,
      react: `const MetallicButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 text-gray-900 font-bold text-lg shadow-inner transition-all duration-300 hover:brightness-110 hover:from-gray-200 hover:via-gray-100 hover:to-gray-300 hover:shadow-lg">
    <i className="fas fa-cog mr-2"></i> Metallic
  </button>
);`
    }
  },
  {
    id: 'btn-pulse-ring',
    name: 'Pulse Ring',
    category: 'button',
    description: 'Ring pulses outward on hover.',
    tags: ['button', 'pulse', 'ring'],
    preview: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-fuchsia-500/50 hover:shadow-xl"><span class="relative z-10"><i class="fas fa-circle-notch mr-2"></i> Pulse Ring</span></button>`,
    code: {
      html: `<button class="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-fuchsia-500/50 hover:shadow-xl">
  <span class="relative z-10"><i class="fas fa-circle-notch mr-2"></i> Pulse Ring</span>
</button>`,
      react: `const PulseRingButton = () => (
  <button className="relative w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-fuchsia-500/50 hover:shadow-xl">
    <span className="relative z-10"><i className="fas fa-circle-notch mr-2"></i> Pulse Ring</span>
  </button>
);`
    }
  },
  {
    id: 'btn-glitch',
    name: 'Glitch Effect',
    category: 'button',
    description: 'Distorts slightly on hover.',
    tags: ['button', 'glitch', 'effect'],
    preview: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-700 to-blue-800 text-white font-bold text-lg transition-all duration-100 hover:skew-x-3 hover:-skew-y-1 hover:shadow-cyan-500/30 hover:shadow-lg"><i class="fas fa-bug mr-2"></i> Glitch Effect</button>`,
    code: {
      html: `<button class="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-700 to-blue-800 text-white font-bold text-lg transition-all duration-100 hover:skew-x-3 hover:-skew-y-1 hover:shadow-cyan-500/30 hover:shadow-lg">
  <i class="fas fa-bug mr-2"></i> Glitch Effect
</button>`,
      react: `const GlitchButton = () => (
  <button className="w-64 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-700 to-blue-800 text-white font-bold text-lg transition-all duration-100 hover:skew-x-3 hover:-skew-y-1 hover:shadow-cyan-500/30 hover:shadow-lg">
    <i className="fas fa-bug mr-2"></i> Glitch Effect
  </button>
);`
    }
  },
  // --- Shopping Cart Component ---
  {
    id: 'card-shopping-cart',
    name: 'Glassmorphism Cart',
    category: 'card',
    description: 'Interactive shopping cart with totals and clear functionality.',
    tags: ['card', 'cart', 'glass', 'interactive'],
    preview: `<div class="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl max-w-md mx-auto relative">
  <h2 class="text-2xl font-bold mb-4 text-center text-cyan-300">Shopping Cart</h2>
  <div class="space-y-4 mb-6">
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
  <div class="text-center text-white">
    <p class="text-lg font-semibold mb-2">Total: $59.98</p>
    <button class="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">Clear Cart</button>
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
  }
];
