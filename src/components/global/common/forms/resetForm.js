"use client";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { resetPasswordValidation } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import Input from "../../fields/input";
import CustomerServices from "@/helper/network/services/CustomerServices";

const ResetForm = ({ props }) => {
  //console.log(props);

  //console.log(token);

  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      const token = props.searchParams.token;

      const res = await CustomerServices.resetPassword(
        { password: values.password },
        token
      );
      if (res) {
        if (res) {
          return res;
        }
      }
    } catch (error) {
      notifyerror("Error");
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const res = await handleSubmit(values);

      if (res["statusCode"] === 200) {
        notifySuccess("Reset Successfully! Please Login with New Password");
        resetForm();
        setSubmitting(false);
        router.push("/auth/login");
      } else {
        setSubmitting(false);
        notifyerror(res["message"]);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
        <div className=" col-span-full ">
          <Input
            label={"Password"}
            type={"password"}
            additionalAttrs={{
              ...formik.getFieldProps("password"),
              placeholder: "********",
              required: true,
            }}
            classes={undefined}
            icon={undefined}
            id={"password"}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="col-span-full">
          <Input
            label={"Confirm Password"}
            type={"password"}
            additionalAttrs={{
              ...formik.getFieldProps("confirmPassword"),
              placeholder: "********",
              required: true,
            }}
            classes={undefined}
            icon={undefined}
            id={"confirmPassword"}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>

        <button
          className="col-span-2 inline-flex font-bold items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 px-5 py-2 text-base h-12 rounded-lg border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 w-full"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <span>{formik.isSubmitting ? "" : "Confirm Password"}</span>{" "}
        </button>
      </div>
    </form>
  );
};

export default ResetForm;
