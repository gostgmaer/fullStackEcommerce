import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Userlayout from '@/components/elements/user'
import DashboardBlock from '@/components/elements/user/components/Dashboard';
import Layout from '@/components/global/layout/Layout'
import CustomerServices from '@/helper/network/services/CustomerServices';
import { getServerSession } from 'next-auth';
import React from 'react'


const Index = async (props) => {

  const session = await getServerSession(authOptions);

  const dashboard = await CustomerServices.customerDashboard(null, { "Authorization": `Bearer ${session["accessToken"]}` })



  return (
    <Layout  >

      <Userlayout>
        <DashboardBlock order={dashboard.results} />
      </Userlayout>

    </Layout>
  )
}

export default Index