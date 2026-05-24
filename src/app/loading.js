import React from "react";

/**
 * Next.js App Router global loading state.
 * Shown during server-side navigation between pages.
 */
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      {/* Spinner ring */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-[3px] border-muted" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary animate-spin" />
      </div>

      {/* Label */}
      <p className="mt-4 text-xs font-semibold text-muted-foreground tracking-widest uppercase animate-pulse">
        Loading
      </p>
    </div>
  );
};

export default Loading;