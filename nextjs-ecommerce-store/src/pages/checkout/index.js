import AddressForm from "@/components/checkoutform/Address";
import PaymentForm from "@/components/checkoutform/Payment";
import Review from "@/components/checkoutform/Review";
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
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  // const { protectedRouteCheck, pageLoading } = useAuthContext();
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

  return (
    <Layout>
      <Box p={3} component={"div"}>
        <Box mx={30} px={10}>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Grid container direction={"row"} gap={5}>
          <Stack
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            direction={"column"}
            gap={1.5}
            flex={2}
          >
            {getStepContent(activeStep)}
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", gap: 5 }}
            >
              {activeStep !== 0 ? (
                <Button fullWidth onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  sx={{ mt: 3, ml: 1 }}
                >
                  Back to cart
                </Button>
              )}

              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1
                  ? "Place order"
                  : "Proceed to Payment"}
              </Button>
            </Stack>
          </Stack>
          <Stack direction={"column"} gap={1} flex={0.9}></Stack>
        </Grid>
      </Box>
    </Layout>
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
