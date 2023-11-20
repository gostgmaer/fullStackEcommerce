import SelectField from "@/components/global/fields/SelectField";
import {
  billingAddressValidationSchema,
  shippingAddressValidationSchema,
} from "@/utils/validation/validation";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
const { default: Input } = require("@/components/global/fields/input");

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
          <p className="w-full text-xl font-semibold text-gray-700">BILLING DETAILS</p>
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
            <label htmlFor="useBillingAddressForShipping" className="flex items-center">
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
        {formik.values.useBillingAddressForShipping && <ShippingAddressForm formik={formik} />}
      </form>
    </div>
  );
};

export const ShippingAddressForm = ({formik}) => {


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
        {formik.touched.shippingFirstName && formik.errors.shippingFirstName && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingFirstName}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingLastName}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingCompany}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingCountry}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingStreet}</p>
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
        {formik.touched.shippingApartment && formik.errors.shippingApartment && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingApartment}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingCity}</p>
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
          <p className="text-red-500 text-sm mt-1">{formik.errors.shippingState}</p>
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
        {formik.touched.shippingPostalCode && formik.errors.shippingPostalCode && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.shippingPostalCode}
          </p>
        )}
      </div>
    </div>
  );
};
