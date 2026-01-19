import React, { useState } from 'react';
import ViewCodeModal from '../ViewCodeModal/ViewCodeModal';
import { Code2 } from 'lucide-react';
import { LOADERS } from '../../constants/loaders';
import Loader from '../Loaders';

const LoadersView = ({ searchQuery }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const filteredComponents = LOADERS.filter(component => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            component.name.toLowerCase().includes(query) ||
            component.tags?.some(tag => tag.toLowerCase().includes(query))
        );
    });

    if (filteredComponents.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No loaders found matching "{searchQuery}"</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="group relative bg-[#0a0a0a] rounded-2xl border border-brand-primary/30 overflow-hidden hover:border-brand-primary/80 transition-all duration-500 hover:shadow-2xl shadow-brand-dark hover:shadow-brand-primary/10 flex flex-col"
                    >
                        {/* Preview Area */}
                        <div className="relative h-40 bg-brand-dark overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />

                            {/* Top Right Code Icon */}
                            <div className="absolute top-1 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setSelectedComponent(component)}
                                    className="p-1 flex text-xs items-center justify-center gap-1 hover:bg-black/50 bg-brand-primary/20 hover:text-gray-400 text-brand-primary rounded-lg backdrop-blur-md border border-white/5 transition-colors"
                                    title="View Code"
                                >
                                    <Code2 size={14} /> Code
                                </button>
                            </div>

                            <div className="relative z-10 transform transition-transform group-hover:scale-110 duration-500">
                                <Loader variant={component.variant} />
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="p-3 border-t border-white/5 bg-[#0a0a0a] flex-1 flex flex-col items-center">
                            <h5 className="font-bold text-white text-xs tracking-tight group-hover:text-brand-primary transition-colors">
                                {component.name}
                            </h5>
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

export default LoadersView;
