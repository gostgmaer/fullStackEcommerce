import Layout from '@/components/global/layout/Layout'
import OrderServices from '@/helper/network/services/OrderServices'
import React from 'react'
import { cookies } from 'next/headers';
import OrderElement from '@/components/elements/Order/OrderElement';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


const Index = async (props) => {

// @ts-ignore
const session = await getServerSession(authOptions);


const order = await OrderServices.getOrderById(props.params,{"Authorization":`Bearer ${session["accessToken"]}`})

  return (
    <Layout  >

      <div>
        <OrderElement order={order}/>
      </div>

    </Layout>
  )
}

export default Index