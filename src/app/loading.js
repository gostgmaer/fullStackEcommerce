import React from "react";

/**
 * Next.js App Router global loading state.
 * Shown during server-side navigation between pages.
 */
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      {/* Spinner ring */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-muted" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin-slow" />
      </div>

      {/* Label */}
      <p className="mt-5 text-sm font-semibold text-muted-foreground tracking-wide animate-pulse">
        Loading…
      </p>
    </div>
  );
};

export default Loading;