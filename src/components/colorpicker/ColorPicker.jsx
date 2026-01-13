// BrunouiColorStudioPro.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import {
  RefreshCw, Copy, Check, Plus, Minus, X,
  Sparkles, Layout, FormInput, CreditCard,
  Palette, Droplets, Layers, Contrast,
  Zap, Eye, EyeOff, Save, Upload,
  ChevronRight, ChevronLeft,
  Settings, Grid, List, Download,
  Camera, Share2, BookOpen, Lock, Unlock,
  TrendingUp, DollarSign, PaintBucket,
  CheckCircle, AlertCircle, AlertTriangle,
  Moon, Sun, Layers2, Radiation, GlassWater,
  Mail, Users, Star, Bell, ArrowRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell,
  AreaChart, Area
} from 'recharts';
import MainLayout from '../../layouts/MainLayout';

const monthlyGrowthData = [
  { name: 'Jan', value: 65 }, { name: 'Feb', value: 80 }, { name: 'Mar', value: 70 },
  { name: 'Apr', value: 90 }, { name: 'May', value: 85 }, { name: 'Jun', value: 95 },
  { name: 'Jul', value: 75 }, { name: 'Aug', value: 88 }, { name: 'Sep', value: 92 },
  { name: 'Oct', value: 78 }, { name: 'Nov', value: 85 }, { name: 'Dec', value: 90 },
];

const pieData = [
  { name: 'Primary', value: 35, color: '#FF6B35' },
  { name: 'Accent', value: 25, color: '#7C3AED' },
  { name: 'Success', value: 20, color: '#10B981' },
  { name: 'Warning', value: 15, color: '#F59E0B' },
  { name: 'Danger', value: 5, color: '#EF4444' },
];

const previewModes = [
  { id: 'hero', name: 'Hero', icon: <Sparkles size={18} />, color: 'from-purple-500 to-pink-500' },
  { id: 'dashboard', name: 'Dashboard', icon: <Layout size={18} />, color: 'from-blue-500 to-cyan-500' },
  { id: 'forms', name: 'Forms', icon: <FormInput size={18} />, color: 'from-green-500 to-emerald-500' },
  { id: 'cards', name: 'Cards', icon: <CreditCard size={18} />, color: 'from-orange-500 to-yellow-500' },
];

const colorInfo = {
  primary: { label: 'Primary Brand', usage: 'Buttons, CTAs, links', icon: <PaintBucket size={16} /> },
  accent: { label: 'Accent Color', usage: 'Gradients, highlights', icon: <Radiation size={16} /> },
  success: { label: 'Success', usage: 'Positive states', icon: <CheckCircle size={16} /> },
  danger: { label: 'Danger', usage: 'Errors, warnings', icon: <AlertCircle size={16} /> },
  warning: { label: 'Warning', usage: 'Alerts, caution', icon: <AlertTriangle size={16} /> },
  dark: { label: 'Dark', usage: 'Backgrounds', icon: <Moon size={16} /> },
  light: { label: 'Light', usage: 'Text, surfaces', icon: <Sun size={16} /> },
  secondary: { label: 'Secondary', usage: 'Cards, panels', icon: <Layers2 size={16} /> },
};

const presetThemes = [
  { name: 'Sunset', colors: { primary: '#FF6B35', accent: '#FF4081', success: '#4CAF50', danger: '#F44336', warning: '#FF9800', dark: '#1A1A2E', light: '#F5F5F5', secondary: '#2D3047' } },
  { name: 'Ocean', colors: { primary: '#2196F3', accent: '#00BCD4', success: '#009688', danger: '#E91E63', warning: '#FFC107', dark: '#0D1B2A', light: '#E0F7FA', secondary: '#1B3A4B' } },
  { name: 'Forest', colors: { primary: '#2E7D32', accent: '#66BB6A', success: '#388E3C', danger: '#D32F2F', warning: '#F57C00', dark: '#1B3D2F', light: '#F1F8E9', secondary: '#2E5D43' } },
  { name: 'Midnight', colors: { primary: '#7C3AED', accent: '#8B5CF6', success: '#10B981', danger: '#EF4444', warning: '#F59E0B', dark: '#0F172A', light: '#F8FAFC', secondary: '#1E293B' } },
];

