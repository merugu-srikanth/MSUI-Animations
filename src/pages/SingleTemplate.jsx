import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, Download, Copy, Check, Eye } from 'lucide-react';
import { TEMPLATES } from '../constants/templates';
import SpecStyleTemplate from '../components/templates/SpecStyleTemplate';

const TEMPLATE_COMPONENTS = {
    'SpecStyleTemplate': SpecStyleTemplate
};

const SingleTemplate = () => {
    const { id } = useParams();
    const template = TEMPLATES.find(t => t.id === id);
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!template) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
                <Link to="/templates" className="text-orange-400 hover:underline">Return to Templates</Link>
            </div>
        );
    }

    const TemplateComponent = TEMPLATE_COMPONENTS[template.componentName];

    const copyCode = () => {
        // In a real app, you might fetch the raw file content here
        const code = `// Please view the source file src/components/templates/${template.componentName}.jsx for the full code.`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative min-h-screen bg-black">
            {/* Top Bar for Navigation and Actions */}
            <div className="fixed top-0 left-0 w-full z-[9999] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/templates" className="p-2 hover:bg-white/10 rounded-full text-gray-300 transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-sm font-bold text-white">{template.title}</h1>
                        <span className="text-xs text-gray-500">Preview Mode</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* In a real implementation we would have tabs for Desktop/Tablet/Mobile view here */}

                    <button
                        onClick={() => alert("Full source code is available in src/components/templates/SpecStyleTemplate.jsx")}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                        <Code size={16} /> Get Code
                    </button>
                </div>
            </div>

            {/* Template Render Area */}
            <div className="pt-16 min-h-screen">
                {TemplateComponent ? <TemplateComponent /> : <div className="text-white text-center mt-20">Component Loading Error</div>}
            </div>
        </div>
    );
};

export default SingleTemplate;
