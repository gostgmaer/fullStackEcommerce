"use client";

import CustomerServices from "@/helper/network/services/CustomerServices";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { resetPasswordValidation } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Input from "../../fields/input";

const ChangePassword = () => {

    const router = useRouter();
    const { data: session, status } = useSession();
// console.log(session);

    const handleSubmit = async (values) => {
        try {
            const reset = await CustomerServices.changePassword(
                { password: values.password }, { "Authorization": `Bearer ${session["accessToken"]}` }
            );
            if (reset.status == "OK") {
                notifySuccess(reset.message, 2000)
            }else{
                notifyerror(reset.message)
            }
        } catch (error) {
            console.log(error);
            
            notifyerror(error?.["message"])
           

        }
    };


    const formik = useFormik({
        initialValues: {
      
            current_password: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: resetPasswordValidation,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
                <div className="col-span-full">
                    <Input label={"Email Address"} type={"email"} additionalAttrs={{
                        value:session?.user?.email, readOnly: true, autoComplete: 'email',disabled:true
                    }} classes={undefined} icon={undefined} id={"email"} />



                </div>
                <div className="col-span-full">
                    <Input label={"Current Password"} type={"password"} additionalAttrs={{
                        ...formik.getFieldProps("current_password"), autoComplete: "false",
                        placeholder: "Current Password", required: true
                    }} classes={undefined} icon={undefined} id={"current_password"} />
                    {formik.errors.current_password && formik.touched.current_password && (
                        <div className="text-red-500 text-sm">{formik.errors.current_password}</div>
                    )}
                </div>
                <div className="col-span-full">
                    <Input label={"New Password"} type={"password"} additionalAttrs={{
                        ...formik.getFieldProps("password"),
                        placeholder: "New Password", required: true, autoComplete: ''
                    }} classes={undefined} icon={undefined} id={"password"} />
                    {formik.errors.password && formik.touched.password && (
                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                    )}
                </div>
                <div className="col-span-full">
                    <Input label={"confirm Password"} type={"password"} additionalAttrs={{
                        ...formik.getFieldProps("confirmPassword"),
                        placeholder: "Confirm password", required: true, autoComplete: ''
                    }} classes={undefined} icon={undefined} id={"confirmPassword"} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                    )}
                </div>




            </div>
            <div className="col-span-full text-right mt-5">
                <button
                    className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto disabled:bg-gray-500"
                    type="submit"
                    disabled={!formik.isValid}
                >
                    <span>Change Password</span> <IoArrowForward />
                </button>
            </div>

        </form>
    );
};

export default ChangePassword;
