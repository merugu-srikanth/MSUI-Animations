import React from "react";

const SkeletonItem = ({ className }) => (
    <div className={`shimmer bg-white/10 rounded ${className}`} />
);

export const ButtonSkeleton = () => (
    <div className="rounded-xl border border-white/10 bg-brand-secondary/20 p-4 space-y-4">
        <div className="h-40 flex items-center justify-center bg-white/5 rounded-lg">
            <SkeletonItem className="h-12 w-48 rounded-lg" />
        </div>
        <SkeletonItem className="h-4 w-2/3" />
        <div className="flex gap-2">
            <SkeletonItem className="h-3 w-full" />
        </div>
        <div className="flex gap-3">
            <SkeletonItem className="h-8 w-24 rounded-full" />
            <SkeletonItem className="h-8 w-20 rounded-full" />
        </div>
    </div>
);

export const InputSkeleton = () => (
    <div className="rounded-xl border border-white/10 bg-brand-secondary/20 p-4 space-y-4">
        <div className="h-40 flex items-center justify-center bg-white/5 rounded-lg p-6">
            <SkeletonItem className="h-14 w-full rounded-xl" />
        </div>
        <SkeletonItem className="h-4 w-1/2" />
        <SkeletonItem className="h-3 w-full" />
        <div className="flex gap-3">
            <SkeletonItem className="h-8 w-24 rounded-full" />
            <SkeletonItem className="h-8 w-20 rounded-full" />
        </div>
    </div>
);

export const CardSkeleton = () => (
    <div className="rounded-xl border border-white/10 bg-brand-secondary/20 p-4">
        <div className="h-48 bg-white/5 rounded-lg mb-4 flex items-center justify-center p-4">
            <div className="w-full h-full border border-white/10 rounded-lg p-4 space-y-2">
                <SkeletonItem className="h-4 w-1/3" />
                <SkeletonItem className="h-3 w-full" />
                <SkeletonItem className="h-3 w-2/3" />
            </div>
        </div>
        <SkeletonItem className="h-5 w-3/4 mb-2" />
        <SkeletonItem className="h-3 w-full mb-4" />
        <div className="flex gap-3">
            <SkeletonItem className="h-8 w-20 rounded-full" />
        </div>
    </div>
);

export const GenericSkeleton = () => (
    <div className="rounded-xl border border-white/10 bg-brand-secondary/20 p-4">
        <SkeletonItem className="h-40 w-full mb-4" />
        <SkeletonItem className="h-4 w-2/3 mb-2" />
        <SkeletonItem className="h-3 w-full mb-4" />
        <div className="flex gap-3">
            <SkeletonItem className="h-8 w-24 rounded-full" />
            <SkeletonItem className="h-8 w-20 rounded-full" />
        </div>
    </div>
);

const CategorySkeletons = ({ category }) => {
    switch (category) {
        case "button":
            return <ButtonSkeleton />;
        case "input":
        case "animated-input":
            return <InputSkeleton />;
        case "card":
            return <CardSkeleton />;
        default:
            return <GenericSkeleton />;
    }
};

export default CategorySkeletons;
