import { Bell, Wifi, Activity, Check, X, Flame } from 'lucide-react';

export const BADGES = [
  {
    id: 'pulse-dot-status',
    name: 'Pulse Dot Status',
    category: 'badge',
    description: 'Status indicator with a rippling pulse animation.',
    tags: ['status', 'pulse', 'animation'],
    preview: `<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  Operational
</div>`,
    code: {
      html: `<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  Operational
</div>`,
      react: `const StatusBadge = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    Operational
  </div>
);`
    }
  },
  {
    id: 'notification-count',
    name: 'Notification Bell',
    category: 'badge',
    description: 'Bell icon with a shaking notification counter.',
    tags: ['notification', 'counter', 'shake'],
    preview: `<div class="relative inline-flex p-2 text-gray-400 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  <span class="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold animate-[wiggle_1s_ease-in-out_infinite]">
    3
  </span>
  <style>
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
  </style>
</div>`,
    code: {
      html: `<div class="relative inline-flex p-2 text-gray-400 hover:text-white transition-colors">
  <!-- Lucide Bell Icon SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  <span class="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold animate-wiggle">
    3
  </span>
</div>`,
      react: `import { Bell } from 'lucide-react';

const NotificationBadge = () => (
  <div className="relative inline-flex p-2 text-gray-400 hover:text-white transition-colors">
    <Bell size={20} />
    <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold animate-pulse">
      3
    </span>
  </div>
);`
    }
  },
  {
    id: 'live-indicator',
    name: 'Live Indicator',
    category: 'badge',
    description: 'YouTube style LIVE badge with recording animation.',
    tags: ['live', 'recording', 'status'],
    preview: `<div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
  <div class="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></div>
  LIVE
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
  <div class="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></div>
  LIVE
</div>`,
      react: `const LiveBadge = () => (
  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
    <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></div>
    LIVE
  </div>
);`
    }
  },
  {
    id: 'typing-indicator',
    name: 'Typing Dots',
    category: 'badge',
    description: 'Animated elipsis indicating activity.',
    tags: ['typing', 'loading', 'chat'],
    preview: `<div class="inline-flex items-center gap-1 px-3 py-2 rounded-2xl bg-gray-800 border border-gray-700">
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-1 px-3 py-2 rounded-2xl bg-gray-800 border border-gray-700">
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0"></div>
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
</div>`,
      react: `const TypingBadge = () => (
  <div className="inline-flex items-center gap-1 px-3 py-2 rounded-2xl bg-gray-800 border border-gray-700">
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0"></div>
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
  </div>
);`
    }
  },
  {
    id: 'glass-badge',
    name: 'Glass Badge',
    category: 'badge',
    description: 'Frosted glass effect with blur.',
    tags: ['glass', 'modern', 'blur'],
    preview: `<div class="px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg hover:bg-white/20 transition-all cursor-default">
  Glassmorphism
</div>`,
    code: {
      html: `<div class="px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg hover:bg-white/20 transition-all">
  Glassmorphism
</div>`,
      react: `const GlassBadge = () => (
  <div className="px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg hover:bg-white/20 transition-all">
    Glassmorphism
  </div>
);`
    }
  },
  {
    id: 'gradient-border',
    name: 'Gradient Border',
    category: 'badge',
    description: 'Badge with a gradient border effect.',
    tags: ['gradient', 'border', 'colorful'],
    preview: `<div class="relative p-[1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 overflow-hidden">
  <div class="relative px-4 py-1 rounded-full bg-black text-white text-xs font-medium">
    Gradient Border
  </div>
</div>`,
    code: {
      html: `<div class="relative p-[1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
  <div class="relative px-4 py-1 rounded-full bg-black text-white text-xs font-medium">
    Gradient Border
  </div>
</div>`,
      react: `const GradientBorderBadge = () => (
  <div className="relative p-[1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
    <div className="relative px-4 py-1 rounded-full bg-black text-white text-xs font-medium">
      Gradient Border
    </div>
  </div>
);`
    }
  },
  {
    id: 'shiny-pill',
    name: 'Shiny Pill',
    category: 'badge',
    description: 'Metallic finish with a light sweep animation.',
    tags: ['shiny', 'metallic', 'premium'],
    preview: `<div class="group relative overflow-hidden rounded-full bg-zinc-800 px-4 py-1.5 text-xs text-zinc-300 ring-1 ring-white/10 hover:ring-white/20">
  <span class="z-10 relative">Premium User</span>
  <div class="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shine_1s_ease-in-out_infinite]" />
  <style>
    @keyframes shine {
      100% { transform: translateX(100%); }
    }
  </style>
</div>`,
    code: {
      html: `<div class="group relative overflow-hidden rounded-full bg-zinc-800 px-4 py-1.5 text-xs text-zinc-300 ring-1 ring-white/10 hover:ring-white/20">
  <span class="z-10 relative">Premium User</span>
  <div class="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
</div>`,
      react: `const ShinyBadge = () => (
  <div className="group relative overflow-hidden rounded-full bg-zinc-800 px-4 py-1.5 text-xs text-zinc-300 ring-1 ring-white/10 hover:ring-white/20">
    <span className="z-10 relative">Premium User</span>
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
  </div>
);`
    }
  },
  {
    id: 'blur-reveal',
    name: 'Blur Reveal',
    category: 'badge',
    description: 'Text that unblurs and glows on hover.',
    tags: ['blur', 'reveal', 'hover'],
    preview: `<span class="px-3 py-1 rounded border border-white/5 text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white blur-[2px] hover:blur-0 transition-all duration-300 hover:text-white cursor-help">
  Hidden Secret
</span>`,
    code: {
      html: `<span class="px-3 py-1 rounded border border-white/5 text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white blur-[2px] hover:blur-0 transition-all duration-300 hover:text-white cursor-help">
  Hidden Secret
</span>`,
      react: `const BlurRevealBadge = () => (
  <span className="px-3 py-1 rounded border border-white/5 text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white blur-[2px] hover:blur-0 transition-all duration-300 hover:text-white cursor-help">
    Hidden Secret
  </span>
);`
    }
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    category: 'badge',
    description: 'Text with a strong neon drop-shadow glow.',
    tags: ['neon', 'glow', 'cyberpunk'],
    preview: `<div class="px-3 py-1 rounded border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse">
  Cyber
</div>`,
    code: {
      html: `<div class="px-3 py-1 rounded border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse">
  Cyber
</div>`,
      react: `const NeonBadge = () => (
  <div className="px-3 py-1 rounded border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse">
    Cyber
  </div>
);`
    }
  },
  {
    id: 'hover-expand-dot',
    name: 'Hover Expand',
    category: 'badge',
    description: 'Small dot that expands into text on hover.',
    tags: ['interaction', 'expand', 'minimal'],
    preview: `<div class="group flex items-center bg-blue-600 rounded-full transition-all duration-300 w-3 hover:w-24 h-3 overflow-hidden cursor-pointer">
  <span class="w-3 h-3 flex-shrink-0 bg-blue-400 rounded-full"></span>
  <span class="ml-2 text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 delay-100">
    New Updates
  </span>
</div>`,
    code: {
      html: `<div class="group flex items-center bg-blue-600 rounded-full transition-all duration-300 w-3 hover:w-24 h-3 overflow-hidden cursor-pointer">
  <span class="w-3 h-3 flex-shrink-0 bg-blue-400 rounded-full"></span>
  <span class="ml-2 text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 delay-100">
    New Updates
  </span>
</div>`,
      react: `const ExpandBadge = () => (
  <div className="group flex items-center bg-blue-600 rounded-full transition-all duration-300 w-3 hover:w-24 h-3 overflow-hidden cursor-pointer">
    <span className="w-3 h-3 flex-shrink-0 bg-blue-400 rounded-full"></span>
    <span className="ml-2 text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 delay-100">
      New Updates
    </span>
  </div>
);`
    }
  },
  {
    id: 'toggle-status',
    name: 'Status Toggle',
    category: 'badge',
    description: 'Interactive online/offline toggle badge.',
    tags: ['toggle', 'status', 'interactive'],
    preview: `<label class="relative inline-flex items-center cursor-pointer group">
  <input type="checkbox" class="sr-only peer" checked>
  <div class="w-20 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
  <span class="absolute left-2 text-[9px] font-bold text-gray-400 peer-checked:hidden uppercase">Offline</span>
  <span class="absolute right-2 text-[9px] font-bold text-white hidden peer-checked:block uppercase">Online</span>
</label>`,
    code: {
      html: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" checked>
  <div class="w-20 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-14 peer-checked:bg-green-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
  <span class="absolute left-2 text-[10px] text-gray-400 peer-checked:hidden">Offline</span>
  <span class="absolute right-2 text-[10px] text-white hidden peer-checked:block">Online</span>
</label>`,
      react: `const StatusToggle = () => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" defaultChecked />
    <div className="w-20 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-14 peer-checked:bg-green-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    <span className="absolute left-2 text-[10px] text-gray-400 peer-checked:hidden">Offline</span>
    <span className="absolute right-2 text-[10px] text-white hidden peer-checked:block">Online</span>
  </label>
);`
    }
  },
  {
    id: 'glitch-badge',
    name: 'Glitch Text',
    category: 'badge',
    description: 'Cyberpunk glitch effect on text hover.',
    tags: ['glitch', 'cyberpunk', 'hover'],
    preview: `<div class="relative inline-block px-4 py-1 text-xs font-bold text-white bg-black border border-white mix-blend-difference hover:before:content-['GLITCH'] hover:before:absolute hover:before:top-0 hover:before:left-[2px] hover:before:text-red-500 hover:before:opacity-70 hover:after:content-['GLITCH'] hover:after:absolute hover:after:top-0 hover:after:left-[-2px] hover:after:text-blue-500 hover:after:opacity-70 overflow-hidden" data-text="GLITCH">
  GLITCH
</div>`,
    code: {
      html: `<div class="relative inline-block px-4 py-1 text-xs font-bold text-white bg-black border border-white mix-blend-difference hover:before:content-['GLITCH'] hover:before:absolute hover:before:top-0 hover:before:left-[2px] hover:before:text-red-500 hover:before:opacity-70 hover:after:content-['GLITCH'] hover:after:absolute hover:after:top-0 hover:after:left-[-2px] hover:after:text-blue-500 hover:after:opacity-70 overflow-hidden">
  GLITCH
</div>`,
      react: `const GlitchBadge = () => (
  <div className="relative inline-block px-4 py-1 text-xs font-bold text-white bg-black border border-white mix-blend-difference hover:before:content-['GLITCH'] hover:before:absolute hover:before:top-0 hover:before:left-[2px] hover:before:text-red-500 hover:before:opacity-70 hover:after:content-['GLITCH'] hover:after:absolute hover:after:top-0 hover:after:left-[-2px] hover:after:text-blue-500 hover:after:opacity-70 overflow-hidden">
    GLITCH
  </div>
);`
    }
  },
  {
    id: 'delete-shake',
    name: 'Delete Shake',
    category: 'badge',
    description: 'Removeable badge that shakes on hover.',
    tags: ['delete', 'shake', 'remove'],
    preview: `<div class="inline-flex items-center gap-1 pl-3 pr-1 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-medium hover:bg-red-500/20 transition-colors group cursor-pointer">
  Tag Name
  <div class="p-0.5 rounded-full hover:bg-red-500 hover:text-white transition-colors group-hover:animate-[wiggle_0.2s_ease-in-out_infinite]">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </div>
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-1 pl-3 pr-1 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-medium hover:bg-red-500/20 group cursor-pointer">
  Tag Name
  <div class="p-0.5 rounded-full hover:bg-red-500 hover:text-white transition-colors group-hover:animate-wiggle">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </div>
</div>`,
      react: `import { X } from 'lucide-react';

const DeleteBadge = () => (
  <div className="inline-flex items-center gap-1 pl-3 pr-1 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-medium hover:bg-red-500/20 group cursor-pointer">
    Tag Name
    <div className="p-0.5 rounded-full hover:bg-red-500 hover:text-white transition-colors group-hover:animate-spin">
      <X size={12} />
    </div>
  </div>
);`
    }
  },
  {
    id: 'checkmark-morph',
    name: 'Success Morph',
    category: 'badge',
    description: 'Circle that morphs into a success checkmark.',
    tags: ['success', 'morph', 'check'],
    preview: `<div class="group flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
  <div class="relative flex items-center justify-center w-4 h-4">
    <div class="absolute w-4 h-4 border-2 border-green-500/50 rounded-full group-hover:scale-0 transition-transform duration-300"></div>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="absolute scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
  Completed
</div>`,
    code: {
      html: `<div class="group flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
  <div class="relative flex items-center justify-center w-4 h-4">
    <div class="absolute w-4 h-4 border-2 border-green-500/50 rounded-full group-hover:scale-0 transition-transform duration-300"></div>
    <svg class="absolute scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
  Completed
</div>`,
      react: `const SuccessBadge = () => (
  <div className="group flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
    <div className="relative flex items-center justify-center w-4 h-4">
      <div className="absolute w-4 h-4 border-2 border-green-500/50 rounded-full group-hover:scale-0 transition-transform duration-300"></div>
      <Check size={10} className="absolute scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" strokeWidth={4} />
    </div>
    Completed
  </div>
);`
    }
  },
  {
    id: 'spinning-loader',
    name: 'Spinning Loader',
    category: 'badge',
    description: ' Badge with a spinning ring.',
    tags: ['loading', 'spin', 'status'],
    preview: `<div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
  <div class="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
  Processing
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
  <div class="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
  Processing
</div>`,
      react: `const ProcessingBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
    <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
    Processing
  </div>
);`
    }
  },
  {
    id: 'social-tag',
    name: 'Social Tag',
    category: 'badge',
    description: 'User handle style badge with avatar.',
    tags: ['social', 'user', 'profile'],
    preview: `<div class="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32" alt="avatar" class="w-5 h-5 rounded-full object-cover">
  <span class="text-xs text-gray-300 font-medium">@alex_dev</span>
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
  <img src="avatar.jpg" class="w-5 h-5 rounded-full object-cover">
  <span class="text-xs text-gray-300 font-medium">@alex_dev</span>
