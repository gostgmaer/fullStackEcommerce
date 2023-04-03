import { countries } from "@/assets/mock/staticData";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

export default function AddressForm(props) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4.5}>
      <ShippingAddress params={props.formik}></ShippingAddress>
      <Billingaddress params={props.formik}></Billingaddress>
    </Box>
  );
}

const configFormik = () => {};

const ShippingAddress = (params) => {
  const formik = params.params;

  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Stack gap={2}>
        <Typography variant="h6" mb={0} gutterBottom>
          Shipping Address
        </Typography>
        <Grid
          container
          gap={5}
          justifyContent={"space-between"}
          spacing={3}
          columns={12.8}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
            gap={2}
          >
            <TextField
              required
              id="fname"
              name="fname"
              label="First name"
              size="small"
              fullWidth
              autoComplete="fname"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.fname}
            />
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              size="small"
              type="email"
              fullWidth
              autoComplete="email-address"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              required
              id="company"
              name="company"
              label="Company"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.company}
              fullWidth
              autoComplete="company-name"
              variant="outlined"
            />
            <TextField
              required
              id="address1"
              name="address1"
              {...params}
              label="Address 1"
              onChange={formik.handleChange}
              value={formik.values.address1}
              size="small"
              fullWidth
              autoComplete="address-name"
              variant="outlined"
            />
           
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
            gap={2}
          >
            <TextField
              required
              id="lname"
              name="lname"
              onChange={formik.handleChange}
              value={formik.values.lname}
              label="Last name"
              size="small"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
            <TextField
              required
              type="text"
              id="phone"
              name="phone"
              label="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="811424511"
              size="small"
              fullWidth
              autoComplete="phonenumber"
              variant="outlined"
            />
            <TextField
              required
              id="zipcode"
              name="zipcode"
              onChange={formik.handleChange}
              value={formik.values.zipcode}
              label="Zip Code"
              size="small"
              fullWidth
              autoComplete="address-name"
              variant="outlined"
            />
            <TextField
              required
              id="address2"
              name="address2"
              label="Address 2"
              onChange={formik.handleChange}
              value={formik.values.address2}
              size="small"
              fullWidth
              autoComplete="address-two-name"
              variant="outlined"
            />
           
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

const Billingaddress = (params) => {
  const formik = params.params;
  const [isSame, setIsSame] = useState(true);

  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Stack gap={2}>
        <Typography variant="h6" mb={0} gutterBottom>
          Billing Address
        </Typography>
        <FormControlLabel
          control={<Checkbox onChange={() => setIsSame(!isSame)} />}
          label="Same as shipping address"
        />
        {isSame&& <Grid
          container
          gap={5}
          justifyContent={"space-between"}
          spacing={3}
          columns={12.8}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
            gap={2}
          >
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.bfname}
              id="bfname"
              name="bfname"
              label="First name"
              size="small"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.bemail}
              id="bemail"
              name="bemail"
              label="Email Address"
              placeholder="info@mail.com"
              size="small"
              fullWidth
              autoComplete="email-address"
              variant="outlined"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.bcompany}
              id="bcompany"
              name="bcompany"
              label="Company"
              size="small"
              fullWidth
              autoComplete="company-name"
              variant="outlined"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.baddress1}
              id="baddress1"
              name="baddress1"
              label="Address 1"
              size="small"
              fullWidth
              autoComplete="address-name"
              variant="outlined"
            />
            <Autocomplete
              id="bcountry"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.bcountry}
              options={countries}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Country" />
              )}
            />
           
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
            gap={2}
          >
            <TextField
              required
              id="blname"
              name="blname"
              label="Last name"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.blname}
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
            <TextField
              required
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bphone}
              id="bphone"
              name="bphone"
              label="Phone Number"
              placeholder="811424511"
              size="small"
              fullWidth
              autoComplete="phonenumber"
              variant="outlined"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.bzipcode}
              id="bzipcode"
              name="bzipcode"
              label="Zip Code"
              size="small"
              fullWidth
              autoComplete="address-name"
              variant="outlined"
            />
            <TextField
              required
              id="baddress2"
              name="baddress2"
              onChange={formik.handleChange}
              value={formik.values.baddress2}
              label="Address 2"
              size="small"
              fullWidth
              autoComplete="address-two-name"
              variant="outlined"
            />
            <Autocomplete
              id="bstate"
              onChange={formik.handleChange}
              value={formik.values.bstate}
              fullWidth
              options={countries}
              renderInput={(params) => (
                <TextField {...params} size="small" label="State" />
              )}
            />
           
          </Grid>
        </Grid>}
       
      </Stack>
    </Paper>
  );
};
