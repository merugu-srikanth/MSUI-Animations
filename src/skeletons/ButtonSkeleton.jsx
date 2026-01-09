import React from 'react';

const ButtonSkeleton = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col h-72 animate-pulse">
                    <div className="h-48 bg-white/5"></div>
                    <div className="p-5 flex-1 space-y-3">
                        <div className="h-6 w-1/2 bg-white/5 rounded"></div>
                        <div className="h-4 w-full bg-white/5 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ButtonSkeleton;
