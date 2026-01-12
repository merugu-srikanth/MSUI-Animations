import Logo from '../assets/NewLogo.png'
export const NAVBARS = [
    {
        id: 'nav-neon-cyber',
        name: 'Neon Cyber Nav',
        category: 'navigation',
        description: 'Futuristic navigation with neon glow effects and glassmorphism.',
        tags: ['navbar', 'neon', 'gaming', 'glassmorphism'],
        preview: `
      <nav class="w-full bg-gray-900/90 backdrop-blur-xl border-b border-violet-500/30 p-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-3 group cursor-pointer">
            <div class="relative w-full h-10">
              <div class="absolute inset-0 bg-violet-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
          </div>
          
          <div class="hidden md:flex items-center gap-8">
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
              <span>Home</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
              <span>Games</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
              <span>Tournaments</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
          </div>

          <div class="flex items-center gap-4">
            <button class="p-2 text-gray-400 hover:text-white transition-colors relative group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <span class="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button class="px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg relative overflow-hidden group">
              <span class="relative z-10 font-medium">Login</span>
              <div class="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 ring-2 ring-white/20 rounded-lg"></div>
            </button>
          </div>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Neon Cyber Navbar -->
<nav class="w-full bg-gray-900/90 backdrop-blur-xl border-b border-violet-500/30 p-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3 group cursor-pointer">
            <div class="relative w-full h-10">
                <div class="absolute inset-0 bg-violet-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
        </div>
        
        <div class="hidden md:flex items-center gap-8">
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
                <span>Home</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
                <span>Games</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
            <a href="javascript:void(0)" class="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
                <span>Tournaments</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            </a>
        </div>

        <div class="flex items-center gap-4">
            <button class="p-2 text-gray-400 hover:text-white transition-colors relative group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span class="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button class="px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg relative overflow-hidden group">
                <span class="relative z-10 font-medium">Login</span>
                <div class="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute inset-0 ring-2 ring-white/20 rounded-lg"></div>
            </button>
        </div>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const NeonNavbar = () => {
    return (
        <nav className="w-full bg-gray-900/90 backdrop-blur-xl border-b border-violet-500/30 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative w-full h-10">
                        <div className="absolute inset-0 bg-violet-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img src={Logo} alt="Logo" className="relative w-full h-full object-cover z-10" />
                    </div>
                </div>
                
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Games', 'Tournaments'].map((item) => (
                        <a key={item} href="javascript:void(0)" className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group">
                            <span>{item}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors relative group">
                        <Search className="w-5 h-5" />
                        <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg relative overflow-hidden group">
                        <span className="relative z-10 font-medium">Login</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 ring-2 ring-white/20 rounded-lg"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NeonNavbar;`
        }
    },
    {
        id: 'nav-floating-island',
        name: 'Floating Island Nav',
        category: 'navigation',
        description: 'Centered floating navigation bar with smooth interactions.',
        tags: ['navbar', 'floating', 'minimal', 'modern'],
        preview: `
      <div class="w-full p-8 flex justify-center bg-gray-100">
        <nav class="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-8 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1">
          <a href="javascript:void(0)" class="flex items-center gap-2">
            <div class="relative w-full h-10">
                <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
          </a>
          
          <div class="hidden md:flex items-center gap-1">
            <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Products</a>
            <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Features</a>
            <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Pricing</a>
          </div>

          <button class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg">
            <i class="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
          </button>
        </nav>
      </div>
        `,
        code: {
            html: `<!-- Floating Island Navbar -->
<div class="w-full p-8 flex justify-center bg-gray-100">
    <nav class="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-8 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1">
      <a href="javascript:void(0)" class="flex items-center gap-2">
        <div class="relative w-full h-10">
            <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
        </div>
      </a>
      
      <div class="hidden md:flex items-center gap-1">
        <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Products</a>
        <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Features</a>
        <a href="javascript:void(0)" class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">Pricing</a>
      </div>

      <button class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg">
        <i class="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
      </button>
    </nav>
</div>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const FloatingNavbar = () => {
    return (
        <div className="w-full p-8 flex justify-center bg-gray-100">
            <nav className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-8 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <a href="javascript:void(0)" className="flex items-center gap-2">
                    <div className="relative w-full h-10">
                        <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                    </div>
                </a>
                
                <div className="hidden md:flex items-center gap-1">
                    {['Products', 'Features', 'Pricing'].map((item) => (
                        <a key={item} href="javascript:void(0)" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300">
                            {item}
                        </a>
                    ))}
                </div>

                <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg group">
                    <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                </button>
            </nav>
        </div>
    );
};

export default FloatingNavbar;`
        }
    },
    {
        id: 'nav-corporate-pro',
        name: 'Corporate Professional',
        category: 'navigation',
        description: 'Clean, professional navigation with top bar and clear hierarchy.',
        tags: ['navbar', 'corporate', 'business', 'clean'],
        preview: `
      <div class="w-full flexflex-col font-sans">
        <div class="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
          <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex gap-4">
                <span><i class="fas fa-phone mr-2"></i>+1 (555) 123-4567</span>
                <span><i class="fas fa-envelope mr-2"></i>contact@corp.com</span>
            </div>
            <div class="flex gap-3">
                <a href="javascript:void(0)" class="hover:text-white transition-colors"><i class="fab fa-linkedin"></i></a>
                <a href="javascript:void(0)" class="hover:text-white transition-colors"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <nav class="bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between h-20">
              <div class="flex items-center gap-8">
                <a href="javascript:void(0)" class="shrink-0 flex items-center gap-3">
                  <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                  </div>
                </a>
                <div class="hidden md:flex gap-1 h-full items-center">
                  <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">Solutions</a>
                  <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">Services</a>
                  <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">About</a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <button class="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm">
                  Contact Sales
                </button>
                <button class="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
        `,
        code: {
            html: `<!-- Corporate Professional Navbar -->
<div class="w-full flex flex-col font-sans">
    <div class="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex gap-4">
            <span><i class="fas fa-phone mr-2"></i>+1 (555) 123-4567</span>
            <span><i class="fas fa-envelope mr-2"></i>contact@corp.com</span>
        </div>
        <div class="flex gap-3">
            <a href="javascript:void(0)" class="hover:text-white transition-colors"><i class="fab fa-linkedin"></i></a>
            <a href="javascript:void(0)" class="hover:text-white transition-colors"><i class="fab fa-twitter"></i></a>
        </div>
        </div>
    </div>
    <nav class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-20">
            <div class="flex items-center gap-8">
            <a href="javascript:void(0)" class="shrink-0 flex items-center gap-3">
                <div class="relative w-full h-10">
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
            </a>
            <div class="hidden md:flex gap-1 h-full items-center">
                <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">Solutions</a>
                <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">Services</a>
                <a href="javascript:void(0)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">About</a>
            </div>
            </div>
            <div class="flex items-center gap-4">
            <button class="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm">
                Contact Sales
            </button>
            <button class="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Get Started
            </button>
            </div>
        </div>
        </div>
    </nav>
</div>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const CorporateNavbar = () => {
    return (
        <div className="w-full flex flex-col font-sans">
            <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-4">
                        <span><i className="fas fa-phone mr-2"></i>+1 (555) 123-4567</span>
                        <span><i className="fas fa-envelope mr-2"></i>contact@corp.com</span>
                    </div>
                    <div className="flex gap-3">
                        <a href="javascript:void(0)" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
                        <a href="javascript:void(0)" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center gap-8">
                            <a href="javascript:void(0)" className="shrink-0 flex items-center gap-3">
                                <div className="relative w-full h-10">
                                    <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                                </div>
                            </a>
                            <div className="hidden md:flex gap-1 h-full items-center">
                                {['Solutions', 'Services', 'About'].map((item) => (
                                    <a key={item} href="javascript:void(0)" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">{item}</a>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm">
                                Contact Sales
                            </button>
                            <button className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CorporateNavbar;`
        }
    },
    {
        id: 'nav-creative-portfolio',
        name: 'Creative Portfolio Nav',
        category: 'navigation',
        description: 'Bold, minimal navigation ideal for portfolios and creative agencies.',
        tags: ['navbar', 'creative', 'minimal', 'bold'],
        preview: `
      <nav class="w-full bg-black text-white p-6">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="javascript:void(0)" class="group relative">
            <div class="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
            <div class="relative flex items-center gap-3 bg-black rounded-lg p-2">
                <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
            </div>
          </a>
          
          <div class="flex items-center gap-12">
            <a href="javascript:void(0)" class="text-lg font-medium hover:text-pink-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Work</a>
            <a href="javascript:void(0)" class="text-lg font-medium hover:text-purple-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Studio</a>
            <a href="javascript:void(0)" class="text-lg font-medium hover:text-cyan-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Lab</a>
          </div>

          <button class="relative overflow-hidden px-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors group">
            <span class="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
            <div class="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Creative Portfolio Navbar -->
<nav class="w-full bg-black text-white p-6">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="javascript:void(0)" class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
        <div class="relative flex items-center gap-3 bg-black rounded-lg p-2">
            <div class="relative w-full h-10">
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
        </div>
        </a>
        
        <div class="flex items-center gap-12">
        <a href="javascript:void(0)" class="text-lg font-medium hover:text-pink-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Work</a>
        <a href="javascript:void(0)" class="text-lg font-medium hover:text-purple-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Studio</a>
        <a href="javascript:void(0)" class="text-lg font-medium hover:text-cyan-500 transition-colors duration-300 transform hover:-translate-y-1 inline-block">Lab</a>
        </div>

        <button class="relative overflow-hidden px-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors group">
        <span class="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
        <div class="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const CreativeNavbar = () => {
    return (
        <nav className="w-full bg-black text-white p-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="javascript:void(0)" className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                    <div className="relative flex items-center gap-3 bg-black rounded-lg p-2">
                         <div className="relative w-full h-10">
                            <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                        </div>
                    </div>
                </a>
                
                <div className="flex items-center gap-12">
                    {['Work', 'Studio', 'Lab'].map((item, i) => (
                        <a key={item} href="javascript:void(0)" className={\`text-lg font-medium transition-colors duration-300 transform hover:-translate-y-1 inline-block \${i === 0 ? 'hover:text-pink-500' : i === 1 ? 'hover:text-purple-500' : 'hover:text-cyan-500'}\`}>
                            {item}
                        </a>
                    ))}
                </div>

                <button className="relative overflow-hidden px-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors group">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                    <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </div>
        </nav>
    );
};

export default CreativeNavbar;`
        }
    },
    {
        id: 'nav-mobile-drawer',
        name: 'Mobile-Style Offcanvas',
        category: 'navigation',
        description: 'Navigation with a hamburger menu trigger and a smooth offcanvas drawer.',
        tags: ['navbar', 'mobile', 'drawer', 'offcanvas'],
        preview: `
      <nav class="w-full bg-white border-b border-gray-100 p-4 overflow-hidden relative">
        <div class="max-w-7xl mx-auto flex items-center justify-between relative z-20">
          <div class="flex items-center gap-3">
             <button class="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors group" onclick="document.getElementById('drawer-preview').classList.toggle('bg-black/50'); document.getElementById('drawer-content').classList.toggle('-translate-x-full');">
               <i class="fas fa-bars text-xl text-gray-700 group-hover:text-blue-600 transition-colors"></i>
             </button>
             <a href="javascript:void(0)" class="flex items-center gap-2">
                <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
             </a>
          </div>
          
          <div class="flex items-center gap-4">
             <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </button>
             <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
               <i class="far fa-bell"></i>
             </button>
             <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 cursor-pointer hover:scale-105 transition-transform">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" class="w-full h-full rounded-full bg-white" />
             </div>
          </div>
        </div>

        <!-- Overlay & Drawer Preview (Visual only) -->
        <div id="drawer-preview" class="fixed inset-0 top-[73px] bg-black/0 pointer-events-none transition-colors duration-500  flex">
           <div id="drawer-content" class="w-72 bg-white h-full shadow-2xl transform -translate-x-full transition-transform duration-500 flex flex-col p-6 pointer-events-auto border-r border-gray-100">
              <div class="space-y-6 z-100 ">
                 <div class="space-y-1 z-100">
                    <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu </p>
                    <a href="javascript:void(0)" class="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
                       <i class="fas fa-home w-6"></i> Home
                    </a>
                    <a href="javascript:void(0)" class="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                       <i class="fas fa-chart-pie w-6"></i> Dashboard
                    </a>
                    <a href="javascript:void(0)" class="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                       <i class="fas fa-comment-alt w-6"></i> Messages
                       <span class="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
                    </a>
                 </div>
                 
                 <div class="space-y-1">
                    <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</p>
                    <a href="javascript:void(0)" class="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                       <i class="fas fa-user w-6"></i> Profile
                    </a>
                    <a href="javascript:void(0)" class="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                       <i class="fas fa-cog w-6"></i> Preferences
                    </a>
                 </div>
              </div>
              <div class="mt-auto pt-6 border-t border-gray-100">
                 <button class="w-full py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                    <i class="fas fa-sign-out-alt"></i> Logout
                 </button>
              </div>
           </div>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Drawer Navbar -->
<nav class="w-full bg-white border-b border-gray-100 p-4 relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex items-center justify-between relative z-20">
        <div class="flex items-center gap-3">
             <button class="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors group">
               <i class="fas fa-bars text-xl text-gray-700 group-hover:text-blue-600 transition-colors"></i>
             </button>
             <a href="javascript:void(0)" class="flex items-center gap-2">
                <div class="relative w-full h-10">
                    <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
             </a>
        </div>
        
        <div class="flex items-center gap-4">
             <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </button>
             <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 cursor-pointer hover:scale-105 transition-transform">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" class="w-full h-full rounded-full bg-white" />
             </div>
        </div>
    </div>
</nav>`,
            react: `import React, { useState } from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const DrawerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100 p-4 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-20">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                        <i className={\`fas \${isOpen ? 'fa-times' : 'fa-bars'} text-xl text-gray-700 group-hover:text-blue-600 transition-colors\`}></i>
                    </button>
                    <a href="javascript:void(0)" className="flex items-center gap-2">
                        <div className="relative w-full h-10">
                            <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                        </div>
                    </a>
                </div>
                
                <div className="flex items-center gap-4">
                     <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                       <Search className="w-5 h-5" />
                     </button>
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 cursor-pointer hover:scale-105 transition-transform">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full bg-white" />
                     </div>
                </div>
            </div>

            {/* Backdrop & Drawer */}
            <div className={\`fixed inset-0 top-[73px] bg-black/50 transition-opacity duration-300 \${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}\`} onClick={() => setIsOpen(false)}>
                <div 
                    className={\`w-72 bg-white h-[calc(100vh-73px)] shadow-2xl transform transition-transform duration-300 flex flex-col p-6 \${isOpen ? 'translate-x-0' : '-translate-x-full'}\`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
                            <a href="javascript:void(0)" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
                               <i className="fas fa-home w-6"></i> Home
                            </a>
                            <a href="javascript:void(0)" className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                               <i className="fas fa-chart-pie w-6"></i> Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DrawerNavbar;`
        }
    },
    {
        id: 'nav-social-hub',
        name: 'Social Influencer Nav',
        category: 'navigation',
        description: 'Centered branding with prominent social links, perfect for creators.',
        tags: ['navbar', 'social', 'influencer', 'center'],
        preview: `
      <nav class="w-full bg-white border-b border-gray-100 py-6">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4 text-gray-500 order-2 md:order-1">
            <a href="javascript:void(0)" class="hover:text-pink-600 hover:scale-110 transition-all duration-300"><i class="fab fa-instagram text-xl"></i></a>
            <a href="javascript:void(0)" class="hover:text-black hover:scale-110 transition-all duration-300"><i class="fab fa-tiktok text-xl"></i></a>
            <a href="javascript:void(0)" class="hover:text-red-600 hover:scale-110 transition-all duration-300"><i class="fab fa-youtube text-xl"></i></a>
          </div>

          <a href="javascript:void(0)" class="flex flex-col items-center gap-2 group order-1 md:order-2">
            <div class="relative w-full h-12">
                <div class="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
            </div>
          </a>

          <div class="flex items-center gap-6 order-3">
             <a href="javascript:void(0)" class="text-sm uppercase tracking-widest hover:text-pink-600 transition-colors relative group">
                Journal
                <span class="absolute -bottom-1 left-1/2 w-0 h-px bg-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
             </a>
             <a href="javascript:void(0)" class="text-sm uppercase tracking-widest hover:text-pink-600 transition-colors relative group">
                Travel
                <span class="absolute -bottom-1 left-1/2 w-0 h-px bg-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
             </a>
             <button class="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors duration-300">Subscribe</button>
          </div>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Social Influencer Navbar -->
<nav class="w-full bg-white border-b border-gray-100 py-6">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4 text-gray-500 order-2 md:order-1">
            <a href="javascript:void(0)" class="hover:text-pink-600 hover:scale-110 transition-all duration-300"><i class="fab fa-instagram text-xl"></i></a>
            <a href="javascript:void(0)" class="hover:text-black hover:scale-110 transition-all duration-300"><i class="fab fa-tiktok text-xl"></i></a>
            <a href="javascript:void(0)" class="hover:text-red-600 hover:scale-110 transition-all duration-300"><i class="fab fa-youtube text-xl"></i></a>
        </div>

        <a href="javascript:void(0)" class="flex flex-col items-center gap-2 group order-1 md:order-2">
            <div class="relative w-12 h-12">
                <div class="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div class="relative w-full h-10">
                    <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
            </div>
        </a>

        <div class="flex items-center gap-6 order-3">
            <a href="javascript:void(0)" class="text-sm uppercase tracking-widest hover:text-pink-600 transition-colors relative group">
            Journal
            <span class="absolute -bottom-1 left-1/2 w-0 h-px bg-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <a href="javascript:void(0)" class="text-sm uppercase tracking-widest hover:text-pink-600 transition-colors relative group">
            Travel
            <span class="absolute -bottom-1 left-1/2 w-0 h-px bg-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <button class="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors duration-300">Subscribe</button>
        </div>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const SocialNavbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-gray-500 order-2 md:order-1">
                    <a href="javascript:void(0)" className="hover:text-pink-600 hover:scale-110 transition-all duration-300"><i className="fab fa-instagram text-xl"></i></a>
                    <a href="javascript:void(0)" className="hover:text-black hover:scale-110 transition-all duration-300"><i className="fab fa-tiktok text-xl"></i></a>
                    <a href="javascript:void(0)" className="hover:text-red-600 hover:scale-110 transition-all duration-300"><i className="fab fa-youtube text-xl"></i></a>
                </div>

                <a href="javascript:void(0)" className="flex flex-col items-center gap-2 group order-1 md:order-2">
                    <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative w-full h-10">
                             <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                        </div>
                    </div>
                </a>

                <div className="flex items-center gap-6 order-3">
                    {['Journal', 'Travel'].map(item => (
                        <a key={item} href="javascript:void(0)" className="text-sm uppercase tracking-widest hover:text-pink-600 transition-colors relative group">
                            {item}
                            <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                        </a>
                    ))}
                    <button className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors duration-300">Subscribe</button>
                </div>
            </div>
        </nav>
    );
};

export default SocialNavbar;`
        }
    },
    {
        id: 'nav-ecommerce-sticky',
        name: 'E-commerce Sticky',
        category: 'navigation',
        description: 'Sticky top navigation with search focus and cart indicators.',
        tags: ['navbar', 'ecommerce', 'sticky', 'shop'],
        preview: `
      <div class="relative h-24 bg-gray-100 flex items-start justify-center overflow-hidden">
        <nav class="w-full bg-white shadow-md sticky top-0 z-50">
          <div class="bg-gray-900 text-white text-[10px] py-1 text-center font-bold tracking-widest uppercase">
             Free Shipping on Orders over $50
          </div>
          <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-8">
             <a href="javascript:void(0)" class="flex items-center gap-2 shrink-0">
                <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
             </a>

             <div class="flex-1 max-w-xl hidden md:block">
                <div class="relative group">
                   <input type="text" placeholder="Search for products..." class="w-full bg-gray-100 border-none rounded-full py-2.5 px-6 focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 text-black" />
                   <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                   </button>
                </div>
             </div>

             <div class="flex items-center gap-6">
                <a href="javascript:void(0)" class="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group">
                   <i class="far fa-heart text-lg group-hover:scale-110 transition-transform"></i>
                   <span>Wishlist</span>
                </a>
                <a href="javascript:void(0)" class="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group relative">
                   <div class="relative">
                      <i class="fas fa-shopping-bag text-lg group-hover:scale-110 transition-transform"></i>
                      <span class="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                   </div>
                   <span>Cart</span>
                </a>
             </div>
          </div>
          <!-- Categories Bar -->
          <div class="border-t border-gray-100 py-2 hidden md:block">
             <div class="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm font-medium text-gray-600">
                <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">New Arrivals</a>
                <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Men</a>
                <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Women</a>
                <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Accessories</a>
                <a href="javascript:void(0)" class="text-red-600 hover:text-red-700 hover:underline underline-offset-4 decoration-2">Sale</a>
             </div>
          </div>
        </nav>
      </div>
        `,
        code: {
            html: `<!-- E-commerce Navbar -->
<nav class="w-full bg-white shadow-md sticky top-0 z-50">
    <div class="bg-gray-900 text-white text-[10px] py-1 text-center font-bold tracking-widest uppercase">
        Free Shipping on Orders over $50
    </div>
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-8">
        <a href="javascript:void(0)" class="flex items-center gap-2 shrink-0">
            <div class="relative w-full h-10">
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
        </a>

        <div class="flex-1 max-w-xl hidden md:block">
            <div class="relative group">
                <input type="text" placeholder="Search for products..." class="w-full bg-gray-100 border-none rounded-full py-2.5 px-6 focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300" />
                <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </button>
            </div>
        </div>

        <div class="flex items-center gap-6">
            <a href="javascript:void(0)" class="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group">
                <i class="far fa-heart text-lg group-hover:scale-110 transition-transform"></i>
                <span>Wishlist</span>
            </a>
            <a href="javascript:void(0)" class="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group relative">
                <div class="relative">
                    <i class="fas fa-shopping-bag text-lg group-hover:scale-110 transition-transform"></i>
                    <span class="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                </div>
                <span>Cart</span>
            </a>
        </div>
    </div>
    <div class="border-t border-gray-100 py-2 hidden md:block">
        <div class="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm font-medium text-gray-600">
        <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">New Arrivals</a>
        <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Men</a>
        <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Women</a>
        <a href="javascript:void(0)" class="hover:text-black hover:underline underline-offset-4 decoration-2">Accessories</a>
        <a href="javascript:void(0)" class="text-red-600 hover:text-red-700 hover:underline underline-offset-4 decoration-2">Sale</a>
        </div>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const EcommerceNavbar = () => {
    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="bg-gray-900 text-white text-[10px] py-1 text-center font-bold tracking-widest uppercase">
                Free Shipping on Orders over $50
            </div>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-8">
                <a href="javascript:void(0)" className="flex items-center gap-2 shrink-0">
                    <div className="relative w-full h-10">
                        <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                    </div>
                </a>

                <div className="flex-1 max-w-xl hidden md:block">
                    <div className="relative group">
                        <input type="text" placeholder="Search for products..." className="w-full bg-gray-100 border-none rounded-full py-2.5 px-6 focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300" />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-black transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <a href="javascript:void(0)" className="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group">
                        <i className="far fa-heart text-lg group-hover:scale-110 transition-transform"></i>
                        <span>Wishlist</span>
                    </a>
                    <a href="javascript:void(0)" className="text-gray-600 hover:text-black transition-colors flex flex-col items-center text-xs gap-1 group relative">
                        <div className="relative">
                            <i className="fas fa-shopping-bag text-lg group-hover:scale-110 transition-transform"></i>
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </div>
                        <span>Cart</span>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-100 py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm font-medium text-gray-600">
                    <a href="javascript:void(0)" className="hover:text-black hover:underline underline-offset-4 decoration-2">New Arrivals</a>
                    <a href="javascript:void(0)" className="hover:text-black hover:underline underline-offset-4 decoration-2">Men</a>
                    <a href="javascript:void(0)" className="hover:text-black hover:underline underline-offset-4 decoration-2">Women</a>
                    <a href="javascript:void(0)" className="hover:text-black hover:underline underline-offset-4 decoration-2">Accessories</a>
                    <a href="javascript:void(0)" className="text-red-600 hover:text-red-700 hover:underline underline-offset-4 decoration-2">Sale</a>
                </div>
            </div>
        </nav>
    );
};

export default EcommerceNavbar;`
        }
    },
    {
        id: 'nav-dark-gradient',
        name: 'Dark Mode Gradient',
        category: 'navigation',
        description: 'Sleek dark navigation with colorful gradient accents.',
        tags: ['navbar', 'dark', 'gradient', 'modern'],
        preview: `
      <nav class="w-full bg-gray-950 border-b border-gray-800 p-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div class="max-w-7xl mx-auto flex items-center justify-between relative z-10">
           <a href="javascript:void(0)" class="flex items-center gap-3 group">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                 <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
              </div>
           </a>

           <div class="hidden md:flex items-center bg-gray-900/50 rounded-full px-2 py-1 border border-gray-800 backdrop-blur-sm">
              <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Platform</a>
              <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Changelog</a>
              <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Docs</a>
           </div>

           <div class="flex items-center gap-4">
              <a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Sign in</a>
              <button class="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                 Start Building
              </button>
           </div>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Dark Gradient Navbar -->
<nav class="w-full bg-gray-950 border-b border-gray-800 p-4 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    <div class="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <a href="javascript:void(0)" class="flex items-center gap-3 group">
        <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <div class="relative w-full h-10">
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
        </div>
        </a>

        <div class="hidden md:flex items-center bg-gray-900/50 rounded-full px-2 py-1 border border-gray-800 backdrop-blur-sm">
        <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Platform</a>
        <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Changelog</a>
        <a href="javascript:void(0)" class="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Docs</a>
        </div>

        <div class="flex items-center gap-4">
        <a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Sign in</a>
        <button class="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Start Building
        </button>
        </div>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const DarkNavbar = () => {
    return (
        <nav className="w-full bg-gray-950 border-b border-gray-800 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                <a href="javascript:void(0)" className="flex items-center gap-3 group">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <div className="relative w-full h-10">
                            <img src="${Logo}" alt="Logo" className="relative w-full h-full object-cover z-10" />
                        </div>
                    </div>
                </a>

                <div className="hidden md:flex items-center bg-gray-900/50 rounded-full px-2 py-1 border border-gray-800 backdrop-blur-sm">
                    {['Platform', 'Changelog', 'Docs'].map(item => (
                        <a key={item} href="javascript:void(0)" className="px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">{item}</a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="javascript:void(0)" className="text-gray-400 hover:text-white transition-colors">Sign in</a>
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        Start Building
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default DarkNavbar;`
        }
    },
    {
        id: 'nav-magic-line',
        name: 'Interactive Underline',
        category: 'navigation',
        description: 'Navigation with a magic sliding underline effect.',
        tags: ['navbar', 'animation', 'underline', 'interactive'],
        preview: `
      <nav class="w-full bg-white p-6 shadow-sm">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
           <a href="javascript:void(0)" class="font-bold text-2xl tracking-tighter flex items-center gap-2">
                <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
           </a>
           
           <div class="relative group">
              <div class="flex items-center gap-8 relative z-10">
                 <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item1">Products</a>
                 <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item2">Solutions</a>
                 <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item3">Resources</a>
                 <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item4">Pricing</a>
              </div>
              <div class="absolute bottom-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-out opacity-0 peer-hover/item1:opacity-100 peer-hover/item1:w-[65px] peer-hover/item1:translate-x-0
                          peer-hover/item2:opacity-100 peer-hover/item2:w-[70px] peer-hover/item2:translate-x-[97px]
                          peer-hover/item3:opacity-100 peer-hover/item3:w-[75px] peer-hover/item3:translate-x-[199px]
                          peer-hover/item4:opacity-100 peer-hover/item4:w-[50px] peer-hover/item4:translate-x-[306px]"></div>
           </div>

           <button class="px-6 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
              Get Demo
           </button>
        </div>
      </nav>
        `,
        code: {
            html: `<!-- Magic Line Navbar -->
<nav class="w-full bg-white p-6 shadow-sm">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
        <a href="javascript:void(0)" class="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <div class="relative w-full h-10">
                <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
            </div>
        </a>
        
        <div class="relative group">
            <div class="flex items-center gap-8 relative z-10">
                <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item1">Products</a>
                <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item2">Solutions</a>
                <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item3">Resources</a>
                <a href="javascript:void(0)" class="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item4">Pricing</a>
            </div>
            <!-- Sliding line -->
            <div class="absolute bottom-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-out opacity-0 
                        peer-hover/item1:opacity-100 peer-hover/item1:w-[65px] peer-hover/item1:translate-x-0
                        peer-hover/item2:opacity-100 peer-hover/item2:w-[70px] peer-hover/item2:translate-x-[97px]
                        peer-hover/item3:opacity-100 peer-hover/item3:w-[75px] peer-hover/item3:translate-x-[199px]
                        peer-hover/item4:opacity-100 peer-hover/item4:w-[50px] peer-hover/item4:translate-x-[306px]"></div>
        </div>

        <button class="px-6 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
            Get Demo
        </button>
    </div>
</nav>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const MagicNavbar = () => {
    return (
        <nav className="w-full bg-white p-6 shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <a href="javascript:void(0)" className="font-bold text-2xl tracking-tighter flex items-center gap-2">
                    <div className="relative w-full h-10">
                        <img src={Logo} alt="Logo" className="relative w-full h-full object-cover z-10" />
                    </div>
                </a>
                
                <div className="relative group">
                    <div className="flex items-center gap-8 relative z-10">
                        <a href="javascript:void(0)" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item1">Products</a>
                        <a href="javascript:void(0)" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item2">Solutions</a>
                        <a href="javascript:void(0)" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item3">Resources</a>
                        <a href="javascript:void(0)" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors peer/item4">Pricing</a>
                    </div>
                    {/* Note: In a real React app, you might use precise measurements relative to refs. 
                        This Tailwind example uses arbitrary values for the specific layout showing the concept. */}
                    <div className="absolute bottom-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-out opacity-0 
                                  peer-hover/item1:opacity-100 peer-hover/item1:w-[65px] peer-hover/item1:translate-x-0
                                  peer-hover/item2:opacity-100 peer-hover/item2:w-[70px] peer-hover/item2:translate-x-[97px]
                                  peer-hover/item3:opacity-100 peer-hover/item3:w-[75px] peer-hover/item3:translate-x-[199px]
                                  peer-hover/item4:opacity-100 peer-hover/item4:w-[50px] peer-hover/item4:translate-x-[306px]"></div>
                </div>

                <button className="px-6 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    Get Demo
                </button>
            </div>
        </nav>
    );
};

export default MagicNavbar;`
        }
    },
    {
        id: 'nav-glass-stacked',
        name: 'Glass Stacked Nav',
        category: 'navigation',
        description: 'Double-decker navigation with glassmorphism for a layered look.',
        tags: ['navbar', 'glass', 'double', 'modern'],
        preview: `
      <div class="w-full bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col gap-4">
         <nav class="mx-auto w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex justify-between items-center text-white text-sm">
            <div class="px-4 opacity-70">Welcome to our platform</div>
            <div class="flex gap-4 px-4">
               <a href="javascript:void(0)" class="opacity-70 hover:opacity-100 transition-opacity">Support</a>
               <a href="javascript:void(0)" class="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
            </div>
         </nav>
         
         <nav class="mx-auto w-full max-w-5xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 flex justify-between items-center text-white shadow-xl">
            <a href="javascript:void(0)" class="flex items-center gap-3">
               <div class="bg-white p-1.5 rounded-full">
                  <div class="relative w-full h-10">
                    <img src="${Logo}" alt="Logo" class="relative w-full h-full object-cover z-10" />
                  </div>
               </div>
            </a>
            
            <div class="hidden md:flex items-center bg-black/10 rounded-full p-1">
               <a href="javascript:void(0)" class="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Home</a>
               <a href="javascript:void(0)" class="px-5 py-2 rounded-full bg-white text-indigo-600 shadow-sm">Dashboard</a>
               <a href="javascript:void(0)" class="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Projects</a>
            </div>
            
            <div class="flex items-center gap-3">
               <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
               <span class="text-sm font-medium">Online</span>
            </div>
         </nav>
      </div>
        `,
        code: {
            html: `<!-- Glass Stacked Navbar -->
<div class="w-full bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col gap-4">
    <!-- Top thin bar -->
    <nav class="mx-auto w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex justify-between items-center text-white text-sm">
        <div class="px-4 opacity-70">Welcome to our platform</div>
        <div class="flex gap-4 px-4">
            <a href="javascript:void(0)" class="opacity-70 hover:opacity-100 transition-opacity">Support</a>
            <a href="javascript:void(0)" class="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
        </div>
    </nav>
    <!-- Main Navbar -->
    <nav class="mx-auto w-full max-w-5xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 flex justify-between items-center text-white shadow-xl">
        <a href="javascript:void(0)" class="flex items-center gap-3">
            <div class="bg-white p-1.5 rounded-full">
                <div class="relative w-full h-10">
                    <img src="assets/NewLogo.png" alt="Logo" class="relative w-full h-full object-cover z-10" />
                </div>
            </div>
        </a>
        
        <div class="hidden md:flex items-center bg-black/10 rounded-full p-1">
            <a href="javascript:void(0)" class="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Home</a>
            <a href="javascript:void(0)" class="px-5 py-2 rounded-full bg-white text-indigo-600 shadow-sm">Dashboard</a>
            <a href="javascript:void(0)" class="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Projects</a>
        </div>
        
        <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-sm font-medium">Online</span>
        </div>
    </nav>
</div>`,
            react: `import React from 'react';
import Logo from '../assets/NewLogo.png';
import { Search } from 'lucide-react';

const GlassStackedNavbar = () => {
    return (
        <div className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col gap-4">
            <nav className="mx-auto w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex justify-between items-center text-white text-sm">
                <div className="px-4 opacity-70">Welcome to our platform</div>
                <div className="flex gap-4 px-4">
                    <a href="javascript:void(0)" className="opacity-70 hover:opacity-100 transition-opacity">Support</a>
                    <a href="javascript:void(0)" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
                </div>
            </nav>
            
            <nav className="mx-auto w-full max-w-5xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 flex justify-between items-center text-white shadow-xl">
                <a href="javascript:void(0)" className="flex items-center gap-3">
                    <div className="bg-white p-1.5 rounded-full">
                        <div className="relative w-full h-10">
                            <img src={Logo} alt="Logo" className="relative w-full h-full object-cover z-10" />
                        </div>
                    </div>
                </a>
                
                <div className="hidden md:flex items-center bg-black/10 rounded-full p-1">
                    <a href="javascript:void(0)" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Home</a>
                    <a href="javascript:void(0)" className="px-5 py-2 rounded-full bg-white text-indigo-600 shadow-sm">Dashboard</a>
                    <a href="javascript:void(0)" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Projects</a>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-medium">Online</span>
                </div>
            </nav>
        </div>
    );
};

export default GlassStackedNavbar;`
        }
    }
];
