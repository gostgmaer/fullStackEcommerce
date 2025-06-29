

// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Userlayout from '@/components/elements/user'

import AddressForm from '@/components/global/common/forms/address'
import Layout from '@/components/global/layout/Layout'
// import CustomerServices from '@/helper/network/services/CustomerServices'
// import { getServerSession } from 'next-auth'
import React from 'react'


const Index = async (props) => {



  return (
    <Layout  >

      <Userlayout>

       <div className='grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1'>
       <div className="col-span-full">
                    <h2>Add Address</h2>
                </div>
      
      <div className='col-span-full'>
      <AddressForm currAddress={undefined}/>
      </div>
       
       </div>
      </Userlayout>

    </Layout>
  )
}

export default Index