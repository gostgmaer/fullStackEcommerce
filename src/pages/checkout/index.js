
import PageValidation from "@/components/forms/order/checkoutform/PageValidation";

import Layout from "@/layout";

import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Formik } from "formik";

import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Fragment, useEffect, useState } from "react";

const steps = ["Address Details", "Payment details", "Review your order"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  // const {  } = useAuthContext();
  // useEffect(() => {
  //   protectedRouteCheck();
  // }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const route = useRouter();

  const handlePayment = (params) => {
    // console.log(params);
  };

  return (
    <Fragment>
      <Head>
        <title>Checkout Page</title>
      </Head>
      <Script id="paytm-info">

      </Script>
      <Layout>
        <PageValidation />
       
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
