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


// export const BillingAddressForm = () => {

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       firstName: "",
//       company: "",
//       lastName: "",
//       phoneNumber: "",
//       apartment: "",
//       street: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//       accountCreate: false,
//       useBillingAddressForShipping: false,
//       shippingFirstName: "",
//       shippingCompany: "",
//       shippingLastName: "",
//       shippingApartment: "",
//       shippingStreet: "",
//       shippingCity: "",
//       shippingState: "",
//       shippingPostalCode: "",
//       shippingCountry: "",

//     },
//     validationSchema: billingAddressValidationSchema,
//     onSubmit: (values) => {
//       //console.log("Form submitted:", values);
//     },
//   });

//   return (
//     <div>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="rounded-md shadow-md  p-6"
//       >
//         <div className=" mb-2">
//           <p className="w-full text-xl font-semibold text-gray-700">BILLING DETAILS</p>
//         </div>
//         <div className=" mx-auto bg-white  grid gap-3">
//           <div className="col-span-2">
//             <Input
//               label={"Email"}
//               type={"email"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("email"),
//                 placeholder: "info@mail.com",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"email"}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//             )}
//           </div>

//           <div>
//             <Input
//               label={"First Name"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("firstName"),
//                 placeholder: "Kishor",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"firstName"}
//             />
//             {formik.touched.firstName && formik.errors.firstName && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.firstName}
//               </p>
//             )}
//           </div>
//           <div>
//             <Input
//               label={"Last Name"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("lastName"),
//                 placeholder: "Sarkar",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"lastName"}
//             />
//             {formik.touched.lastName && formik.errors.lastName && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.lastName}
//               </p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <Input
//               label={"Company name"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("company"),
//                 placeholder: "Self",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"company"}
//             />
//             {formik.touched.company && formik.errors.company && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.company}
//               </p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <SelectField
//               label={"Country"}
//               additionalAttrs={{ ...formik.getFieldProps("country") }}
//               id={"country"}
//               options={[]}
//               placeholder={undefined}
//             />
//             {formik.touched.country && formik.errors.country && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.country}
//               </p>
//             )}
//           </div>
//           <div>
//             <Input
//               label={"Street"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("street"),
//                 placeholder: "Street address",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"street"}
//             />
//             {formik.touched.street && formik.errors.street && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.street}
//               </p>
//             )}
//           </div>
//           <div>
//             <Input
//               label={"Apartment, suite, unit, etc. (optional)"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("apartment"),
//                 placeholder: "13th place",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"apartment"}
//             />
//             {formik.touched.apartment && formik.errors.apartment && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.apartment}
//               </p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <Input
//               label={"City"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("city"),
//                 placeholder: "City/Town",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"city"}
//             />
//             {formik.touched.city && formik.errors.city && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <SelectField
//               label={"State"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("state"),
//                 placeholder: "State",
//               }}
//               id={"state"}
//               options={[]}
//               placeholder={undefined}
//             />
//             {formik.touched.state && formik.errors.state && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <Input
//               label={"Postcode / ZIP"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("postalCode"),
//                 placeholder: "154544",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"postalCode"}
//             />
//             {formik.touched.postalCode && formik.errors.postalCode && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.postalCode}
//               </p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <Input
//               label={"Phone"}
//               type={"text"}
//               additionalAttrs={{
//                 ...formik.getFieldProps("phoneNumber"),
//                 placeholder: "+1234567890",
//               }}
//               classes={undefined}
//               icon={undefined}
//               id={"phoneNumber"}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.phoneNumber}
//               </p>
//             )}
//           </div>
//           <div className="col-span-2">
//             <label htmlFor="accountCreate" className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="accountCreate"
//                 name="accountCreate"
//                 {...formik.getFieldProps("accountCreate")}
//                 className="mr-2"
//               />
//               <span className="text-sm text-gray-600">Create an account?</span>
//             </label>
//             {formik.touched.accountCreate && formik.errors.accountCreate && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.accountCreate}
//               </p>
//             )}
//           </div>

//           <div className="col-span-2">
//             <label htmlFor="useBillingAddressForShipping" className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="useBillingAddressForShipping"
//                 name="useBillingAddressForShipping"
//                 {...formik.getFieldProps("useBillingAddressForShipping")}
//                 className="mr-2"
//               />
//               <span className="text-sm text-gray-600">
//                 Ship to a different address?
//               </span>
//             </label>
//             {formik.touched.useBillingAddressForShipping &&
//               formik.errors.useBillingAddressForShipping && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {formik.errors.useBillingAddressForShipping}
//                 </p>
//               )}
//           </div>
//         </div>
//         {formik.values.useBillingAddressForShipping && <ShippingAddressForm formik={formik} />}
//       </form>
//     </div>
//   );
// };


function GetStepContent({ step, formik }) {
  switch (step) {
    case 0:
      return <BillingAddressForm />;
    case 1:
      return <Review formik={formik} />;
    default:
      throw new Error("Unknown step");
  }
}

