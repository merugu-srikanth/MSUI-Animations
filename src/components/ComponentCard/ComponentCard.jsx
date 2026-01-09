import React, { useState, useEffect } from 'react';
import CodeViewer from '../CodeViewer/CodeViewer';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import { Code, Heart, X, ChevronDown, Star, Copy, Check, Maximize2 } from 'lucide-react';

const PreviewSkeleton = () => (
  <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-black/20">
    <div className="w-8 h-8 rounded-full border-2 border-brand-primary border-t-transparent animate-spin"></div>
  </div>
);

const CodePopup = ({ component, onClose, isVisible }) => {
  const [codeType, setCodeType] = useState('react');
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const codeOptions = [
    { id: "react", label: "React", icon: "⚛️" },
    { id: "tailwind", label: "Tailwind", icon: "🎨" },
    { id: "html", label: "HTML/CSS", icon: "📄" },
  ];

  const handleCopy = () => {
    const code = codeType === 'react'
      ? component.code.react
      : codeType === 'tailwind'
        ? (component.code.tailwind || component.code.html)
        : `${component.code.html_plain || '<!-- No HTML -->'}\n<style>${component.code.css || ''}</style>`;

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    
    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <>
      {/* Animated Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${isVisible && !isClosing ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-0 pointer-events-none'}`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(250, 133, 32, 0.15) 0%, rgba(18, 18, 18, 0.9) 100%)',
        }}
        onClick={handleClose}
      >
        {/* Animated glow pulses */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-brand-primary/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Main Popup Container with macOS-style animation */}
     <div
  className={`fixed z-50 w-[95vw] h-[95vh] max-w-6xl transition-all duration-500 ease-out
    ${isVisible && !isClosing
      ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
      : 'opacity-0 translate-x-24 translate-y-24 scale-95 pointer-events-none'
    }`
  }
  style={{
    right: isVisible ? '50%' : '1.5rem',
    bottom: isVisible ? '50%' : '1.5rem',
    transform: isVisible && !isClosing
      ? 'translate(50%, 50%)'
      : 'translate(0, 0)',
  }}
>

        {/* Glow effect behind card */}
        <div className={`absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 blur-2xl rounded-3xl transition-opacity duration-500 ${isVisible ? 'opacity-50' : 'opacity-0'}`} />
        
        {/* Main Card */}
        <div className="relative h-full rounded-xl overflow-hidden border border-white/20 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl shadow-black/50">
          
          {/* Header - macOS style */}
          <div className="px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-white/10">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors" 
                onClick={handleClose}
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="flex items-center justify-between">
              {/* Left: Title */}
              <div>
                <h3 className="text-lg font-semibold text-white">{component.name}</h3>
                <p className="text-sm text-gray-400">{component.category} Component</p>
              </div>

              {/* Center: Code Type Tabs */}
              <div className="flex gap-1 rounded-lg bg-white/5 p-1 border border-white/10">
                {codeOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setCodeType(opt.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-300 ${codeType === opt.id
                        ? 'bg-gradient-to-r from-brand-primary to-brand-primary/80 text-white shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <span className="text-xs">{opt.icon}</span>
                    <span className="text-xs font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-lg transition-all duration-300 ${isFavorite
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'text-gray-400 hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star size={18} className={isFavorite ? "fill-current" : ""} />
                </button>

                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${copied
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>

                <button
  onClick={handleClose}
  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
  title="Close"
>
  <X size={18} />
</button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="h-[calc(100%-80px)]  p-5">
            {/* Code Viewer */}
            <div className="h-full rounded-lg  overflow-hidden border border-white/10 bg-black/80">
              <div className="h-full mb-3">
                <CodeViewer
                  code={
                    codeType === 'react' ? component.code.react :
                      codeType === 'tailwind' ? (component.code.tailwind || component.code.html) :
                        `${component.code.html_plain || '<!-- No HTML -->'}\n<style>${component.code.css || ''}</style>`
                  }
                  language={codeType === 'react' ? 'jsx' : 'html'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ComponentCard = ({ component: initialComponent }) => {
  const [component, setComponent] = useState(initialComponent);
  const [isPreviewLoading, setIsPreviewLoading] = useState(true);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [dummyLikes] = useState(() => Math.floor(Math.random() * (99 - 40 + 1)) + 40);
  const displayLikes = component.likes > 0 ? component.likes : dummyLikes;
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpeningPopup, setIsOpeningPopup] = useState(false);

  useEffect(() => {
    setComponent(initialComponent);
  }, [initialComponent]);

  const handleLike = async (e) => {
    e.stopPropagation();
    if (liked) return;
    
    setLiked(true);
    setComponent(prev => ({ ...prev, likes: (prev.likes || displayLikes) + 1 }));
  };

  const openCodePopup = (e) => {
    e.stopPropagation();
    setIsOpeningPopup(true);
    setShowCodePopup(true);
    
    // Reset opening state after animation completes
    setTimeout(() => setIsOpeningPopup(false), 500);
  };

  return (
    <>
      {/* Main Card */}
      <div
        className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-secondary/30 to-brand-dark/80 transition-all duration-500 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`} />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col flex-1">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-brand-dark/50 to-transparent">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-xs font-semibold text-brand-primary border border-brand-primary/20 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {component.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors">
                  {component.name}
                </h3>
              </div>

              <button
                onClick={openCodePopup}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-brand-primary/30 transition-all duration-300"
              >
                <Code size={16} />
                <span className="text-sm font-medium">View Code</span>
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-3 line-clamp-2">
              {component.description || 'A beautifully crafted component with smooth animations'}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {component.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-brand-primary/30 hover:text-white transition-all duration-300"
                >
                  #{tag}
                </span>
              ))}
              {component.tags?.length > 2 && (
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
                  +{component.tags.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Preview Area */}
          <div className={`relative flex-1 bg-[#0a0a0a] ${component.category === 'saas' || component.category === 'analytics' || component.category === 'finance'
              ? 'min-h-[350px]'
              : 'min-h-[250px]'
            }`}>
            {/* Preview Content */}
            <div className="relative h-full p-4">
              <PreviewRenderer
                code={component.preview}
                onLoad={() => setIsPreviewLoading(false)}
              />
            </div>

            {/* Preview Overlay Actions */}
            <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <div className="flex items-center justify-between">
                <button
                  onClick={openCodePopup}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-primary/80 text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all duration-300"
                >
                  <Code size={16} />
                  <span className="text-sm font-medium">View Code</span>
                </button>

                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${liked
                      ? 'bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-400 border border-rose-500/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                >
                  <Heart size={16} className={liked ? 'fill-current' : ''} />
                  <span className="text-sm font-medium">{displayLikes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Glow */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
      </div>

      {/* macOS Code Popup */}
      <CodePopup 
        component={component} 
        onClose={() => setShowCodePopup(false)} 
        isVisible={showCodePopup} 
      />
    </>
  );
};

export default ComponentCard;