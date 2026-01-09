import React from 'react';
import { HEROES } from '../../constants/hero';

const HeroView = () => {
    return (
        <div className="w-full h-96 flex items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/5">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Hero Sections Coming Soon</h3>
                <p className="text-gray-400">We are crafting immersive 3D hero sections for you.</p>
            </div>
        </div>
    );
};

export default HeroView;
