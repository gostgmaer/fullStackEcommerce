"use client"
import { UserMenu } from '@/assets/fakeData/UserMenu'
import { signOut } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { MdLockOpen } from 'react-icons/md';

const Userlayout = ({children}) => {

    const path = usePathname()



  return (
    <div className="bg-gray-50">
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="py-10 lg:py-12 flex flex-col  w-full">
            <div className="flex-shrink-0 w-full mb-2 mr-7 lg:mr-10 xl:mr-10">
                <div className="bg-white p-4  rounded-md flex sticky justify-between top-32">
                    {UserMenu.map((data, index) => (
                        <span
                            key={index}
                            className={`group text-xl p-2  my-2 w-max flex justify-start text-black items-center rounded-md hover:bg-gray-50 hover:text-emerald-600 ${path.includes(`/user/my-account/${data.path}`) ? 'bg-gray-100 text-emerald-600' : ''}`}
                        >
                            {data.icon}
                            <Link
                                href={`/user/my-account/${data.path}`}
                                className="  hover:no-underline w-max focus:text-inherit focus:no-underline inline-flex items-center justify-between ml-2  font-medium    group-hover:text-emerald-600"
                            >
                                {data.title}
                            </Link>
                        </span>
                    ))}

                    <span className="p-2 flex text-xl  items-center rounded-md hover:bg-gray-50  hover:text-emerald-600">
                        <span className="mr-2 text-black">
                           <MdLockOpen/>
                        </span>
                        <button
                            onClick={()=>signOut()}
                            className="inline-flex text-black items-center justify-between text-sm font-medium w-full hover:text-emerald-600"
                        >
                            Logout
                        </button>
                    </span>
                </div>
            </div>
            <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
               {children}
            </div>
        </div>
    </div>
</div>
  )
}

export default Userlayout