const express = require('express');
const router = express.Router();
const Component = require('../models/Component');

// GET all components
router.get('/', async (req, res) => {
    try {
        const components = await Component.find().sort({ createdAt: -1 });
        res.json(components);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one component
router.get('/:id', async (req, res) => {
    try {
        const component = await Component.findById(req.params.id);
        if (!component) return res.status(404).json({ message: 'Component not found' });
        res.json(component);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new component (Protected in prod, open for now based on prompt reqs mostly)
// In a real app, middleware for auth needed.
router.post('/', async (req, res) => {
    const { name, description, category, tags, preview, code, framework, adminPassword } = req.body;

    // Simple admin check
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const component = new Component({
        name, description, category, tags, preview, code, framework
    });

    try {
        const newComponent = await component.save();
        res.status(201).json(newComponent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update component
router.put('/:id', async (req, res) => {
    const { adminPassword } = req.body;
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const updatedComponent = await Component.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedComponent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE component
router.delete('/:id', async (req, res) => {
    // Ideally password check via body or header, keeping it simple
    // DELETE requests usually don't have body standardly in some clients but Express supports it.
    // Better to use header for auth. keeping prompts instruction "Single password in .env" 

    // We'll check header 'x-admin-password' for delete
    const adminPassword = req.headers['x-admin-password'];
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        await Component.findByIdAndDelete(req.params.id);
        res.json({ message: 'Component deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST like to component
// Smart Logic: If current backend likes are 0, accept the client's "dummy" count + 1 as the new real base.
router.post('/:id/like', async (req, res) => {
    const { currentCount } = req.body;

    try {
        const component = await Component.findById(req.params.id);
        if (!component) return res.status(404).json({ message: 'Component not found' });

        // If backend has 0 (or very low) likes, but client was showing a dummy high number (e.g. 45),
        // we assume the user "broke the seal" and we want to preserve that illusion + 1.
        // But we should only do this if it's the *first* time (likes === 0).
        if (component.likes === 0 && currentCount > 0) {
            component.likes = currentCount + 1;
        } else {
            component.likes += 1;
        }

        await component.save();
        res.json({ likes: component.likes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
