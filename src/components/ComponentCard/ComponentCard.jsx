import React, { useState, useEffect } from 'react';
import CodeViewer from '../CodeViewer/CodeViewer';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import { Code, Eye, Heart } from 'lucide-react';
import axios from 'axios';

const ComponentCard = ({ component: initialComponent }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [codeType, setCodeType] = useState('react');
  const [component, setComponent] = useState(initialComponent);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [dummyLikes] = useState(() => Math.floor(Math.random() * (99 - 40 + 1)) + 40);
  const displayLikes = component.likes > 0 ? component.likes : dummyLikes;
  const [liked, setLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const codeOptions = [
    { id: "react", label: "React + Tailwind" },
    { id: "tailwind", label: "Tailwind HTML" },
    { id: "html", label: "Plain HTML + CSS" },
  ];

  /* ✅ CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const close = () => setIsDropdownOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    setComponent(initialComponent);
  }, [initialComponent]);

  const handleLike = async () => {
    if (liked || isLiking) return;
    setIsLiking(true);
    try {
      setLiked(true);
      const res = await axios.post(
        `http://localhost:5000/api/components/${component._id}/like`,
        { currentCount: displayLikes }
      );
      setComponent(prev => ({ ...prev, likes: res.data.likes }));
    } catch {
      setLiked(false);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="bg-brand-secondary/40 border border-white/10 rounded-xl overflow-hidden flex flex-col h-full">

      {/* HEADER */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-brand-dark/50">
        <div>
          <h3 className="text-lg font-bold text-white">{component.name}</h3>
          <p className="text-xs text-gray-400 mt-1 capitalize">{component.category}</p>
        </div>

        <div className="flex bg-black/40 rounded-lg p-1 border border-white/5 gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`p-2 rounded-md ${activeTab === 'preview'
              ? 'bg-brand-primary text-black'
              : 'text-gray-400'}`}
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`p-2 rounded-md ${activeTab === 'code'
              ? 'bg-brand-primary text-black'
              : 'text-gray-400'}`}
          >
            <Code size={16} />
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="flex-grow bg-black/20 min-h-[250px]">
        {activeTab === 'preview' ? (
          <PreviewRenderer code={component.preview} />
        ) : (
          <div className="p-4">

            {/* ✅ DROPDOWN */}
            <div
              className="relative inline-block"
              onClick={(e) => e.stopPropagation()}   // ⭐ IMPORTANT
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();              // ⭐ IMPORTANT
                  setIsDropdownOpen(prev => !prev);
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold
                  bg-brand-secondary/30 text-white border border-white/10 rounded-lg"
              >
                <Code size={14} className="text-brand-primary" />
                {codeOptions.find(opt => opt.id === codeType)?.label}
                <span className={`ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute z-50 mt-2 w-48 rounded-xl
                  bg-brand-dark/90 backdrop-blur-xl border border-white/10"
                  onClick={(e) => e.stopPropagation()} // ⭐ IMPORTANT
                >
                  {codeOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setCodeType(option.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs
                        ${codeType === option.id
                          ? "bg-brand-primary text-black"
                          : "text-gray-300 hover:bg-white/5"}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <CodeViewer
              code={
                codeType === 'react'
                  ? component.code.react
                  : codeType === 'tailwind'
                    ? (component.code.tailwind || component.code.html)
                    : `${component.code.html_plain || '<!-- No HTML -->'}
<style>${component.code.css || ''}</style>`
              }
              language={codeType === 'react' ? 'jsx' : 'html'}
            />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="p-3 border-t border-white/5 flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {component.tags?.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">
              #{tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleLike}
          disabled={liked}
          className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full
            ${liked ? 'text-red-500 bg-red-500/10' : 'text-gray-400'}`}
        >
          <Heart size={14} className={liked ? "fill-current" : ""} />
          {displayLikes}
        </button>
      </div>
    </div>
  );
};

export default ComponentCard;
