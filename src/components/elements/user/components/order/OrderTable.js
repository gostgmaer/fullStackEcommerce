"use client";
import { statusColors } from "@/assets/data/static";
import CurrentTable from "@/components/global/fields/component/Table";
import OrderServices from "@/helper/network/services/OrderServices";
import moment from "moment";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { Placeholder } from "rsuite";

const OrderTable = ({ title }) => {
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const { data: session, status } = useSession();

  const getOrderList = async (second) => {
    const query = {
      limit,
      page,
    };
    const order = await OrderServices.getOrderCustomer(query, {
      Authorization: `Bearer ${session["accessToken"]}`,
    });
    setData(order);
  };

  useEffect(() => {
    getOrderList();
  }, [limit, page]);

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Order Time",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => a.createdAt - b.createdAt, // Enable sorting for this column
      render: (index, item) => (
        <span className={`capitalize `}>
          {moment(item.createdAt).format("LL")}
        </span>
      ),
    },
    {
      title: "Payment Method",
      dataIndex: "payment_method",
      key: "payment_method",
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (index, item) => (
        <span className={`capitalize `}>{item.totalPrice.toFixed(2)}</span>
      ),
    },

    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "payment_status",
      sorter: (a, b) => a.status - b.status,
      render: (index, item) => (
        <span className={`${statusColors[item.payment_status]} capitalize `}>
          {item.status}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status - b.status,
      render: (index, item) => (
        <span className={`${statusColors[item.status]}  capitalize `}>
          {item.status}
        </span>
      ),
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
            className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full"
          >
            <FaEye />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="rounded-md ">
        <div className="flex flex-col">
          {<h3 className="text-lg font-medium mb-5">{title}</h3>}
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
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
                  <Placeholder.Grid rows={10} columns={8} active />
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
