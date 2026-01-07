import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import api from '../services/api';
import { Lock, Plus, Save } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        name: '', description: '', category: 'button', tags: '', preview: '',
        code: { react: '', html: '', tailwind: '', html_plain: '', css: '' }, framework: 'react'
    });
    const [status, setStatus] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Frontend "auth" just to unlock the form, real check happens on backend API calls
        if (password) setIsAuthenticated(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Saving...');
        try {
            const formattedData = {
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim())
            };
            await api.create(formattedData, password);
            setStatus('Component created successfully!');
            setFormData({
                name: '', description: '', category: 'button', tags: '', preview: '',
                code: { react: '', html: '', tailwind: '' }, framework: 'react'
            });
        } catch (err) {
            setStatus('Error: ' + (err.response?.data?.message || err.message));
        }
    };

    if (!isAuthenticated) {
        return (
            <MainLayout>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <form onSubmit={handleLogin} className="bg-brand-secondary/30 border border-white/10 p-8 rounded-xl w-full max-w-md">
                        <div className="flex justify-center mb-6 text-brand-primary"><Lock size={48} /></div>
                        <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Access</h2>
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full bg-black/40 border border-white/20 rounded p-3 text-white mb-4 focus:border-brand-primary"
                        />
                        <button type="submit" className="w-full bg-brand-primary text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                            Unlock Panel
                        </button>
                    </form>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Add New Component</h2>
                    <button onClick={() => setIsAuthenticated(false)} className="text-sm text-gray-500 hover:text-white">Logout</button>
                </div>

                <div className="bg-brand-secondary/20 border border-white/10 rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Name</label>
                                <input className="w-full bg-black/40 border border-white/10 rounded p-2 text-white" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Category</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded p-2 text-white" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                                    <option value="button">Button</option>
                                    <option value="card">Card</option>
                                    <option value="badge">Badge</option>
                                    <option value="email">Email Template</option>
                                    <option value="dashboard">Dashboard</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Description</label>
                            <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white h-20" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Tags (comma separated)</label>
                            <input className="w-full bg-black/40 border border-white/10 rounded p-2 text-white" value={formData.tags} onChange={e => setFormData({ ...formData, tags: e.target.value })} placeholder="hover, animation, dark" />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Preview HTML (Raw HTML for iframe)</label>
                            <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white font-mono text-sm h-32" value={formData.preview} onChange={e => setFormData({ ...formData, preview: e.target.value })} placeholder="<div class='...'>...</div>" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">React Code (Tailwind)</label>
                                <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white font-mono text-sm h-32" value={formData.code.react} onChange={e => setFormData({ ...formData, code: { ...formData.code, react: e.target.value } })} placeholder="export default function..." />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Tailwind HTML (User Copy)</label>
                                <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white font-mono text-sm h-32" value={formData.code.tailwind} onChange={e => setFormData({ ...formData, code: { ...formData.code, tailwind: e.target.value } })} placeholder="<button class='bg-black...'>" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Plain HTML (No Classes)</label>
                                <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white font-mono text-sm h-32" value={formData.code.html_plain} onChange={e => setFormData({ ...formData, code: { ...formData.code, html_plain: e.target.value } })} placeholder="<button class='btn'>..." />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Plain CSS</label>
                                <textarea className="w-full bg-black/40 border border-white/10 rounded p-2 text-white font-mono text-sm h-32" value={formData.code.css} onChange={e => setFormData({ ...formData, code: { ...formData.code, css: e.target.value } })} placeholder=".btn { ... }" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-brand-primary text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                            <Save size={20} /> Publish Component
                        </button>

                        {status && (
                            <div className={`p-4 rounded border ${status.includes('Error') ? 'bg-red-500/20 border-red-500/50 text-red-500' : 'bg-green-500/20 border-green-500/50 text-green-500'}`}>
                                {status}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Admin;
