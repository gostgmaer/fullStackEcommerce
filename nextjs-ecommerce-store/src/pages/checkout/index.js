/* eslint-disable react-hooks/exhaustive-deps */
import AddressForm from "@/components/checkoutform/Address";
import PageValidation from "@/components/checkoutform/PageValidation";
import PaymentForm from "@/components/checkoutform/Payment";
import Review from "@/components/checkoutform/Preview";
import Pricesumery from "@/components/checkoutform/Pricesumery";
import { useAuthContext } from "@/context/AuthContext";
import Layout from "@/layout";
import { appBaseUrl } from "@/utils/config";
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
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
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
  const { protectedRouteCheck, pageLoading } = useAuthContext();
  useEffect(() => {
    protectedRouteCheck();
  }, []);

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
      <Layout>
      <PageValidation/>
      </Layout>
    </Fragment>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}${ctx.resolvedUrl}`,
        parmanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
};