const CheckErrorMessageAndShow = ({ key, formik }) => {
  return (
    <>
      {formik.touched[key] && formik.errors[key] && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[key]}</p>
      )}
    </>
  );
};

export const BillingAddressForm = ({}) => {
  const formik = useFormik({
    initialValues: {
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
      billingcountry: "",
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
      shippingCountry: "",
      additionalNotes: "",
      payment_method: "",
    },
    validationSchema: billingAddressValidationSchema,
    onSubmit: (values) => {
    //  //console.log("Form submitted:", values);
    },
  });

  return (
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
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
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
            <CheckErrorMessageAndShow
              key={"billingfirstName"}
              formik={formik}
            />
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
            <CheckErrorMessageAndShow key={"billinglastName"} formik={formik} />
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
            <CheckErrorMessageAndShow key={"billingcompany"} formik={formik} />
          </div>
          <div className="col-span-2">
            <SelectField
              label={"Country"}
              additionalAttrs={{ ...formik.getFieldProps("billingcountry") }}
              id={"billingcountry"}
              options={[]}
              placeholder={undefined}
            />
            <CheckErrorMessageAndShow key={"billingcountry"} formik={formik} />
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
            <CheckErrorMessageAndShow key={"street"} formik={formik} />
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
            <CheckErrorMessageAndShow
              key={"billingapartment"}
              formik={formik}
            />
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
            <CheckErrorMessageAndShow key={"billingcity"} formik={formik} />
          </div>
          <div className="col-span-2">
            <SelectField
              label={"State"}
              additionalAttrs={{
                ...formik.getFieldProps("billingstate"),
                placeholder: "State",
              }}
              id={"billingstate"}
              options={[]}
              placeholder={undefined}
            />
            <CheckErrorMessageAndShow key={"billingstate"} formik={formik} />
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
            <CheckErrorMessageAndShow
              key={"billingpostalCode"}
              formik={formik}
            />
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
            <CheckErrorMessageAndShow
              key={"billingphoneNumber"}
              formik={formik}
            />
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
                {...formik.getFieldProps("notuseBillingAddressForShipping")}
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
                additionalAttrs={{ ...formik.getFieldProps("shippingCountry") }}
                id={"shippingCountry"}
                options={[]}
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

const OrderdetailsData = ({ formik, handleNext, step }) => {
  const cartData = useSelector((state) => state["data"].cartItems);
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

  return (
    <div className="">
      <p className=" text-2xl  text-gray-600 font-semibold ">Your order</p>
      <div className="container mx-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-right">Subtotal</th>
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
              <td className="py-2 px-4 font-semibold text-left">Total</td>
              <td className="py-2 px-4 font-semibold text-right">
                {" "}
                <span>$</span>
                {calculateTotal()}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-between py-2 px-4 border-t border-gray-200 border-spacing-5">
          <span className="font-semibold">Shipping</span> <span>$18</span>
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
      {/* <div className="container mx-auto mt-4">
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Delivery Method</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select a delivery method
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="standard"
                  value="standard"
                  checked={formik.values.deliveryMethod === "standard"}
                  onChange={() =>
                    formik.setFieldValue("deliveryMethod", "standard")
                  }
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Standard Shipping</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  id="express"
                  value="express"
                  checked={formik.values.deliveryMethod === "express"}
                  onChange={() =>
                    formik.setFieldValue("deliveryMethod", "express")
                  }
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Express Shipping</span>
              </label>
            </div>
          </div>
        </div>
      </div> */}

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
                      value={method.key}
                      checked={formik.values.paymentMethod === method.key}
                      onChange={() =>
                        formik.setFieldValue("paymentMethod", method.key)
                      }
                      className="form-radio h-3 w-3 text-blue-600"
                    />
                    <span className="ml-2">{method.value}</span>
                  </label>
                  {formik.values.paymentMethod === method.key && (
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
        {step == 0 ? (
          <button
            onClick={handleNext}
            disabled={formik.error}
            type="button"
            className=" p-2 px-10 capitalize  w-full shadow-sm  h-10 bg-gray-500 text-white  hover:bg-gray-700 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 transition duration-300 rounded-none"
          >
            Preview order
          </button>
        ) : (
          <button
            type="submit"
            // disabled={formik.isSubmitting || !formik.isValid}
            className=" p-2 px-10 capitalize  w-full shadow-sm  h-10 bg-gray-500 text-white  hover:bg-gray-700 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 transition duration-300 rounded-none"
          >
            Place order
          </button>
        )}
      </div>
      <div className="container py-4">
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
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
  );
};

export function PaymentForm({ formik }) {
  const [value, setValue] = useState("");
  // //console.log(formik);

  const handleChange = (event) => {
    setValue(event.target.value);
    // //console.log(event);
    // //console.log(value);
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
              type="button"
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

export function AddressForm({ formik }) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4.5}>
      <BillingAddressForm />
    </Box>
  );
}

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
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Address
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Billing Address
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
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


const PreviewProductcard = ({ data }) => {
  // //console.log(data);
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
