

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Userlayout from '@/components/elements/user'
import OrderTable from '@/components/elements/user/components/order/OrderTable'
import UpdateProfile from '@/components/elements/user/components/profile/updateProfile/UpdateProfile'
import Layout from '@/components/global/layout/Layout'
import CustomerServices from '@/helper/network/services/CustomerServices'
import OrderServices from '@/helper/network/services/OrderServices'
import { getServerSession } from 'next-auth'
import React from 'react'


const Index = async (props) => {



  // @ts-ignore
  const session = await getServerSession(authOptions);
  const profile = await CustomerServices.getProfile(null, { "Authorization": `Bearer ${session["accessToken"]}` })


  return (
    <Layout  >

      <Userlayout>

        <UpdateProfile user={profile["result"]} />
      </Userlayout>

    </Layout>
  )
}

export default Index