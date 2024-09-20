import Userlayout from "@/components/elements/user";
import OrderTable from "@/components/elements/user/components/order/OrderTable";
import Layout from "@/components/global/layout/Layout";

import React from "react";

const Index = async (props) => {
  return (
    <Layout>
      <Userlayout>
        <OrderTable title="My order" />
      </Userlayout>
    </Layout>
  );
};

export default Index;
