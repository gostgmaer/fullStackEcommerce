import Layout from '@/layout'
import Head from 'next/head'
import React from 'react'

const Notfound = () => {
  return (
    <>
       <Head>
        <title>Ecommerce Next App Page Not Found</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout> no Content has been found</Layout>
    </>
 
  )
}

export default Notfound