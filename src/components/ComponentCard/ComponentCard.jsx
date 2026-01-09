import React, { useState, useEffect } from 'react';
import CodeViewer from '../CodeViewer/CodeViewer';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import { Code, Heart, X, ChevronDown, Star, Copy, Check, Maximize2, Monitor, Tablet, Smartphone } from 'lucide-react';

const PreviewSkeleton = () => (
  <div className="w-full  min-h-[220px] flex items-center justify-center bg-black/20">
    <div className="w-8 h-8 rounded-full border-2 border-brand-primary border-t-transparent animate-spin"></div>
  </div>
);

const CodePopup = ({ component, onClose, isVisible, displayLikes }) => {
  const [codeType, setCodeType] = useState('react');
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const codeOptions = [
    { id: "react", label: "React", icon: "⚛️" },
    { id: "tailwind", label: "Tailwind", icon: "🎨" },
    // { id: "html", label: "HTML/CSS", icon: "📄" },
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
        className={`fixed z-50 w-[95vw] h-[95vh] bg-red-600 overflow-hidden  rounded-2xl max-w-6xl transition-all duration-500 ease-out
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
        <div className="relative rounded-xl overflow-hidden border border-white/20 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl shadow-black/50">

          {/* Header - macOS style */}
          <div className="px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-white/10">
            {/* macOS Traffic Lights */}
            <div className='flex items-center justify-between'> <div className="flex items-center mt-3 gap-2 mb-3">
              <div
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"
                onClick={handleClose}
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

              <div className="flex items-center md:hidden block gap-2">





                {/* <Heart size={16} className={liked ? 'fill-current' : ''} /> */}



                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg text-white bg-amber-500 p-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div></div>


            <div className="flex items-center justify-between">
              {/* Left: Title */}
              <div className='flex items-center md:flex-row flex-col gap-2'>
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

              </div>

              {/* Right: Actions */}
              <div className='md:block hidden'>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-lg transition-all duration-300 ${isFavorite
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'text-gray-400 hover:text-yellow-400 hover:bg-white/5'
                      }`}
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    <span className="text-sm text-white font-medium">{displayLikes}</span>

                    <Star size={18} className={isFavorite ? "fill-current" : ""} />
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
          </div>

          {/* Content Area */}
          <div className="h-full p-2">
            {/* Code Viewer */}
            <div className=" rounded-lg h-[76vh] overflow-auto border border-white/10 bg-black/80">
              <div className=" mb-3">
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
  const [device, setDevice] = useState('desktop');

  const { category, preview } = component;

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
    setTimeout(() => setIsOpeningPopup(false), 500);
  };

  // --- Layout Logic ---
  const isPageCategory = ['dashboard', 'hero', 'web', 'navigation'].includes(category);
  const isCardCategory = category === 'card';
  const isStandardCategory = ['button', 'badge'].includes(category); // "Inputs" removed

  let containerClasses = "flex flex-col w-full relative transition-all duration-300";
  // Page View: Full height, or allow it to be defined by grid? User said "take height full screen with scrolable".
  // Note: inside a grid, "h-screen" might break layout. safely use min-h-[600px] or h-[80vh].
  if (isPageCategory) {
    containerClasses += " h-[80vh] min-h-[600px] col-span-full";
  } else if (isCardCategory) {
    containerClasses += " aspect-[3/4]";
  } else if (isStandardCategory) {
    containerClasses += " aspect-square";
  } else {
    // Default fallback
    containerClasses += " aspect-video";
  }

  // --- Coming Soon Placeholder ---
  const ComingSoonPlaceholder = () => (
    <div className="flex flex-col items-center justify-center h-full w-full text-center p-8">
      <div className="w-20 h-20 mb-6 rounded-full bg-linear-to-r from-brand-primary/20 to-purple-600/20 flex items-center justify-center animate-pulse">
        <Monitor className="w-10 h-10 text-brand-primary opacity-50" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Coming Soon</h3>
      <p className="text-gray-400 text-sm max-w-xs mx-auto">
        We are crafting this {category} template. Stay tuned!
      </p>
    </div>
  );

  return (
    <>
      <div
        className={`group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 ${containerClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* --- Card Content --- */}
        <div className={`relative flex flex-col flex-1 ${isPageCategory ? 'overflow-hidden' : ''}`}>

          {/* Device Controls (Page View Only) */}
          {isPageCategory && isHovered && (
            <div className="absolute top-4 right-4 z-30 flex bg-black/80 backdrop-blur-md rounded-lg p-1 border border-white/10 shadow-lg">
              <button onClick={(e) => { e.stopPropagation(); setDevice('desktop'); }} className={`p-2 rounded-md transition-colors ${device === 'desktop' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}><Monitor size={14} /></button>
              <button onClick={(e) => { e.stopPropagation(); setDevice('tablet'); }} className={`p-2 rounded-md transition-colors ${device === 'tablet' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}><Tablet size={14} /></button>
              <button onClick={(e) => { e.stopPropagation(); setDevice('mobile'); }} className={`p-2 rounded-md transition-colors ${device === 'mobile' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}><Smartphone size={14} /></button>
            </div>
          )}

          {/* --- Preview Area --- */}
          {/* Note: User requested "Main Cards must be in white background". But Preview Area usually needs dark/grid for contrast if components are dark-themed. 
              If I make preview area white, text-white components vanish. 
              Compromise: Use the Grid Pattern with a specific background color that works for the component. 
              Most existing components (buttons) are designed to standout on dark/grid.
              I will keep the dark grid for preview, but the OUTER container is White.
          */}
          <div className={`relative w-full flex-1 bg-[#1a1a1a] bg-grid-pattern transition-colors duration-300 group-hover:bg-[#0f0f10] overflow-hidden flex items-center justify-center`}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.4]"></div>

            {/* Content Container */}
            <div className={`relative z-10 transition-all duration-500 flex items-center justify-center 
                ${isPageCategory ? 'h-full w-full overflow-y-auto no-scrollbar' : 'w-full'}
                ${device === 'mobile' ? 'max-w-[375px] border-x border-white/10 bg-black' : device === 'tablet' ? 'max-w-[768px] border-x border-white/10 bg-black' : 'w-full'}
            `}>
              {preview === 'COMING_SOON' ? (
                <ComingSoonPlaceholder />
              ) : (
                <div className={`w-full flex items-center justify-center ${isStandardCategory ? 'p-6' : 'p-0'} ${isPageCategory ? 'min-h-full items-start pt-0' : ''}`}>
                  <PreviewRenderer
                    code={component.preview}
                    onLoad={() => setIsPreviewLoading(false)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* --- Footer (Dark) --- */}
          <div className="relative p-4 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between shrink-0 z-20">
            <div>
              <h3 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">{component.name}</h3>
              <p className="text-xs text-gray-500 font-medium">{component.category}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`p-2 rounded-lg transition-all duration-300 ${liked
                  ? 'text-rose-500 bg-rose-500/10'
                  : 'text-gray-500 hover:text-rose-400 hover:bg-white/5'
                  }`}
              >
                <Heart size={18} className={liked ? 'fill-current' : ''} />
              </button>

              <button
                onClick={openCodePopup}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-brand-primary hover:text-white text-gray-300 border border-white/10 hover:border-brand-primary transition-all duration-300 group/btn"
              >
                <Code size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <CodePopup
        component={component}
        onClose={() => setShowCodePopup(false)}
        isVisible={showCodePopup}
        displayLikes={displayLikes}
      />
    </>
  );
};

export default ComponentCard;