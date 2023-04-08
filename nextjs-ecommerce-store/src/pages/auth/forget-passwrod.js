/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import Router from "next/router";
import { Box, Container } from "@mui/material";

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Login() {
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const onSubmit = async ({ email }) => {
  //   if (!validateEmail(email)) {
  //     setErrorMessage('Please enter your email.');
  //     seterror(true);
  //     return;
  //   }

  //   if (email) {
  //     setLoading(true);
  //     await sendPasswordResetMail({
  //       email,
  //     })
  //   } else {
  //     setErrorMessage('Please enter your email.');
  //     seterror(true);
  //   }
  //   setLoading(false);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setErrorMessage('');
  //   seterror(false);
  // };

  return (
    <Container>
      <Box style={styles.header}>
        <div style={styles.headerLogo}>LOGO</div>
      </Box>
      <Container maxWidth="sm">
        <Box my={4}>
          {/* <ForgetPasswordForm loading={loading} onPress={onSubmit} /> */}
        </Box>
      </Container>
    </Container>
  );
}

const styles = {
  header: {
    backgroundColor: "#272643",
    marginTop: 10,
  },
  headerLogo: {
    display: "inline-block",
    backgroundColor: "#fff",
    paddingRight: 10,
  },
};
