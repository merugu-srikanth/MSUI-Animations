import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Rocket, Sparkles, Zap, Clock, Mail, Bell, Target, TrendingUp,
    Users, Shield, Code, Palette, Globe, Cpu, Database, Cloud,
    ArrowRight, Star, Eye, Download, ExternalLink, ChevronRight,
    Twitter, Github, Linkedin, Instagram, Send, CheckCircle
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
            staggerChildren: 0.08,
            delayChildren: 0.2,
            ease: "easeOut"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 100
        }
    }
};

const floatAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const pulseGlow = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// --- Background Effects Component ---
const BackgroundEffects = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
            animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/15 via-orange-500/10 to-transparent rounded-full blur-[120px]"
        />
        
        <motion.div
            animate={{
                x: [0, -150, 0],
                y: [0, 100, 0],
                scale: [1, 1.4, 1],
                rotate: [0, -180, -360]
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-600/10 via-pink-500/5 to-transparent rounded-full blur-[150px]"
        />
        
        {/* Particle System */}
        <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                    className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_70%)]" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: ['-100%', '200%']
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                    }}
                    className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"
                    style={{
                        top: `${(i + 1) * 12}%`,
                        transform: `rotate(${i * 10}deg)`
                    }}
                />
            ))}
        </div>
    </div>
);

// --- Countdown Timer Component ---
const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 3,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                
                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            // Reset to 3 hours when reaches 0
                            hours = 3;
                            minutes = 0;
                            seconds = 0;
                        }
                    }
                }
                
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Animated digit component
    const AnimatedDigit = ({ value, label }) => (
        <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
                {/* Glow effect */}
                <motion.div
                    animate={{
                        boxShadow: [
                            '0 0 20px rgba(250, 133, 32, 0.3)',
                            '0 0 40px rgba(250, 133, 32, 0.6)',
                            '0 0 20px rgba(250, 133, 32, 0.3)'
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-2xl bg-brand-primary/20 blur-xl"
                />
                
                {/* Main card */}
                <motion.div
                    // initial={{ scale: 0.9, rotateX: -90 }}
                    // animate={{ scale: 1, rotateX: 0 }}
                    // transition={{ 
                    //     type: "spring",
                    //     stiffness: 200,
                    //     damping: 15
                    // }}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group"
                >
                    {/* Shimmer effect */}
                    <motion.div
                        animate={{
                            x: ['-100%', '200%']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                    
                    {/* Animated dots background */}
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.1
                                }}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                }}
                            />
                        ))}
                    </div>
                    
                    {/* Digit */}
                    <motion.span 
                        key={value}
                        // initial={{ y: 20, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // transition={{ 
                        //     type: "spring",
                        //     stiffness: 300,
                        //     damping: 20
                        // }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-br from-white via-orange-100 to-brand-primary bg-clip-text text-transparent"
                    >
                        {value.toString().padStart(2, '0')}
                    </motion.span>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-brand-primary/50 rounded-tl-lg" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-brand-primary/50 rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-brand-primary/50 rounded-bl-lg" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand-primary/50 rounded-br-lg" />
                </motion.div>
            </div>
            
            {/* Label */}
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-sm sm:text-base font-semibold text-gray-300 uppercase tracking-wider"
            >
                {label}
            </motion.span>
        </motion.div>
    );

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="relative z-20"
        >
            {/* Timer Header */}
            <motion.div 
                variants={itemVariants}
                className="text-center mb-12"
            >
                <motion.div 
                    animate={pulseGlow}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary/20 to-orange-600/20 border border-brand-primary/30 mb-6"
                >
                    <Clock className="w-5 h-5 text-brand-primary animate-spin" style={{ animationDuration: '3s' }} />
                    <span className="text-lg font-bold text-white">Launching In</span>
                </motion.div>
                
                <motion.h3 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                >
                    Countdown to Launch
                </motion.h3>
                <motion.p 
                    variants={itemVariants}
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Get ready for something amazing! We're launching in:
                </motion.p>
            </motion.div>
            
            {/* Timer Display */}
            <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 mb-12"
            >
                <AnimatedDigit value={timeLeft.hours} label="Hours" />
                <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex flex-col justify-center"
                >
                    <div className="w-2 h-2 rounded-full bg-brand-primary mb-2" />
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                </motion.div>
                <AnimatedDigit value={timeLeft.minutes} label="Minutes" />
                <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    className="flex flex-col justify-center"
                >
                    <div className="w-2 h-2 rounded-full bg-brand-primary mb-2" />
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                </motion.div>
                <AnimatedDigit value={timeLeft.seconds} label="Seconds" />
            </motion.div>
            
            {/* Progress Bar */}
            <motion.div 
                variants={itemVariants}
                className="max-w-2xl mx-auto mb-12"
            >
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Launch Progress</span>
                    <span>{Math.floor(((3 * 3600 - (timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds)) / (3 * 3600)) * 100)}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                            width: `${((3 * 3600 - (timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds)) / (3 * 3600)) * 100}%`
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-primary to-orange-600 rounded-full relative overflow-hidden"
                    >
                        <motion.div
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Feature Card Component ---
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
            delay: delay,
            duration: 0.5,
            ease: "easeOut"
        }}
        whileHover={{ 
            y: -10,
            scale: 1.02,
            transition: { duration: 0.2 }
        }}
        className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
    >
        {/* Animated background */}
        <motion.div
            animate={{
                background: [
                    'radial-gradient(circle at 0% 0%, rgba(250,133,32,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(250,133,32,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(250,133,32,0.1) 0%, transparent 50%)'
                ]
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute inset-0"
        />
        
        {/* Icon container */}
        <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-orange-600/20 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(250,133,32,0.3)]"
        >
            <Icon className="w-8 h-8 text-brand-primary" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border border-brand-primary/30"
            />
        </motion.div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
            {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
            {description}
        </p>
        
        {/* Hover effect line */}
        <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-primary to-orange-600"
        />
    </motion.div>
);

// --- Email Subscription Component ---
const EmailSubscription = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubscribed(true);
        setLoading(false);
        toast.success("🎉 You're now on the waitlist! We'll notify you at launch.");
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
            setSubscribed(false);
        }, 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-2xl mx-auto"
        >
            {/* Animated border */}
            <motion.div
                animate={{
                    borderColor: [
                        'rgba(250,133,32,0.3)',
                        'rgba(250,133,32,0.6)',
                        'rgba(250,133,32,0.3)'
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-orange-500 to-yellow-500 rounded-3xl blur opacity-30"
            />
            
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10">
                <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center mb-8"
                >
                    <Bell className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-4">
                        {subscribed ? "You're In! 🎉" : "Get Notified at Launch"}
                    </h3>
                    <p className="text-gray-400">
                        {subscribed 
                            ? "We'll send you an exclusive early access link when we launch!"
                            : "Join our waitlist to be the first to know when we go live."
                        }
                    </p>
                </motion.div>
                
                {!subscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                required
                            />
                        </div>
                        
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 px-6 bg-gradient-to-r from-brand-primary to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Join Waitlist</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="text-center p-8"
                    >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                        <p className="text-xl text-gray-300 mb-6">
                            Thanks for joining! You'll be the first to know when we launch.
                        </p>
                        <button
                            onClick={() => setSubscribed(false)}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Add Another Email
                        </button>
                    </motion.div>
                )}
                
                <p className="text-center text-sm text-gray-500 mt-6">
                    We respect your privacy. No spam, ever.
                </p>
            </div>
        </motion.div>
    );
};

