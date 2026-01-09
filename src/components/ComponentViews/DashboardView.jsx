import React, { useState } from 'react';
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';
import ViewCodeModal from '../ViewCodeModal/ViewCodeModal';
import { Eye, Code2 } from 'lucide-react';
import { DASHBOARDS } from '../../constants/dashboards';

const DashboardView = ({ searchQuery }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const filteredComponents = DASHBOARDS.filter(component => {
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
                <p>No dashboards found matching "{searchQuery}"</p>
            </div>
        );
    }

    return (
        <div className="w-full space-y-12">
            {filteredComponents.map((component) => (
                <div
                    key={component.id}
                    className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-brand-primary/50 transition-all duration-500 shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/5 bg-[#121212] flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-white text-xl tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                                {component.name}
                            </h3>
                            <p className="text-gray-400 text-sm max-w-2xl">
                                {component.description}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {component.tags?.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Preview Area - Full Screen/Large */}
                    <div className="relative h-[600px] bg-[#050505] overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />

                        {/* Top Right Code Icon */}
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={() => setSelectedComponent(component)}
                                className="p-2 bg-black/50 hover:bg-brand-primary/20 text-gray-400 hover:text-brand-primary rounded-lg backdrop-blur-md border border-white/5 transition-colors"
                                title="View Code"
                            >
                                <Code2 size={20} />
                            </button>
                        </div>

                        <div className="absolute inset-0">
                            <PreviewRenderer htmlCode={component.preview} />
                        </div>
                    </div>

                    {/* Footer Area */}
                    <div className="p-4 border-t border-white/5 bg-[#121212] flex justify-end">
                        <button
                            onClick={() => setSelectedComponent(component)}
                            className="flex items-center gap-2 px-6 py-2.5 bg-[#0a0a0a] hover:bg-[#1a1a1a] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all group-hover:border-brand-primary/30"
                        >
                            <Code2 size={18} />
                            View Source
                        </button>
                    </div>
                </div>
            ))}

            <ViewCodeModal
                isOpen={!!selectedComponent}
                onClose={() => setSelectedComponent(null)}
                code={selectedComponent?.code || {}}
            />
        </div>
    );
};

export default DashboardView;
