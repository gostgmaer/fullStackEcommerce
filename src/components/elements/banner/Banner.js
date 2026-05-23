import { content } from '@/assets/jsonfile/content';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-2">
        <div className="text-center md:text-left">
          <h1 className="font-sans text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-primary font-extrabold">
              {content['Banner-title-span-text']}
            </span>{' '}
            {content['Banner-title-text']}
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-300 mt-1 font-medium">
            {content['Banner-paragraph-text']}{' '}
            <Link href="#discount" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">
              {content['Banner-link-text']}
            </Link>
          </p>
        </div>
        <Link href="/product/search?category=organic-food" className="inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline whitespace-nowrap">
          {content['Banner-btn-text']}
        </Link>
      </div>
    </>
  );
};

export default Banner;
