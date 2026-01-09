import React from 'react';
import { WEBS } from '../../constants/web';

const WebView = () => {
    return (
        <div className="w-full h-96 flex items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/5">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Web Templates Coming Soon</h3>
                <p className="text-gray-400">Full page templates will be available shortly.</p>
            </div>
        </div>
    );
};

export default WebView;
