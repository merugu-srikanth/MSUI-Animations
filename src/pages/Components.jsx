import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ComponentCard from '../components/ComponentCard/ComponentCard';
import { CATEGORIES } from '../constants/components';
import { Search } from 'lucide-react';
import useComponents from '../hooks/useComponents';

const Components = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { components, loading, error } = useComponents();

    // The API might return everything (including emails/dashboards), so we should strictly filter 
    // for standard UI components if "all" is selected, OR just rely on category tabs.
    // The 'CATEGORIES' constant has: [all, button, card, badge, input, navigation].
    // If the backend has an 'email' component, showing it here might be weird if category is 'all'.
    // Let's filter out non-UI categories first if needed, or better yet:
    // Only show items where category is one of the allowed UI categories.
    const UI_CATEGORY_IDS = CATEGORIES.map(c => c.id).filter(id => id !== 'all');

    const filteredComponents = components.filter(comp => {
        // Basic Check: Is it a UI component? (Included in UI categories)
        if (!UI_CATEGORY_IDS.includes(comp.category)) return false;

        const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
        const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (comp.tags && comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    if (loading) return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
                <div className="relative select-none">

                    {/* Glow / Melt Layer */}
                    <h1
                        className="
            absolute inset-0 text-6xl md:text-7xl font-extrabold uppercase
            bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400
            bg-clip-text text-transparent
            blur-xl opacity-60
            animate-pulse
          "
                    >
                        MS UI Animations
                    </h1>

                    {/* Drip Shadow */}
                    <h1
                        className="
            absolute inset-0 text-6xl md:text-7xl font-extrabold uppercase
            bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400
            bg-clip-text text-transparent
            translate-y-6 opacity-40
            animate-bounce
          "
                    >
                        MS UI Animations
                    </h1>

                    {/* Main Text */}
                    <h1
                        className="
            relative text-6xl md:text-7xl font-extrabold uppercase
            bg-gradient-to-r from-orange-500 via-amber-300 to-orange-500
            bg-clip-text text-transparent
            drop-shadow-[0_8px_30px_rgba(255,140,40,0.6)]
          "
                    >
                        MS UI Animations
                    </h1>

                </div>
            </div>
        </MainLayout>
    );

    if (error) return (
        <MainLayout>
            <div className="flex justify-center items-center h-[calc(100vh-64px)] text-red-500">
                Error loading components: {error}
            </div>
        </MainLayout>
    );

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-brand-secondary/30 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary/50 placeholder-gray-500"
                                />
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
                                <div className="space-y-1">
                                    {CATEGORIES.map(category => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === category.id
                                                ? 'bg-brand-primary text-black'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Components Grid */}
                    <main className="flex-grow">
                        <div className="mb-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">
                                {CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Components'}
                                <span className="ml-3 text-sm font-normal text-gray-500">{filteredComponents.length} result(s)</span>
                            </h2>
                        </div>

                        {filteredComponents.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, index) => (
                                        <ComponentCardSkeleton key={index} />
                                    ))
                                ) : filteredComponents.length > 0 ? (
                                    filteredComponents.map(component => (
                                        <ComponentCard key={component.id} component={component} />
                                    ))
                                ) : null}
                            </div>

                        ) : (
                            <div className="text-center py-20 bg-brand-secondary/20 rounded-xl border-2 border-dashed border-white/10">
                                <p className="text-gray-400">No components found matching your criteria.</p>
                                <button
                                    onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                                    className="mt-4 text-brand-primary hover:underline text-sm"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </MainLayout>
    );
};

export default Components;
