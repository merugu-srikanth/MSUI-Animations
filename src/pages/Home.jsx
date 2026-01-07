import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import {
    Code, Layers, Zap, Check, Github, ArrowRight, Layout, Mail,
    FileCode, Sparkles, Globe, Shield, Palette, Cpu, Rocket, Star,
    MousePointerClick, Download, Eye, Menu, X
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../layouts/MainLayout';
import Logo from '../assets/NewLogo.png';

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const mobileMenuVariants = {
    closed: {
        x: '-100%',
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    open: {
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const floatAnimation = {
    y: [0, -15, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// --- Components ---

const BackgroundEffects = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Animated Gradient Orbs - Optimized for mobile */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 45, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[60px] md:blur-[120px]"
        />
        <motion.div
            animate={{
                scale: [1, 1.1, 1],
                x: [0, 50, 0],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-purple-900/20 rounded-full blur-[75px] md:blur-[150px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[900px] md:h-[900px] bg-blue-900/10 rounded-full blur-[75px] md:blur-[150px]" />

        {/* Moving Grid Pattern - Optimized for mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
    </div>
);

const FloatingChip = ({ icon: Icon, label, code, className, delay = 0 }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast.success("Code copied!", {
            style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' }
        });
    };

    return (
        <motion.button
            onClick={handleCopy}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
                opacity: { duration: 0.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.05, y: -15, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className={`absolute hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            text-sm text-gray-300 hover:text-white hover:border-brand-primary/50
            shadow-lg hover:shadow-brand-primary/20 transition-all cursor-pointer z-20 ${className}`}
        >
            <div className="p-1.5 rounded-full bg-brand-primary/20 text-brand-primary">
                <Icon size={14} />
            </div>
            <span className="font-medium">{label}</span>
        </motion.button>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        variants={itemVariants}
        className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,133,32,0.2)]"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

        <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Icon size={24} className="text-brand-primary drop-shadow-[0_0_15px_rgba(250,133,32,0.5)] md:size-[28px]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
        </div>
    </motion.div>
);



const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    return (
        <MainLayout>
            <ToastContainer position="bottom-center" theme="dark" newestOnTop />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0 shadow-2xl bg-brand-primary origin-left z-40"
                style={{ scaleX }}
            />

            {/* <BackgroundEffects /> */}

            <div className="relative overflow-hidden">
                {/* --- HERO SECTION --- */}
                <section
                    ref={heroRef}
                    className="relative flex items-center min-h-scree
             px-0 py-6  md:px-10 lg:px-6
              md:py-16 "
                >
                    <div className="max-w-7xl mx-auto w-full grid
                grid-cols-1 lg:grid-cols-2
                gap-10 md:gap-12 lg:gap-16
                items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="text-left relative z-10"
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold mb-6 md:mb-8">
                                <Sparkles size={16} />
                                <span>Version 2.0 Released</span>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
                                Find
                                <span className="mx-2 md:mx-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 animate-gradient-x">
                                    Stunning UIs
                                </span>
                                <br />
                                <span className="relative">
                                    In Minutes
                                    <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-brand-primary opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 23.6068 1.99999 56.6366 2.00001C117.917 2.00005 158.423 6.99995 198.001 6.99995" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /> </svg>
                                </span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-lg leading-relaxed">
                                A premium collection of production-ready components.
                                <span className="text-brand-primary font-medium"> Copy & Paste & Ship. </span>
                                Beautifully designed, fully accessible, and completely customizable.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row
             gap-3 md:gap-4
             items-stretch sm:items-center"
                            >
                                <Link
                                    to="/components"
                                    className="group relative inline-flex
               w-full sm:w-auto
               justify-center sm:justify-start
               items-center gap-2 md:gap-3
               px-6 md:px-8 py-3 md:py-4
               bg-brand-primary text-black font-bold
               rounded-full overflow-hidden
               transition-transform hover:scale-105
               text-sm md:text-base"
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <Zap size={18} className="fill-black md:size-[20px]" />
                                    Browse Components
                                </Link>

                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex
               w-full sm:w-auto
               justify-center sm:justify-start
               items-center gap-2 md:gap-3
               px-6 md:px-8 py-3 md:py-4
               bg-white/5 border border-white/10
               text-white font-semibold rounded-full
               hover:bg-white/10 transition-colors
               backdrop-blur-md
               text-sm md:text-base"
                                >
                                    <Github size={18} className="md:size-[20px]" />
                                    Star on GitHub
                                </a>
                            </motion.div>

                        </motion.div>

                        {/* Interactive Hero Visual - Circuit Waves */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:flex
           items-center justify-center
           pointer-events-none
           max-w-full xl:max-w-[720px]
           drop-shadow-2xl shadow-2xl shadow-amber-500 rounded-3xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse" />

                            {/* Circuit SVG Animation */}
                            <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl overflow-visible">
                                {/* <defs>
                                    <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(250, 133, 32, 0)" />
                                        <stop offset="50%" stopColor="rgba(250, 133, 32, 0.5)" />
                                        <stop offset="100%" stopColor="rgba(250, 133, 32, 0)" />
                                    </linearGradient>
                                </defs> */}

                                {/* Rotating Rings */}
                                <g className="origin-center animate-[spin_10s_linear_infinite]">
                                    <circle cx="400" cy="235" r="130" className="fill-none stroke-white/10 stroke-1 [stroke-dasharray:20_10]" />
                                </g>
                                <g className="origin-center animate-[spin-reverse_15s_linear_infinite]">
                                    <circle cx="400" cy="235" r="115" className="fill-none stroke-brand-primary/20 stroke-1 [stroke-dasharray:10_10] [stroke-dashoffset:10]" />
                                </g>

                                {/* Traces - Left */}
                                <path d="M100 90 H230 V200 H330" className="fill-none stroke-brand-primary stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="100" cy="90" r="7" className="fill-brand-primary animate-pulse" />

                                <path d="M100 180 H200 V240 H330" className="fill-none stroke-white stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="100" cy="180" r="7" className="fill-white animate-pulse" />

                                <path d="M100 270 H220 V260 H330" className="fill-none stroke-brand-primary stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="100" cy="270" r="7" className="fill-brand-primary animate-pulse" />

                                {/* Traces - Right */}
                                <path d="M700 90 H570 V200 H470" className="fill-none stroke-brand-primary stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="700" cy="90" r="7" className="fill-brand-primary animate-pulse" />

                                <path d="M700 180 H580 V240 H470" className="fill-none stroke-white stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="700" cy="180" r="7" className="fill-white animate-pulse" />

                                <path d="M700 270 H560 V260 H470" className="fill-none stroke-brand-primary stroke-2 [stroke-dasharray:80_420] [stroke-dashoffset:500] animate-[flow_3s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
                                <circle cx="700" cy="270" r="7" className="fill-brand-primary animate-pulse" />

                                {/* Scanning Beam */}
                                <rect x="330" y="190" width="140" height="90" fill="url(#scanGradient)" className="animate-[scan_3s_ease-in-out_infinite] blend-overlay pointer-events-none" />

                                {/* Rounded Waves */}
                                <circle cx="400" cy="235" className="fill-none stroke-brand-primary stroke-2 opacity-0 animate-[waveExpand_3.2s_ease-out_infinite]" />
                                <circle cx="400" cy="235" className="fill-none stroke-brand-primary stroke-2 opacity-0 animate-[waveExpand_3.2s_ease-out_infinite] [animation-delay:1.2s]" />
                                <circle cx="400" cy="235" className="fill-none stroke-brand-primary stroke-2 opacity-0 animate-[waveExpand_3.2s_ease-out_infinite] [animation-delay:2.4s]" />

                                {/* Center Chip / Logo Container */}
                                <rect
                                    x="330"
                                    y="190"
                                    width="140"
                                    height="90"
                                    rx="22"
                                    fill="#111"
                                    stroke="#FA8520"
                                    strokeWidth="1.5"
                                    className="animate-[chipPulse_2.6s_ease-in-out_infinite]"
                                />

                                {/* Pins */}
                                <g fill="#FA8520" className=''>
                                    <rect x="322" y="210" width="8" height="12" rx="3" />
                                    <rect x="322" y="235" width="8" height="12" rx="3" />
                                    <rect x="322" y="260" width="8" height="12" rx="3" />

                                    <rect x="470" y="210" width="8" height="12" rx="3" />
                                    <rect x="470" y="235" width="8" height="12" rx="3" />
                                    <rect x="470" y="260" width="8" height="12" rx="3" />
                                </g>

                                {/* Logo in Center */}
                                <foreignObject x="345" y="205" width="110" height="60">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <img src={Logo} alt="MS Logo" className="max-w-full max-h-full object-contain drop-shadow-lg animate-[shimmer_1.6s_ease-in-out_infinite]" />
                                    </div>
                                </foreignObject>
                            </svg>

                            {/* Floating Interactables (kept for extra flair) */}
                            <div className='pointer-events-auto'>
                                <FloatingChip
                                    icon={Rocket}
                                    label="XMS UI"
                                    code="npm i xms-ui"
                                    className="-right-4 top-1"
                                    delay={0}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- FEATURES GRID --- */}
                <section className="relative z-10
                 md:py-24 lg:py-22 p-0 py-10
                   ">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="text-center mb-8 sm:mb-10 md:mb-20"
                        >

                            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-1 md:mb-6">


                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 animate-gradient-x">                                Everything you need to
                                </span>

                            </h2>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                                Scale Your App                            </h2>
                            <p className="text-gray-400
              text-sm sm:text-base md:text-lg
              max-w-full sm:max-w-2xl
              mx-auto
              px-2 sm:px-4">
                                Technical excellence meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 animate-gradient-x font-bold">visual perfection</span>. Our components are built to handle production-grade requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
           gap-3 sm:gap-4 md:gap-6"
                        >
                            <FeatureCard
                                icon={FileCode}
                                title="Copy & Paste"
                                desc="Clean code snippets ready to drop into your project. No complex configs."
                            />
                            <FeatureCard
                                icon={Palette}
                                title="Themable"
                                desc="Built on Tailwind CSS. Customize colors, spacing, and typography instantly."
                            />
                            <FeatureCard
                                icon={Sparkles}
                                title="Framer Motion"
                                desc="Powered by the best animation library for React. Butter smooth 60fps."
                            />
                            <FeatureCard
                                icon={Globe}
                                title="Accessible"
                                desc="WAI-ARIA compliant. Keyboard navigation and screen reader friendly."
                            />
                        </motion.div>
                    </div>
                </section>

                {/* --- HOW IT WORKS --- */}
                <section
                    className="relative bg-white/5 border-y border-white/5 backdrop-blur-sm
             py-10 sm:py-12 md:py-20 lg:py-24"
                >
                    <div className="absolute inset-0 bg-brand-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
                    <div className="max-w-7xl mx-auto
                px-4 sm:px-6 md:px-8
                relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8 sm:mb-10 md:mb-16"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl
               font-bold text-white
               mb-3 sm:mb-4">
                                Workflow</h2>
                            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3
                gap-4 sm:gap-5 md:gap-8">

                            {[
                                { number: "01", title: "Browse", desc: "Find the component you need from our extensive gallery." },
                                { number: "02", title: "Copy", desc: "Click the copy button to grab the JSX and Tailwind code." },
                                { number: "03", title: "Ship", desc: "Paste it into your codebase and you're good to go." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative flex flex-col items-center text-center group
           px-2 sm:px-0"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                text-xl sm:text-2xl md:text-3xl
                mb-3 sm:mb-4 md:mb-6
                rounded-2xl bg-gradient-to-br from-brand-primary to-orange-600
                flex items-center justify-center font-bold text-black
                shadow-[0_10px_30px_rgba(250,133,32,0.3)]
                group-hover:scale-110 transition-transform">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                                    <p className="text-gray-400
              text-xs sm:text-sm md:text-base
              max-w-xs
              px-2 sm:px-4 md:px-0">
                                        {step.desc}</p>

                                    {i !== 2 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -translate-x-1/2 -z-10" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CATEGORIES & CTA --- */}
                <section className="py-20 md:py-32 px-0  relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-0 py-5 md:p-12 rounded-3xl md:rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 animate-gradient-x mb-2 md:mb-8">
                                Ready to Upgrade?
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                                Stop wasting time rebuilding standard components. Get the code that powers modern, high-performance web applications.
                            </p>
                            <Link
                                to="/components"
                                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-gray-200 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200"
                            >
                                <Rocket size={20} className="text-brand-primary md:size-[24px]" />
                                Start Building Free
                            </Link>

                            <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 font-medium text-sm md:text-base">
                                <span className="flex items-center gap-2"><Check size={16} className="text-green-500 md:size-[18px]" />JS & Typescript Ready</span>
                                <span className="flex items-center gap-2"><Check size={16} className="text-green-500 md:size-[18px]" /> Fully Responsive</span>
                                <span className="flex items-center gap-2"><Check size={16} className="text-green-500 md:size-[18px]" /> Dark Mode</span>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Home;