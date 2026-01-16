import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Code } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { TEMPLATES } from '../constants/templates';

const Templates = () => {
    return (
        <MainLayout>
            <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500 mb-6"
                    >
                        Premium Templates
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Production-ready landing pages and component collections. Copy, paste, and ship faster.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEMPLATES.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0f0f12] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
                        >
                            {/* Image */}
                            <div className="aspect-video w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opactiy-60 group-hover:opacity-40 transition-opacity"></div>
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay Action */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                    <Link
                                        to={`/templates/${template.id}`}
                                        className="flex items-center gap-2 px-5 py-2.5 bg-orange-500/90 hover:bg-orange-500 text-white rounded-full backdrop-blur-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        <Eye size={18} /> Preview
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{template.title}</h3>
                                    <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{template.author}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{template.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {template.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Templates;
