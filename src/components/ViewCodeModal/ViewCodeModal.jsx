import React, { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ViewCodeModal = ({ isOpen, onClose, code }) => {


  const [activeTab, setActiveTab] = useState(Object.keys(code)[0]);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isOpen && code && Object.keys(code).length > 0) {
      // Ensure we have a valid tab selected, preferring the current one if valid, otherwise the first one
      setActiveTab(prev => code[prev] ? prev : Object.keys(code)[0]);

      // Random count logic
      const randomCount = Math.floor(Math.random() * (300 - 40 + 1)) + 40;
      setCount(randomCount);
    }
  }, [isOpen, code]);


  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };





  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6
                 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl h-[85vh]
                   bg-[#1e1e1e]
                   rounded-2xl shadow-2xl border border-white/10
                   flex flex-col overflow-hidden"
      >
        {/* ================= HEADER (macOS) ================= */}
        <div className="relative flex items-center px-4 py-3 bg-[#252526] border-b border-white/10">

          {/* Traffic Lights */}
          <div className="flex items-center gap-2 group">
            {/* Close */}
            <button
              onClick={onClose}
              className="relative w-3 h-3 rounded-full bg-red-500 flex items-center justify-center"
            >
              <X
                size={8}
                className="absolute opacity-0 group-hover:opacity-100 text-black transition"
              />
            </button>

            {/* Minimize */}
            <span className="w-3 h-3 rounded-full bg-yellow-400" />

            {/* Fullscreen */}
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide">
              Component Code
            </span>
          </div>

          {/* Tabs */}
          <div className="ml-auto flex bg-[#1e1e1e] rounded-lg p-1 border border-white/5">
            {Object.keys(code).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition
                  ${activeTab === type
                    ? 'bg-brand-primary text-white shadow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative flex-1 overflow-hidden group">

          {/* Copy Button */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-2
                         bg-white/10 hover:bg-white/20
                         rounded-lg border border-white/10
                         backdrop-blur text-xs sm:text-sm text-white"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" /> Copied
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy
                </>
              )}
            </button>
          </div>

          {/* Code */}
          <div className="h-full overflow-auto custom-scrollbar">
            <SyntaxHighlighter
              language={activeTab === 'react' ? 'jsx' : 'html'}
              style={vscDarkPlus}
              showLineNumbers
              customStyle={{
                background: 'transparent',
                margin: 0,
                padding: '1.5rem',
                fontSize: '13px',
                lineHeight: '1.6',
              }}
            >
              {code[activeTab]}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="flex items-center justify-between px-4 py-2
                        bg-[#252526] border-t border-white/10 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Ready to use
          </div>
          <span className="hidden sm:block">
            {count}+ developers copied this
          </span>        </div>
      </div>
    </div>
  );
};

export default ViewCodeModal;