const BrunouiColorStudioPro = () => {
  const [copied, setCopied] = useState(null);
  const [activePreview, setActivePreview] = useState('hero');
  const [activeTab, setActiveTab] = useState('single');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [savedThemes, setSavedThemes] = useState([]);
  const [lockColors, setLockColors] = useState({});
  const [liveOpacity, setLiveOpacity] = useState({});

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const previewRef = useRef(null);

  const [colors, setColors] = useState({
    primary: '#FF6B35',
    accent: '#7C3AED',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    dark: '#0F172A',
    light: '#F8FAFC',
    secondary: '#334155',
  });

  const [opacity, setOpacity] = useState({
    primary: 1, accent: 1, success: 1, danger: 1, warning: 1, dark: 1, light: 1, secondary: 1,
  });

  const [gradientColors, setGradientColors] = useState(['#FF6B35', '#7C3AED', '#10B981']);
  const [gradientOpacity, setGradientOpacity] = useState([1, 1, 1]);
  const [gradientAngle, setGradientAngle] = useState(135);
  const [gradientType, setGradientType] = useState('linear');

  const [glass, setGlass] = useState({ blur: 12, opacity: 0.15, border: 0.2, saturation: 100 });

  // Toast notification
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  const randomizeAll = () => {
    const newColors = {};
    Object.keys(colors).forEach(k => {
      if (!lockColors[k]) newColors[k] = randomColor();
    });
    setColors(prev => ({ ...prev, ...newColors }));
    setGradientColors([randomColor(), randomColor(), randomColor()]);
    showToast('Colors randomized!', 'success');
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      showToast('Copied to clipboard!', 'success');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      showToast('Failed to copy!', 'error');
    }
  };

  const withOpacity = (hex, op = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${op})`;
  };

  const gradientCSS = gradientType === 'linear'
    ? `linear-gradient(${gradientAngle}deg, ${gradientColors.map((c, i) => withOpacity(c, gradientOpacity[i])).join(', ')})`
    : `radial-gradient(circle at 50% 50%, ${gradientColors.map((c, i) => withOpacity(c, gradientOpacity[i])).join(', ')})`;

  // Update CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([k, v]) => {
      root.style.setProperty(`--color-${k}`, withOpacity(v, opacity[k]));
    });
    root.style.setProperty('--gradient-main', gradientCSS);
    root.style.setProperty('--glass-blur', `${glass.blur}px`);
    root.style.setProperty('--glass-opacity', glass.opacity.toString());
    root.style.setProperty('--glass-border', glass.border.toString());
  }, [colors, opacity, gradientCSS, glass]);

  const getPreviewBg = () => {
    if (activeTab === 'gradient') return gradientCSS;
    if (activeTab === 'glass') return `rgba(255, 255, 255, ${glass.opacity})`;
    return 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%)';
  };

  const glassStyle = {
    background: `rgba(255, 255, 255, ${glass.opacity})`,
    backdropFilter: `blur(${glass.blur}px)`,
    border: `1px solid rgba(255, 255, 255, ${glass.border})`,
  };

  const applyPreset = (preset) => {
    setColors(preset.colors);
    setGradientColors([preset.colors.primary, preset.colors.accent, preset.colors.success]);
    showToast(`Applied ${preset.name} theme!`, 'success');
  };

  const saveTheme = () => {
    const themeName = prompt('Enter theme name:');
    if (themeName) {
      const newTheme = { name: themeName, colors, gradientColors, glass };
      setSavedThemes([...savedThemes, newTheme]);
      showToast('Theme saved!', 'success');
    }
  };

  const captureScreenshot = async () => {
    if (previewRef.current) {
      try {
        const canvas = await html2canvas(previewRef.current, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
        });
        const link = document.createElement('a');
        link.download = `color-studio-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Screenshot saved!', 'success');
      } catch (error) {
        console.error('Failed to capture screenshot:', error);
        showToast('Failed to capture screenshot!', 'error');
      }
    }
  };

  const exportCSS = () => {
    const cssVars = Object.entries(colors)
      .map(([k, v]) => `--color-${k}: ${withOpacity(v, opacity[k])};`)
      .join('\n  ');

    const css = `:root {\n  ${cssVars}\n  --gradient-main: ${gradientCSS};\n  --glass-blur: ${glass.blur}px;\n  --glass-opacity: ${glass.opacity};\n}`;

    copyToClipboard(css, 'css');
  };

  const rafRef = useRef(null);


  // Color Picker Card Component
  const ColorPickerCard = ({ colorKey, color, opacityVal }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLockColors(prev => ({ ...prev, [colorKey]: !prev[colorKey] }))}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            title={lockColors[colorKey] ? 'Unlock color' : 'Lock color'}
          >
            {lockColors[colorKey] ? <Lock size={14} /> : <Unlock size={14} />}
          </button>
          <div>
            <h3 className="font-semibold text-sm flex items-center gap-1.5">
              {colorInfo[colorKey].icon}
              {colorInfo[colorKey].label}
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">{colorInfo[colorKey].usage}</p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(color, colorKey)}
          className={`p-1.5 rounded-lg transition-all ${copied === colorKey ? 'bg-green-500/20' : 'hover:bg-white/10'}`}
          title="Copy hex code"
        >
          {copied === colorKey ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input
              type="color"
              value={color}
              onChange={e => setColors(p => ({ ...p, [colorKey]: e.target.value }))}
              className="w-12 h-12 rounded-lg cursor-pointer border border-white/20 shadow-inner"
              disabled={lockColors[colorKey]}
              title="Click to pick color"
            />
            {lockColors[colorKey] && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <Lock size={14} />
              </div>
            )}
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={color.toUpperCase()}
              onChange={e => {
                const value = e.target.value;
                if (/^#[0-9A-Fa-f]{0,6}$/.test(value) && !lockColors[colorKey]) {
                  setColors(p => ({ ...p, [colorKey]: value }));
                }
              }}
              className="w-full px-3 py-2 bg-black/20 rounded-lg text-sm font-mono border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/30"
              placeholder="#000000"
              disabled={lockColors[colorKey]}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>HEX</span>
              <span>
                RGB: {parseInt(color.slice(1, 3), 16)}, {parseInt(color.slice(3, 5), 16)}, {parseInt(color.slice(5, 7), 16)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Opacity</span>
            <span className="font-mono">{Math.round(opacityVal * 100)}%</span>
          </div>
         <input
  type="range"
  min="0"
  max="1"
  step="0.01"
  value={liveOpacity[colorKey] ?? opacityVal}
  onChange={(e) => {
    const value = +e.target.value;

    // Update slider instantly (smooth like gradient angle)
    setLiveOpacity(prev => ({ ...prev, [colorKey]: value }));

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setOpacity(prev => ({
        ...prev,
        [colorKey]: value
      }));
    });
  }}
  className="w-full h-1.5 bg-gray-700 rounded-full appearance-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:shadow-lg"
