import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
    Menu,
    X,
    Zap,
    Github,
    Layers,
    FileCode,
    Layout,
    Star,
    Mail,
} from "lucide-react";
import Logo from "../assets/NewLogo.png";

/* ---------------- Animations ---------------- */

const mobileMenuVariants = {
    closed: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

/* ---------------- Mobile Sidebar ---------------- */

const MobileSidebar = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
                />

                {/* Sidebar */}
                <motion.div
                    variants={mobileMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="fixed left-0 top-0 h-full w-64
                     bg-black/95 backdrop-blur-xl
                     border-r border-white/10
                     z-50 lg:hidden"
                >
                    <div className="p-6 relative">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <Link to="/" onClick={onClose}>
                                <img src={Logo} alt="Logo" className="h-10" />
                            </Link>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="space-y-2">
                            {[
                                { label: "Components", to: "/components", icon: Layers },
                                { label: "Docs", to: "/coming-soon", icon: FileCode },
                                { label: "Examples", to: "/coming-soon", icon: Layout },
                                { label: "Pricing", to: "/coming-soon", icon: Star },
                                { label: "Contact", to: "/coming-soon", icon: Mail },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    onClick={onClose}
                                    className="flex items-center gap-3 px-4 py-3
                             rounded-xl text-gray-300
                             hover:text-white hover:bg-white/10"
                                >
                                    <item.icon size={20} />
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="my-6 border-t border-white/10" />

                        {/* CTA */}
                        <Link
                            to="/components"
                            onClick={onClose}
                            className="flex items-center justify-center gap-2
                         w-full py-3
                         bg-gradient-to-r from-brand-primary to-orange-600
                         text-black font-bold rounded-xl"
                        >
                            <Zap size={18} />
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
);

/* ---------------- Navbar ---------------- */

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 30);
    });

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <motion.header
                animate={{
                    height: isScrolled ? "64px" : "80px",
                    backgroundColor: isScrolled
                        ? "rgba(0,0,0,0.75)"
                        : "rgba(0,0,0,0.4)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="hidden lg:flex fixed top-0 left-0 right-0 z-40
                   backdrop-blur-xl border-b border-white/10"
            >
                <div
                    className={`max-w-7xl mx-auto w-full px-6
          flex items-center justify-between transition-all duration-300
          ${isScrolled ? "py-2" : "py-4"}`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <motion.img
                            src={Logo}
                            alt="Logo"
                            animate={{ height: isScrolled ? 32 : 40 }}
                            transition={{ duration: 0.25 }}
                        />
                    </Link>

                    {/* Links */}
                    <nav className="flex items-center gap-8 text-sm font-medium">
                        {[
                            { label: "Components", to: "/components" },
                            { label: "Docs", to: "/coming-soon" },
                            { label: "Examples", to: "/coming-soon" },
                            { label: "Pricing", to: "/coming-soon" },
                        ].map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `transition-colors ${isActive
                                        ? "text-brand-primary"
                                        : "text-gray-300 hover:text-white"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            <Github size={20} />
                        </a>

                        <Link
                            to="/components"
                            className="px-5 py-2.5 rounded-full
                         bg-brand-primary text-black
                         font-bold text-sm hover:opacity-90"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* ================= MOBILE NAVBAR ================= */}
            <motion.div
                animate={{
                    height: isScrolled ? "56px" : "72px",
                    backgroundColor: isScrolled
                        ? "rgba(0,0,0,0.85)"
                        : "rgba(0,0,0,1)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:hidden fixed top-0 left-0 right-0 z-50
                   backdrop-blur-xl border-b border-white/10"
            >
                <div className="flex items-center justify-between px-4 h-full">
                    <Link to="/">
                        <motion.img
                            src={Logo}
                            alt="Logo"
                            animate={{ height: isScrolled ? 28 : 36 }}
                            transition={{ duration: 0.25 }}
                        />
                    </Link>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 rounded-xl
                       bg-white/10 backdrop-blur-md
                       border border-white/20
                       text-white hover:bg-white/20"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </motion.div>

            {/* ================= SIDEBAR ================= */}
            <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;
