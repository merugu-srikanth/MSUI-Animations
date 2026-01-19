import React from 'react';
import { Layers, ArrowUpRight, Shield, Zap } from 'lucide-react';

const GlassMotionHero = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">

            {/* Animated Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] animate-[pulse_8s_infinite]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[150px] animate-[pulse_10s_infinite]" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-600/20 rounded-full blur-[150px] animate-[pulse_12s_infinite]" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium text-gray-300">v2.0 Now Available</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                            Future of
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            Glass UI
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Experience the next generation of interface design. Depth, blur, and motion combined to create immersive user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Get Started <ArrowUpRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
                            View Components
                        </button>
                    </div>
                </div>

                {/* Right Visual: Floating Glass Cards */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">

                    {/* Main Central Card */}
                    <div className="absolute z-20 w-80 h-96 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-between animate-[float_6s_ease-in-out_infinite]">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                <Layers className="text-white" size={24} />
                            </div>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/5">Pro</span>
                        </div>

                        <div className="space-y-4">
                            <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                            <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                            <div className="h-32 w-full bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/5" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Glass Stack</h3>
                            <p className="text-sm text-gray-400">Multi-layer depth engine</p>
                        </div>
                    </div>

                    {/* Floating Back Card 1 */}
                    <div className="absolute z-10 top-[10%] right-[10%] w-64 h-80 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-xl p-6 animate-[float_8s_ease-in-out_infinite] delay-1000 transform rotate-12">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                            <Shield className="text-blue-400" size={20} />
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-white/10 rounded-full" />
                            <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                        </div>
                    </div>

                    {/* Floating Back Card 2 */}
                    <div className="absolute z-30 bottom-[15%] left-[5%] w-72 h-40 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-xl shadow-2xl p-6 animate-[float_7s_ease-in-out_infinite] delay-2000 transform -rotate-6">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Zap className="text-green-400" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold">Fast Render</h4>
                                <p className="text-xs text-gray-400">60fps always</p>
                            </div>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[85%]" />
                        </div>
                    </div>

                </div>

            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
        </div>
    );
};

export default GlassMotionHero;
