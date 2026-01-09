import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col aspect-[3/4] animate-pulse">
                    <div className="flex-1 bg-white/5 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div className="p-4 h-24 border-t border-white/5">
                        <div className="h-6 w-1/3 bg-white/5 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardSkeleton;
