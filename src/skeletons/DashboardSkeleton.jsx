import React from 'react';

const DashboardSkeleton = () => {
    return (
        <div className="w-full space-y-12">
            {[1, 2].map((i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col animate-pulse">
                    <div className="p-6 border-b border-white/5 flex justify-between">
                        <div className="space-y-2 w-1/2">
                            <div className="h-8 w-1/3 bg-white/5 rounded"></div>
                            <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                        </div>
                    </div>
                    <div className="h-[600px] bg-white/5"></div>
                </div>
            ))}
        </div>
    );
};

export default DashboardSkeleton;
