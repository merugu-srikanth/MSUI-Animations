import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { CATEGORIES, COMPONENTS } from '../constants/allComponents';
import Sidebar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';
import { motion } from "framer-motion";
import AllComponentsView from '../components/AllComponentsView/AllComponentsView';

const Components = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when category changes
  React.useEffect(() => {
    const scrollContainer = document.getElementById('app-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedCategory]);

  const currentCategoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Components';

  // Calculate live count (Mock logic based on filter)
  // Since switching to Views, we don't hold the filtered count in parent easily. 
  // We'll just show total count for now or length of COMPONENTS.

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
        <main className={`flex-1 transition-all duration-300 w-full`}>

          {/* Mobile Header Toggle */}
          <button
            className="md:hidden fixed top-18 left-4 z-40 p-2 bg-brand-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="p-0 md:p-3 max-w-[1600px] mx-auto min-h-screen">

            {/* ================= HEADER SECTION ================= */}
            <div className="relative overflow-hidden mt-8 rounded-xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-3 mb-6">

              {/* 🌈 Animated Moving Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none">
                <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-black/60 backdrop-blur-xl" />
              </div>

              {/* ✨ Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

              {/* ================= CONTENT ================= */}
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-6">

                {/* 🔹 LEFT CONTENT */}
                <div className="max-w-xl">
                  <h1 className="
            text-xl 
            sm:text-2xl 
            md:text-2xl 
            lg:text-2xl 
            font-extrabold 
            tracking-tight 
            bg-gradient-to-r from-brand-primary via-brand-500 to-orange-500 
            bg-clip-text text-transparent
          ">
                    BRUNOUI
                  </h1>

                  <p className="
            text-sm 
            sm:text-base 
            md:text-md
            text-gray-400 
            leading-relaxed
          ">
                    Beautifully crafted, animated UI components for modern web apps.
                  </p>
                </div>

                {/* 🔹 RIGHT METRICS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
                  {[
                    { label: "Components", value: COMPONENTS.length },
                    { label: "Category", value: currentCategoryName },
                    { label: "Status", value: "Live", live: true },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className="relative group"
                    >
                      {/* 🔥 Animated Border */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

                      <div className="
                relative 
                bg-black/60 
                backdrop-blur-xl 
                border border-white/10 
                rounded-xl 
                px-3 sm:px-4 
                py-3 
                text-center
              ">
                        <p className="
                  text-[9px] 
                  sm:text-[10px] 
                  uppercase 
                  tracking-widest 
                  text-gray-400 
                  mb-1
                ">
                          {item.label}
                        </p>

                        {item.live ? (
                          <div className="flex justify-center items-center gap-1.5 text-sm sm:text-base font-semibold text-green-400">
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex h-full w-full rounded-full bg-green-500" />
                            </span>
                            Live
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base md:text-lg font-semibold text-white truncate">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* View Container */}
            <div className="min-h-[500px]">
              <AllComponentsView category={selectedCategory} searchQuery={searchQuery} />
            </div>

          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Components;
