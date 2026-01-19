import React, { useState, useEffect } from 'react';
import { Terminal, CreditCard, Activity, ShieldCheck } from 'lucide-react';

const CodeToUIHero = () => {
    const [codeText, setCodeText] = useState('');
    const [showUI, setShowUI] = useState(false);

    const fullCode = `const App = () => {
  return (
    <Card>
      <Header>Payment Secure</Header>
      <Status>Active</Status>
    </Card>
  );
};`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCodeText(fullCode.slice(0, i));
            i++;
            if (i > fullCode.length) {
                clearInterval(interval);
                setShowUI(true);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left: Code Editor */}
                <div className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-auto text-xs text-gray-400 font-mono flex items-center gap-1">
                            <Terminal size={12} /> app.jsx
                        </div>
                    </div>
                    <div className="p-6 h-[300px] font-mono text-sm leading-relaxed overflow-hidden relative">
                        <pre className="text-gray-300">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">App</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> {'{'}
                            {'\n'}  <span className="text-purple-400">return</span> (
                            {'\n'}    <span className="text-blue-400">&lt;Card&gt;</span>
                            {'\n'}      <span className="text-blue-400">&lt;Header&gt;</span>Payment Secure<span className="text-blue-400">&lt;/Header&gt;</span>
                            {'\n'}      <span className="text-blue-400">&lt;Status&gt;</span>Active<span className="text-blue-400">&lt;/Status&gt;</span>
                            {'\n'}    <span className="text-blue-400">&lt;/Card&gt;</span>
                            {'\n'}  );
                            {'\n'}{'}'};
                        </pre>
                        {/* Typing Cursor Overlay - Visual approximation of typing */}
                        <div className="absolute inset-0 bg-[#1e1e1e]/90" style={{
                            clipPath: `polygon(0 0, 100% 0, 100% ${(codeText.length / fullCode.length) * 100}%, 0 ${(codeText.length / fullCode.length) * 100}%)`,
                            transition: 'clip-path 0.1s linear',
                            display: showUI ? 'none' : 'block'
                        }} />

                        {/* Blinking Cursor if typing is active */}
                        {!showUI && (
                            <div className="absolute inline-block w-2 h-4 bg-orange-500 animate-pulse ml-1"
                                style={{
                                    left: `${(codeText.length % 30) * 8}px`,
                                    top: `${Math.floor(codeText.length / 30) * 24 + 24}px`
                                }}
                            />
                        )}
                    </div>
                </div>

                {/* Right: Live UI */}
                <div className={`transition-all duration-1000 transform ${showUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                        <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Dashboard</h2>
                                    <p className="text-gray-400 text-sm">Real-time overview</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Activity className="text-orange-500" size={20} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Card 1 */}
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                            <CreditCard size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm">Total Revenue</h4>
                                            <p className="text-xs text-gray-500">Last 30 days</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-lg">$45,231.89</span>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm">System Status</h4>
                                            <p className="text-xs text-gray-500">All systems operational</p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20">Active</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all active:scale-[0.98]">
                                    View Detailed Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CodeToUIHero;
