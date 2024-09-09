import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddressCard from "./address/Card";

const ProfileBlock = () => {
    return (
        <div className=" overflow-hidden">
            <div className="grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1">
                <div className=" h-full relative col-span-2">
                    <h2>Profile Info</h2>
                    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
                        <Link
                            className="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded rs-btn-link border-cyan-100 hover:bg-cyan-100"
                            href="/user/my-account/profile/update"
                        >
                            Edit
                        </Link>
                        <div className="flex items-center justify-center rounded-full text-xl text-center mr-4 bg-gray-200">
                            <Image
                                src="https://res.cloudinary.com/ahossain/image/upload/v1716986555/j3ag3qgw1qrixeayq1it.webp"
                                width={64}
                                height={64}
                                className="h-16 w-16 rounded-full bg-gray-50"
                                alt="J"
                            />
                        </div>
                        <div>
                            <h5 className="leading-none mb-2 text-base font-medium text-gray-700">
                                Justin J. Ruiz
                            </h5>
                            <p className="text-sm text-gray-500">justin@gmail.com</p>
                            <p className="text-sm text-gray-500">01957930023</p>
                        </div>
                    </div>
                </div>
                <div className=" h-full relative col-span-2 grid grid-cols-2">
                    <div className=" col-span-1">
                        <AddressCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBlock;