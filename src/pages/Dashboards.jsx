import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import CodeViewer from '../components/CodeViewer/CodeViewer';
import DashboardPreview from '../components/DashboardPreview/DashboardPreview';
import { DASHBOARD_CATEGORIES } from '../constants/dashboards';
import { Search, Monitor, Code, Eye } from 'lucide-react';
import useDashboards from '../hooks/useDashboards';

const Dashboards = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { dashboards, loading, error } = useDashboards();

    const filteredDashboards = dashboards.filter(item => {
        // Admin categories are just 'dashboard', so sub-filtering by 'saas' might not work unless we use TAGS.
        // For MVP integration, let's treat 'all' as valid, and if category matches exactly.
        // Or we rely on tags for categorization? 
        // Admin panel saves category as 'dashboard'.
        // So for now, basic search filtering is most important. 
        // If mocked data is NOT loaded, categories like 'saas' won't exist in DB unless added.

        // Let's rely on search for now or tags if we enhanced admin.
        // Matches if category matches OR if selected is 'all'

        // Actually, if everything from hook is 'dashboard', filtering by 'saas' (from static categories) will result in empty.
        // Unless we map tags to categories or update Admin to support sub-categories.
        // Workaround: Treat 'all' as show everything.
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    if (loading) return <MainLayout><div className="flex justify-center items-center h-[60vh] text-gray-400 animate-pulse">Loading Dashboards...</div></MainLayout>;
    if (error) return <MainLayout><div className="flex justify-center items-center h-[60vh] text-red-500">Error: {error}</div></MainLayout>;

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col gap-8">

                    {/* Header & Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Dashboard Templates</h2>
                            <p className="text-gray-400">Production-ready dashboard layouts.</p>
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative flex-grow md:flex-grow-0">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search layouts..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full md:w-64 bg-brand-secondary/30 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary/50 placeholder-gray-500"
                                />
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="bg-brand-secondary/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary/50"
                            >
                                {DASHBOARD_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-16">
                        {filteredDashboards.map(dashboard => (
                            <DashboardItem key={dashboard.id} dashboard={dashboard} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

const DashboardItem = ({ dashboard }) => {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    {dashboard.name}
                    <span className="text-xs font-normal text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                        {dashboard.category}
                    </span>
                </h3>
                <div className="flex bg-brand-secondary/30 rounded-lg p-1 border border-white/5">
                    <button onClick={() => setActiveTab('preview')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${activeTab === 'preview' ? 'bg-brand-primary text-black font-medium' : 'text-gray-400 hover:text-white'}`}>
                        <Eye size={16} /> Preview
                    </button>
                    <button onClick={() => setActiveTab('code')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${activeTab === 'code' ? 'bg-brand-primary text-black font-medium' : 'text-gray-400 hover:text-white'}`}>
                        <Code size={16} /> Code
                    </button>
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden">
                {activeTab === 'preview' ? (
                    // Note: using previewCode.previewHTML which we need to enable in data
                    // Fallback to react code for viewer if html missing (wont work in iframe directly though)
                    // For this cycle, I'll update mock data to have 'previewHTML'
                    <DashboardPreview code={dashboard.previewHTML} />
                ) : (
                    <CodeViewer code={dashboard.previewCode.react} language="jsx" />
                )}
            </div>
        </div>
    );
};

export default Dashboards;
