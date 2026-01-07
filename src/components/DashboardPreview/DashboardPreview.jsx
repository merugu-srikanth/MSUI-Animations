import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PreviewRenderer from '../PreviewRenderer/PreviewRenderer';

const DashboardPreview = ({ code }) => {
    return (
        <div className="w-full h-[600px] border border-white/10 rounded-xl overflow-hidden bg-[#000] relative group">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={2}
                centerOnInit={true}
                wheel={{ step: 0.1 }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => zoomIn()} className="bg-brand-secondary/80 text-white p-2 rounded hover:bg-brand-primary/80 transition-colors">+</button>
                            <button onClick={() => zoomOut()} className="bg-brand-secondary/80 text-white p-2 rounded hover:bg-brand-primary/80 transition-colors">-</button>
                            <button onClick={() => resetTransform()} className="bg-brand-secondary/80 text-white p-2 rounded hover:bg-brand-primary/80 transition-colors">Reset</button>
                        </div>
                        <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full flex items-center justify-center">
                            <div className="w-[1200px] h-[800px] origin-center scale-[0.6] md:scale-[0.8]">
                                {/* 
                                    We scale down the content slightly so a large dashboard fits nicely by default.
                                    The explicit width/height ensures the iframe content has room to render 'desktop' layouts.
                                */}
                                <PreviewRenderer code={code} />
                            </div>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
};

export default DashboardPreview;
