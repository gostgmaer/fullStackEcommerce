
import CheckoutBlock from "@/components/elements/payment/checkout";
import Layout from "@/components/global/layout/Layout";
import { cookies } from 'next/headers';

import { Fragment } from "react";


export default function Checkout() {
  const cookiesList = cookies();
  const token = cookiesList.get('accessToken'); 

  return (
    <Fragment>



      <Layout>
        <CheckoutBlock params={token} />

      </Layout>
    </Fragment>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);

//   if (!session) {
//     return {
//       redirect: {
//         destination: `/auth/signin?callbackUrl=${appBaseUrl}${ctx.resolvedUrl}`,
//         parmanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session,
//     },
//   };
// };