/>


        </div>
      </div>
    </motion.div>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        {/* Toast Notification */}
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${toast.type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'}`}
            >
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span className="text-sm font-medium">{toast.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="backdrop-blur-xl bg-gray-900/80 border-b border-gray-800">
          <div className="max-w-screen-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title={sidebarCollapsed ? 'Expand panel' : 'Collapse panel'}
                >
                  {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                    Color Studio
                  </h1>
                  <p className="text-xs text-gray-400">Real-time color customization</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={saveTheme}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-1.5 text-sm"
                >
                  <Save size={14} />
                  Save
                </button>
                <button
                  onClick={exportCSS}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-1.5 text-sm"
                >
                  <Download size={14} />
                  Export CSS
                </button>
                <button
                  onClick={randomizeAll}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 transition-all flex items-center gap-1.5 text-sm shadow-lg"
                >
                  <RefreshCw size={14} />
                  Randomize
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-4 flex justify-between ">
              <div className="flex flex-wrap gap-1">
                {['single', 'gradient', 'glass'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-md'
                      : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                  >
                    {tab === 'single' && 'Single Colors'}
                    {tab === 'gradient' && 'Gradient Builder'}
                    {tab === 'glass' && 'Glassmorphism'}
                  </button>
                ))}
                <button
                  onClick={randomizeAll}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-700 transition-all flex items-center gap-1.5 text-sm shadow-lg"
                >
                  <RefreshCw size={14}  className='animate-spin'/>
                  Randomize
                </button>


              </div>



              <div className=""> <button
                onClick={exportCSS}
                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-1.5 text-sm"
              >
                <Download size={14} />
                Export CSS
              </button></div>

            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-screen-2xl  mx-auto px-4 py-4">
          <div className="flex flex-col sticky top-0 z-40  lg:flex-row gap-4">
            {/* Side Panel */}
            <motion.aside
              animate={{ width: sidebarCollapsed ? '60px' : '320px' }}
              className={`${sidebarCollapsed ? 'lg:w-16' : 'lg:w-80'} transition-all duration-300`}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 h-full">
                {!sidebarCollapsed ? (
                  <div className="space-y-4">
                    {/* Color Presets */}
                    {showPresets && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold">Preset Themes</h3>
                          <button
                            onClick={() => setShowPresets(false)}
                            className="p-1 hover:bg-gray-700 rounded"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {presetThemes.map((preset, i) => (
                            <button
                              key={i}
                              onClick={() => applyPreset(preset)}
                              className="p-2 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors"
                              title={preset.name}
                            >
                              <div className="flex gap-1 mb-1">
                                {Object.values(preset.colors).slice(0, 3).map((c, j) => (
                                  <div
                                    key={j}
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: c }}
                                  />
                                ))}
                              </div>
                              <span className="text-xs">{preset.name}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Active Tab Content */}
                    {activeTab === 'single' && (
                      <div className="space-y-3 ">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold">Color Palette</h3>
                          <button
                            onClick={() => setShowPresets(!showPresets)}
                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                            title="Show presets"
                          >
                            <Palette size={16} />
                          </button>
                        </div>
                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                          {Object.entries(colors).map(([key, color]) => (
                            <ColorPickerCard
                              key={key}
                              colorKey={key}
                              color={color}
                              opacityVal={opacity[key]}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'gradient' && (
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Gradient Builder</h3>

                        <div className="space-y-3">
                          {gradientColors.map((color, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gray-900/50">
                              <input
                                type="color"
                                value={color}
                                onChange={e => {
                                  const newColors = [...gradientColors];
                                  newColors[index] = e.target.value;
                                  setGradientColors(newColors);
                                }}
                                className="w-8 h-8 rounded cursor-pointer border border-gray-600"
                              />
                              <input
                                type="text"
                                value={color.toUpperCase()}
                                onChange={e => {
                                  const value = e.target.value;
                                  if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                                    const newColors = [...gradientColors];
                                    newColors[index] = value;
                                    setGradientColors(newColors);
                                  }
                                }}
                                className="flex-1 px-2 py-1 text-xs bg-gray-800 rounded border border-gray-700"
                              />
                              <div className="flex items-center gap-1">
                                <input
                                  type="range"
                                  min="0"
                                  max="1"
                                  step="0.01"
                                  value={gradientOpacity[index]}
                                  onChange={e => {
                                    const newOp = [...gradientOpacity];
                                    newOp[index] = +e.target.value;
                                    setGradientOpacity(newOp);
                                  }}
                                  className="w-16"
                                />
                                {gradientColors.length > 2 && (
                                  <button
                                    onClick={() => {
                                      setGradientColors(gradientColors.filter((_, i) => i !== index));
                                      setGradientOpacity(gradientOpacity.filter((_, i) => i !== index));
                                    }}
                                    className="p-1 hover:bg-red-500/20 rounded text-red-400"
                                  >
                                    <Minus size={12} />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}

                          {gradientColors.length < 5 && (
                            <button
                              onClick={() => {
                                setGradientColors([...gradientColors, randomColor()]);
                                setGradientOpacity([...gradientOpacity, 1]);
                              }}
                              className="w-full py-2 text-sm rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors flex items-center justify-center gap-1"
                            >
                              <Plus size={14} /> Add Color Stop
                            </button>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Angle: {gradientAngle}°</span>
                            <button onClick={() => setGradientAngle(135)} className="text-orange-400">
                              Reset
                            </button>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="360"
                            value={gradientAngle}
                            onChange={e => setGradientAngle(+e.target.value)}
                            className="w-full"
                          />
                        </div>

                        <div
                          className="h-24 rounded-lg border border-gray-700"
                          style={{ background: gradientCSS }}
                        />
                      </div>
                    )}

                    {activeTab === 'glass' && (
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Glassmorphism</h3>
                        {[
                          { label: 'Blur', key: 'blur', min: 0, max: 50, icon: <Droplets size={14} /> },
                          { label: 'Opacity', key: 'opacity', min: 0, max: 0.5, step: 0.01, icon: <Eye size={14} /> },
                          { label: 'Border', key: 'border', min: 0, max: 1, step: 0.01, icon: <Layers size={14} /> },
                        ].map((item) => (
                          <div key={item.key} className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1.5">
                                {item.icon}
                                <span>{item.label}</span>
                              </div>
                              <span>{item.key === 'blur' ? `${glass[item.key]}px` : `${Math.round(glass[item.key] * 100)}%`}</span>
                            </div>
                            <input
                              type="range"
                              min={item.min}
                              max={item.max}
                              step={item.step || 1}
                              value={glass[item.key]}
                              onChange={e => setGlass(p => ({ ...p, [item.key]: +e.target.value }))}
                              className="w-full"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {previewModes.map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setActivePreview(mode.id)}
                        className={`w-full p-2 rounded-lg flex flex-col items-center ${activePreview === mode.id
                          ? 'bg-gradient-to-b from-white/20 to-transparent'
                          : 'hover:bg-gray-700/50'
                          }`}
                        title={mode.name}
                      >
                        {mode.icon}
                        <span className="text-xs mt-1">{mode.name.charAt(0)}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.aside>

            {/* Preview Area */}
            <div className="flex-1">
              <div
                ref={previewRef}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                {/* Preview Header */}
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {!sidebarCollapsed && (
                      <div className="flex flex-wrap gap-1">
                        {previewModes.map((mode) => (
                          <button
                            key={mode.id}
                            onClick={() => setActivePreview(mode.id)}
                            className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors ${activePreview === mode.id
                              ? 'bg-gradient-to-r from-orange-500 to-orange-400'
                              : 'bg-gray-800 hover:bg-gray-700'
                              }`}
                          >
                            {mode.icon}
                            {mode.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <button
                      onClick={captureScreenshot}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                      title="Capture screenshot"
                    >
                      <Camera size={16} />
                    </button> */}
                    <button
                      // onClick={() => copyToClipboard(gradientCSS, 'gradient')}
                      onClick={exportCSS}
                      className="p-2 flex items-center gap-1.5 bg-slate-700 hover:bg-gray-700 rounded-lg transition-colors"
                      title="Copy gradient CSS"
                    >
                      <Copy size={16} />  CSS
                    </button>
                  </div>
                </div>

                {/* Preview Content */}
                <div
                  className="p-6 md:p-4 min-h-[400px]"
                  style={{ background: getPreviewBg() }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePreview}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="h-full"
                    >
                      {/* HERO Preview */}
                      {activePreview === 'hero' && (
                        <div className="flex items-center justify-center h-full">
                          <div className="max-w-3xl text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6">
                              <Zap size={16} />
                              <span className="text-sm font-medium">Live Preview</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                              <span className="block">Create Amazing</span>
                              <span className="block bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-success)] bg-clip-text text-transparent">
                                Color Schemes
                              </span>
                            </h1>
                            <p className="text-gray-300 mb-8 text-lg">
                              Design beautiful interfaces with real-time color customization
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <button
                                style={{ background: 'var(--gradient-main)' }}
                                className="px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                              >
                                Get Started
                              </button>
                              <button
                                style={{
                                  background: 'transparent',
                                  border: '1px solid var(--color-accent)',
                                  color: 'var(--color-accent)'
                                }}
                                className="px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors"
                              >
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* DASHBOARD Preview */}
                      {activePreview === 'dashboard' && (
                        <div className="space-y-2 ">
                          <div className="flex justify-between items-center">
                            <div>
                              <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                                Dashboard
                              </h2>
                              <p className="text-gray-400 text-sm">Overview and analytics</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Bell size={20} />
                              <div className="w-8 h-8 rounded-full" style={{ background: 'var(--gradient-main)' }} />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { title: 'Revenue', value: '$24.5K', change: '+12%' },
                              { title: 'Users', value: '1.2K', change: '+8%' },
                              { title: 'Growth', value: '+45%', change: '+15%' },
                              { title: 'Engagement', value: '78%', change: '+5%' },
                            ].map((card, i) => (
                              <div
                                key={i}
                                className="p-4 rounded-xl backdrop-blur-sm border border-white/10"
                                style={glassStyle}
                              >
                                <p className="text-sm text-gray-400">{card.title}</p>
                                <p className="text-2xl font-bold mt-1">{card.value}</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--color-success)' }}>
                                  {card.change}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl" style={glassStyle}>
                              <h3 className="font-semibold mb-4">Monthly Growth</h3>
                              <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={monthlyGrowthData}>
                                  <defs>
                                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8} />
                                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                    </linearGradient>
                                  </defs>
                                  <XAxis dataKey="name" stroke="var(--color-light)" fontSize={12} />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="value" stroke="var(--color-primary)" fill="url(#colorGradient)" />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>

                            <div className="p-4 rounded-xl" style={glassStyle}>
                              <h3 className="font-semibold mb-4">Color Usage</h3>
                              <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value">
                                    {pieData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* FORMS Preview */}
                      {activePreview === 'forms' && (
                        <div className="flex items-center justify-center h-full">
                          <div className="max-w-md w-full p-6 rounded-xl" style={glassStyle}>
                            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
                              Sign In
                            </h2>
                            <form className="space-y-4">
                              <div>
                                <label className="block text-sm mb-1.5">Email</label>
                                <div className="relative">
                                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                  <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm mb-1.5">Password</label>
                                <div className="relative">
                                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                  <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
                                  />
                                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <Eye size={16} className="text-gray-400" />
                                  </button>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="w-full py-2.5 rounded-lg font-semibold mt-2"
                                style={{ background: 'var(--gradient-main)' }}
                              >
                                Sign In
                              </button>
                            </form>
                          </div>
                        </div>
                      )}

                      {/* CARDS Preview */}
                      {activePreview === 'cards' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            {
                              title: 'Basic Plan',
                              price: '$19',
                              features: ['5 Projects', 'Basic Support', '1GB Storage'],
                              highlighted: false
                            },
                            {
                              title: 'Pro Plan',
                              price: '$49',
                              features: ['Unlimited Projects', 'Priority Support', '100GB Storage', 'Custom Domains'],
                              highlighted: true
                            },
                          ].map((plan, i) => (
                            <div
                              key={i}
                              className={`p-6 rounded-xl ${plan.highlighted ? 'scale-105' : ''}`}
                              style={glassStyle}
                            >
                              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                                {plan.title}
                              </h3>
                              <div className="mb-4">
                                <span className="text-3xl font-bold">${plan.price}</span>
                                <span className="text-gray-400">/month</span>
                              </div>
                              <ul className="space-y-2 mb-6">
                                {plan.features.map((feature, j) => (
                                  <li key={j} className="flex items-center gap-2 text-sm">
                                    <Check size={14} style={{ color: 'var(--color-success)' }} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className={`w-full py-2.5 rounded-lg font-semibold ${plan.highlighted ? 'shadow-lg' : ''}`}
                                style={plan.highlighted ? { background: 'var(--gradient-main)' } : { background: 'var(--color-secondary)' }}
                              >
                                Get Started
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BrunouiColorStudioPro;