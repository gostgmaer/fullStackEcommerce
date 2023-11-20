import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  List,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import SelectField from "@/components/global/fields/SelectField";
import {
  billingAddressValidationSchema,
} from "@/utils/validation/validation";
import React from "react";
const { default: Input } = require("@/components/global/fields/input");
const steps = ["Address Details", "Payment details", "Review your order"];
export default function PageValidation() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  // const { protectedRouteCheck, pageLoading } = useAuthContext();

  const initialValues = {
    billing: {
      email: "",
      firstName: "",
      company: "",
      lastName: "",
      phoneNumber: "",
      apartment: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    shipping: {
      firstName: "",
      lastName: "",
      company: "",
      apartment: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
    },
    additionalNotes:"",
    useBillingAddressForShipping: false,
    accountCreate: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: billingAddressValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formik={formik} />;
      case 1:
        return <PaymentForm formik={formik} />;
      case 2:
        return <Review formik={formik} />;
      default:
        throw new Error("Unknown step");
    }
  }
  // useEffect(() => {
  //   protectedRouteCheck();
  // }, []);

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep(activeStep - 1);
  };

  const handlePayment = (params) => {
    console.log(formik.values);
    router.push("order-confirmation");
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} sx={{ py: 3, px: 20 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container direction={"row"} gap={5}>
        <Stack
          sx={{ my: { xs: 2, md: 2 } }}
          direction={"column"}
          gap={1.5}
          flex={2}
        >
          {/* { <AddressForm formik={formik} />} */}
          {getStepContent(activeStep)}
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", gap: 5 }}
          >
            {activeStep !== 0 ? (
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={handleBack}
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                {`Back to ${steps
                  .filter((item, index) => index === activeStep - 1)
                  .toString()}`}
              </Button>
            ) : (
              <Button
                fullWidth
                variant="outlined"
                color="error"
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                Back to cart
              </Button>
            )}

            {activeStep <= 1 ? (
              <Button
                fullWidth
                variant="contained"
                className=" bg-gray-700"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                {steps
                  .filter((item, index) => index === activeStep + 1)
                  .toString()}
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                onClick={handlePayment}
                className=" bg-gray-700"
                sx={{ mt: 3, ml: 1, textTransform: "capitalize" }}
              >
                Place order
              </Button>
            )}
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          gap={1}
          flex={0.9}
          sx={{ my: 2, position: "sticky", top: 0 }}
        >
          <Pricesumery />
        </Stack>
      </Grid>
    </Container>
  );
}

export function AddressForm({ formik }) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4.5}>
      <BillingAddressForm />
    </Box>
  );
}

import { useSelector } from "react-redux";
import Image from "next/image";
import { leftFillNum } from "@/lib/sevice";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export function Review({ formik }) {
  const cartData = useSelector((state) => state["data"].cartItems);

  return (
    <Fragment>
      <List disablePadding>
        {cartData.map((product, index) => (
          <PreviewProductcard key={index} data={product} />
        ))}
      </List>
      <Grid container spacing={2}>
        {ShippingAddress()}
        {BillingAddress()}
        {PaymentDetails()}
      </Grid>
    </Fragment>
  );

  function ShippingAddress() {
    return (
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Shipping Address
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses.join(", ")}</Typography>
      </Grid>
    );
  }

  function BillingAddress() {
    return (
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Billing Address
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses.join(", ")}</Typography>
      </Grid>
    );
  }

  function PaymentDetails() {
    return (
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Payment details
        </Typography>
        <Grid container>
          {payments.map((payment) => (
            <Fragment key={payment.name}>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.detail}</Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    );
  }
}

const PreviewProductcard = ({ data }) => {
  console.log(data);
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: 1,
        "&.MuiPaper-root:hover": {
          backgroundColor: colors.blue[50],
        },
      }}
    >
      <Box display={"flex"} gap={1} alignItems={"flex-start"} width={"100%"}>
        <Stack gap={0.5} alignItems={"flex-start"} flex={0.5}>
          <Image
            className=" w-20 h-20 object-contain"
            width={100}
            height={100}
            // style={{ objectFit: "contain" }}
            alt={data?.["product"]["images"]?.[0]?.["name"]}
            src={data?.["product"]["images"]?.[0]?.["url"]}
          ></Image>
        </Stack>

        <Stack gap={0.5} alignItems={"flex-start"} flex={2}>
          <Typography>{data?.["product"]["title"]}</Typography>
          <Typography className="flex gap-1">
            <span>${data["product"].price.toFixed(2)}</span> *
            <span>{data["quantity"]}</span>
          </Typography>
        </Stack>
        <Stack
          fontSize={14}
          direction={"row"}
          textAlign={"right"}
          gap={20}
          flex={0.8}
          className="text-right"
        >
          <Typography color={colors.red[500]} width={"100%"}>
            <span>Subtotal: </span> <span>$ {data["subtotal"].toFixed(2)}</span>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

