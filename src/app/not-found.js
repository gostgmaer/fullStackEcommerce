import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg mx-auto animate-fade-in">
        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <Image
            width={400}
            height={280}
            src="/404.svg"
            alt="404 — Page not found"
            className="max-w-full opacity-90 dark:opacity-70"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-foreground mb-3 tracking-tight">
          404
        </h1>
        <h2 className="text-xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm w-full sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            href="/product/search"
            className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground font-semibold text-sm rounded-xl hover:bg-muted/80 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto border border-border"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
