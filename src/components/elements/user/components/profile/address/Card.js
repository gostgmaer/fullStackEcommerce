import { Country, State } from 'country-state-city';
import Link from 'next/link'
import React from 'react'

const AddressCard = ({data}) => {
console.log(data);


  return (
    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
    <Link
      className="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded rs-btn-link border-cyan-100 hover:bg-cyan-100"
      href={`/user/my-account/profile/update-address/${data._id}`}
    >
      Edit
    </Link>
    <div className="flex-grow">
      <h5 className="leading-none mb-2 text-base font-medium text-gray-700">
      {data.firstName} {data.lastName}
        <span className="text-xs text-gray-500">
         
        </span>
      </h5>
      <p className="text-sm text-gray-500">{data.phone} </p>
      <p className="text-sm text-gray-500">{data.email} </p>
      <p className="text-sm text-gray-500">{data.address}, {data.city}, {State.getStateByCode(data.state).name}, {Country.getCountryByCode(data.country).name}, {data.postalCode}</p>
    </div>
  </div>
  )
}

export default AddressCard