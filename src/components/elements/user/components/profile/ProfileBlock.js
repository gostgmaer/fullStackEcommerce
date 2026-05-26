import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddressCard from "./address/Card";

const ProfileBlock = ({ user }) => {
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs text-slate-400 mt-2 font-semibold">Loading profile information...</span>
      </div>
    );
  }

  const userImage = user.image || "/assets/img/person.png";

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-8">
        
        {/* Profile Info Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-foreground tracking-tight">
              Profile Information
            </h3>
            <Link
              className="bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm active:scale-95 !no-underline"
              href="/user/my-account/profile/update"
            >
              Edit Profile
            </Link>
          </div>
          
          <div className="bg-muted/20 border border-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-16 h-16 rounded-full border border-border shadow-sm overflow-hidden flex-shrink-0">
              <Image
                src={userImage}
                fill
                sizes="64px"
                className="object-cover bg-slate-50"
                alt={`${user.firstName || "User"}'s avatar`}
              />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="text-base font-extrabold text-foreground mb-1">
                {user.firstName} {user.lastName}
              </h4>
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                {user.email}
              </p>
              {user.phoneNumber && (
                <p className="text-xs text-muted-foreground">
                  Phone: <span className="font-bold text-foreground">{user.phoneNumber}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Address Book Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-foreground tracking-tight">
              Address Book
            </h3>
            <Link 
              href={'/user/my-account/profile/add-address'} 
              className="bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm active:scale-95 !no-underline"
            >
              Add Address
            </Link>
          </div>

          {user.address && user.address.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {user.address.map((item) => (
                <AddressCard key={item._id} data={item} />
              ))}
            </div>
          ) : (
            <div className="bg-muted/20 border border-dashed border-border rounded-2xl py-10 px-4 text-center">
              <p className="text-xs text-muted-foreground font-semibold mb-3">
                No addresses found in your profile.
              </p>
              <Link 
                href={'/user/my-account/profile/add-address'}
                className="inline-flex items-center text-xs font-bold text-primary hover:underline"
              >
                + Add a billing/shipping address
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProfileBlock;
