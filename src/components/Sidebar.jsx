import React from 'react';
import { Search, Palette, Grid, Box, Circle, Type, Layout, BarChart, FileText, DoorClosed, DoorClosedIcon, ListCollapseIcon, Menu, X } from 'lucide-react';
import { CATEGORIES, COMPONENTS } from '../constants/allComponents';

const Sidebar = ({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, isOpen, onClose }) => {

    // Calculate counts
    const getCount = (categoryId) => {

        // Check if category is standard UI component or from Dashboards/Emails
        return COMPONENTS.filter(c => c.category === categoryId).length;
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed bg-brand-dark inset-0   backdrop-blur-sm md:z-0 z-40 transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <aside
                className={`fixed md:sticky top-0 md:top-20 left-0 h-full md:h-[calc(100vh-5rem)] w-[300px] bg-brand-dark/90 backdrop-blur-xl border-r border-white/5 md:z-0 z-50 transition-transform duration-300 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-hidden rounded-xl border border-white/10`}
            >
                <div className="flex flex-col h-full p-3">
                    {/* Header */}
                    {/* <div className="mb-8 pb-5 border-b border-white/10">
                        <a href="/" className="flex items-center gap-3 text-2xl font-bold text-white no-underline">
                            <Palette className="text-brand-primary" size={32} />
                            <span>XMS Design</span>
                        </a>
                    </div> */}

                    {/* Search */}
                    {/* <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search components..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div> */}

                    {/* Categories */}
                    <div className="flex-1 overflow-y-scroll overflow-x-hidden custom-scrollbar">
                        <div className='flex justify-between items-center'> <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Categories</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                            >
                                <X size={22} />
                            </button>
                        </div>
                        <ul className="space-y-2">
                            {CATEGORIES.map((category) => {
                                const count = getCount(category.id);
                                const isActive = activeCategory === category.id;

                                return (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => {
                                                onSelectCategory(category.id);
                                                if (window.innerWidth < 768) onClose();
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-300 group
                      ${isActive
                                                    ? 'bg-linear-to-r from-brand-primary/20 to-transparent text-white border-l-4 border-brand-primary'
                                                    : 'text-gray-400 hover:bg-brand-primary/10 hover:text-white hover:translate-x-1'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span>{category.name}</span>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${isActive ? 'bg-brand-primary text-white' : 'bg-brand-primary/20 text-white'}`}>
                                                {count}
                                            </span>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
