import React from "react";
// import "./BrunoUIChipLoader.css";
import { motion } from "framer-motion";
import Logo from '../../assets/NewLogo.png';





const BrunoUIChipLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex
           items-center justify-center
           pointer-events-none
           max-w-full xl:max-w-[720px]
           drop-shadow-3xl shadow-xl shadow-amber-500 rounded-3xl
           "
        >

            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="brunoui-chip-loader__container">
                <div className="brunoui-chip-loader">
                    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="brunoui-chipGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2d2d2d" />
                                <stop offset="100%" stopColor="#0f0f0f" />
                            </linearGradient>

                            <linearGradient id="brunoui-textGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#eeeeee" />
                                <stop offset="100%" stopColor="#888888" />
                            </linearGradient>

                            <linearGradient id="brunoui-pinGradient" x1="1" y1="0" x2="0" y2="0">
                                <stop offset="0%" stopColor="#bbbbbb" />
                                <stop offset="50%" stopColor="#888888" />
                                <stop offset="100%" stopColor="#555555" />
                            </linearGradient>
                        </defs>

                        {/* Traces */}
                        <g>
                            {[
                                ["M100 100 H200 V210 H326", "purple"],
                                ["M80 180 H180 V230 H326", "blue"],
                                ["M60 260 H150 V250 H326", "yellow"],
                                ["M100 350 H200 V270 H326", "green"],
                                ["M700 90 H560 V210 H474", "blue"],
                                ["M740 160 H580 V230 H474", "green"],
                                ["M720 250 H590 V250 H474", "red"],
                                ["M680 340 H570 V270 H474", "yellow"],
                            ].map(([d, color], i) => (
                                <g key={i}>
                                    <path d={d} className="brunoui-chip-loader__trace-bg" />
                                    <path
                                        d={d}
                                        className={`brunoui-chip-loader__trace-flow brunoui-chip-loader__${color}`}
                                    />
                                </g>
                            ))}
                        </g>

                        {/* Chip body */}
                        <rect
                            x="330"
                            y="190"
                            width="140"
                            height="100"
                            rx="20"
                            ry="20"
                            fill="url(#brunoui-chipGradient)"
                            stroke="#222"
                            strokeWidth="3"
                            filter="drop-shadow(0 0 6px rgba(0,0,0,0.8))"
                        />

                        {/* Pins */}
                        {[205, 225, 245, 265].map((y) => (
                            <React.Fragment key={y}>
                                <rect x="322" y={y} width="8" height="10" rx="2" fill="url(#brunoui-pinGradient)" />
                                <rect x="470" y={y} width="8" height="10" rx="2" fill="url(#brunoui-pinGradient)" />
                            </React.Fragment>
                        ))}

                        {/* Text */}
                        {/* <text
                            x="400"
                            y="240"
                            fontFamily="Arial, sans-serif"
                            fontSize="22"
                            fill="url(#brunoui-textGradient)"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                        >
                            Loading
                        </text> */}
                        <foreignObject x="335" y="205" width="130" height="75">
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={Logo} alt="MS Logo" className="max-w-full max-h-full object-contain drop-shadow-lg animate-[shimmer_1.6s_ease-in-out_infinite]" />
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default BrunoUIChipLoader;
