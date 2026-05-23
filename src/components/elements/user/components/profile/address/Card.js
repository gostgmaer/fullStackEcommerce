"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const AddressCard = ({ data }) => {
  const [csc, setCsc] = useState(null);

  useEffect(() => {
    import('country-state-city').then((mod) => {
      setCsc(mod);
    });
  }, []);

  if (!data) return null;

  const stateObj = csc && data.state ? csc.State.getStateByCode(data.state) : null;
  const countryObj = csc && data.country ? csc.Country.getCountryByCode(data.country) : null;

  const stateName = stateObj ? stateObj.name : data.state;
  const countryName = countryObj ? countryObj.name : data.country;

  return (
    <div className="group bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col min-h-[140px]">
      <Link
        className="absolute top-4 right-4 bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-xs font-bold px-3 py-1 rounded-lg shadow-sm active:scale-95 !no-underline"
        href={`/user/my-account/profile/update-address/${data._id}`}
      >
        Edit
      </Link>
      <div className="flex-grow pr-12">
        <h5 className="leading-none mb-3 text-sm font-extrabold text-slate-800 dark:text-slate-200">
          {data.firstName} {data.lastName}
        </h5>
        {data.phone && (
          <p className="text-xs text-slate-450 dark:text-slate-400 mb-1">
            Phone: <span className="font-semibold text-slate-600 dark:text-slate-350">{data.phone}</span>
          </p>
        )}
        {data.email && (
          <p className="text-xs text-slate-450 dark:text-slate-400 mb-2">
            Email: <span className="font-semibold text-slate-600 dark:text-slate-350">{data.email}</span>
          </p>
        )}
        <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-2.5 mt-2">
          {data.address}, {data.city}, {stateName}, {countryName}, {data.postalCode}
        </p>
      </div>
    </div>
  );
};

export default AddressCard