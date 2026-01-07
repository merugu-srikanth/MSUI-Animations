import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/NewLogo.png"
import Navbar from './Navbar';

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
            <main className="flex-grow pt-10 lg:pt-6">
  {children}
</main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-brand-secondary/30 py-12 mt-auto backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src={Logo} alt="Logo" className='h-8' />
                                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">XMS UI</span>
                            </div>
                            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                                Building the future of UI — one component at a time.
                                <br />Design once. Copy everywhere.
                            </p>
                            <div className="mt-4 text-xs text-brand-primary">
                                <a href="mailto:merugusrikanth28@gmail.com" className="hover:underline flex items-center gap-2">
                                    merugusrikanth28@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-12 text-sm">
                            <div className="flex flex-col space-y-3">
                                <span className="font-bold text-white mb-1">Explore</span>
                                <Link to="/components" className="text-gray-400 hover:text-brand-primary transition-colors">Components</Link>
                                <Link to="/dashboards" className="text-gray-400 hover:text-brand-primary transition-colors">Dashboards</Link>
                                <Link to="/templates" className="text-gray-400 hover:text-brand-primary transition-colors">Templates</Link>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <span className="font-bold text-white mb-1">Connect</span>
                                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">GitHub</a>
                                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Twitter</a>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <span className="font-bold text-white mb-1">Legal</span>
                                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Privacy</a>
                                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Terms</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600 flex justify-between items-center">
                        <span>&copy; {new Date().getFullYear()} XMS UI. All rights reserved.</span>
                        <span className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            Systems Operational
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
