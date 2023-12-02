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
import { useSelector } from "react-redux";
import Image from "next/image";
import { leftFillNum } from "@/lib/sevice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import SelectField from "@/components/global/fields/SelectField";
import { billingAddressValidationSchema } from "@/utils/validation/validation";
import React from "react";
import Link from "next/link";
import MuiModal from "@/layout/modal";
import { Close } from "@mui/icons-material";
const { default: Input } = require("@/components/global/fields/input");
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];
import { Country, State, City } from "country-state-city";
import { post } from "@/lib/network/http";
import PayPalButton from "../payment";
// const steps = ["Address Details", "Review your order"];
export default function PageValidation() {
  const cartData = useSelector((state) => state["data"].cartItems);
  const [address, setAddress] = useState(undefined);
  const steper = [
    {
      label: "Order Details",
      value: 0,
    },
    { label: "Review your order", value: 1 },
  ];
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [iscoupon, setIscoupon] = useState(false);
  const keysToKeep = [
    "email",
    "accountCreate",
    "notuseBillingAddressForShipping",
    "additionalNotes",
    "payment_method",
    "couponcode",
  ];
  // const { protectedRouteCheck, pageLoading } = useAuthContext();

  const initialValues = {
    email: "",
    billingfirstName: "",
    billingcompany: "",
    billinglastName: "",
    billingphoneNumber: "",
    billingapartment: "",
    billingstreet: "",
    billingcity: "",
    billingstate: "",
    billingpostalCode: "",
    billingcountry: "IN",
    accountCreate: false,
    notuseBillingAddressForShipping: false,
    shippingFirstName: "",
    shippingPhone: "",
    shippingCompany: "",
    shippingLastName: "",
    shippingApartment: "",
    shippingStreet: "",
    shippingCity: "",
    shippingState: "",
    shippingPostalCode: "",
    shippingCountry: "IN",
    additionalNotes: "",
    payment_method: "",
    couponcode: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: billingAddressValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission logic here

      console.log(values);
      setSubmitting(false);
      submitData(values);
    },
  });

  console.log(formik);
  // useEffect(() => {
  //   protectedRouteCheck();
  // }, []);

  const [open, setOpen] = useState(false);
  const paymentMethod = [
    { key: "creditCard", value: "Credit Card/Debit Card/NetBanking" },
    { key: "paypal", value: "PayPal" },
    { key: "cashOnDelivery", value: "Cash on Delivery" },
  ];

  const calculateTotal = () => {
    // Calculate the total by summing up all subtotals
    return cartData
      .reduce((total, product) => total + product.subtotal, 0)
      .toFixed(2);
  };

  const getPaymentDescription = () => {
    switch (formik.values.paymentMethod) {
      case "creditCard":
        return "Pay securely by Credit or Debit card or Internet Banking";
      case "paypal":
        return "Pay with your PayPal account.";
      case "cashOnDelivery":
        return "Pay with cash when the order is delivered.";
      default:
        return "";
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
    setAddress({
      billing: createAddressObject("billing", formik.values),
      email: formik.values.email,
      phoneNumber: "+91" + formik.values.billingphoneNumber,
      shipping: formik.values.notuseBillingAddressForShipping
        ? createAddressObject("shipping", formik.values)
        : createAddressObject("billing", formik.values),
    });
  };

  const submitData  = async (values) => {
    const nonaddress = Object.fromEntries(
      Object.entries(values).filter(([key]) => keysToKeep.includes(key))
    );
    const productData = [];

    cartData.forEach((element) => {
      const obj = {
        product: element.product._id,
        quantity: element.quantity,
      };
      productData.push(obj);
    });
    const body = {
      billing: createAddressObject("billing", values),
      email: values.email,
      phoneNumber: "+91" + values.billingphoneNumber,
      firstName: values.billingfirstName,
      lastName: values.billinglastName,
      username: values.email.split("@")[0],
      shipping: values.notuseBillingAddressForShipping
        ? createAddressObject("shipping", values)
        : createAddressObject("billing", values),
      ...nonaddress,
      products: productData,
    };

    const response  = await  post('/payment/checkout/process',body)
    console.log(response);
   
  };


  const handlePaymentSuccess = () => {
    console.log('Payment successful');
    // Add your logic for handling a successful payment
  };

  const handlePaymentError = () => {
    console.error('Payment failed');
    // Add your logic for handling a failed payment
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} sx={{ py: 3, px: 20 }}>
        {steper.map((item) => (
          <Step key={item.label}>
            <StepLabel
              className=" cursor-pointer"
              onClick={() => {
                activeStep != 0 && item.value == 0 && setActiveStep(item.value);
              }}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <p>
            Have a coupon?{" "}
            <span
              className=" font-medium cursor-pointer"
              onClick={() => setIscoupon(!iscoupon)}
            >
              Click here to enter your code
            </span>
          </p>
          {iscoupon && (
            <div className="flex items-center justify-start mb-2 my-2 p-10 border border-dashed border-b-2">
              <input
                type="text"
                id="couponcode"
                name="couponcode"
                placeholder="Enter coupon code"
                {...formik.getFieldProps("couponcode")}
                className="w-[85%] p-2 px-4 border shadow-sm border-gray-300 h-10 rounded-none  focus:outline-none focus:border-gray-500 transition duration-300"
              />
              <button
                type="button"
                className="w-[15%] p-2 px-4 shadow-sm  h-10 bg-gray-500 text-white  hover:bg-gray-700 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 transition duration-300 rounded-none"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        <Grid container direction={"row"} gap={2} className="relative">
          <Stack
            sx={{ my: { xs: 2, md: 2 } }}
            direction={"column"}
            gap={1.5}
            flex={2}
            className=" border-t-gray-300 border-t pt-4"
          >
            {/* { <AddressForm formik={formik} />} */}
            {activeStep == 0 ? (
              <Box display={"flex"} flexDirection={"column"} gap={4.5}>
                <div>
                  <div className="rounded-md ">
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
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          label={"First Name"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingfirstName"),
                            placeholder: "Kishor",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingfirstName"}
                        />
                        {formik.touched.billingfirstName &&
                          formik.errors.billingfirstName && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingfirstName}
                            </p>
                          )}
                      </div>
                      <div>
                        <Input
                          label={"Last Name"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billinglastName"),
                            placeholder: "Sarkar",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billinglastName"}
                        />
                        {formik.touched.billinglastName &&
                          formik.errors.billinglastName && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billinglastName}
                            </p>
                          )}
                        {/* {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </p>
            )} */}
                      </div>
                      <div className="col-span-2">
                        <Input
                          label={"Company name"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingcompany"),
                            placeholder: "Self",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingcompany"}
                        />
                        {formik.touched.billingcompany &&
                          formik.errors.billingcompany && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingcompany}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <SelectField
                          label={"Country"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingcountry"),
                            disabled: true,
                          }}
                          id={"billingcountry"}
                          options={Country.getAllCountries()}
                          optionkeys={{ key: "isoCode", value: "name" }}
                          placeholder={undefined}
                        />
                        {formik.touched.billingcountry &&
                          formik.errors.billingcountry && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingcountry}
                            </p>
                          )}
                      </div>
                      <div>
                        <Input
                          label={"Street"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingstreet"),
                            placeholder: "Street address",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingstreet"}
                        />
                        {formik.touched.billingstreet &&
                          formik.errors.billingstreet && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingstreet}
                            </p>
                          )}
                      </div>
                      <div>
                        <Input
                          label={"Apartment, suite, unit, etc. (optional)"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingapartment"),
                            placeholder: "13th place",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingapartment"}
                        />
                        {formik.touched.billingapartment &&
                          formik.errors.billingapartment && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingapartment}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <Input
                          label={"City"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingcity"),
                            placeholder: "City/Town",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingcity"}
                        />
                        {formik.touched.billingcity &&
                          formik.errors.billingcity && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingcity}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <SelectField
                          label={"State"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingstate"),
                            placeholder: "State",
                          }}
                          id={"billingstate"}
                          options={State.getStatesOfCountry(
                            formik.values.billingcountry
                          )}
                          optionkeys={{ key: "name", value: "name" }}
                          placeholder={undefined}
                        />
                        {formik.touched.billingstate &&
                          formik.errors.billingstate && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingstate}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <Input
                          label={"Postcode / ZIP"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingpostalCode"),
                            placeholder: "154544",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingpostalCode"}
                        />
                        {formik.touched.billingpostalCode &&
                          formik.errors.billingpostalCode && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingpostalCode}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <Input
                          label={"Phone"}
                          type={"text"}
                          additionalAttrs={{
                            ...formik.getFieldProps("billingphoneNumber"),
                            placeholder: "+1234567890",
                          }}
                          classes={undefined}
                          icon={undefined}
                          id={"billingphoneNumber"}
                        />
                        {formik.touched.billingphoneNumber &&
                          formik.errors.billingphoneNumber && (
                            <p className="text-red-500 text-sm mt-1">
                              {formik.errors.billingphoneNumber}
                            </p>
                          )}
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="accountCreate"
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            id="accountCreate"
                            name="accountCreate"
                            value={formik.values.accountCreate}
                            checked={formik.values.accountCreate}
                            {...formik.getFieldProps("accountCreate")}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-600">
                            Create an account?
                          </span>
                        </label>
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="notuseBillingAddressForShipping"
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            id="notuseBillingAddressForShipping"
                            name="notuseBillingAddressForShipping"
                            value={formik.values.notuseBillingAddressForShipping}
                            checked={formik.values.notuseBillingAddressForShipping}
                            {...formik.getFieldProps(
                              "notuseBillingAddressForShipping"
                            )}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-600">
                            Ship to a different address?
                          </span>
                        </label>
                      </div>
                    </div>
                    {formik.values.notuseBillingAddressForShipping && (
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
                          {formik.touched.shippingLastName &&
                            formik.errors.shippingLastName && (
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
                          {formik.touched.shippingCompany &&
                            formik.errors.shippingCompany && (
                              <p className="text-red-500 text-sm mt-1">
                                {formik.errors.shippingCompany}
                              </p>
                            )}
                        </div>
                        <div className="col-span-2">
                          <SelectField
                            label={"Country"}
                            additionalAttrs={{
                              ...formik.getFieldProps("shippingCountry"),
                              disabled: true,
                            }}
                            id={"shippingCountry"}
                            options={Country.getAllCountries()}
                            optionkeys={{ key: "isoCode", value: "name" }}
                            placeholder={undefined}
                          />
                          {formik.touched.shippingCountry &&
                            formik.errors.shippingCountry && (
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
                          {formik.touched.shippingStreet &&
                            formik.errors.shippingStreet && (
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
                          {formik.touched.shippingCity &&
                            formik.errors.shippingCity && (
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
                            options={State.getStatesOfCountry(
                              formik.values.shippingCountry
                            )}
                            optionkeys={{ key: "name", value: "name" }}
                            id={"shippingState"}
                            placeholder={undefined}
                          />
                          {formik.touched.shippingState &&
                            formik.errors.shippingState && (
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
                  </div>
                </div>
              </Box>
            ) : (
              <div>
                <Fragment>
                  <List disablePadding>
                    {cartData.map((product, index) => (
                      <PreviewProductcard key={index} data={product} />
                    ))}
                  </List>
                  <Grid container spacing={2} className=" flex-col">
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping Address
                      </Typography>
                      <Address data={address?.shipping} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Billing Address
                      </Typography>
                      <Address data={address?.billing} />
                    </Grid>
                  </Grid>
                </Fragment>
              </div>
            )}

            {/* <GetStepContent step={activeStep} formik={formik} /> */}
            {/* {GetStepContent(activeStep,formik)} */}
          </Stack>
          <Stack
            sx={{ my: { xs: 2, md: 2 } }}
            className="border-blue-500 border p-4 h-full"
            gap={1}
            flex={1}
            position={"sticky"}
            top={0}
            // sx={{ my: 2, position: "sticky", top: 0 }}
          >
            <div className="">
              <p className=" text-2xl  text-gray-600 font-semibold ">
                Your order
              </p>
              <div className="container mx-auto mt-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Product</th>
                      <th className="py-2 px-4 border-b text-right">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" border-t-gray-600 ">
                    {cartData.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b text-left text-sm">
                          <span>{item.product.title}</span> <span> x </span>{" "}
                          {item.quantity}{" "}
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          {" "}
                          <span>$</span>
                          {item.subtotal.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className=" border-t-gray-300 border-t-2">
                    <tr>
                      <td className="py-2 px-4 font-semibold text-left">
                        Total
                      </td>
                      <td className="py-2 px-4 font-semibold text-right">
                        {" "}
                        <span>$</span>
                        {calculateTotal()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="flex justify-between py-2 px-4 border-t border-gray-200 border-spacing-5">
                  <span className="font-semibold">Shipping</span>{" "}
                  <span>$18</span>
                </div>
                <div className="flex justify-between py-2 px-4 border-t border-gray-200 border-spacing-5">
                  <span className="font-semibold">Coupon Discount</span>{" "}
                  <span>$25</span>
                </div>
                <div className="flex justify-between py-2 px-4 border-t-2 border-gray-200 border-spacing-5">
                  <span className="font-bold">Final price</span>{" "}
                  <span className="font-semibold">${calculateTotal()}</span>
                </div>
              </div>

              <div className=" container mx-auto mt-2">
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select a payment method
                    </label>
                    <div className="mt-2 grid">
                      {paymentMethod.map((method) => (
                        <div
                          className=" border-b border-gray-200 border-spacing-5 mb-2 pb-2 col-span-2 "
                          key={method.key}
                        >
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              id={method.key}
                              name={"payment_method"}
                              value={method.key}
                              checked={
                                formik.values.payment_method === method.key
                              }
                              onChange={formik.handleChange}
                              className="form-radio h-3 w-3 text-blue-600"
                            />
                            <span className="ml-2">{method.value}</span>
                          </label>
                          {formik.values.payment_method === method.key && (
                            <p className="text-sm text-gray-500">
                              {getPaymentDescription()}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                {activeStep == 0 ? (
                  <button
                    onClick={handleNext}
                    disabled={formik.isSubmitting || !formik.isValid}
                    type="button"
                    className=" p-2 px-10 capitalize  w-full shadow-sm  h-10 bg-gray-500 text-white  hover:bg-gray-700 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 transition duration-300 rounded-none"
                  >
                    Preview order
                  </button>
                ) : (
                  
                  <button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                    className=" p-2 px-10 capitalize  w-full shadow-sm  h-10 bg-gray-500 text-white  hover:bg-gray-700 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 transition duration-300 rounded-none"
                  >
                    Place order
                  </button>
                
                )}
              </div>
              <div className="container py-4">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <span
                    className=" font-semibold cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    privacy policy
                  </span>
                  .
                </p>
              </div>
              <MuiModal
                heading={{
                  title: "Privacy policy",
                  classess: " text-center justify-center text-3xl",
                }}
                Content={<PrivacyPolicyModalContent setOpen={setOpen} />}
                classes={undefined}
                maxWidth={undefined}
                openModal={open}
                setOpenModal={setOpen}
              ></MuiModal>
            </div>
          </Stack>
        </Grid>
      </form>
    </Container>
  );
}

const PreviewProductcard = ({ data }) => {
  // console.log(data);
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

const PrivacyPolicyModalContent = ({ setOpen }) => {
  return (
    <div className=" mx-auto my-2 p-4 px-6 bg-white rounded">
      <p className="mb-4">
        This Privacy Policy describes how [Your Company/Website Name]
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
        shares personal information of users of this website [YourWebsite.com]
        (the &quot;Site&quot;). Please read this Privacy Policy carefully before
        using the Site.
      </p>

      <h2 className="text-lg font-bold mb-2">Information We Collect:</h2>

      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Personal Information:</strong> We may collect personally
          identifiable information, such as your name, email address, postal
          address, and phone number when you voluntarily submit it through forms
          on the Site.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> We may also collect
          non-personal information, such as browser type, IP address, and
          referring site, to enhance your experience and improve our services.
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-2">How We Use Your Information:</h2>
      <p className="mb-4">
        We may use the information we collect for various purposes, including
        but not limited to:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li>Processing orders and providing customer support.</li>
        <li>Improving our products and services.</li>
        <li>Sending promotional emails and newsletters if you opt-in.</li>
      </ul>
      <h2 className="text-lg font-bold mb-2">Information Sharing:</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third
        parties. However, we may share your information with trusted third
        parties who assist us in operating our website, conducting our business,
        or servicing you, as long as those parties agree to keep this
        information confidential.
      </p>

      <h2 className="text-lg font-bold mb-2">Cookies:</h2>
      <p className="mb-4">
        We use cookies to enhance your experience on the Site. You can disable
        cookies through your browser settings, but this may affect the
        functionality of the Site.
      </p>
      <h2 className="text-lg font-bold mb-2">Security:</h2>
      <p className="mb-4">
        We take reasonable measures to protect the personal information
        submitted to us, both during transmission and once we receive it.
        However, no method of transmission over the internet or electronic
        storage is 100% secure.
      </p>
      <h2 className="text-lg font-bold mb-2">Changes to This Policy:</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. The date of the
        latest revision will be indicated at the top of this page. We encourage
        you to review this page periodically for any changes.
      </p>

      <h2 className="text-lg font-bold mb-2">Contact Us:</h2>

      <p className="mb-4">
        If you have any questions regarding this Privacy Policy, you may contact
        us at{" "}
        <a href="mailto:kishor81160@gmail.com" className="text-blue-500">
          kishor81160@gmail.com
        </a>
        .
      </p>

      <div className=" text-center mt-10">
        <button
          onClick={() => setOpen(false)}
          type="button"
          className=" p-2 px-5 rounded-md capitalize  shadow-sm  h-10 bg-green-500 text-white  hover:bg-green-700 focus:outline-none focus:shadow-outline-indigo active:bg-green-800 transition duration-300"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

function createAddressObject(prefix, inputData) {
  return {
    firstName: inputData[`${prefix}firstName`],
    company: inputData[`${prefix}company`],
    lastName: inputData[`${prefix}lastName`],
    phoneNumber: inputData[`${prefix}phoneNumber`],
    apartment: inputData[`${prefix}apartment`],
    street: inputData[`${prefix}street`],
    city: inputData[`${prefix}city`],
    state: inputData[`${prefix}state`],
    postalCode: inputData[`${prefix}postalCode`],
    country: inputData[`${prefix}country`],
  };
}

const Address = ({ data }) => {
  return (
    <div>
      <p className=" text-lg font-medium uppercase">
        <strong>
          {data.firstName} {data.lastName}
        </strong>
        <span> {data.phoneNumber}</span>
      </p>
      <div>
        <p className="  text-[15px] capitalize">
          <span>{data.apartment}</span>, <span>{data.street}</span> ,{" "}
          <span>{data.city}</span> , <span>{data.state}</span>,{" "}
          <span>{Country.getCountryByCode(data?.country).name}</span> -{" "}
          <span>{data.postalCode}</span>
        </p>
      </div>
    </div>
  );
};
