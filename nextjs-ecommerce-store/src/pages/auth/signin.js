import { useState, useEffect } from "react";
import { signIn, getSession, getProviders } from "next-auth/react";
import Head from "next/head";

import { getToken } from "next-auth/jwt";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/router";
import {
  Alert,
  AlertTitle,
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  LockOutlined,
  Login,
  Save,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { appBaseUrl } from "@/utils/config";

export default function Signin({ providers, loginError }) {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "user@email.com",
    password: "123",
    showPassword: false,
    rememberMe: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(true);

  const handleRememberMe = (prop) => (event) => {
    setValues({ ...values, rememberMe: !values.rememberMe });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setloading(true);
    await signIn("credentials", {
      redirect: true,
      callbackUrl: `${
        router.query.callbackUrl ? router.query.callbackUrl : appBaseUrl
      }`,
      email: values.email,
      password: values.password,
    });
    setloading(false);
  };

  const newpArray = Object.values(providers);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Container
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flexStart",
          flexDirection: "column",
          justifyContent: "center",
        }}
        maxWidth="xs"
      >
        <Grid
          container
          alignItems={"center"}
          borderRadius={3}
          p={2}
          boxShadow={" 0px 0px 20px 0 rgba(0,0,0,0.15)"}
          alignContent="center"
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              mb: "30px",
            }}
            xs={12}
          >
            <Avatar sx={{ bgcolor: blue[200] }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>
          {/* {showAlert && (
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                <Alert
                  severity="error"
                  onClose={() => {
                    setShowAlert(false);
                  }}
                >
                  <AlertTitle>Warning</AlertTitle>
                  Incorrect Email and Password combination
                </Alert>
              </Typography>
            </Grid>
          )} */}

          <Grid item xs={12}>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    tabIndex={2}
                    size="small"
                    fullWidth
                    placeholder="user@email.com"
                    onChange={handleChange("email")}
                    value={values.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      tabIndex={2}
                      size="small"
                      required
                      label="Password"
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      placeholder="123"
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <LoadingButton
                    type="button"
                    loading={loading}
                    loadingPosition="start"
                    startIcon=<Save />
                    tabIndex={3}
                    fullWidth
                    size="large"
                    variant="outlined"
                    color="primary"
                    disabled={true}
                    onClick={handleLoginUser}
                  >
                    Sign In
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: 1,
              mt: "20px",
            }}
            item
            xs={12}
          >
            <Grid item xs textAlign="left">
              <Link href="/auth/forget-passwrod">Forgot password?</Link>
            </Grid>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",

                gap: 1,
              }}
              item
              textAlign="right"
            >
              Dont have an account?
              <Link href="/auth/signup">Sign Up</Link>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <form noValidate>
              {newpArray && (
                <Stack spacing={2} sx={{ mt: 8 }}>
                  {newpArray
                    .filter((item) => item.id  !== "credentials")
                    ?.map((provider, index) => {
                      return (
                        <div key={index}>
                          <Button
                            size="large"
                            variant="outlined"
                            fullWidth
                            onClick={() =>
                              signIn(provider.id, {
                                redirect: true,
                                callbackUrl: `${
                                  router.query.callbackUrl
                                    ? router.query.callbackUrl
                                    : appBaseUrl
                                }`,
                              })
                            }
                          >
                            Sign in with {provider.name}
                          </Button>
                        </div>
                      );
                    })}
                </Stack>
              )}
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, req, res } = context;
  var error = "";
  if (Boolean(query.error)) {
    error = query.error;
  }

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    return { props: { providers: await getProviders(), loginError: error } };
  } catch (e) {
    return { props: { providers: await getProviders(), loginError: error } };
  }
}
