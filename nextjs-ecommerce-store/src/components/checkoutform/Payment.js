import { countries } from "@/assets/mock/staticData";
import { useGlobalContext } from "@/context/globalContext";
import { leftFillNum } from "@/lib/sevice";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export default function PaymentForm({ formik }) {
  const [value, setValue] = useState("");
  console.log(formik);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event);
    console.log(value);
  };
  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Pay with credit card"
          />
        </RadioGroup>
        {value === "card" && <PaywithCard formik={formik} />}
        <Divider sx={{ my: 2 }} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="paypal"
            control={<Radio />}
            label="Pay with Paypal"
          />
        </RadioGroup>
        {value === "paypal" && <PaywithPaypal />}
        <Divider sx={{ my: 2 }} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="upi"
            control={<Radio />}
            label="Pay with UPI"
          />
        </RadioGroup>
        {value === "upi" && <Paywithupi />}
        <Divider sx={{ my: 2 }} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash on Delivary"
          />
        </RadioGroup>
        {value === "cod" && <PayCoD />}
      </Stack>
    </Paper>
  );
}

const PaywithCard = ({ formik }) => {
  const { years } = useGlobalContext();

  const data =[...Array(10)].map((a,b)=> new Date().getFullYear() + b)
  console.log(data);

  return (
    <Box>
      <Stack gap={2}>
        <Box></Box>
        <Grid
          container
          gap={2}
          justifyContent={"space-between"}
          spacing={1}
          columns={12}
        >
          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <Typography variant="body1" mb={0} gutterBottom>
              Enter Card Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <TextField
              required
              id="cardname"
              name="cardname"
              label="Full Name"
              onChange={formik.handleChange}
              value={formik.values.cardname}
              size="small"
              fullWidth
              autoComplete="company-name"
              variant="outlined"
            />
            <TextField
              required
              id="cardno"
              name="cardno"
              onChange={formik.handleChange}
              value={formik.values.cardno}
              label="Card No"
              size="small"
              fullWidth
              autoComplete="card-no"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={12} sx={{ display: "flex",justifyContent:'space-between ' }} gap={2}>
          
            <FormControl fullWidth  size="small">
              <InputLabel id="select-small-year">Card Expire Year</InputLabel>
              <Select
                id="expyear"
                name="expyear"
                label="Card Expire Year"
                labelId="select-small-year"
                value={formik.values.expyear}
                onChange={formik.handleChange}
              >
                {[...Array(10)].map((a,b)=> new Date().getFullYear() + b).map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel id="select-small-year">Card Expire Month</InputLabel>
              <Select
                id="expmonth"
                name="expmonth"
                label="Card Expire Month"
                labelId="select-small-month"
                value={formik.values.expmonth}
                onChange={formik.handleChange}
              >
                {Array.from(Array(12).keys()).map((item) => (
                  <MenuItem value={leftFillNum(item + 1, 2)}>
                  {leftFillNum(item + 1, 2)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          <Grid item xs={12}>
          <TextField
              required
              id="cvv"
              onChange={formik.handleChange}
              value={formik.values.cvv}
              sx={{ flex: 1 }}
              type="number"
              name="cvv"
              label="CVC/CVV"
              size="small"
              fullWidth
              autoComplete="cvv-number"
              variant="outlined"
            />
          </Grid>
           
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <FormControlLabel control={<Checkbox />} label="Save this Card" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
const PaywithPaypal = (params) => {
  return <Box>PaywithPaypal</Box>;
};
const Paywithupi = (params) => {
  return <Box></Box>;
};
const PayCoD = (params) => {
  return <Box></Box>;
};
