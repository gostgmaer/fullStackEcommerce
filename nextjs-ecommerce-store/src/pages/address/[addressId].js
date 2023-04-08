import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import Userlayout from "@/layout/user";
import { LocationOn, Person } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
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
} from "@mui/material";
import { Formik } from "formik";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { invokeExternalAPI } from "@/lib/http";
import { object, string } from "yup";
const UpdateAddress = ({ data }) => {
  const route = useRouter();
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Box width={"100%"}>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Typography
              fontWeight={600}
              fontSize={20}
              sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
            >
              <LocationOn color="error" />
              <span>Edit Address</span>
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              color="error"
              onClick={() => route.push(`/address`)}
            >
              Back to Address
            </Button>
          </Stack>
        </Box>
        <UpdateAddressForm data={data} />
      </Box>
    </Userlayout>
  );
};

export default UpdateAddress;

const UpdateAddressForm = (data) => {
  const session = useSession();
  const route = useRouter();
 console.log(data);
  const handleFormSubmit = async (values) => {
    const body = {
      name: values.addressname,
      phone: values.phone,
      address: values.address,
      city: values.city,
      country: values.country,
      pincode: values.pincode,
    };
    const req = await invokeExternalAPI(
      `addresses/${data.data[0]?.id}`,
      "put",
      { data: body },
      {},
      {}
    );
    route.push('/address')
  };
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
  return (
    <Box width={"100%"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          py: 2,
          gap: 2.5,
          width: "100%",
          p: 2,
        }}
      >
        <Formik
          initialValues={{
            addressname: data.data[0]?.attributes.name,
            phone: data.data[0]?.attributes.phone,
            address: data.data[0]?.attributes.address,
            country: data.data[0]?.attributes.country,
            city: data.data[0]?.attributes.city,
            pincode: data.data[0]?.attributes.pincode,
          }}
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
                    defaultValue={data.name}
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
                >
                  Update Address
                </Button>
              </Stack>
            </Box>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  console.log(session);

  const param = {
    "filters[uuid][$eq]": ctx.query["addressId"],
  };

  const data = await invokeExternalAPI(`addresses`, "get", {}, {}, param);

  return {
    props: {
      session,
      data: data?.data.data
    },
  };
};
