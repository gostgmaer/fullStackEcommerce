"use client"

import { FaTruck } from 'react-icons/fa';
import { IoCartOutline, IoCheckmark, IoExpandSharp } from 'react-icons/io5';
import OrderTable from './order/OrderTable';
import { useSession } from 'next-auth/react';

// import { useSelector } from 'react-redux';
const DashboardBlock = ({ order }) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-xl font-extrabold text-foreground mb-6 tracking-tight">
        Dashboard Overview
      </h2>
      <div className="grid gap-5 mb-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Orders Card */}
        <div className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-xl h-12 w-12 text-xl text-primary bg-primary/10 transition-colors">
            <IoCartOutline className="text-2xl" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Total Orders
            </h5>
            <p className="text-2xl font-black text-foreground leading-none">
              {order?.total || 0}
            </p>
          </div>
        </div>

        {/* Pending Orders Card */}
        <div className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-xl h-12 w-12 text-xl text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/30 transition-colors">
            <IoExpandSharp className="text-2xl" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Pending Orders
            </h5>
            <p className="text-2xl font-black text-foreground leading-none">
              {order?.pending || 0}
            </p>
          </div>
        </div>

        {/* Processing Orders Card */}
        <div className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-xl h-12 w-12 text-xl text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/30 transition-colors">
            <FaTruck className="text-xl" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Processing
            </h5>
            <p className="text-2xl font-black text-foreground leading-none">
              {order?.processing || 0}
            </p>
          </div>
        </div>

        {/* Completed Orders Card */}
        <div className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-xl h-12 w-12 text-xl text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30 transition-colors">
            <IoCheckmark className="text-2xl animate-pulse" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Completed
            </h5>
            <p className="text-2xl font-black text-foreground leading-none">
              {order?.completed || 0}
            </p>
          </div>
        </div>
      </div>

      <OrderTable title="Recent Orders" />
    </div>
  );
};

export default DashboardBlock;
