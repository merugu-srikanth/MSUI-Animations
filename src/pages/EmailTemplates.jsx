import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import EmailPreview from '../components/EmailPreview/EmailPreview';
import CodeViewer from '../components/CodeViewer/CodeViewer';
import { EMAIL_CATEGORIES } from '../constants/emailTemplates';
import { Search, Monitor, Smartphone, Code, Eye } from 'lucide-react';
import useTemplates from '../hooks/useTemplates';

const EmailTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { templates, loading, error } = useTemplates();

    const filteredTemplates = templates.filter(template => {
        // Similar constraint as dashboards: DB items are just 'email'. 
        // Static categories might filter nothing if we don't handle it.
        // For MVP, if category is specific, we might return false if DB category is just 'email'.
        // Let's assume 'all' is primary usage.
        if (selectedCategory !== 'all' && template.category !== selectedCategory) return false;

        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    if (loading) return <MainLayout><div className="flex justify-center items-center h-[60vh] text-gray-400 animate-pulse">Loading Templates...</div></MainLayout>;
    if (error) return <MainLayout><div className="flex justify-center items-center h-[60vh] text-red-500">Error: {error}</div></MainLayout>;

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar filters (reused pattern) */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search emails..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-brand-secondary/30 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary/50 placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
                                <div className="space-y-1">
                                    {EMAIL_CATEGORIES.map(category => (
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

                    <main className="flex-grow">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {EMAIL_CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Email Templates'}
                                <span className="ml-3 text-sm font-normal text-gray-500">{filteredTemplates.length} result(s)</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                            {filteredTemplates.map(template => (
                                <EmailTemplateCard key={template.id} template={template} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </MainLayout>
    );
};

const EmailTemplateCard = ({ template }) => {
    const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'
    const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'code'

    return (
        <div className="bg-brand-secondary/20 border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-brand-dark/50">
                <div>
                    <h3 className="text-lg font-bold text-white">{template.name}</h3>
                    <div className="flex gap-2 mt-2">
                        {template.tags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">#{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    {activeTab === 'preview' && (
                        <div className="flex bg-black/40 rounded-lg p-1 border border-white/5 mr-2">
                            <button onClick={() => setViewMode('desktop')} className={`p-2 rounded-md transition-all ${viewMode === 'desktop' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`} title="Desktop View"><Monitor size={16} /></button>
                            <button onClick={() => setViewMode('mobile')} className={`p-2 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`} title="Mobile View"><Smartphone size={16} /></button>
                        </div>
                    )}

                    <div className="flex bg-black/40 rounded-lg p-1 border border-white/5">
                        <button onClick={() => setActiveTab('preview')} className={`p-2 rounded-md transition-all ${activeTab === 'preview' ? 'bg-brand-primary text-black' : 'text-gray-500 hover:text-white'}`} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => setActiveTab('code')} className={`p-2 rounded-md transition-all ${activeTab === 'code' ? 'bg-brand-primary text-black' : 'text-gray-500 hover:text-white'}`} title="Code"><Code size={16} /></button>
                    </div>
                </div>
            </div>

            <div className="h-[500px] bg-black/20 flex flex-col relative">
                {activeTab === 'preview' ? (
                    <div className="flex-grow overflow-hidden flex justify-center py-4 bg-[#111]">
                        <EmailPreview code={template.preview} viewMode={viewMode} />
                    </div>
                ) : (
                    <CodeViewer code={template.code.html} language="html" />
                )}
            </div>
        </div>
    );
};

export default EmailTemplates;
