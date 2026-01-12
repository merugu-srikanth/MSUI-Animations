// ColorPicker.jsx - Responsive version
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, Sparkles, Zap, Layers, RefreshCw, Copy, Check,
  Plus, Minus, Eye, Layout, FormInput, Users,
  Star, TrendingUp, Search, Bell, User, Mail, Lock, CreditCard
} from 'lucide-react';
import MainLayout from '../../layouts/MainLayout';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const ColorPicker = () => {
  // 🔹 Color usage explanation (NEW)
  const colorUsage = {
    primary: {
      label: 'Primary Brand',
      usage: 'Buttons, CTAs, charts, highlights',
    },
    accent: {
      label: 'Accent Color',
      usage: 'Gradients, icons, secondary actions',
    },
    success: {
      label: 'Success',
      usage: 'Positive stats, success states',
    },
    danger: {
      label: 'Danger',
      usage: 'Errors, alerts, negative stats',
    },
    dark: {
      label: 'Dark Background',
      usage: 'Main app background',
    },
    secondary: {
      label: 'Secondary BG',
      usage: 'Cards, panels, sections',
    },
  };


  const monthlyGrowthData = [
    { name: 'W1', value: 65 },
    { name: 'W2', value: 80 },
    { name: 'W3', value: 60 },
    { name: 'W4', value: 90 },
    { name: 'W5', value: 75 },
    { name: 'W6', value: 35 },
    { name: 'W7', value: 85 },
    { name: 'W8', value: 45 },
    { name: 'W9', value: 95 },
    { name: 'W10', value: 65 },
    { name: 'W11', value: 85 },
    { name: 'W12', value: 65 },
  ];

  const [copied, setCopied] = useState(null);
  const [activeCategory, setActiveCategory] = useState('single');
  const [previewType, setPreviewType] = useState('hero');
  const [gradientAngle, setGradientAngle] = useState(135);
  const [colors, setColors] = useState({
    primary: '#FF6B35',
    accent: '#7C3AED',
    success: '#10B981',
    danger: '#EF4444',
    dark: '#1F2937',
    secondary: '#9CA3AF',
  });
  // 🔹 Gradient colors (MISSING STATE)
  const [gradientColors, setGradientColors] = useState([
    '#FF6B35',
    '#7C3AED',
    '#10B981',
  ]);


  // 🔹 NEW: opacity per color
  const [colorOpacity, setColorOpacity] = useState({
    primary: 1,
    accent: 1,
    success: 1,
    danger: 1,
    dark: 1,
    secondary: 1,
  });

  const [gradientOpacity, setGradientOpacity] = useState(
    gradientColors.map(() => 1)
  );

  const [glass, setGlass] = useState({
    blur: 13,
    refraction: 0.11,
    depth: 10,
    opacity: 0.12,
    border: 0.18,
  });



  // Utilities
  const getContrast = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000000' : '#ffffff';
  };


  // 🔹 Convert HEX + opacity → RGBA
  const withOpacity = (hex, opacity = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };



  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  const randomizeAll = () => {
    const newColors = {};
    Object.keys(colors).forEach(k => newColors[k] = randomColor());
    setColors(newColors);
    setGradientColors(Array(3).fill().map(randomColor));
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1800);
  };

  const gradientCSS = `linear-gradient(
  ${gradientAngle}deg,
  ${gradientColors
      .map((c, i) => withOpacity(c, gradientOpacity[i] ?? 1))
      .join(', ')}
)`;

  // CSS Variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([k, v]) => root.style.setProperty(`--color-${k}`, v));
    root.style.setProperty('--gradient', gradientCSS);
    root.style.setProperty('--glass-bg', `rgba(255,255,255,${glass.opacity})`);
    root.style.setProperty('--glass-blur', `${glass.blur}px`);
    root.style.setProperty('--glass-border', `rgba(255,255,255,${glass.border})`);
  }, [colors, gradientColors, gradientAngle, glass]);

  // Config
  const categories = [
    { id: 'single', name: 'Single', icon: <Palette size={16} /> },
    { id: 'gradient', name: 'Gradient', icon: <Zap size={16} /> },
    { id: 'glass', name: 'Glass', icon: <Layers size={16} /> },
  ];

  const previewModes = [
    { id: 'hero', name: 'Hero', icon: <Sparkles size={14} /> },
    { id: 'dashboard', name: 'Dashboard', icon: <Layout size={14} /> },
    { id: 'forms', name: 'Forms', icon: <FormInput size={14} /> },
    { id: 'cards', name: 'Cards', icon: <CreditCard size={14} /> },
  ];

  // Dynamic background logic
  const getPreviewBackground = () => {
    if (activeCategory === 'gradient') return 'var(--gradient)';
    if (activeCategory === 'glass') return 'var(--glass-bg)';
    return 'linear-gradient(145deg, var(--color-dark) 0%, var(--color-secondary) 100%)';
  };

  const getGlassStyle = () => ({
    background: activeCategory === 'glass' ? 'var(--glass-bg)' : 'rgba(255,255,255,0.04)',
    backdropFilter: activeCategory === 'glass' ? 'blur(var(--glass-blur))' : 'none',
    border: activeCategory === 'glass' ? '1px solid var(--glass-border)' : '1px solid rgba(255,255,255,0.08)',
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#0f0f14] text-gray-100 pb-8 px-3 md:py-10 sm:px-4 md:px-6">
        <style jsx global>{`
  :root {
    --color-primary: ${withOpacity(colors.primary, colorOpacity.primary)};
    --color-accent: ${withOpacity(colors.accent, colorOpacity.accent)};
    --color-success: ${withOpacity(colors.success, colorOpacity.success)};
    --color-danger: ${withOpacity(colors.danger, colorOpacity.danger)};
    --color-dark: ${withOpacity(colors.dark, colorOpacity.dark)};
    --color-secondary: ${withOpacity(colors.secondary, colorOpacity.secondary)};
    --gradient: ${gradientCSS};
    --glass-blur: ${glass.blur}px;
    --glass-refraction: ${glass.refraction};
    --glass-depth: ${glass.depth};
    --glass-border: rgba(255,255,255,${glass.border});
  }
`}</style>


        {/* Header */}
        <header className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-6 sm:pt-8 md:pt-10 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">

            {/* LEFT: Logo + Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* <div className="p-3 sm:p-4 rounded-xl glass-panel shrink-0">
                <Palette size={28} className="text-white sm:hidden" />
                <Palette size={32} className="text-white hidden sm:block" />
              </div> */}

              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
          bg-gradient-to-r from-brand-primary to-orange-500 
          bg-clip-text text-transparent leading-tight">
                 Brunoui Color Studio Pro
                </h1>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-300">
                  Single • Gradient • Glassmorphism
                </p>
              </div>
            </div>

            {/* RIGHT: Button */}
            <button
              onClick={randomizeAll}
              className="
        w-full md:w-auto
        flex items-center justify-center gap-2
        px-4 py-2.5 sm:px-5 sm:py-3
        bg-gradient-to-r from-brand-primary to-orange-500
        rounded-xl font-medium text-sm sm:text-base
        transition-all group
        hover:opacity-90 active:scale-95
      "
            >
              <RefreshCw
                size={18}
                className="group-hover:rotate-180 transition-transform duration-700"
              />
              <span className="hidden sm:inline">Randomize Everything</span>
              <span className="sm:hidden">Randomize</span>
            </button>

          </div>
        </header>


        <main className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-4 md:gap-6">
          {/* Controls - LEFT */}
          <div className='lg:col-span-5 space-y-4 md:space-y-6 order-2 lg:order-1'>
            <aside className="sticky top-4">
              {/* Category Tabs */}
              <div className="glass-panel p-1.5 mb-3 rounded-xl flex gap-1">
                {categories.map(cat => (
                  <motion.button
                    key={cat.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-1 py-2.5 sm:py-3 rounded-lg text-sm md:font-medium transition-all flex items-center justify-center gap-1.5 sm:gap-0 text-sm sm:text-base ${activeCategory === cat.id
                      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg'
                      : 'hover:bg-white/8'
                      }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* SINGLE COLORS */}
                {activeCategory === 'single' && (
                  <motion.div
                    key="single"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                  >
                    {Object.entries(colors).map(([id, color]) => (
                      <motion.div
                        key={id}
                        whileHover={{ y: -4 }}
                        className="glass-panel rounded-xl p-2"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-semibold text-sm">
                              {colorUsage[id]?.label}
                            </span>
                            <p className="text-xs text-gray-400">
                              {colorUsage[id]?.usage}
                            </p>
                          </div>
                          <button onClick={() => copyToClipboard(color, id)} className="p-1">
                            {copied === id ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                          </button>
                        </div>
                        <div
                          className="h-6 sm:h-8 rounded-lg shadow-xl mb-2 relative"
                          style={{
                            background: `rgba(
      ${parseInt(color.slice(1, 3), 16)},
      ${parseInt(color.slice(3, 5), 16)},
      ${parseInt(color.slice(5, 7), 16)},
      ${colorOpacity[id]}
    )`
                          }}
                        >
                          <span className="text-white text-xs px-2 absolute inset-0 flex items-center">
                            {color} • {Math.round(colorOpacity[id] * 100)}%
                          </span>
                        </div>

                        <input
                          type="color"
                          value={color}
                          onChange={e => setColors(prev => ({ ...prev, [id]: e.target.value }))}
                          className="w-full h-8 rounded-lg cursor-pointer"
                        />
                        {/* Opacity control */}
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Opacity</span>
                            <span>{Math.round(colorOpacity[id] * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={colorOpacity[id]}
                            onChange={(e) =>
                              setColorOpacity(prev => ({
                                ...prev,
                                [id]: Number(e.target.value),
                              }))
                            }
                            className="w-full accent-[var(--color-primary)]"
                          />
                        </div>

                        <div className="flex gap-1 mt-2 flex-wrap">
                          {id === 'primary' && (
                            <span className="px-2 py-0.5 rounded-full text-xs glass-panel">
                              Buttons
                            </span>
                          )}
                          {id === 'primary' && (
                            <span className="px-2 py-0.5 rounded-full text-xs glass-panel">
                              Charts
                            </span>
                          )}
                          {id === 'accent' && (
                            <span className="px-2 py-0.5 rounded-full text-xs glass-panel">
                              Gradients
                            </span>
                          )}
                          {id === 'dark' && (
                            <span className="px-2 py-0.5 rounded-full text-xs glass-panel">
                              App Background
                            </span>
                          )}
                        </div>

                      </motion.div>
                    ))}


                  </motion.div>
                )}

                {/* GRADIENT */}
                {activeCategory === 'gradient' && (
                  <motion.div
                    key="gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Gradient Builder</h3>
                      <button
                        onClick={() => gradientColors.length < 6 && setGradientColors([...gradientColors, randomColor()])}
                        className="flex items-center gap-1.5 px-3 py-1.5 glass-panel rounded-lg hover:bg-white/8 transition-colors text-sm"
                      >
                        <Plus size={16} /> Add
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {gradientColors.map((color, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -4 }}
                          className="glass-panel p-3 rounded-xl relative"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">Stop {index + 1}</span>
                            <div className="flex gap-1">
                              <button onClick={() => copyToClipboard(color, `grad-${index}`)} className="p-1">
                                {copied === `grad-${index}` ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                              </button>
                              {gradientColors.length > 2 && (
                                <button onClick={() => setGradientColors(prev => prev.filter((_, i) => i !== index))} className="p-1">
                                  <Minus size={16} className="text-red-400" />
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="h-16 sm:h-20 rounded-lg mb-3 shadow-xl" style={{ background: color }} />
                          <input
                            type="color"
                            value={color}
                            onChange={e => {
                              const next = [...gradientColors];
                              next[index] = e.target.value;
                              setGradientColors(next);
                            }}
                            className="w-full h-8 rounded-lg cursor-pointer"
                          />
                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Opacity</span>
                              <span>{Math.round((gradientOpacity[index] ?? 1) * 100)}%</span>
                            </div>

                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={gradientOpacity[index] ?? 1}
                              onChange={(e) => {
                                const next = [...gradientOpacity];
                                next[index] = Number(e.target.value);
                                setGradientOpacity(next);
                              }}
                              className="w-full accent-[var(--color-primary)]"
                            />
                          </div>

                        </motion.div>
                      ))}
                    </div>

                    <div className="glass-panel p-4 rounded-xl space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Angle: {gradientAngle}°</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        step="1"
                        value={gradientAngle}
                        onChange={e => setGradientAngle(Number(e.target.value))}
                        className="w-full accent-[var(--color-primary)]"
                      />

                      <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden shadow-xl" style={{ background: 'var(--gradient)' }}>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                          <span className="text-white/80 font-mono text-xs sm:text-sm px-3 py-1.5 rounded-md bg-black/40">
                            Gradient Preview
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg font-mono text-xs sm:text-sm">
                        <span className="text-gray-300 truncate flex-1 mr-2">
                          {gradientCSS}
                        </span>
                        <button
                          onClick={() => copyToClipboard(gradientCSS, 'gradient-css')}
                          className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                        >
                          {copied === 'gradient-css' ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* GLASSMORPHISM */}
                {activeCategory === 'glass' && (
                  <motion.div
                    key="glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="glass-panel p-4 sm:p-6 rounded-xl space-y-6"
                  >
                    <h3 className="text-lg font-semibold">Glassmorphism Controls</h3>
                    {[
                      { label: 'Opacity', key: 'opacity', min: 0, max: 0.4, step: 0.005, format: v => `${(v * 100).toFixed(0)}%` },
                      { label: 'Blur', key: 'blur', min: 0, max: 40, step: 1, format: v => `${v}px` },
                      { label: 'Border', key: 'border', min: 0, max: 0.5, step: 0.005, format: v => `${(v * 100).toFixed(0)}%` },
                    ].map(item => (
                      <div key={item.key} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.label}</span>
                          <span>{item.format(glass[item.key])}</span>
                        </div>
                        <input
                          type="range"
                          min={item.min} max={item.max} step={item.step}
                          value={glass[item.key]}
                          onChange={e => setGlass(prev => ({ ...prev, [item.key]: +e.target.value }))}
                          className="w-full accent-[var(--color-primary)]"
                        />
                      </div>
                    ))}

                    <div className="h-40 sm:h-48 rounded-xl flex items-center justify-center shadow-xl" style={getGlassStyle()}>
                      <div className="text-center">
                        <h4 className="text-lg sm:text-xl font-bold mb-2">Glass Effect Preview</h4>
                        <p className="text-gray-300 text-sm">Adjust sliders to see changes</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </aside>
          </div>

          {/* PREVIEW AREA - RIGHT */}
          <section className="lg:col-span-7 space-y-3 order-1 lg:order-2">
            <div className="glass-panel p-1.5 rounded-xl overflow-x-hidden md:overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {previewModes.map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => setPreviewType(mode.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${previewType === mode.id
                      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg'
                      : 'hover:bg-white/8'
                      }`}
                  >
                    {mode.icon}
                    {mode.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-panel p-2 sm:p-3 md:p-4 rounded-xl min-h-[500px] sm:min-h-[600px]" style={getGlassStyle()}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Sparkles className="text-[var(--color-primary)] animate-pulse" size={20} />
                  {previewModes.find(m => m.id === previewType)?.name} Live Preview
                </h2>
                <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                  <Eye size={14} /> Live
                </div>
              </div>

              <div className="rounded-xl overflow-hidden min-h-[350px] sm:min-h-[400px] shadow-xl" style={{ background: getPreviewBackground() }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={previewType}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    {/* HERO PREVIEW */}
                    {previewType === 'hero' && (
                      <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          {activeCategory === 'gradient' && (
                            <div className="absolute inset-0" style={{ background: gradientCSS }} />
                          )}
                          {activeCategory === 'glass' && (
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                          )}
                          <div className="absolute top-4 left-4 w-16 h-16 rounded-full" style={{ background: withOpacity(colors.primary, colorOpacity.primary * 0.1) }} />
                          <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full" style={{ background: withOpacity(colors.accent, colorOpacity.accent * 0.1) }} />
                        </div>

                        <div className="relative z-10 max-w-3xl">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel mb-4 text-xs sm:text-sm">
                            <TrendingUp size={14} />
                            <span className="font-medium">Version 3.0 Released</span>
                          </div>

                          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            <span className="block" style={{ color: activeCategory === 'single' ? colors.primary : '#fff' }}>
                              Create Stunning
                            </span>
                            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                              Color Experiences
                            </span>
                          </h1>

                          <p className="text-sm sm:text-base text-gray-200 mb-6 max-w-xl mx-auto" style={{ opacity: 0.9 }}>
                            Build beautiful interfaces with our advanced color studio.
                          </p>

                          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                            <button className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
                              style={{
                                background: withOpacity(colors.primary, colorOpacity.primary)
                              }}>
                              Get Started Free
                            </button>
                            <button className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold border transition-all hover:bg-white/10 text-sm sm:text-base"
                              style={{ borderColor: colors.accent, color: getContrast(colors.dark) }}>
                              Watch Demo
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-md mx-auto">
                            {[
                              { label: 'Users', value: '10K+', icon: <Users size={16} /> },
                              { label: 'Projects', value: '2.4K+', icon: <Layers size={16} /> },
                              { label: 'Rating', value: '4.9', icon: <Star size={16} /> }
                            ].map((stat, idx) => (
                              <div key={idx} className="glass-panel p-2 sm:p-3 rounded-lg text-center">
                                <div className="flex justify-center mb-1" style={{ color: colors.primary }}>
                                  {stat.icon}
                                </div>
                                <div className="text-lg sm:text-xl font-bold mb-0.5">{stat.value}</div>
                                <div className="text-xs text-gray-300">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* DASHBOARD PREVIEW */}
                    {previewType === 'dashboard' && (
                      <div className="h-full p-3 sm:p-4 bg-gradient-to-br from-gray-900/50 to-black/50">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <div>
                            <h2 className="text-lg sm:text-xl font-bold" style={{ color: colors.primary }}>Analytics Dashboard</h2>
                            <p className="text-gray-400 text-xs sm:text-sm">Welcome back, John</p>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="relative">
                              <Bell size={18} className="text-gray-400" />
                              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: colors.danger }} />
                            </div>
                            <div className="flex items-center gap-1.5 glass-panel px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" style={{ background: gradientCSS }} />
                              <span className="font-medium text-sm">John</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                          {[
                            { title: 'Revenue', value: '$42.8K', change: '+12.5%', color: colors.success },
                            { title: 'Users', value: '1,248', change: '+8.2%', color: colors.primary },
                            { title: 'Conversion', value: '4.8%', change: '-1.2%', color: colors.danger },
                            { title: 'Sessions', value: '8.4K', change: '+5.7%', color: colors.accent }
                          ].map((card, idx) => (
<div
  className="glass-panel p-3 rounded-lg"
  style={{
    borderColor: withOpacity(card.color, 0.25),
    boxShadow: `
      0 12px 30px ${withOpacity(card.color, 0.15)},
      inset 0 0 0 1px ${withOpacity('#ffffff', 0.05)}
    `,
  }}
>
                              <div className="flex justify-between items-start mb-2">
                                <div className="p-1.5 rounded-md" style={{ background: card.color + '20' }}>
                                  <TrendingUp size={14} style={{ color: card.color }} />
                                </div>
                                <span className={`text-xs font-medium ${card.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                  {card.change}
                                </span>
                              </div>
                              <div className="text-lg font-bold mb-0.5">{card.value}</div>
                              <div className="text-xs text-gray-400">{card.title}</div>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
<div
  className="glass-panel p-3 sm:p-4 rounded-xl"
  style={{
    borderColor: withOpacity(colors.accent, 0.22),
    boxShadow: `
      0 16px 32px ${withOpacity(colors.accent, 0.14)}
    `,
  }}
>

                            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Monthly Growth</h3>
                            <div className="h-40 sm:h-48">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyGrowthData}>
                                  <defs>
                                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop
                                        offset="0%"
                                        stopColor={withOpacity(colors.primary, colorOpacity.primary)}
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor={withOpacity(colors.accent, colorOpacity.accent)}
                                      />

                                    </linearGradient>
                                  </defs>
                                  <XAxis
                                    dataKey="name"
                                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                                    axisLine={false}
                                    tickLine={false}
                                  />
                                  <YAxis
                                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                                    axisLine={false}
                                    tickLine={false}
                                  />
                                  <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{
                                      background: 'rgba(0,0,0,0.8)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(255,255,255,0.1)',
                                      color: '#fff',
                                      fontSize: '12px'
                                    }}
                                  />
                                  <Bar
                                    dataKey="value"
                                    radius={[8, 8, 0, 0]}
                                    fill="url(#barGradient)"
                                  />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>

<div
  className="glass-panel p-3 sm:p-4 rounded-xl"
  style={{
    borderColor: withOpacity(colors.accent, 0.22),
    boxShadow: `
      0 16px 32px ${withOpacity(colors.accent, 0.14)}
    `,
  }}
>

                            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Recent Activity</h3>
                            <div className="space-y-2">
                              {[
                                { user: 'Alex Johnson', action: 'created project', time: '2m' },
                                { user: 'Sarah Miller', action: 'updated settings', time: '15m' },
                                { user: 'Mike Chen', action: 'commented', time: '1h' },
                                { user: 'You', action: 'changed colors', time: 'Now' }
                              ].map((activity, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                                    style={{ background: gradientColors[idx % gradientColors.length] }}>
                                    {activity.user.charAt(0)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">{activity.user}</div>
                                    <div className="text-xs text-gray-400 truncate">{activity.action}</div>
                                  </div>
                                  <div className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FORMS PREVIEW */}
                    {previewType === 'forms' && (
                      <div className="h-full p-4 sm:p-6">
                        <div className="max-w-sm mx-auto">
                          <div className="text-center mb-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                              style={{ background: gradientCSS }}>
                              <Lock size={20} className="text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome Back</h2>
                            <p className="text-gray-400 text-sm">Sign in to continue</p>
                          </div>

                          <div className="space-y-4 border border-white/10 p-4 rounded-xl">
                            <div>
                              <label className="block text-sm font-medium mb-1.5">Email Address</label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                  type="email"
                                  placeholder="you@example.com"
                                  className="w-full pl-10 pr-3 py-2.5 glass-panel rounded-lg border border-transparent focus:outline-none focus:ring-1 transition-all text-sm"
                                  style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    '--tw-ring-color': colors.primary
                                  }}
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-1.5">Password</label>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                  type="password"
                                  placeholder="••••••••"
                                  className="w-full pl-10 pr-3 py-2.5 glass-panel rounded-lg border border-transparent focus:outline-none focus:ring-1 transition-all text-sm"
                                  style={{
                                    background: 'rgba(255,255,255,0.07)'
                                  }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <label className="flex items-center gap-1.5">
                                <input type="checkbox" className="rounded" style={{ accentColor: colors.primary }} />
                                <span>Remember me</span>
                              </label>
                              <a href="#" className="font-medium hover:underline" style={{ color: colors.primary }}>
                                Forgot password?
                              </a>
                            </div>

                            <button className="w-full py-2.5 rounded-lg font-semibold text-white shadow-lg transition-all hover:opacity-90 active:scale-95 text-sm sm:text-base"
                              style={{ background: gradientCSS }}>
                              Sign In
                            </button>

                            <div className="relative my-4">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                              </div>
                              <div className="relative flex justify-center text-xs">
                                <span className="px-3 glass-panel rounded-full">Or continue with</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <button className="py-2.5 rounded-lg glass-panel flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm">
                                <div className="w-4 h-4 rounded-full bg-blue-500" />
                                <span>Google</span>
                              </button>
                              <button className="py-2.5 rounded-lg glass-panel flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm">
                                <div className="w-4 h-4 rounded-full bg-black" />
                                <span>GitHub</span>
                              </button>
                            </div>

                            <p className="text-center text-gray-400 text-xs sm:text-sm mt-4">
                              Don't have an account?{' '}
                              <a href="#" className="font-semibold hover:underline" style={{ color: colors.accent }}>
                                Sign up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CARDS PREVIEW */}
                    {previewType === 'cards' && (
                      <div className="h-full p-4">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-center" style={{ color: colors.primary }}>
                          Our Services
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                          {[
                            {
                              title: 'Development Kit',
                              description: 'React component library with TypeScript.',
                              price: '$89/mo',
                              features: ['React Components', 'TypeScript', 'Storybook', 'Support'],
                              icon: <Zap size={18} />,
                            },
                            {
                              title: 'Pro Bundle',
                              description: 'Enterprise projects with premium support.',
                              price: '$199/mo',
                              features: ['All Features', 'White-label', 'Training', '24/7 Support'],
                              icon: <Star size={18} />,
                            }
                          ].map((card, idx) => (
                            <motion.div
  key={idx}
 whileHover={{
  y: -6,
  boxShadow: `
    0 20px 40px ${withOpacity(colors.primary, 0.28)},
    inset 0 0 0 1px ${withOpacity('#ffffff', 0.08)}
  `
}}
  className="glass-panel p-4 rounded-xl shadow-2xl relative transition-all"
  style={{
    border: `1px solid ${withOpacity(colors.primary, 0.25)}`,
    boxShadow: `
      0 12px 30px ${withOpacity(colors.primary, 0.18)},
      inset 0 0 0 1px ${withOpacity('#ffffff', 0.05)}
    `
  }}
>

                              <div className="mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 flex items-center justify-center"
                                  style={{ background: gradientCSS }}>
                                  <div style={{ color: '#fff' }}>{card.icon}</div>
                                </div>
                                <h4 className="text-base sm:text-lg font-bold mb-1">{card.title}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3">{card.description}</p>
                              </div>

                              <div className="mb-4">
                                <div className="text-xl sm:text-2xl font-bold">{card.price}</div>
                                <div className="text-gray-400 text-xs">per month</div>
                              </div>

                              <ul className="space-y-2 mb-4">
                                {card.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                                    <Check size={14} className="text-green-400 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>

                              <button className="w-full py-2.5 rounded-lg font-semibold glass-panel hover:bg-white/5 transition-all text-sm sm:text-base">
                                Get Started
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default ColorPicker;