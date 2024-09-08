"use client"
import ReusableTable from '@/components/global/fields/table';
import moment from 'moment';
import Link from 'next/link';
// import React, { useEffect } from 'react';
import { FaTruck } from 'react-icons/fa';
import { IoCartOutline, IoCheckmark, IoExpandSharp } from 'react-icons/io5';

// import { useSelector } from 'react-redux';
const DashboardBlock = ({order}) => {

	const columns = [
		{ header: 'Id', dataKey: 'order_id' },
		{ header: 'Order Time', dataKey:'createdAt' },
		{ header: 'Payment Method', dataKey: 'payment_method' },
		
		{ header: 'Total', dataKey: 'total'},
		{ header: 'Status', dataKey: 'status', }
	  ];

	  const actionRenderer = (rowData) => (
		
		  <Link href={`/user/my-account/dashboard/${rowData._id}`} className='px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full'>Details</Link>
		
	  );
	 

	  console.log(order);
	  
	
	return (
		<div className="overlow-hidden">
			<h2 className="text-xl text-black font-semibold mb-5">Dashboard</h2>
			<div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4 ">
				<div className="flex h-full">
					<div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
						<div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
						<IoCartOutline />
						</div>
						<div>
							<h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
								Total Order
							</h5>
							<p className="text-xl font-bold leading-none text-gray-800">
								{order?.total}
							</p>
						</div>
					</div>
				</div>
				<div className="flex h-full">
					<div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
						<div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-orange-600 bg-orange-200">
						<IoExpandSharp/>
						</div>
						<div>
							<h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
								Pending Order
							</h5>
							<p className="text-xl font-bold leading-none text-gray-800">
								{order?.pending}
							</p>
						</div>
					</div>
				</div>
				<div className="flex h-full">
					<div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
						<div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-indigo-600 bg-indigo-200">
							<FaTruck/>
						</div>
						<div>
							<h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
								Processing Order
							</h5>
							<p className="text-xl font-bold leading-none text-gray-800">
								{order?.shipped}
							</p>
						</div>
					</div>
				</div>
				<div className="flex h-full">
					<div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
						<div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-emerald-600 bg-emerald-200">
							<IoCheckmark/>
						</div>
						<div>
							<h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
								Complete Order
							</h5>
							<p className="text-xl font-bold leading-none text-gray-800">
								{order?.confirmed}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-screen-2xl mx-auto ">
			<div className="rounded-md ">
				<div className="flex flex-col">
					{<h3 className="text-lg font-medium mb-5">Recent Order</h3>}
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
							<div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
							<ReusableTable data={order.order.data} columns={columns} actionRenderer={actionRenderer}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			
		
		</div>
	);
};

export default DashboardBlock;
