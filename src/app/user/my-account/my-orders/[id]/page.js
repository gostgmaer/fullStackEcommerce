
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import OrderElement from '@/components/elements/Order/OrderElement';
import Layout from '@/components/global/layout/Layout'
import OrderServices from '@/helper/network/services/OrderServices';
import { getServerSession } from 'next-auth';
import React from 'react'


const Index = async (props) => {


  // @ts-ignore
  const session = await getServerSession(authOptions);


  const order = await OrderServices.getOrderById(props.params, { "Authorization": `Bearer ${session["accessToken"]}` })


  return (
    <Layout  >

      <div>
        <OrderElement order={order} />
      </div>

    </Layout>
  )
}

export default Index