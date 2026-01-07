import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../services/api';
import axios from 'axios';

const CommentsSection = ({ componentId, comments = [], onCommentAdded }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim()) return;

        setIsSubmitting(true);
        try {
            // We need a direct API call or update the api service. 
            // Let's use axios directly here or extend api.js. 
            // Extending api.js is better but for speed let's inline or create helper.
            // Using direct axios for now to match pattern if api.js doesn't have it explicitly yet.
            const res = await axios.post(`http://localhost:5000/api/components/${componentId}/comments`, {
                user: userName,
                text: newComment
            });
            onCommentAdded(res.data); // Update parent state with new component data
            setNewComment('');
            // Keep username for next comment
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="border-t border-white/5 bg-black/30 p-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4"
            >
                <MessageSquare size={16} />
                {comments.length} Comments
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <ul className="space-y-3 mb-4 max-h-60 overflow-y-auto custom-scrollbar">
                            {comments.length === 0 && <li className="text-xs text-gray-600 italic">No comments yet. Be the first!</li>}
                            {comments.map((comment, index) => (
                                <li key={index} className="bg-white/5 rounded p-2 text-sm">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold text-brand-primary text-xs">{comment.user}</span>
                                        <span className="text-[10px] text-gray-600">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-gray-300">{comment.text}</p>
                                </li>
                            ))}
                        </ul>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-brand-primary outline-none"
                                required
                            />
                            <div className="relative">
                                <textarea
                                    placeholder="Write a comment..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-brand-primary outline-none resize-none h-20"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="absolute bottom-2 right-2 p-1.5 bg-brand-primary text-black rounded hover:bg-orange-600 disabled:opacity-50 transition-colors"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CommentsSection;
