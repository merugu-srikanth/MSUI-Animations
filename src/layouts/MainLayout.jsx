import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/NewLogo.png"
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-dark text-white font-sans flex flex-col relative z-0">
            {/* Animated Background */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#000000]"></div>
                <div className="absolute w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] top-[-100px] left-[-100px] animate-pulse"></div>
                <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] bottom-[10%] right-[10%] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow md:pt-10 pt-15 px-5 lg:pt-6">
                {children}
            </main>

            <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-br from-black via-[#0f0f18] to-black backdrop-blur-xl">

                {/* Glow Background */}
                <motion.div
                    className="absolute -top-32 -left-32 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full"
                    animate={{ scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between gap-12">

                        {/* Brand */}
                        <div className="max-w-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={Logo} alt="Logo" className="h-9" />

                            </div>
                            <span className="text-brand-primary">Copy the design. Use it anywhere.</span>


                            {/* Social Icons */}
                            <div className="flex items-center gap-4 mt-2">
                                <p>Follow us on</p>
                                {/* GitHub */}
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.19.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>


                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-all duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75z" />
                                    </svg>
                                </a>

                            </div>
                        </div>

                        <div> <p className="text-gray-400 text-xl leading-relaxed">
                            Building the future of UI — one component at a time.

                        </p>

                            <a
                                href="mailto:merugusrikanth28@gmail.com"
                                className="inline-flex items-center gap-2  text-sm text-orange-400 hover:text-brand-primary transition-colors"
                            >
                                <span className='text-white'>Email:</span> merugusrikanth28@gmail.com
                            </a></div>

                        {/* Links */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
                {[
                    {
                        title: "Explore",
                        links: [
                            { label: "Components", to: "/components" },
                            { label: "Dashboards", to: "/dashboards" },
                            { label: "Templates", to: "/templates" },
                        ],
                    },
                    {
                        title: "Connect",
                        links: [
                            { label: "GitHub", to: "#" },
                            { label: "Twitter", to: "#" },
                        ],
                    },
                    {
                        title: "Legal",
                        links: [
                            { label: "Privacy", to: "#" },
                            { label: "Terms", to: "#" },
                        ],
                    },
                ].map((section, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <span className="font-semibold text-white tracking-wide">
                            {section.title}
                        </span>
                        {section.links.map((link, j) =>
                            link.to.startsWith("/") ? (
                                <Link
                                    key={j}
                                    to={link.to}
                                    className="text-gray-400 hover:text-brand-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    key={j}
                                    href={link.to}
                                    className="text-gray-400 hover:text-brand-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </div>
                ))}
            </div> */}
                    </div>





                    {/* Bottom Bar */}
                    <div className="mt-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <span>
                            © {new Date().getFullYear()} BRUNOUI. All rights reserved.
                        </span>

                        <div className="flex items-center gap-2 text-green-400">
                            {/* <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span> */}
                            <span className="flex items-center gap-1 text-sm text-gray-400">
                                Crafted with <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" /> by Team <span className='text-brand-primary animate-pulse'>BRUNOUI</span>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
