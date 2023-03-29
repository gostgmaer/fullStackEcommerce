import React, { Fragment, useState } from "react";

import { API } from "../../../constant";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { setToken } from "@/lib/helper";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright, LockOutlined, Save, SaveAlt } from "@mui/icons-material";
import Link from "next/link";
import { Formik } from "formik";

const SignUp = () => {
  // const { isDesktopView } = useScreenSize();
  const navigate = useRouter();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    console.log(values);
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        // message.success(`Welcome to Social Cards ${data.user.username}!`);
        console.log(data.user);

        navigate.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            onFinish(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    onChange={handleChange}
                    value={values.firstName}
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleChange}
                    value={values.lastName}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={handleChange}
                    value={values.email}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>

              <LoadingButton
                loading={isLoading}
                loadingPosition="start"
                type="submit"
                startIcon={<SaveAlt />}
                variant="outlined"
              >
                Sign Up
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  "Already have an account?
                  <Link href="/auth/signin">Sign Up</Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUp;
