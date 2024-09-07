import Layout from '@/components/global/layout/Layout'
import OrderServices from '@/helper/network/services/OrderServices'
import React from 'react'
import { cookies } from 'next/headers';
import OrderElement from '@/components/elements/Order/OrderElement';


const Index = async (props) => {
  const cookiesList = cookies();
  const token = cookiesList.get('accessToken'); 

const order = await OrderServices.getOrderById(props.params,{"Authorization":`Bearer ${token?.value}`})

  return (
    <Layout  >

      <div>
        <OrderElement order={order}/>
      </div>

    </Layout>
  )
}

export default Index