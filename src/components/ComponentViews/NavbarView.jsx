import React, { useState } from 'react';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import ViewCodeModal from '../ViewCodeModal/ViewCodeModal';
import { Eye, Code2 } from 'lucide-react';
import { NAVBARS } from '../../constants/navbar';

const NavbarView = ({ searchQuery }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const filteredComponents = NAVBARS.filter(component => {
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
                <p>No navigation components found matching "{searchQuery}"</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-[#121212]">
                            <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-brand-primary transition-colors">
                                {component.name}
                            </h3>
                        </div>

                        {/* Preview Area */}
                        <div className="relative h-[300px] bg-[#050505] overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />

                            {/* Top Right Code Icon */}
                            <div className="absolute top-3 right-3 z-10">
                                <button
                                    onClick={() => setSelectedComponent(component)}
                                    className="p-1 flex text-sm items-center justify-center gap-2 hover:bg-black/50 bg-brand-primary/20 hover:text-gray-400 text-brand-primary rounded-lg backdrop-blur-md border border-white/5 transition-colors"
                                    title="View Code"
                                >
                                    <Code2 size={16} /> Code
                                </button>
                            </div>

                            <div className="absolute inset-0">
                                <PreviewRenderer htmlCode={component.preview} />
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="p-4 border-t border-white/5 bg-[#0a0a0a]">
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                                {component.description}
                            </p>
                            {/* <button
                                onClick={() => setSelectedComponent(component)}
                                className="w-full mt-auto py-2.5 flex items-center justify-center gap-2 bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all group-hover:border-brand-primary/30"
                            >
                                <Code2 size={16} />
                                View Code
                            </button> */}
                        </div>
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

export default NavbarView;
