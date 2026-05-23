"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../../fields/input";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import CustomerServices from "@/helper/network/services/CustomerServices";

const forgetSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

const ForgetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(forgetSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (values) => {
    try {
      const res = await CustomerServices.forgetPassword(values);
      if (res) {
        notifySuccess(res.message || "Password recovery instructions sent!");
      }
    } catch (error) {
      notifyerror(error?.message || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-100">
        <div>
          <Input
            label={"Email"}
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

        <button
          className="w-full inline-flex font-bold items-center justify-center bg-primary hover:bg-primary/95 text-white shadow-sm active:scale-[0.98] transition-all duration-200 px-5 py-3 text-sm h-12 rounded-lg border border-transparent disabled:opacity-50 mt-2"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Submitting..." : "Recover password"}</span>
        </button>
      </div>
    </form>
  );
};

export default ForgetForm;
