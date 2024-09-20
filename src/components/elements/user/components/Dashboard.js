"use client"

import { FaTruck } from 'react-icons/fa';
import { IoCartOutline, IoCheckmark, IoExpandSharp } from 'react-icons/io5';
import OrderTable from './order/OrderTable';
import { useSession } from 'next-auth/react';

// import { useSelector } from 'react-redux';
const DashboardBlock = ({order}) => {



	  
	
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
								{order?.processing}
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
								{order?.completed}
							</p>
						</div>
					</div>
				</div>
			</div>

			<OrderTable  title="Recent order"/>
			
		
		</div>
	);
};

export default DashboardBlock;
