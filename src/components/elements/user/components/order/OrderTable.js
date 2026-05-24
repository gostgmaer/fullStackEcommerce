"use client";
import CurrentTable from "@/components/global/fields/component/Table";
import OrderServices from "@/helper/network/services/OrderServices";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Placeholder } from "rsuite";

const OrderTable = ({ title }) => {
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const { data: session, status } = useSession();

  useEffect(() => {
    const getOrderList = async () => {
      if (!session || !session.accessToken) return;
      const query = {
        limit,
        page,
      };
      const order = await OrderServices.getOrderCustomer(query, {
        Authorization: `Bearer ${session["accessToken"]}`,
      });
      setData(order);
    };

    getOrderList();
  }, [limit, page, session]);

  const getStatusBadge = (statusVal) => {
    const normStatus = (statusVal || "").toLowerCase();
    let bg = "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200/50 dark:border-slate-750";
    if (["completed", "delivered", "payment-received", "success", "paid"].includes(normStatus)) {
      bg = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 border-emerald-150/40 dark:border-emerald-900/30";
    } else if (["pending", "processing", "shipped", "in-transit", "ready-for-pickup", "order-accepted", "awaiting-fulfillment"].includes(normStatus)) {
      bg = "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-450 border-amber-150/40 dark:border-amber-900/30";
    } else if (["canceled", "failed", "payment-failed", "order-declined"].includes(normStatus)) {
      bg = "bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-450 border-rose-150/40 dark:border-rose-900/30";
    }
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${bg} capitalize`}>
        {statusVal || "Pending"}
      </span>
    );
  };

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoice",
      key: "invoice",
      render: (index, item) => (
        <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-350">
          #{item.invoice || item._id?.substring(0, 8)}
        </span>
      ),
    },
    {
      title: "Order Time",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => a.createdAt - b.createdAt,
      render: (index, item) => (
        <span className="text-slate-600 dark:text-slate-400">
          {dayjs(item.createdAt).format("MMM D, YYYY")}
        </span>
      ),
    },
    {
      title: "Payment Method",
      dataIndex: "payment_method",
      key: "payment_method",
      render: (index, item) => (
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 px-2 py-0.5 rounded">
          {item.payment_method || "COD"}
        </span>
      ),
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (index, item) => (
        <span className="font-bold text-slate-800 dark:text-slate-100">
          ₹{(item.totalPrice || item.total || 0).toFixed(2)}
        </span>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "payment_status",
      render: (index, item) => getStatusBadge(item.payment_status || "Pending"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (index, item) => getStatusBadge(item.status || "Pending"),
    },
    {
      title: (
        <div className="flex items-center gap-1 opacity-0">
          <div>Actions</div>
        </div>
      ),
      key: "actions",
      render: (item, index) => (
        <div className="flex items-center justify-end gap-3 pe-4">
          <Link
            href={`/user/my-account/my-orders/${item._id}`}
            className="px-3.5 py-1.5 bg-primary/10 text-xs text-primary hover:bg-primary hover:text-white transition-all font-semibold rounded-lg flex items-center gap-1 shadow-sm active:scale-95"
          >
            <FaEye />
            <span>Details</span>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="rounded-xl ">
        <div className="flex flex-col">
          {title && <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">{title}</h3>}
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="align-middle inline-block rounded-xl min-w-full pb-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b last:border-b-0 border-slate-100 dark:border-slate-800/50 rounded-xl">
                {data?.results ? (
                  <CurrentTable
                    data={data.results}
                    tableColumn={columns}
                    pagination={{
                      total: data.total,
                      page: page,
                      limit: limit,
                      setPage: setPage,
                      setLimit: setlimit,
                    }}
                    checked={false}
                  />
                ) : (
                  <Placeholder.Grid rows={10} columns={6} active />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
