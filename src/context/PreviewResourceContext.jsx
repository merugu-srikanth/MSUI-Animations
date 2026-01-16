import React, { createContext, useState, useEffect } from 'react';

export const PreviewResourceContext = createContext({
    tailwindUrl: null,
    fontAwesomeUrl: null,
    loading: true
});

export const PreviewResourceProvider = ({ children }) => {
    const [resources, setResources] = useState({
        tailwindUrl: null,
        fontAwesomeUrl: null,
        loading: true
    });

    useEffect(() => {
        let tailwindBlobUrl = null;
        let fontAwesomeBlobUrl = null;

        const fetchResources = async () => {
            try {
                // Fetch in parallel
                const [tailwindRes, fontAwesomeRes] = await Promise.all([
                    fetch('https://cdn.tailwindcss.com'),
                    fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css')
                ]);

                const tailwindText = await tailwindRes.text();
                const fontAwesomeText = await fontAwesomeRes.text();

                // Create Blobs
                const tailwindBlob = new Blob([tailwindText], { type: 'application/javascript' });
                const fontAwesomeBlob = new Blob([fontAwesomeText], { type: 'text/css' });

                tailwindBlobUrl = URL.createObjectURL(tailwindBlob);
                fontAwesomeBlobUrl = URL.createObjectURL(fontAwesomeBlob);

                setResources({
                    tailwindUrl: tailwindBlobUrl,
                    fontAwesomeUrl: fontAwesomeBlobUrl,
                    loading: false
                });

            } catch (error) {
                console.error("Failed to pre-fetch preview resources:", error);
                // Fallback to null (components should handle null by using CDN)
                setResources({
                    tailwindUrl: null,
                    fontAwesomeUrl: null,
                    loading: false
                });
            }
        };

        fetchResources();

        return () => {
            if (tailwindBlobUrl) URL.revokeObjectURL(tailwindBlobUrl);
            if (fontAwesomeBlobUrl) URL.revokeObjectURL(fontAwesomeBlobUrl);
        };
    }, []);

    return (
        <PreviewResourceContext.Provider value={resources}>
            {children}
        </PreviewResourceContext.Provider>
    );
};
