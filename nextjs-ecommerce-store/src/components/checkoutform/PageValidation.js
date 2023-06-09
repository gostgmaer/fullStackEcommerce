/* eslint-disable react-hooks/exhaustive-deps */
import AddressForm from "@/components/checkoutform/Address";
import PaymentForm from "@/components/checkoutform/Payment";
import Review from "@/components/checkoutform/Preview";
import Pricesumery from "@/components/checkoutform/Pricesumery";
import { useAuthContext } from "@/context/AuthContext";
import { appBaseUrl } from "@/utils/config";
import {
  Box,
  Button,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useFormik } from "formik";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const steps = ["Address Details", "Payment details", "Review your order"];

export default function PageValidation() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const { protectedRouteCheck, pageLoading } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      bfname: "",
      blname: "",
      bphone: "",
      bemail: "",
      bcompany: "",
      bzipcode: "",
      baddress1: "",
      baddress2: "",
      bcountry: "",
      bstate: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      company: "",
      zipcode: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      sameasshiping: "",
      cardname: "",
      cardno: "",
      expmonth: "",
      expyear: "",
      cvv: "",
      paypalemail:''
    },

    onSubmit: () => {
      
    },
  });
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formik={formik} />;
      case 1:
        return <PaymentForm formik={formik} />;
      case 2:
        return <Review formik={formik} />;
      default:
        throw new Error("Unknown step");
    }
  }
  useEffect(() => {
    protectedRouteCheck();
  }, []);

  const handleNext = (e) => {
    e.preventDefault()
    setActiveStep(activeStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault()
    setActiveStep(activeStep - 1);
  
  };

  const handlePayment = (params) => {
    console.log(formik.values);
    router.push("order-confirmation");
  };

  return (
    <Box p={3} component={"div"}>
      <Stepper activeStep={activeStep} sx={{ py: 3, px: 20 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container direction={"row"} gap={5}>
        <Stack
          sx={{ my: { xs: 2, md: 2 } }}
          direction={"column"}
          gap={1.5}
          flex={2}
        >
          {/* { <AddressForm formik={formik} />} */}
          {getStepContent(activeStep)}
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", gap: 5 }}
          >
            {activeStep !== 0 ? (
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={handleBack}
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                {`Back to ${steps
                  .filter((item, index) => index === activeStep - 1)
                  .toString()}`}
              </Button>
            ) : (
              <Button
                fullWidth
                variant="outlined"
                color="error"
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                Back to cart
              </Button>
            )}

            {activeStep <= 1 ? (
              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                {steps
                  .filter((item, index) => index === activeStep + 1)
                  .toString()}
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                onClick={handlePayment}
                color="error"
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                Place order
              </Button>
            )}
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          gap={1}
          flex={0.9}
          sx={{ my: 2, position: "sticky", top: 0 }}
        >
          <Pricesumery />
        </Stack>
      </Grid>
    </Box>
  );
}
