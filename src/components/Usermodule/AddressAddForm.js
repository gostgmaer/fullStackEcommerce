import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import { object, string, number, date } from "yup";
import { v4 as uuidv4 } from "uuid";
import MuiModal from "@/layout/modal";
import Userlayout from "@/layout/user";
import { getToken } from "@/lib/helper";
import { invokeExternalAPI } from "@/lib/http";
import { Country, State, City } from "country-state-city";
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
import { Formik, useFormik } from "formik";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useGlobalContext } from "@/context/globalContext";
import Input from "../global/fields/input";
import SelectField from "../global/fields/SelectField";
import { AddressvalidationSchema } from "@/utils/validation/validation";
import { patch, post } from "@/lib/network/http";
import { useAuthContext } from "@/context/AuthContext";

const initialValues = {
  addressname: "",
  firstName: "",
  lastName: "",
  phone: "",
  company: "",
  state: "",
  country: "IN",
  apartment: "",
  city: "",
  postalCode: "",
  street: "",
};

const AddressAddForm = ({ address,setOpenModal }) => {

  const { userId } = useAuthContext();

  const formik = useFormik({
    initialValues: address ? address : initialValues,
    validationSchema: AddressvalidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission logic here

      handleFormSubmit(values);
      setSubmitting(false);
    },
  });

  const handleFormSubmit = async (values) => {
   
    const body = {
      user: userId["user_id"],
      ...values,
    };
    if (address) {
      const req = await patch("/address", body, address._id);
    } else {
      const req = await post("/address", body);
    }
    setOpenModal(false)
  };

  return (
    <div>
      <Box
        width={"100%"}
        component={"form"}
        onSubmit={formik.handleSubmit}
        className="rounded-lg"
      >
        <div className=" mx-auto bg-white p-5  grid gap-3">
          <div className=" col-span-2">
            <Input
              label={"Address Type"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("addressname"),
                placeholder: "Home/Work",
              }}
              classes={undefined}
              icon={undefined}
              id={"addressname"}
            />
            {formik.touched.addressname && formik.errors.addressname && (
              <p className="text-red-500 text-sm mt-1">
                {formik?.errors?.addressname}
              </p>
            )}
          </div>
          <div>
            <Input
              label={"First Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("firstName"),
                placeholder: "John",
              }}
              classes={undefined}
              icon={undefined}
              id={"firstName"}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {formik?.errors?.firstName}
              </p>
            )}
          </div>
          <div>
            <Input
              label={"Last Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("lastName"),
                placeholder: "Doe",
              }}
              classes={undefined}
              icon={undefined}
              id={"lastName"}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </p>
            )}

            {/* {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </p>
            )} */}
          </div>
          <div className=" col-span-2">
            <Input
              label={"Company name"}
              type={"text"}
              classes={undefined}
              icon={undefined}
              id={"company"}
              additionalAttrs={{
                ...formik.getFieldProps("company"),
                placeholder: "Individula",
              }}
            />
          </div>
          {/* <div className="col-span-2">
                <SelectField
                  label={"Country"}
                  // additionalAttrs={{
                  //   ...formik.getFieldProps("billingcountry"),
                  //   disabled: true,
                  // }}
                  id={"billingcountry"}
                  options={Country.getAllCountries()}
                  optionkeys={{ key: "isoCode", value: "name" }}
                  placeholder={undefined}
                  additionalAttrs={undefined}
                />
              </div> */}
          <div>
            <Input
              label={"Street"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("street"),
                placeholder: "Street Name",
              }}
              classes={undefined}
              icon={undefined}
              id={"street"}
            />
            {formik.touched.street && formik.errors.street && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.street}
              </p>
            )}
          </div>
          <div>
            <Input
              label={"Apartment, suite, unit, etc. (optional)"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("apartment"),
                placeholder: "13 suit building",
              }}
              classes={undefined}
              icon={undefined}
              id={"apartment"}
            />
            {formik.touched.apartment && formik.errors.apartment && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.apartment}
              </p>
            )}
          </div>
          <div className="">
            <Input
              label={"City"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("city"),
                placeholder: "Kolkata",
              }}
              classes={undefined}
              icon={undefined}
              id={"city"}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
            )}
          </div>

          <div className="">
            <Input
              label={"Postcode / ZIP"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("postalCode"),
                placeholder: "730124",
              }}
              classes={undefined}
              icon={undefined}
              id={"postalCode"}
            />
            {formik.touched.postalCode && formik.errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.postalCode}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <SelectField
              label={"State"}
              additionalAttrs={{
                ...formik.getFieldProps("state"),
                placeholder: "Select",
              }}
              id={"state"}
              options={State.getStatesOfCountry("IN")}
              optionkeys={{ key: "name", value: "name" }}
              placeholder={undefined}
            />
            {formik.touched.state && formik.errors.state && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
            )}
          </div>
          <div className="col-span-2">
            <Input
              label={"Phone Number"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("phone"),
                placeholder: "8752124563",
              }}
              classes={undefined}
              icon={undefined}
              id={"phone"}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
        </div>
        {/* <Grid
              container
              sx={{
                alignItems: "flex-start",
                justifyContent: "space-between",
                m: "0!important",
                gap: 2.5,
                width: "100%",
                p: 2,
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
              <Grid item xs={8} className="">
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
            </Grid> */}
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",

            gap: 2.5,
            width: "100%",

            my: 2,
          }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            className="bg-red-500"
            sx={{ textTransform: "capitalize" }}
            color="error"
            type="submit"
            disabled={!formik.isValid}
          >
            {address ? "Update" : "Add"} Address
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddressAddForm;
