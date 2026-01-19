import React, { useState, useEffect } from 'react';
import { Search, Copy, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const WorkflowHero = () => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev >= 3 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center p-6 relative overflow-hidden font-sans">

            {/* Background Subtle Pattern */}
            <div className="absolute inset-0 bg-[#fafafa]" />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">

                {/* Left Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                        <span className="font-semibold text-xs text-gray-600 uppercase tracking-wide">Simplified Workflow</span>
                    </div>

                    <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                        From Idea to <br />
                        <span className="text-orange-600">Ship in Seconds.</span>
                    </h1>

                    <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                        Stop wasting time on setup. Our streamlined process gets your components production-ready instantly.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Start Building Free
                        </button>
                        <button className="px-8 py-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl transition-colors">
                            Read Documentation
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" /> Free Forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" /> No Credit Card
                        </div>
                    </div>
                </div>

                {/* Right Visual: Animated Steps */}
                <div className="relative">

                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 hidden lg:block" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out hidden lg:block"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

                        {/* Step 1: Browse */}
                        <div className={`
               bg-white p-6 rounded-2xl border-2 transition-all duration-500
               ${step >= 1 ? 'border-orange-500 shadow-xl' : 'border-gray-200 shadow-sm opacity-50'}
            `}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${step >= 1 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                                <Search size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">1. Browse</h3>
                            <p className="text-sm text-gray-500 leading-snug">Find the perfect component from our library.</p>
                        </div>

                        {/* Step 2: Copy */}
                        <div className={`
               bg-white p-6 rounded-2xl border-2 transition-all duration-500
               ${step >= 2 ? 'border-orange-500 shadow-xl' : 'border-gray-200 shadow-sm opacity-50'}
            `}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${step >= 2 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                                <Copy size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">2. Copy</h3>
                            <p className="text-sm text-gray-500 leading-snug">One-click copy the React & Tailwind code.</p>
                        </div>

                        {/* Step 3: Ship */}
                        <div className={`
               bg-white p-6 rounded-2xl border-2 transition-all duration-500
               ${step >= 3 ? 'border-orange-500 shadow-xl' : 'border-gray-200 shadow-sm opacity-50'}
            `}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${step >= 3 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                                <Rocket size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">3. Ship</h3>
                            <p className="text-sm text-gray-500 leading-snug">Paste into your project. It just works.</p>
                        </div>

                    </div>

                    {/* Mobile progress indicator if needed, but styling optimized for desktop hero mainly */}

                </div>

            </div>
        </div>
    );
};

export default WorkflowHero;
