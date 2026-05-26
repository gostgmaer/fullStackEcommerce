

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

  if (!session?.accessToken) {
    redirect('/auth/login');
  }

  const profile = await CustomerServices.getProfile(null, { "Authorization": `Bearer ${session["accessToken"]}` })
  const user = profile?.result || profile?.data || profile;


  return (
    <Layout  >

      <Userlayout>

       <div>
        <ProfileBlock user={user}/>
       
       </div>
      </Userlayout>

    </Layout>
  )
}

export default Index