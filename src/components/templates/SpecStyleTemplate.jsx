import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import { Search, ShoppingBag, Heart, User, Check, Apple, Play } from 'lucide-react';
// import 'lenis/dist/lenis.css' // Lenis CSS if needed, usually it's style-free

gsap.registerPlugin(ScrollTrigger);

const SpecStyleTemplate = () => {
    const mainGlassesRef = useRef(null);
    const heroGlassesRef = useRef(null);
    const heroNoGlassesRef = useRef(null);
    const floatingContainerRef = useRef(null);
    const categoriesTriggerRef = useRef(null);

    // Refs for navigation and hero animations
    const navRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroButtonsRef = useRef(null);

    useEffect(() => {
        // --- Scoped Selector for convenience ---
        const ctx = gsap.context(() => {

            // 1. Initial Load Animations
            const tl = gsap.timeline();

            tl.from(navRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(heroTitleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=0.2")
                .from(heroTextRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6")
                .from(heroButtonsRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8");

            // 2. The "Travel + Rotation" Animation for the Floating Glasses
            // We animate the "main-glasses" (initially hidden or positioned)
            // to move from its initial spot to the "landing spot" in the first card.

            // NOTE: In the user's script, it animates #main-glasses.
            // We need to coordinate this with the scroll.

            const travelTl = gsap.timeline({
                scrollTrigger: {
                    trigger: categoriesTriggerRef.current,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: 1.5,
                }
            });

            travelTl.to(mainGlassesRef.current, {
                left: "17%", // Approximate % based on card position in grid
                top: "54%",
                width: "200px", // Adjusted for card size
                rotation: 360,
                ease: "power2.inOut"
            })
                .to(mainGlassesRef.current, {
                    scale: 1.1,
                    duration: 0.3
                }, "-=0.2")
                .to(mainGlassesRef.current, {
                    scale: 1,
                    duration: 0.2
                });


            // 3. Stick Logic & Visibility Toggle
            // When scrolling down past hero, hide hero glasses and show floating one

            ScrollTrigger.create({
                trigger: document.body, // Start from top
                start: "1px top",
                onEnter: () => {
                    // Show floating glasses
                    gsap.to(mainGlassesRef.current, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });
                    // Hide hero glasses (static)
                    gsap.to(heroGlassesRef.current, { opacity: 0, duration: 0.35 });
                    // Show hero model without glasses
                    gsap.to(heroNoGlassesRef.current, { opacity: 1, duration: 0.35 });
                },
                onLeaveBack: () => {
                    // Hide floating glasses
                    gsap.to(mainGlassesRef.current, { opacity: 0, duration: 0.35 });
                    // Show hero glasses
                    gsap.to(heroGlassesRef.current, { opacity: 1, duration: 0.35 });
                    // Hide hero model without glasses
                    gsap.to(heroNoGlassesRef.current, { opacity: 0, duration: 0.35 });
                }
            });

            // 4. Stagger Animations for Cards
            gsap.from(".stagger-item", {
                scrollTrigger: {
                    trigger: categoriesTriggerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });

            // 5. Stagger Animations for Features
            gsap.from(".feature-stagger", {
                scrollTrigger: {
                    trigger: ".features-section", // We'll add this class
                    start: "top 75%",
                },
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 0.8
            });

            // Floating animation for specs in cards
            gsap.to(".eyewear-float", {
                y: -15,
                rotation: -2,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

            gsap.to(".eyewear-float-delay", {
                y: -15,
                rotation: -2,
                duration: 2,
                yoyo: true,
                repeat: -1,
                delay: 1,
                ease: "sine.inOut"
            });


        }); // End context

        return () => ctx.revert();
    }, []);

    return (
        <ReactLenis root>
            <div className="font-sans bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden min-h-screen relative">
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800&display=swap');
          
          .title-font { font-family: 'Playfair Display', serif; }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .glass-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 107, 53, 0.4);
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
          }
          
          .text-gradient {
            background: linear-gradient(90deg, #FF6B35 0%, #FF9A3D 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          
          .orange-gradient { background: linear-gradient(90deg, #FF6B35 0%, #FF9A3D 100%); }
          .orange-gradient-light { background: linear-gradient(90deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 154, 61, 0.1) 100%); }
          
          .btn-orange {
            background: linear-gradient(90deg, #FF6B35 0%, #FF9A3D 100%);
            color: white;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 107, 53, 0.5);
          }
          .btn-orange:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 15px 30px rgba(255, 107, 53, 0.3);
            border-color: #FF9A3D;
          }
          .btn-orange::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
          }
          .btn-orange:hover::before {
            left: 100%;
          }
          
          .nav-glass {
            background: rgba(10, 10, 10, 0.6);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
        `}</style>

                {/* Floating Glasses Container */}
                <div ref={floatingContainerRef} className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[100]">
                    <img
                        ref={mainGlassesRef}
                        src="https://pngimg.com/d/glasses_PNG54332.png" // Placeholder - Use User's Single-Glass.png ideally
                        alt="Floating Glasses"
                        className="absolute w-[21%] drop-shadow-2xl opacity-0"
                        style={{ top: '52.5%', left: '77.5%', transform: 'translate(-50%, -50%)' }}
                    />
                </div>

                {/* Navigation */}
                <nav ref={navRef} className="fixed top-0 left-0 w-full z-[50] px-6 md:px-10 py-6 transition-all duration-300">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="text-3xl font-bold">
                            <span className="text-gradient">SpecStyle</span>
                        </div>
                        <div className="hidden md:flex space-x-10 border p-4 border-orange-500/50 shadow-2xl backdrop-blur-md rounded-full bg-black/20">
                            {['Collections', 'Virtual Try-On', 'Technology', 'Stores'].map((link) => (
                                <a key={link} href="javascript:void(0)" className="hover:text-orange-400 transition-colors text-sm uppercase tracking-wide font-medium">{link}</a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-6">
                            <button className="text-xl hover:text-orange-400 transition-colors"><User size={20} /></button>
                            <button className="text-xl hover:text-orange-400 transition-colors"><Heart size={20} /></button>
                            <button className="text-xl hover:text-orange-400 transition-colors"><ShoppingBag size={20} /></button>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen pt-12 px-6 md:px-24 flex items-center">
                    <div className="max-w-2xl z-10">
                        <span ref={heroTitleRef} className="text-orange-400 font-bold tracking-widest uppercase text-sm flex items-center mb-4">
                            <span className="inline-block w-6 h-px bg-orange-400 mr-2"></span>
                            New Collection 2026
                        </span>
                        <h1 className="text-7xl md:text-8xl font-bold leading-tight title-font mb-6">
                            Visionary <br /><span className="text-gradient">Style.</span>
                        </h1>
                        <p ref={heroTextRef} className="text-slate-300 text-xl max-w-lg mb-10 leading-relaxed">
                            Don't just see the world, change how the world sees you. Premium eyewear engineered for the visionary using aerospace titanium.
                        </p>
                        <div ref={heroButtonsRef} className="flex flex-wrap gap-6">
                            <button className="btn-orange px-10 py-4 rounded-full font-bold shadow-lg shadow-orange-500/20">Get Started</button>
                            <button className="glass-card px-10 py-4 rounded-full font-bold hover:text-orange-400">Explore Collection</button>
                        </div>

                        {/* Stats */}
                        <div className="mt-20 flex space-x-12">
                            {[
                                { val: '250+', label: 'Unique Designs' },
                                { val: '98%', label: 'Satisfaction' },
                                { val: '24/7', label: 'Virtual Try-On' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-gradient">{stat.val}</div>
                                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Images Right Side */}
                    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-end pr-6 md:pr-20 pointer-events-none">
                        <div className="relative w-[420px] h-[520px]">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-[60px] blur-xl"></div>
                            <img
                                ref={heroGlassesRef}
                                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl"
                                alt="Model with Glasses"
                            />
                            <img
                                ref={heroNoGlassesRef}
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl opacity-0"
                                alt="Model without Glasses"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    </div>
                </section>

                {/* Collection Section */}
                <section ref={categoriesTriggerRef} className="min-h-screen py-32 px-6 md:px-10 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-20 text-center stagger-item">
                            <h2 className="text-5xl md:text-6xl font-bold title-font">The Collection</h2>
                            <div className="h-1 w-24 orange-gradient mt-6 rounded-full"></div>
                            <p className="text-slate-300 mt-6 max-w-2xl text-lg">Discover our curated collection of premium eyewear, designed for comfort, style, and innovation.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Card 1 */}
                            <div className="glass-card h-[520px] rounded-[40px] p-10 flex flex-col justify-between items-center text-center stagger-item group">
                                <div className="w-full">
                                    <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Premium</span>
                                    <h3 className="text-3xl font-bold mt-3 title-font">Eyeglasses</h3>
                                    <p className="text-slate-300 mt-4 text-sm">Precision-crafted lenses with anti-reflective coating.</p>
                                </div>
                                <div className="h-48 w-full flex items-center justify-center relative">
                                    {/* The main floating glasses target landing spot is approximately here visually */}
                                    <div className="w-48 h-32 orange-gradient-light rounded-full opacity-20 filter blur-xl absolute"></div>
                                </div>
                                <button className="btn-orange px-8 py-3 rounded-full font-bold text-sm">Explore Range</button>
                            </div>

                            {/* Card 2 */}
                            <div className="glass-card h-[520px] rounded-[40px] p-10 flex flex-col justify-between items-center text-center stagger-item group">
                                <div className="w-full">
                                    <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Designer</span>
                                    <h3 className="text-3xl font-bold mt-3 title-font">Sunglasses</h3>
                                    <p className="text-slate-300 mt-4 text-sm">UV-protected lenses with polarized technology.</p>
                                </div>
                                <img src="https://pngimg.com/d/glasses_PNG54332.png" className="w-56 eyewear-float drop-shadow-2xl" alt="Sunglasses" />
                                <button className="px-8 py-3 rounded-full font-bold border border-slate-700 hover:border-orange-400 transition-colors text-sm">Explore Range</button>
                            </div>

                            {/* Card 3 */}
                            <div className="glass-card h-[520px] rounded-[40px] p-10 flex flex-col justify-between items-center text-center stagger-item group">
                                <div className="w-full">
                                    <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Digital</span>
                                    <h3 className="text-3xl font-bold mt-3 title-font">Blue Light</h3>
                                    <p className="text-slate-300 mt-4 text-sm">Advanced blue light filtering for digital eye strain.</p>
                                </div>
                                <img src="https://pngimg.com/d/glasses_PNG54350.png" className="w-56 eyewear-float-delay drop-shadow-2xl" alt="Blue Light" />
                                <button className="px-8 py-3 rounded-full font-bold border border-slate-700 hover:border-orange-400 transition-colors text-sm">Explore Range</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section py-32 px-6 md:px-10 bg-gradient-to-b from-transparent to-black/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 feature-stagger">
                            <h2 className="text-5xl md:text-6xl font-bold title-font">Crafted for Perfection</h2>
                            <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">Each frame is engineered with precision, combining cutting-edge technology with timeless design.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: '💎', title: 'Premium Materials', desc: 'Aerospace-grade titanium and Italian acetate.' },
                                { icon: '👁️', title: 'Advanced Optics', desc: 'High-definition lenses with anti-reflective coating.' },
                                { icon: '📏', title: 'Perfect Fit', desc: 'Customizable nose pads and temple arms for comfort.' }
                            ].map((feature, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl feature-stagger hover:bg-white/5 transition-colors">
                                    <div className="w-16 h-16 orange-gradient rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg shadow-orange-500/20">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* App Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto orange-gradient-light rounded-[3rem] p-10 md:p-20 relative overflow-hidden border border-orange-500/20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold title-font">Virtual Try-On</h2>
                                <p className="text-slate-300 text-lg">Experience our 3D AI technology to try on any frame from the comfort of your home.</p>
                                <div className="space-y-4">
                                    {['Real-time 3D modeling', 'Light adjustment simulation', 'Share with friends feature'].map(item => (
                                        <div key={item} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full orange-gradient flex items-center justify-center text-black">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button className="flex items-center gap-2 bg-black px-6 py-3 rounded-xl border border-white/20 hover:bg-black/50 transition-colors">
                                        <Apple size={20} /> App Store
                                    </button>
                                    <button className="flex items-center gap-2 bg-black px-6 py-3 rounded-xl border border-white/20 hover:bg-black/50 transition-colors">
                                        <Play size={20} fill="currentColor" /> Google Play
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-64 h-[500px] border-8 border-gray-900 rounded-[2.5rem] bg-gray-800 shadow-2xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover" alt="App Screen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10 mt-20 bg-black relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
                    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                        <div className="text-2xl font-bold">
                            <span className="text-gradient">SpecStyle</span>
                        </div>
                        <div className="text-slate-500 text-sm">
                            © 2026 SpecStyle. Designed by Brunoui.in
                        </div>
                        <div className="flex gap-6 text-slate-400">
                            <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
                            <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
                        </div>
                    </div>
                </footer>

            </div>
        </ReactLenis>
    );
};

export default SpecStyleTemplate;
