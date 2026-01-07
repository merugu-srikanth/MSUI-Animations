import React, { useMemo } from 'react';

const PreviewRenderer = ({ code }) => {

    // We construct a full HTML document for the iframe
    // ensuring we load Tailwind via CDN for the arbitrary values to work
    const srcDoc = useMemo(() => {
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <style>
                        body {
                            background-color: transparent; /* Allow grid background from parent to show if needed, or handle in iframe */
                            margin: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            color: white; /* Default text color */
                            font-family: sans-serif;
                        }
                    </style>
                </head>
                <body>
                    ${code}
                </body>
            </html>
        `;
    }, [code]);

    return (
        <iframe
            srcDoc={srcDoc}
            title="Component Preview"
            className="w-full h-full border-0 bg-transparent"
            sandbox="allow-scripts" // Allow Tailwind script
        />
    );
};

export default PreviewRenderer;