</div>`,
      react: `const SocialBadge = () => (
  <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
    <img src="/avatar.jpg" alt="avatar" className="w-5 h-5 rounded-full object-cover" />
    <span className="text-xs text-gray-300 font-medium">@alex_dev</span>
  </div>
);`
    }
  },
  {
    id: 'price-tag',
    name: 'Price Tag',
    category: 'badge',
    description: 'Discount badge with cutout shape effect.',
    tags: ['price', 'discount', 'ecommerce'],
    preview: `<div class="relative inline-flex items-center bg-orange-500 px-3 py-1 text-xs font-bold text-white clip-path-tag">
  SAVE 20%
  <div class="absolute w-1.5 h-1.5 bg-black rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
  <style>
    .clip-path-tag {
       clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%);
       padding-left: 1rem;
    }
  </style>
</div>`,
    code: {
      html: `<div class="relative inline-flex items-center bg-orange-500 px-3 py-1 text-xs font-bold text-white" style="clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%); padding-left: 1rem;">
  SAVE 20%
  <div class="absolute w-1.5 h-1.5 bg-black rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
</div>`,
      react: `const PriceBadge = () => (
  <div className="relative inline-flex items-center bg-orange-500 px-3 py-1 text-xs font-bold text-white" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)', paddingLeft: '1rem' }}>
    SAVE 20%
    <div className="absolute w-1.5 h-1.5 bg-black rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
  </div>
);`
    }
  },
  {
    id: 'tech-tag',
    name: 'Tech Tag',
    category: 'badge',
    description: 'Developer style code badge.',
    tags: ['code', 'tech', 'developer'],
    preview: `<div class="font-mono text-xs px-2 py-1 bg-[#1e1e1e] border border-gray-800 rounded text-blue-400">
  <span class="text-gray-500">&lt;</span>React /<span class="text-gray-500">&gt;</span>
