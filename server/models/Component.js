const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true }, // button, card, email, dashboard
    tags: [{ type: String }],
    preview: { type: String }, // HTML string for preview
    code: {
        html: { type: String }, // Can serve as Tailwind or general
        html_plain: { type: String }, // Plain HTML without tailwind classes
        css: { type: String }, // Plain CSS
        tailwind: { type: String },
        react: { type: String },
        js: { type: String }
    },
    likes: { type: Number, default: 0 },
    framework: [{ type: String }], // html, react, tailwind
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Component', ComponentSchema);
