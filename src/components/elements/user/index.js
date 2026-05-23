"use client";

import { UserMenu } from '@/assets/fakeData/UserMenu'
import { signOut } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { MdLockOpen } from 'react-icons/md';

const Userlayout = ({children}) => {
  const path = usePathname();

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="py-8 lg:py-12 flex flex-col w-full gap-6">
          <div className="flex-shrink-0 w-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex sticky justify-between items-center top-24 gap-3 overflow-x-auto scrollbar-hide shadow-sm z-30">
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                {UserMenu.map((data, index) => {
                  const isActive = path.includes(`/user/my-account/${data.path}`);
                  return (
                    <Link
                      key={index}
                      href={`/user/my-account/${data.path}`}
                      className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap !no-underline ${
                        isActive
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
                      }`}
                    >
                      <span className={`text-base ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 group-hover:text-primary'}`}>
                        {data.icon}
                      </span>
                      <span>{data.title}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="border-l border-slate-100 dark:border-slate-800 pl-3 flex-shrink-0">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200"
                >
                  <MdLockOpen className="text-base" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-xl shadow-sm overflow-hidden text-slate-800 dark:text-slate-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userlayout;