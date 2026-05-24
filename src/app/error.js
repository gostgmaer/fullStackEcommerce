"use client";

import React from "react";
import Link from "next/link";
import { MdErrorOutline, MdRefresh } from "react-icons/md";

/**
 * Next.js App Router error boundary.
 * `error`  — the thrown Error object
 * `reset`  — call this to attempt re-rendering the segment
 */
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md mx-auto animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40">
            <MdErrorOutline className="w-10 h-10 text-red-500 dark:text-red-400" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-extrabold text-foreground mb-2 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          An unexpected error occurred. Our team has been notified.
        </p>
        {/* Show error message in dev only */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <p className="text-xs font-mono text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 rounded-lg px-3 py-2 mb-6 text-left break-all">
            {error.message}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          {reset && (
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              <MdRefresh className="w-4 h-4" />
              Try Again
            </button>
          )}
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground font-semibold text-sm rounded-xl hover:bg-muted/80 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto border border-border"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