</div>`,
    code: {
      html: `<div class="font-mono text-xs px-2 py-1 bg-[#1e1e1e] border border-gray-800 rounded text-blue-400">
  <span class="text-gray-500">&lt;</span>React /<span class="text-gray-500">&gt;</span>
</div>`,
      react: `const TechBadge = () => (
  <div className="font-mono text-xs px-2 py-1 bg-[#1e1e1e] border border-gray-800 rounded text-blue-400">
    <span className="text-gray-500">&lt;</span>React /<span className="text-gray-500">&gt;</span>
  </div>
);`
    }
  },
  {
    id: 'fire-trending',
    name: 'Trending Fire',
    category: 'badge',
    description: 'Fire icon with flame animation.',
    tags: ['trending', 'hot', 'fire'],
    preview: `<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-bold uppercase tracking-wider group hover:bg-orange-500/20 transition-colors">
  <div class="relative">
     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="animate-pulse"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.3.4.6.9 1.8z"/></svg>
  </div>
  Trending
</div>`,
    code: {
      html: `<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-bold uppercase tracking-wider">
  <svg class="animate-pulse" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.3.4.6.9 1.8z"/></svg>
  Trending
</div>`,
      react: `import { Flame } from 'lucide-react';

const TrendingBadge = () => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-bold uppercase tracking-wider">
    <Flame size={14} className="fill-current animate-pulse" />
    Trending
  </div>
);`
    }
  },
  {
    id: 'new-pop',
    name: 'New Pop',
    category: 'badge',
    description: 'New badge that pops and rotates.',
    tags: ['new', 'pop', 'label'],
    preview: `<div class="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white text-[10px] font-bold shadow-lg shadow-indigo-500/30 hover:scale-110 hover:rotate-3 transition-transform duration-200 cursor-default">
  NEW ✨
</div>`,
    code: {
      html: `<div class="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white text-[10px] font-bold shadow-lg shadow-indigo-500/30 hover:scale-110 hover:rotate-3 transition-transform duration-200">
  NEW ✨
</div>`,
      react: `const NewBadge = () => (
  <div className="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white text-[10px] font-bold shadow-lg shadow-indigo-500/30 hover:scale-110 hover:rotate-3 transition-transform duration-200">
    NEW ✨
  </div>
);`
    }
  }
];
