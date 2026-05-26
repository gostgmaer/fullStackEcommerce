

import { authOptions } from '@/app/api/auth/authOptions'
import Userlayout from '@/components/elements/user'
import ProfileBlock from '@/components/elements/user/components/profile/ProfileBlock'
import Layout from '@/components/global/layout/Layout'
import CustomerServices from '@/helper/network/services/CustomerServices'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'


const Index = async (props) => {



  // @ts-ignore
  const session = await getServerSession(authOptions);
  const headers = { "Authorization": `Bearer ${session?.["accessToken"]}` };

  if (!session?.accessToken) {
    redirect('/auth/login');
  }

  const [profile, addresses] = await Promise.all([
    CustomerServices.getProfile(null, headers),
    CustomerServices.fetchCustomerAddress(headers, { limit: 100 }),
  ]);
  const user = profile?.result || profile?.data || profile;
  const normalizedAddresses = addresses?.results || addresses?.result || addresses?.data || [];


  return (
    <Layout  >

      <Userlayout>

       <div>
        <ProfileBlock user={{ ...user, address: normalizedAddresses }}/>
       
       </div>
      </Userlayout>

    </Layout>
  )
}

export default Index