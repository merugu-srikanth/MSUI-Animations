import React from "react";

const ComponentCardSkeleton = () => {
  return (
    <div className="rounded-xl border border-white/10 bg-brand-secondary/20 p-4 animate-pulse">
      {/* Preview */}
      <div className="h-40 bg-white/10 rounded-lg mb-4" />

      {/* Title */}
      <div className="h-4 w-2/3 bg-white/10 rounded mb-2" />

      {/* Description */}
      <div className="h-3 w-full bg-white/10 rounded mb-1" />
      <div className="h-3 w-4/5 bg-white/10 rounded mb-4" />

      {/* Buttons */}
      <div className="flex gap-3">
        <div className="h-8 w-24 bg-white/10 rounded-full" />
        <div className="h-8 w-20 bg-white/10 rounded-full" />
      </div>
    </div>
  );
};

export default ComponentCardSkeleton;
