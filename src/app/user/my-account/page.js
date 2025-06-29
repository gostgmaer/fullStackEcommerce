

// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { authOptions } from '@/app/api/auth/authOptions'
import Userlayout from '@/components/elements/user'
import OrderTable from '@/components/elements/user/components/order/OrderTable'
import Layout from '@/components/global/layout/Layout'
import OrderServices from '@/helper/network/services/OrderServices'
import { getServerSession } from 'next-auth'
import React from 'react'


const Index = async (props) => {



  // @ts-ignore
  const session = await getServerSession(authOptions);
  const order = await OrderServices.getOrderCustomer(props.params, { "Authorization": `Bearer ${session["accessToken"]}` })


  return (
    <Layout  >

      <Userlayout>

        <OrderTable order={order} title="My order" />
      </Userlayout>

    </Layout>
  )
}

export default Index