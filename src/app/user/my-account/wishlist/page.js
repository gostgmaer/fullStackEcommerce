


import Userlayout from '@/components/elements/user'
import Blockwishlist from '@/components/elements/user/components/wishlist'
import Layout from '@/components/global/layout/Layout'

import React from 'react'


const Index = async (props) => {



 

  return (
    <Layout  >

      <Userlayout>

      <Blockwishlist/>
      </Userlayout>

    </Layout>
  )
}

export default Index