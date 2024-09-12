"use client";
import { post } from "@/helper/network";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { registerValidationSchema } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import Input from "../../fields/input";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { getUsername } from "@/helper/functions";


const RegisterForm = () => {

  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      const res = await post("/user/auth/register", values);
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
      firstName: "",
      lastName: "",
      password: "",
      email: "",

    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setValues }) => {
      setSubmitting(true)
      const res = await handleSubmit({...values,username:getUsername(values.email)})

      const messages = {
        start: "Starting API call...",
        inProgress: "API call in progress...",
        success: "API call successful!",
        failure: "API call failed",
      };
      if (res["statusCode"] === 201) {

        notifySuccess(res.message)
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

        <div className="col-span-1 ">
          <Input label={"First name"} type={"text"} additionalAttrs={{
            ...formik.getFieldProps("firstName"),
            placeholder: "First name", required: true
          }} classes={undefined} icon={undefined} id={"firstName"} />


          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          )}
        </div>
        <div className="col-span-1 ">
          <Input label={"Last name"} type={"text"} additionalAttrs={{
            ...formik.getFieldProps("lastName"),
            placeholder: "Last name", required: true
          }} classes={undefined} icon={undefined} id={"lastName"} />


          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
        </div>
        <div className=" col-span-full ">
          <Input label={"Email Address"} type={"text"} additionalAttrs={{
            ...formik.getFieldProps("email"),
            placeholder: "email", required: true
          }} classes={undefined} icon={undefined} id={"email"} />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className=" col-span-full ">
          <Input label={"Password"} type={"password"} additionalAttrs={{
            ...formik.getFieldProps("password"),
            placeholder: "********", required: true
          }} classes={undefined} icon={undefined} id={"password"} />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
       

        <button
          className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <span>{formik.isSubmitting ? "Submitting..." : 'Register'}</span>{" "}
        </button>

        <div className=" col-span-full before:content-[' '] relative  mt-0.5 flex items-center  before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-gray-100   justify-center">
          <span className="relative z-10 inline-block bg-white text-sm font-medium text-gray-500 dark:bg-gray-50 2xl:text-base ">
            Or
          </span>
        </div>
        {/* <div className="col-span-full">
          <button
            className="rizzui-button inline-flex font-medium items-center text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 h-11 w-full"
            type="button"
            onClick={async () => await signIn("google")}
          >
            <FaGoogle className="h-4 w-4 mr-1 text-yellow-400" />
            <span className="truncate">Signing Up with Google</span>
          </button>
        </div> */}
        <div className="col-span-full">

          <button
            className="rizzui-button inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-600 hover:enabled:bg-blue-dark focus-visible:ring-blue/30 text-white h-11 w-full"
            type="button"
            onClick={async () => await signIn("github")}
          >
            <FaGithub className="h-4 w-4 mr-1" />
            <span className="truncate">Signing Up with Github</span>
          </button>
        </div>

      </div>
    </form>
  );
};

export default RegisterForm;
