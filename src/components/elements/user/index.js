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
    <div className="bg-muted/20 transition-colors duration-200">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="py-8 lg:py-12 flex flex-col w-full gap-6">
          <div className="flex-shrink-0 w-full">
            <div className="bg-card border border-border p-4 rounded-xl flex sticky justify-between items-center top-24 gap-3 overflow-x-auto scrollbar-hide shadow-sm z-30">
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                {UserMenu.map((data, index) => {
                  const linkHref = data.external ? data.path : `/user/my-account/${data.path}`;
                  const isActive = !data.external && path.includes(`/user/my-account/${data.path}`);
                  return (
                    <Link
                      key={index}
                      href={linkHref}
                      className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap !no-underline ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-primary'
                      }`}
                    >
                      <span className={`text-base ${isActive ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-primary'}`}>
                        {data.icon}
                      </span>
                      <span>{data.title}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="border-l border-border pl-3 flex-shrink-0">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-destructive hover:bg-destructive/10 transition-all duration-200"
                >
                  <MdLockOpen className="text-base" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-card border border-border p-6 sm:p-8 rounded-xl shadow-sm overflow-hidden text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userlayout;