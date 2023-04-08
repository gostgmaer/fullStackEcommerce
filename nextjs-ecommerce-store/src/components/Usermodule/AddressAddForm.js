import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import { object, string, number, date } from "yup";
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
import { useGlobalContext } from "@/context/globalContext";

const AddressAddForm = () => {
  const session = useSession();

  const [isdesable, setIsdesable] = useState(true);
  const { openModal, years, setOpenModal } = useGlobalContext();

  const phoneReg =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const validationSchema = object({
    addressname: string().required(),
    phone: string().matches(phoneReg, "Phone Number is not Valid").required(),
    address: string().required(),
    city: string().required(),
    country: string().required(),
    pincode: string().required(),
  });

  const handleFormSubmit = async (values) => {
    const body = {
      name: values.addressname,
      phone: values.phone,
      address: values.address,
      city: values.city,
      country: values.country,
      user: session.data.user.name,
      uuid: uuidv4(),
      pincode: values.pincode,
    };
    const req = await invokeExternalAPI(
      "addresses",
      "post",
      { data: body },
      {},
      {}
    );
    setOpenModal(false);
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
          pincode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
          isValidating,
          validateForm,

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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  value={values.country}
                  name="country"
                  fullWidth
                  size="small"
                  label="Country"
                  variant="outlined"
                />
                <TextField
                  id="pincode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  value={values.pincode}
                  name="pincode"
                  fullWidth
                  size="small"
                  label="Pincode"
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
                disabled={!isValid}
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
