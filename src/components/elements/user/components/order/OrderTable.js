"use client"
import ReusableTable from '@/components/global/fields/table'
import Link from 'next/link';
import React from 'react'

const OrderTable = ({order,title}) => {

	const columns = [
		{ header: 'Id', dataKey: 'order_id' },
		{ header: 'Order Time', dataKey:'createdAt' },
		{ header: 'Payment Method', dataKey: 'payment_method' },
		{ header: 'Total', dataKey: 'total'},
		{ header: 'Status', dataKey: 'status', }
	  ];

	  const actionRenderer = (rowData) => (
		
		  <Link href={`/user/my-account/my-orders/${rowData._id}`} className='px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full'>Details</Link>
	  );

  return (
    <div className="max-w-screen-2xl mx-auto ">
    <div className="rounded-md ">
        <div className="flex flex-col">
            {<h3 className="text-lg font-medium mb-5">{title}</h3>}
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                    <ReusableTable data={order} columns={columns} actionRenderer={actionRenderer}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default OrderTable