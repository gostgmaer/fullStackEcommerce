"use client";
import { content } from "@/assets/jsonfile/content";

const Stock = ({ stock, card }) => {
  return (
    <>
      {stock <= 0 ? (
        <span className="absolute left-3 top-3 z-10 font-sans font-bold text-[10px] uppercase tracking-wider bg-red-50 dark:bg-red-950/40 text-red-650 dark:text-red-400 border border-red-100 dark:border-red-900/40 rounded px-2 py-1 leading-none shadow-sm">
          {content.stockOut}
        </span>
      ) : (
        <span
          className={`font-sans font-semibold text-[10px] leading-none z-10 ${
            card
              ? "absolute left-3 top-3 bg-white/90 dark:bg-slate-800/90 text-slate-500 dark:text-slate-300 border border-slate-100 dark:border-slate-700 rounded-md px-2 py-1 shadow-sm"
              : "inline-flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-350 border border-slate-100 dark:border-slate-700 rounded px-2.5 py-1"
          }`}
        >
          {content.stock}:
          <span className="text-primary dark:text-primary pl-1 font-extrabold">
            {stock}
          </span>
        </span>
      )}
    </>
  );
};

export default Stock;
