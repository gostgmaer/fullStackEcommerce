import React from "react";

const PageHeading = ({ title }) => {

  return (
    <div className="flex justify-center py-10 lg:py-16 bg-muted/30 dark:bg-muted/10 border-b border-border/30 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10 relative z-10">
        <div className="w-full flex justify-center flex-col relative">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black font-serif text-center text-foreground tracking-tight">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
