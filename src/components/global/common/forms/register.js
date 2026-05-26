"use client";

import authService from "@/helper/network/services/auth";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import React from "react";
import Input from "../../fields/input";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { getUsername } from "@/helper/functions";
import zxcvbn from "zxcvbn";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/, "Password must contain at least one special character")
  .superRefine((value, ctx) => {
    const analysis = zxcvbn(value);

    if (analysis.score < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is too weak. Use a longer, less common password.",
      });
    }
  });

const registerSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: passwordSchema,
});

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        username: getUsername(values.email),
        confirmPassword: values.password,
      };
      
      const res = await authService.userRegister(payload);

      if (res && res["statusCode"] === 201) {
        notifySuccess(res.message || "Registration successful!");
        router.push("/auth/login");
      } else {
        notifyerror(res?.["message"] || res?.error || "Registration failed.");
      }
    } catch (error) {
      notifyerror(error?.message || "An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 text-slate-800 dark:text-slate-100">
        <div>
          <Input
            label={"First name"}
            type={"text"}
            additionalAttrs={{
              ...register("firstName"),
              placeholder: "First name",
              required: true
            }}
            id={"firstName"}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Input
            label={"Last name"}
            type={"text"}
            additionalAttrs={{
              ...register("lastName"),
              placeholder: "Last name",
              required: true
            }}
            id={"lastName"}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.lastName.message}</p>
          )}
        </div>

        <div className="col-span-full">
          <Input
            label={"Email Address"}
            type={"text"}
            additionalAttrs={{
              ...register("email"),
              placeholder: "john@example.com",
              required: true
            }}
            id={"email"}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>
          )}
        </div>

        <div className="col-span-full">
          <Input
            label={"Password"}
            type={"password"}
            additionalAttrs={{
              ...register("password"),
              placeholder: "********",
              required: true
            }}
            id={"password"}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.password.message}</p>
          )}
        </div>

        <button
          className="col-span-full inline-flex font-bold items-center justify-center bg-primary hover:bg-primary/95 text-white shadow-sm active:scale-[0.98] transition-all duration-200 px-5 py-3 text-sm h-12 rounded-lg border border-transparent disabled:opacity-50 mt-2"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Registering..." : "Register"}</span>
        </button>

        <div className="col-span-full relative flex items-center justify-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <span className="relative z-10 px-3 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">
            Or
          </span>
        </div>

        <div className="col-span-full">
          <button
            className="w-full inline-flex font-bold items-center justify-center bg-slate-800 hover:bg-slate-750 dark:bg-slate-900 dark:hover:bg-slate-850 text-white shadow-sm active:scale-[0.98] transition-all duration-200 px-4 py-2.5 text-sm h-11 rounded-lg border border-transparent"
            type="button"
            onClick={async () => await signIn("github")}
          >
            <FaGithub className="h-4 w-4 mr-2" />
            <span className="truncate">Sign Up with Github</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
