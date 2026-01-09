import React, { useState } from 'react';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import ViewCodeModal from '../ViewCodeModal/ViewCodeModal';
import { Eye, Code2 } from 'lucide-react';
import { INPUTS } from '../../constants/inputs';

const InputsView = ({ searchQuery }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const filteredComponents = INPUTS.filter(component => {
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
                <p>No inputs found matching "{searchQuery}"</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
                    >
                        {/* Preview Area */}
                        <div className="relative min-h-[200px] bg-[#121212] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />

                            {/* Top Right Code Icon */}
                            <div className="absolute top-3 right-3 z-10">
                                <button
                                    onClick={() => setSelectedComponent(component)}
                                    className="p-2 bg-black/50 hover:bg-brand-primary/20 text-gray-400 hover:text-brand-primary rounded-lg backdrop-blur-md border border-white/5 transition-colors"
                                    title="View Code"
                                >
                                    <Code2 size={16} />
                                </button>
                            </div>

                            <div className="relative w-full p-6">
                                <PreviewRenderer htmlCode={component.preview} />
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="p-5 border-t border-white/5 bg-[#0a0a0a] flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-brand-primary transition-colors">
                                    {component.name}
                                </h3>
                            </div>
                            {/* <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                {component.description}
                            </p> */}
                            <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                {component.tags?.slice(0, 3).map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedComponent(component)}
                                className="w-full py-2.5 flex items-center justify-center gap-2 bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all group-hover:border-brand-primary/30"
                            >
                                <Code2 size={16} />
                                View Code
                            </button>
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

export default InputsView;
