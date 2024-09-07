
import CheckoutBlock from "@/components/elements/payment/checkout";
import Layout from "@/components/global/layout/Layout";
import { getServerSession } from "next-auth";

import { Fragment } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function  Checkout() {

// @ts-ignore
const session = await getServerSession(authOptions);

  return (
    <Fragment>



      <Layout>
        <CheckoutBlock params={session["accessToken"]}  />

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
