import React, { useState } from 'react';
import ComponentCard from '../components/ComponentCard/ComponentCard';
import CategorySkeletons from '../layouts/CategorySkeletons';
import { CATEGORIES } from '../constants/components';
import { Menu, LayoutGrid, List as ListIcon, Search } from 'lucide-react';
import useComponents from '../hooks/useComponents';
import Sidebar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';
import { motion } from "framer-motion";

const Components = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [viewMode, setViewMode] = useState('list');
    const { components, loading, error } = useComponents();

    // Scroll to top when category changes
    React.useEffect(() => {
        const scrollContainer = document.getElementById('app-scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [selectedCategory]);

    // Filter Logic
    const UI_CATEGORY_IDS = CATEGORIES.map(c => c.id).filter(id => id !== 'all');
    const filteredComponents = components.filter(comp => {
        // Basic Check: Is it a UI component? (Included in UI categories)
        if (!UI_CATEGORY_IDS.includes(comp.category)) return false;

        const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
        const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (comp.tags && comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    const currentCategoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Components';

    if (error) return (
        <div className="flex justify-center items-center h-screen bg-brand-dark text-red-500">
            Error loading components: {error}
        </div>
    );

    return (
        <MainLayout>
            <div className="flex bg-brand-dark min-h-screen mt-5 relative">

                {/* Sidebar */}
                <Sidebar
                    activeCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {/* Main Content */}
                <main className={`flex-1 transition-all duration-300 `}>

                    {/* Mobile Header Toggle */}
                    <button
                        className="md:hidden fixed top-24 right-4 z-40 p-2 bg-brand-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="p-4 md:p-8 max-w-[1600px] mx-auto min-h-screen">



                        {/* ================= HEADER SECTION ================= */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10 mb-4">



                            {/* Header Content */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-brand-primary via-brand-500 to-orange-500 bg-clip-text text-transparent">
                                        BRUNOUI
                                    </h1>
                                    <p className="text-gray-400 mt-2 text-base md:text-lg max-w-xl">
                                        Beautifully crafted, animated UI components for modern web apps.
                                    </p>
                                </div>

                                {/* View Toggle */}
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
                                    {["list", "grid"].map((mode) => (
                                        <motion.button
                                            key={mode}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setViewMode(mode)}
                                            className={`p-2.5 rounded-lg transition-all ${viewMode === mode
                                                ? "bg-brand-primary text-white shadow-lg"
                                                : "text-gray-400 hover:text-white hover:bg-white/10"
                                                }`}
                                        >
                                            {mode === "list" ? <ListIcon size={18} /> : <LayoutGrid size={18} />}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ================= METRICS ================= */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">

                            {/* Metric Card */}
                            {[
                                { label: "Components", value: components.length },
                                { label: "Category", value: currentCategoryName },
                                { label: "Status", value: "Live", live: true },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-md"
                                >
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                                        {item.label}
                                    </p>

                                    {item.live ? (
                                        <div className="flex items-center gap-2 text-lg font-semibold text-green-400">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                            </span>
                                            Live
                                        </div>
                                    ) : (
                                        <p className="text-lg font-semibold text-white truncate">
                                            {item.value}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>


                        {/* Grid/List Container */}
                        <div className={`grid gap-8 ${viewMode === 'grid'
                            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'
                            : 'grid-cols-1 md:grid-cols-1 max-w-4xl'
                            }`}>
                            {loading ? (
                                Array.from({ length: 6 }).map((_, index) => (
                                    <CategorySkeletons key={index} category={selectedCategory} />
                                ))
                            ) : filteredComponents.length > 0 ? (
                                filteredComponents.map(component => (
                                    <ComponentCard key={component.id} component={component} viewMode={viewMode} />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <div className="inline-block p-6 rounded-full bg-white/5 mb-4">
                                        <Search size={48} className="text-gray-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">No components found</h3>
                                    <p className="text-gray-400 mb-6">Try adjusting your search or filter settings.</p>
                                    <button
                                        onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                                        className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};

export default Components;