// --- Stats Component ---
const StatsCounter = () => {
    const [stats, setStats] = useState([
        { value: 0, label: 'Components', suffix: '+', target: 150 },
        { value: 0, label: 'Early Users', suffix: '+', target: 1250 },
        { value: 0, label: 'Code Lines', suffix: 'K', target: 45 },
        { value: 0, label: 'Hours Saved', suffix: 'K+', target: 12 }
    ]);

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
            const increment = stat.target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    current = stat.target;
                    clearInterval(timer);
                }
                
                setStats(prev => {
                    const newStats = [...prev];
                    newStats[index] = { ...newStats[index], value: Math.floor(current) };
                    return newStats;
                });
            }, 20);

            return timer;
        });

        return () => intervals.forEach(timer => clearInterval(timer));
    }, []);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200
                        }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary/20 to-orange-600/20 border border-white/10 flex items-center justify-center mx-auto mb-4"
                    >
                        <TrendingUp className="w-8 h-8 text-brand-primary" />
                    </motion.div>
                    <motion.div
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-brand-primary bg-clip-text text-transparent mb-2"
                    >
                        {stat.value}
                        <span className="text-brand-primary">{stat.suffix}</span>
                    </motion.div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
            ))}
        </motion.div>
    );
};

// --- Main ComingSoon Component ---
const ComingSoon = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 40,
        restDelta: 0.001
    });

    const features = [
        {
            icon: Code,
            title: "Advanced Components",
            description: "Cutting-edge UI components built with the latest web technologies."
        },
        {
            icon: Palette,
            title: "Design System",
            description: "Complete design system with customizable themes and variables."
        },
        {
            icon: Globe,
            title: "Global Support",
            description: "Multi-language and RTL support for international applications."
        },
        {
            icon: Cpu,
            title: "High Performance",
            description: "Optimized for speed and smooth 60fps animations."
        },
        {
            icon: Database,
            title: "Data Visualization",
            description: "Beautiful charts and graphs for data-driven applications."
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level security and compliance features built-in."
        }
    ];

    return (
        <MainLayout>
            <ToastContainer 
                position="top-right"
                theme="dark"
                autoClose={3000}
                newestOnTop
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-orange-500 to-yellow-500 origin-left z-40"
                style={{ scaleX }}
            />

            <BackgroundEffects />

            <div className="relative overflow-hidden">
                {/* --- HERO SECTION --- */}
                <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 s">
                    <div className="max-w-7xl mx-auto w-full text-center relative z-10">
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary/20 to-orange-600/20 border border-brand-primary/30 mb-8"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-primary to-orange-600"
                            />
                            <span className="text-lg font-bold text-white">🚀 Coming Soon</span>
                            <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="text-5xl sm:text-6xl md:text-5xl lg:text-5xl font-black text-white mb-8 tracking-tight"
                        >
                            <motion.span
                                variants={itemVariants}
                                className=""
                            >
                                Something {" "}
                            </motion.span>
                            <motion.span
                                variants={itemVariants}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-400 to-yellow-400 animate-gradient-x"
                            >
                                Amazing{" "}
                            </motion.span>
                            <motion.span
                                variants={itemVariants}
                                className=""
                            >
                                Is Coming
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            We're building the next generation of web development tools. 
                            Get ready for a revolution in how you build modern applications.
                        </motion.p>

                        {/* CTA Buttons */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4 mb-16"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-brand-primary to-orange-600 text-white font-bold rounded-full overflow-hidden transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                                <span className="relative flex items-center gap-3">
                                    <Bell className="w-5 h-5" />
                                    Notify Me at Launch
                                </span>
                            </motion.button>
                            
                            <motion.a
                                href="#features"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-3"
                            >
                                <Eye className="w-5 h-5" />
                                <span>Preview Features</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div> */}

                        {/* Floating Elements */}
                        <motion.div
                            animate={floatAnimation}
                            className="absolute top-1/4 left-10 hidden lg:block"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-primary/10 to-transparent border border-white/10 backdrop-blur-sm flex items-center justify-center">
                                <Rocket className="w-12 h-12 text-brand-primary" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                ...floatAnimation,
                                transition: { ...floatAnimation.transition, delay: 1 }
                            }}
                            className="absolute top-1/3 right-10 hidden lg:block"
                        >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent border border-white/10 backdrop-blur-sm flex items-center justify-center">
                                <Zap className="w-10 h-10 text-orange-500" />
                            </div>
                        </motion.div>
                    </div>

                   
                </section>

                {/* --- COUNTDOWN SECTION --- */}
                <section className=" relative">
                    <div className="max-w-6xl mx-auto">
                        <CountdownTimer />
                    </div>
                </section>

                {/* --- FEATURES SECTION --- */}
                <section id="features" className="py-20 px-4 sm:px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <motion.div
                                animate={pulseGlow}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-brand-primary" />
                                <span className="text-sm font-semibold text-brand-primary">What's Coming</span>
                            </motion.div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-600">Features</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Experience the future of web development with our groundbreaking features
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={feature.title}
                                    {...feature}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- STATS SECTION --- */}
                <section className="py-20 px-4 sm:px-6 relative">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-600">Numbers</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Join thousands of developers who are already excited about our launch
                            </p>
                        </motion.div>

                        <StatsCounter />
                    </div>
                </section>

                {/* --- EMAIL SUBSCRIPTION --- */}
                <section className="py-20 px-4 sm:px-6 relative">
                    <div className="max-w-6xl mx-auto">
                        <EmailSubscription />
                    </div>
                </section>

                {/* --- SOCIAL LINKS --- */}
                <section className="py-20 px-4 sm:px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-8"
                        >
                            Follow Our Journey
                        </motion.h3>
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {[
                                { icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600', link: '#' },
                                { icon: Github, label: 'GitHub', color: 'from-gray-700 to-black', link: '#' },
                                { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800', link: '#' },
                                { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600', link: '#' }
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative p-6 rounded-2xl bg-gradient-to-br ${social.color} border border-white/20 backdrop-blur-sm transition-all`}
                                >
                                    <social.icon className="w-8 h-8 text-white" />
                                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default ComingSoon;