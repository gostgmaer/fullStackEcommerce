

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Userlayout from '@/components/elements/user'
import ProfileBlock from '@/components/elements/user/components/profile/ProfileBlock'
import Layout from '@/components/global/layout/Layout'
import CustomerServices from '@/helper/network/services/CustomerServices'
import { getServerSession } from 'next-auth'
import React from 'react'


const Index = async (props) => {



  // @ts-ignore
  const session = await getServerSession(authOptions);
  const profile = await CustomerServices.getProfile(null, { "Authorization": `Bearer ${session["accessToken"]}` })


  return (
    <Layout  >

      <Userlayout>

       <div>
        <ProfileBlock user={profile["result"]}/>
       
       </div>
      </Userlayout>

    </Layout>
  )
}

export default Index