import { useAuthContext } from "@/context/AuthContext";
import { setToken } from "@/lib/helper";
import { GitHub, Google, LockOutlined, SaveAlt } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import jwt_decode from "jwt-decode";
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
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API } from "../../../constant";

import { invokeExternalAPI } from "@/lib/http";

function login() {
  const { setUser, user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Request API.
  const LoginHandle = async (params) => {
    setIsLoading(true);
    const body = {
      searchKey: "mail",
      searchVal: "varun.sengupta@inadev.com",
      password: "VldScGFzc3dvcmQxIQ==",
      grant_type: "password",
      provider_type: "ldap-internal",
    };
    const loginheader = {
      authorization: "Basic c2NoZWR1bGluZ3NlcnZlcjpwYXNzd29yZEAxMjM=",
    };
    try {
      const res = await invokeExternalAPI(
        "userauth/authservice/session",
        "post",
        body,
        loginheader,
        {}
      );
      // console.log(res);
      var decoded = jwt_decode(res.data.access_token);
      // console.log(decoded);
      setUser({ user: res, token: decoded });
      // console.log({ user: res, token: decoded });
      window.localStorage.setItem("access_token", res.data.access_token);
      // console.log(user);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);

    // axios
    //   .post("https://ceebit-vwr.inadev.net/userauth/authservice/session", {
    //     searchKey: "mail",
    //     searchVal: "varun.sengupta@inadev.com",
    //     password: "VldScGFzc3dvcmQxIQ==",
    //     grant_type: "password",
    //     provider_type: "ldap-internal",
    //   },Headers:{})
    //   .then((response) => {
    //     // Handle success.
    //     setToken(response.data);
    //     console.log("User profile", response.data);
    //   })
    //   .catch((error) => {
    //     // Handle error.
    //     console.error(error.message);
    //     // console.log(error);
    //     setError(error?.message ?? "Something went wrong!");
    //   });
    // setIsLoading(false);
  };

  // const onFinish = async (values) => {
  //   console.log(values);
  //   setIsLoading(true);
  //   try {
  //     const value = {
  //       username: values.email,
  //       password: values.password,
  //     };
  //     const response = await fetch(`${API}/users`, {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     if (data?.error) {
  //       throw data?.error;
  //     } else {
  //       // set the token
  //       setToken(data.jwt);

  //       // set the user
  //       // setUser(data.user);
  //       console.log(data);

  //       // navigate("/profile", { replace: true });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setError(error?.message ?? "Something went wrong!");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              LoginHandle(values);
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
                action="post"
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  size="small"
                  fullWidth
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  loadingPosition="start"
                  startIcon={<SaveAlt />}
                  variant="outlined"
                >
                  Login
                </LoadingButton>
                <Grid container>
                  <Grid item xs>
                    <Link href="/auth/forget-passwrod">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#">{"Don't have an account? Sign Up"}</Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<Google />}>
              Google
            </Button>
            <Button variant="outlined" startIcon={<GitHub />}>
              Github
            </Button>
          </Stack>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
}

export default login;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
