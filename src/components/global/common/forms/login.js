"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import Input from "@/components/global/fields/input";
import { notifyerror } from "@/utils/notify/notice";
import { MdEmail, MdLock } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
});

const LoginForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values) => {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl,
      });

      if (res?.ok) {
        if (res.url) {
          if (res.url.startsWith("/")) {
            router.push(res.url || "/");
          } else {
            try {
              const fullUrl = new URL(res.url, window.location.origin);
              router.push(`${fullUrl.pathname}${fullUrl.search}` || "/");
            } catch (_error) {
              router.push("/");
            }
          }
        } else {
          router.push("/");
        }
      } else {
        notifyerror(res?.error || "Invalid credentials", 5000);
      }
    } catch (err) {
      notifyerror(err?.message || "Something went wrong.", 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-4">
        <div>
          <Input
            label={""}
            type={"text"}
            additionalAttrs={{
              ...register("email"),
              placeholder: "Email",
              required: true,
            }}
            icon={<MdEmail className="text-slate-400 dark:text-slate-500" />}
            id={"email"}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            label={""}
            type={"password"}
            additionalAttrs={{
              ...register("password"),
              placeholder: "Password",
              required: true,
              autoComplete: "off",
            }}
            icon={<MdLock className="text-slate-400 dark:text-slate-500" />}
            id={"password"}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 font-semibold">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pb-1 text-sm">
        <label className="flex items-center cursor-pointer select-none text-slate-600 dark:text-slate-350">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary/20 mr-2"
            name="isRememberMe"
          />
          Remember Me
        </label>
        <Link
          className="font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors underline hover:no-underline"
          href="/auth/forget-password"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        className="w-full inline-flex font-bold items-center justify-center bg-primary hover:bg-primary/95 text-white shadow-sm active:scale-[0.98] transition-all duration-200 px-5 py-3 text-sm h-12 rounded-lg border border-transparent disabled:opacity-50"
        type="submit"
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? "Signing in..." : "Login"}</span>
      </button>

      <div className="relative flex items-center justify-center my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <span className="relative z-10 px-3 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">
          Or
        </span>
      </div>

      <button
        className="w-full inline-flex font-bold items-center justify-center bg-slate-800 hover:bg-slate-750 dark:bg-slate-900 dark:hover:bg-slate-850 text-white shadow-sm active:scale-[0.98] transition-all duration-200 px-4 py-2.5 text-sm h-11 rounded-lg border border-transparent"
        type="button"
        onClick={async () => await signIn("github", { callbackUrl })}
      >
        <FaGithub className="h-4 w-4 mr-2" />
        <span className="truncate">Sign in with Github</span>
      </button>
    </form>
  );
};

export default LoginForm;
