"use client";
import { patch } from "@/helper/network";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { resetPasswordValidation } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Input from "../../fields/input";
import CustomerServices from "@/helper/network/services/CustomerServices";

const ResetForm = ({props}) => {

  //console.log(props);
  
  const token = props.searchParams.token;
//console.log(token);


  const router = useRouter();
  const handleSubmit = async (values) => {
    try {

      

      const res = await CustomerServices.resetPassword({ password: values.password },{token:token})
      if (res) {
        if (res) {
          return res
        }

      }
    } catch (error) {
      notifyerror("Error")
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",

    },
    validationSchema: resetPasswordValidation,
    onSubmit: async (values, { setSubmitting, resetForm, setValues }) => {
      setSubmitting(true)
      const res = await handleSubmit(values)

      const messages = {
        start: "Starting API call...",
        inProgress: "API call in progress...",
        success: "API call successful!",
        failure: "API call failed",
      };


      if (res["statusCode"] === 200) {

        notifySuccess('Reset Successfully! Please Login with New Password')
        resetForm()
        setSubmitting(false)
        router.push("/auth/login");


      } else {
        setSubmitting(false)
        notifyerror(res["message"])
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
        <div className=" col-span-full ">
          <Input label={"Password"} type={"password"} additionalAttrs={{
            ...formik.getFieldProps("password"),
            placeholder: "********", required: true
          }} classes={undefined} icon={undefined} id={"password"} />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="col-span-full">
          <Input label={"Confirm Pssword"} type={"password"} additionalAttrs={{
            ...formik.getFieldProps("confirmPassword"),
            placeholder: "********", required: true
          }} classes={undefined} icon={undefined} id={"confirmPassword"} />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button
          className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <span>{formik.isSubmitting ? "" : 'Confirm Password'}</span>{" "}

        </button>



      </div>

    </form>
  );
};

export default ResetForm;
