
import CheckoutBlock from "@/components/global/common/forms/checkout";
import Layout from "@/components/global/layout/Layout";


import { Fragment } from "react";


export default function Checkout() {


  return (
    <Fragment>



      <Layout>
        <CheckoutBlock />

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
