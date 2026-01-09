import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'; // Handles HTML/XML
import { Copy, Check } from 'lucide-react';
import { toast } from 'react-toastify';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('xml', markup);

const CodeViewer = ({ code, language = 'jsx' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            toast.success("Code copied successfully! 🚀", {
                position: "bottom-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy mode', err);
            toast.error("Failed to copy code");
        }
    };

    return (
<div className="relative group rounded-lg overflow-hidden border border-white/10 h-full bg-[#282c34] brunoui-codeviewer">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-300 transition-colors opacity-0 group-hover:opacity-100"
                title="Copy Code"
            >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
            <div className="h-full overflow-y-auto hide-horizontal-scroll custom-scrollbar">
                <SyntaxHighlighter
  language={language}
  style={oneDark}
  customStyle={{
    margin: 0,
    padding: '1.5rem',
    background: 'transparent',
    fontSize: '0.9rem',
    overflow: 'visible',
  }}
>
  {code}
</SyntaxHighlighter>
  
            </div>
        </div>
    );
};

export default CodeViewer;
