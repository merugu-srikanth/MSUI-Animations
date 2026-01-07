import React, { useMemo } from 'react';

const EmailPreview = ({ code, viewMode = 'desktop' }) => {

    // Determine container width based on view mode
    const widthClass = viewMode === 'mobile' ? 'max-w-[375px]' : 'w-full';

    return (
        <div className={`mx-auto h-full transition-all duration-300 ${widthClass} bg-white h-full`}>
            <iframe
                srcDoc={code}
                title="Email Preview"
                className="w-full h-full border-0"
                style={{ backgroundColor: '#000000' }} // Force black bg as per brand
            />
        </div>
    );
};

export default EmailPreview;
