"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/validation/validation";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useSession, signIn } from "next-auth/react";
import Input from "@/components/global/fields/input";
import { notifyerror } from "@/utils/notify/notice";
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const { data: session, status } = useSession();
  // const { handleLoginAuth, user, userId, authError } = useAuthContext();
  // const [authError, setAuthError] = useState(undefined);
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";
  /////console.log(session, status);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {


      console.log("LoginForm values", values);
      // if (authError) {
      //   notifyerror(authError, 5000);  
      console.log("LoginForm callbackUrl", callbackUrl);
      
    
      
    
      const res = await signIn("credentials", {
        ...values,
        callbackUrl,
      });

      if (res.ok) {
        if (res.url) {
         const fullUrl = new URL(res.url, window.location.origin);
         console.log(fullUrl);
         
          router.push(fullUrl.pathname || "/");
        }
      } else {
        notifyerror(res.error, 5000);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-4 lg:space-y-5">
        <div className="col-span-full ">
          <Input
            label={""}
            type={"text"}
            additionalAttrs={{
              ...formik.getFieldProps("email"),
              placeholder: "Email",
              required: true,
            }}
            classes={undefined}
            icon={<MdEmail />}
            id={"email"}
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="col-span-full ">
          <Input
            label={""}
            type={"password"}
            additionalAttrs={{
              ...formik.getFieldProps("password"),
              placeholder: "Password",
              required: true,
              autoComplete: "off",
            }}
            classes={undefined}
            icon={<MdLock />}
            id={"password"}
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <div className="flex items-center justify-between pb-1">
          <div className=" flex flex-col [&amp;>label>span]:font-medium">
            <div className="rizzui-checkbox-container flex flex-row items-center">
              <div className="relative leading-none">
                <input
                  type="checkbox"
                  className="rizzui-checkbox-input peer disabled:bg-gray-50 disabled:border-gray-200 h-5 w-5 rounded bg-transparent border border-gray-300 checked:!bg-gray-1000 focus:ring-gray-900/30 checked:!border-gray-1000 hover:enabled:border-gray-1000"
                  name="isRememberMe"
                />
              </div>
              <span className="rizzui-checkbox-label text-sm ml-1.5 rtl:mr-1.5">
                Remember Me
              </span>
            </div>
          </div>
          <Link
            className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
            href="/auth/forget-password"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <span>{formik.isSubmitting ? "Submitting..." : "Login"}</span>{" "}
        </button>
        <div className="before:content-[' '] relative  mt-0.5 flex items-center  before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-gray-100   justify-center">
          <span className="relative z-10 inline-block bg-white text-sm font-medium text-gray-500 dark:bg-gray-50 2xl:text-base ">
            Or
          </span>
        </div>
        {/* <div className="col-span-full">
          <button
            className="rizzui-button inline-flex font-medium items-center text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue-600  hover:enabled::bg-blue-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 h-11 w-full"
            type="button"
            onClick={async () => await signIn("google")}
          >
            <FaGoogle className="h-4 w-4 mr-1 text-yellow-400" />
            <span className="truncate">Signin with Google</span>
          </button>
        </div> */}
        <div className="col-span-full">
          <button
            className="rizzui-button inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-600  hover:enabled:bg-gray-700 focus-visible:ring-blue/30 text-white h-11 w-full"
            type="button"
            onClick={async () => await signIn("github")}
          >
            <FaGithub className="h-4 w-4 mr-1" />
            <span className="truncate">Signin with Github</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
