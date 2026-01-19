import React, { useState } from 'react';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import ViewCodeModal from '../ViewCodeModal/ViewCodeModal';
import { Eye, Code2 } from 'lucide-react';
import { BADGES } from '../../constants/badges';

const BadgeView = ({ searchQuery }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const filteredComponents = BADGES.filter(component => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            component.name.toLowerCase().includes(query) ||
            component.description?.toLowerCase().includes(query) ||
            component.tags?.some(tag => tag.toLowerCase().includes(query))
        );
    });

    if (filteredComponents.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No badges found matching "{searchQuery}"</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="group relative bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col items-center justify-center p-8"
                    >
                        {/* Top Right Code Icon */}
                        <div className="absolute top-3 right-3 z-50">
                            <button
                                onClick={() => setSelectedComponent(component)}
                                                            className="p-1 flex text-sm items-center justify-center gap-2 hover:bg-black/50 bg-brand-primary/20 hover:text-gray-400 text-brand-primary rounded-lg backdrop-blur-md border border-white/5 transition-colors"
                                title="View Code"
                            >
                                <Code2 size={16} /> Code
                            </button>
                        </div>



                        {/* Preview Area - Centralized for Badges */}
                        <div className="flex-1 flex items-center justify-center w-full min-h-[120px]">
                            <div className="relative z-10 scale-125">
                                <PreviewRenderer htmlCode={component.preview} />
                            </div>
                        </div> 

                        {/* Footer */}
                        {/* <div className="w-full mt-6 border-t border-white/5 pt-4">
                            <h3 className="text-sm font-medium text-center text-gray-300 mb-3">{component.name}</h3>
                            <button
                                onClick={() => setSelectedComponent(component)}
                                className="w-full py-2 flex items-center justify-center gap-2 bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 rounded-xl text-xs font-medium text-gray-300 hover:text-white transition-all group-hover:border-brand-primary/30"
                            >
                                <Code2 size={14} />
                                View Code
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>

            <ViewCodeModal
                isOpen={!!selectedComponent}
                onClose={() => setSelectedComponent(null)}
                code={selectedComponent?.code || {}}
            />
        </div>
    );
};

export default BadgeView;
