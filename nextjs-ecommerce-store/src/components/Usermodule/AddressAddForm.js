import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import { v4 as uuidv4 } from "uuid";
import MuiModal from "@/layout/modal";
import Userlayout from "@/layout/user";
import { getToken } from "@/lib/helper";
import { invokeExternalAPI } from "@/lib/http";
import { LocationOn, Person } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  Grid,
  IconButton,
  TextField,
  colors,
  Snackbar,
} from "@mui/material";
import { Formik } from "formik";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const AddressAddForm = () => {
  const { data, status } = useSession();
  const [open, setOpen] = useState(false);
  const handleFormSubmit = async (values) => {
    const body = {
      name: values.addressname,
      phone: values.phone,
      address: values.address,
      city: values.city,
      country: values.country,
      users_permissions_user:'kishor.sarkar',
      uuid: uuidv4(),
    };
    const req = await invokeExternalAPI(
      "addresses",
      "post",
      { data: body },
      {},
      {}
    );
    setOpen(true);
    return (
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="New Address had been Added"
      />
    );
  };

  return (
    <Fragment>
      <Formik
        initialValues={{
          addressname: "",
          phone: "",
          address: "",
          country: "",
          city: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleFormSubmit(values);
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
          <Box width={"100%"} component={"form"} onSubmit={handleSubmit}>
            <Grid
              container
              sx={{
                alignItems: "flex-start",
                justifyContent: "space-between",
                m: "0!important",
                gap: 2.5,
                width: "100%",
                p: 1,
                "&>.MuiGrid-item": {
                  p: 0,

                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                },
              }}
              spacing={2}
              columns={17}
            >
              <Grid item xs={8}>
                <TextField
                  id="addressname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addressname}
                  name="addressname"
                  label="Name"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  label="Address"
                  size="small"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  id="city"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  label="City"
                  fullWidth
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="phone"
                  size="small"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                />
                <TextField
                  id="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  name="country"
                  fullWidth
                  size="small"
                  label="Country"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",

                gap: 2.5,
                width: "100%",
                p: 1,
                mt: 2,
              }}
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                color="error"
                type="submit"
              >
                Add Address
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </Fragment>
  );
};

export default AddressAddForm;
