"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSession } from "next-auth/react";
import { IoArrowForward } from "react-icons/io5";
import CustomerServices from "@/helper/network/services/CustomerServices";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import Input from "../../fields/input";

const changePasswordSchema = z.object({
  current_password: z.string().min(1, 'Current password is required!'),
  password: z.string().min(6, 'Password must be at least 6 characters!'),
  confirmPassword: z.string().min(1, 'Please confirm your new password!'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match!",
  path: ["confirmPassword"],
});

const ChangePassword = () => {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      current_password: "",
      password: "",
      confirmPassword: "",
    }
  });

  const onSubmit = async (values) => {
    const { password, current_password } = values;
    try {
      const reset = await CustomerServices.changePassword(
        { password, current_password }, 
        { "Authorization": `Bearer ${session?.["accessToken"]}` }
      );
      if (reset.status == "OK") {
        notifySuccess(reset.message);
      } else {
        notifyerror(reset.message);
      }
    } catch (error) {
      notifyerror(error?.message || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-background text-foreground transition-colors duration-200">
      <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
        <div className="col-span-full">
          <Input 
            label={"Email Address"} 
            type={"email"} 
            additionalAttrs={{
              value: session?.user?.email, 
              readOnly: true, 
              autoComplete: 'email',
              disabled: true
            }} 
            id={"email"} 
          />
        </div>
        
        <div className="col-span-full">
          <Input 
            label={"Current Password"} 
            type={"password"} 
            additionalAttrs={{
              ...register("current_password"), 
              autoComplete: "current-password",
              placeholder: "Current Password", 
              required: true
            }} 
            id={"current_password"} 
          />
          {errors.current_password && (
            <div className="text-red-500 text-xs mt-1 font-semibold">{errors.current_password.message}</div>
          )}
        </div>
        
        <div className="col-span-full">
          <Input 
            label={"New Password"} 
            type={"password"} 
            additionalAttrs={{
              ...register("password"),
              placeholder: "New Password", 
              required: true, 
              autoComplete: 'new-password'
            }} 
            id={"password"} 
          />
          {errors.password && (
            <div className="text-red-500 text-xs mt-1 font-semibold">{errors.password.message}</div>
          )}
        </div>
        
        <div className="col-span-full">
          <Input 
            label={"Confirm New Password"} 
            type={"password"} 
            additionalAttrs={{
              ...register("confirmPassword"),
              placeholder: "Confirm new password", 
              required: true, 
              autoComplete: 'new-password'
            }} 
            id={"confirmPassword"} 
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-xs mt-1 font-semibold">{errors.confirmPassword.message}</div>
          )}
        </div>
      </div>
      
      <div className="col-span-full text-right mt-6">
        <button
          className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-bold text-center justify-center border-0 border-transparent rounded-lg bg-primary text-primary-foreground px-6 py-3.5 hover:bg-primary/90 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto shadow-sm hover:shadow disabled:opacity-50"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Changing..." : "Change Password"}</span> 
          <IoArrowForward className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
