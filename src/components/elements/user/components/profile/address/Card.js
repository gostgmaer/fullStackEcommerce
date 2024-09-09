import Link from 'next/link'
import React from 'react'

const AddressCard = () => {
  return (
    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
    <Link
      className="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded rs-btn-link border-cyan-100 hover:bg-cyan-100"
      href="/user/add-shipping-address?id=6439713c1d8869133e8881e9"
    >
      Edit
    </Link>
    <div className="flex-grow">
      <h5 className="leading-none mb-2 text-base font-medium text-gray-700">
        fghfgh fghfghfg{" "}
        <span className="text-xs text-gray-500">
          (Default Shipping Address)
        </span>
      </h5>
      <p className="text-sm text-gray-500">9876543210 </p>
      <p className="text-sm text-gray-500">fsdfsdf </p>
      <p className="text-sm text-gray-500">india, Bengaluru, -456321</p>
    </div>
  </div>
  )
}

export default AddressCard