export function PaymentForm({ formik }) {
  const [value, setValue] = useState("");
  // console.log(formik);

  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log(event);
    // console.log(value);
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
        {value === "paypal" && <PaywithPaypal formik={formik} />}
        <Divider sx={{ my: 2 }} />
      </Stack>
      {/* <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="upi"
            control={<Radio />}
            label="Pay with UPI"
          />
        </RadioGroup>
        {value === "upi" && <Paywithupi />}
        <Divider sx={{ my: 2 }} />
      </Stack> */}
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

          <Grid
            item
            xs={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "space-between " }}
            gap={2}
          >
            <FormControl fullWidth size="small">
              <InputLabel id="select-small-year">Card Expire Year</InputLabel>
              <Select
                id="expyear"
                name="expyear"
                label="Card Expire Year"
                labelId="select-small-year"
                value={formik.values.expyear}
                onChange={formik.handleChange}
              >
                {[...Array(10)]
                  .map((a, b) => new Date().getFullYear() + b)
                  .map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
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
                  <MenuItem key={item} value={leftFillNum(item + 1, 2)}>
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
            <Button
              color="error"
              sx={{ textTransform: "capitalize", px: 4 }}
              size="small"
              variant="outlined"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
const PaywithPaypal = ({ formik }) => {
  return (
    <Box>
      <Stack gap={2}>
        <Box></Box>
        <Grid
          container
          gap={2}
          justifyContent={"space-between"}
          spacing={1}
          columns={12.5}
        >
          <Grid item xs={8} sm={10} sx={{ display: "flex" }} gap={2}>
            <TextField
              required
              id="paypalemail"
              name="paypalemail"
              onChange={formik.handleChange}
              value={formik.values.paypalemail}
              label="Paypal Email"
              size="small"
              fullWidth
              autoComplete="paypalemail"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={2} sx={{ display: "flex" }} gap={2}>
            <Button
              color="error"
              variant="outlined"
              sx={{ textTransform: "capitalize", px: 4 }}
              size="small"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
const Paywithupi = (params) => {
  return <Box></Box>;
};
const PayCoD = (params) => {
  return <Box></Box>;
};

const Pricesumery = () => {
  const cartData = useSelector((state) => state["data"].cartItems);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(25);
  const [discount, setDiscount] = useState(45);

  const CalculateTotal = (params) => {
    const subtotal = cartData.reduce((acc, item) => acc + item.subtotal, 0);
    const absulateprice = subtotal + shipping - discount;
    setTotal(absulateprice);
  };

  useEffect(() => {
    CalculateTotal();
  }, [cartData]);

  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Subtotal:</Typography>
          <Typography variant="body2">
            ${" "}
            {cartData.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Shipping:</Typography>
          <Typography variant="body2">${shipping.toFixed(2)}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
          className="hidden"
        >
          <Typography variant="body2">Tax:</Typography>
          <Typography variant="body2">$40.00</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Discount:</Typography>
          <Typography variant="body2">${discount.toFixed(2)}</Typography>
        </Stack>
      </Box>
      <Divider sx={{ my: 2 }}></Divider>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mt: 2, mb: 1 }}
      >
        <Typography variant="body2">Total:</Typography>
        <Typography variant="body2">${total.toFixed(2)}</Typography>
      </Stack>
    </Paper>
  );
};

export const BillingAddressForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      company: "",
      lastName: "",
      phoneNumber: "",
      apartment: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      accountCreate: false,
      useBillingAddressForShipping: false,
      shippingFirstName: "",
      shippingCompany: "",
      shippingLastName: "",
      shippingApartment: "",
      shippingStreet: "",
      shippingCity: "",
      shippingState: "",
      shippingPostalCode: "",
      shippingCountry: "",
    },
    validationSchema: billingAddressValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-md shadow-md  p-6"
      >
        <div className=" mb-2">
          <p className="w-full text-xl font-semibold text-gray-700">
            BILLING DETAILS
          </p>
        </div>
        <div className=" mx-auto bg-white  grid gap-3">
          <div className="col-span-2">
            <Input
              label={"Email"}
              type={"email"}
              additionalAttrs={{
                ...formik.getFieldProps("email"),
                placeholder: "info@mail.com",
              }}
              classes={undefined}
              icon={undefined}
              id={"email"}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <Input
              label={"First Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("firstName"),
                placeholder: "Kishor",
              }}
              classes={undefined}
              icon={undefined}
              id={"firstName"}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div>
            <Input
              label={"Last Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("lastName"),
                placeholder: "Sarkar",
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
          </div>
          <div className="col-span-2">
            <Input
              label={"Company name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("company"),
                placeholder: "Self",
              }}
              classes={undefined}
              icon={undefined}
              id={"company"}
            />
            {formik.touched.company && formik.errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.company}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <SelectField
              label={"Country"}
              additionalAttrs={{ ...formik.getFieldProps("country") }}
              id={"country"}
              options={[]}
              placeholder={undefined}
            />
            {formik.touched.country && formik.errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.country}
              </p>
            )}
          </div>
          <div>
            <Input
              label={"Street"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("street"),
                placeholder: "Street address",
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
                placeholder: "13th place",
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
          <div className="col-span-2">
            <Input
              label={"City"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("city"),
                placeholder: "City/Town",
              }}
              classes={undefined}
              icon={undefined}
              id={"city"}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
            )}
          </div>
          <div className="col-span-2">
            <SelectField
              label={"State"}
              additionalAttrs={{
                ...formik.getFieldProps("state"),
                placeholder: "State",
              }}
              id={"state"}
              options={[]}
              placeholder={undefined}
            />
            {formik.touched.state && formik.errors.state && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
            )}
          </div>
          <div className="col-span-2">
            <Input
              label={"Postcode / ZIP"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("postalCode"),
                placeholder: "154544",
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
            <Input
              label={"Phone"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("phoneNumber"),
                placeholder: "+1234567890",
              }}
              classes={undefined}
              icon={undefined}
              id={"phoneNumber"}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label htmlFor="accountCreate" className="flex items-center">
              <input
                type="checkbox"
                id="accountCreate"
                name="accountCreate"
                {...formik.getFieldProps("accountCreate")}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Create an account?</span>
            </label>
            {formik.touched.accountCreate && formik.errors.accountCreate && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.accountCreate}
              </p>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="useBillingAddressForShipping"
              className="flex items-center"
            >
              <input
                type="checkbox"
                id="useBillingAddressForShipping"
                name="useBillingAddressForShipping"
                {...formik.getFieldProps("useBillingAddressForShipping")}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">
                Ship to a different address?
              </span>
            </label>
            {formik.touched.useBillingAddressForShipping &&
              formik.errors.useBillingAddressForShipping && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.useBillingAddressForShipping}
                </p>
              )}
          </div>
        </div>
        {formik.values.useBillingAddressForShipping && (
          <ShippingAddressForm formik={formik} />
        )}
        <div className="col-span-2">
          <div className="flex items-center mt-5">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Notes about your order, e.g. special notes for delivery...."
              rows={5}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export const ShippingAddressForm = ({ formik }) => {
  return (
    <div className=" mt-4 mx-auto bg-white  grid gap-3">
      <div>
        <Input
          label={"First Name"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingFirstName"),
            placeholder: "Kishor",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingFirstName"}
        />
        {formik.touched.shippingFirstName &&
          formik.errors.shippingFirstName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingFirstName}
            </p>
          )}
      </div>
      <div>
        <Input
          label={"Last Name"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingLastName"),
            placeholder: "Sarkar",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingLastName"}
        />
        {formik.touched.shippingLastName && formik.errors.shippingLastName && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingLastName}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <Input
          label={"Company name"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingCompany"),
            placeholder: "Self",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingCompany"}
        />
        {formik.touched.shippingCompany && formik.errors.shippingCompany && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingCompany}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <SelectField
          label={"Country"}
          additionalAttrs={{ ...formik.getFieldProps("shippingCountry") }}
          id={"shippingCountry"}
          options={[]}
          placeholder={undefined}
        />
        {formik.touched.shippingCountry && formik.errors.shippingCountry && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingCountry}
          </p>
        )}
      </div>
      <div>
        <Input
          label={"Street"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingStreet"),
            placeholder: "Street address",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingStreet"}
        />
        {formik.touched.shippingStreet && formik.errors.shippingStreet && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingStreet}
          </p>
        )}
      </div>
      <div>
        <Input
          label={"Apartment, suite, unit, etc. (optional)"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingApartment"),
            placeholder: "13th place",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingApartment"}
        />
        {formik.touched.shippingApartment &&
          formik.errors.shippingApartment && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingApartment}
            </p>
          )}
      </div>
      <div className="col-span-2">
        <Input
          label={"City"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingCity"),
            placeholder: "City/Town",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingCity"}
        />
        {formik.touched.shippingCity && formik.errors.shippingCity && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingCity}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <SelectField
          label={"State"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingState"),
            placeholder: "State",
          }}
          id={"shippingState"}
          options={[]}
          placeholder={undefined}
        />
        {formik.touched.shippingState && formik.errors.shippingState && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingState}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <Input
          label={"Postcode / ZIP"}
          type={"text"}
          additionalAttrs={{
            ...formik.getFieldProps("shippingPostalCode"),
            placeholder: "154544",
          }}
          classes={undefined}
          icon={undefined}
          id={"shippingPostalCode"}
        />
        {formik.touched.shippingPostalCode &&
          formik.errors.shippingPostalCode && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.shippingPostalCode}
            </p>
          )}
      </div>
    </div>
  );
};
