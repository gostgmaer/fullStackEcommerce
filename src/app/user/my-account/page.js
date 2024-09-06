import Layout from '@/components/global/layout/Layout'
import React from 'react'


const Index = () => {
  return (
    <Layout  >

      <div></div>

    </Layout>
  )
}

export default Index

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/auth/signin',
//           permanent: false,
//         },
//       };
//   } else {
//     return {
//       redirect: {
//         destination: `/my-account/${session.user["id"]}`,
//         permanent: false,
//       },
//     };
//   }
// }


