"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

/**
 * Premium Input field — dark-mode aware, consistent border, accessible.
 *
 * Props:
 *  - label      {string}  Optional label text (no colon appended)
 *  - type       {string}  Input type (text, email, password, …)
 *  - id         {string=} id & name attribute
 *  - icon       {React.ReactNode=} Optional leading icon element
 *  - classes    {string=} Extra classes appended to the <input>
 *  - additionalAttrs {object=} Spread onto <input> (register, placeholder, etc.)
 */
const Input = ({ label, type, additionalAttrs = {}, classes = "", icon = null, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || (label ? label.trim().replace(/\s+/g, "_").toLowerCase() : undefined);
  const isPassword = type === "password";
  const inputType = showPassword && isPassword ? "text" : type;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5"
        >
          {label}
          {additionalAttrs?.required && (
            <span className="text-red-500 ml-0.5 font-bold text-sm leading-none">*</span>
          )}
        </label>
      )}

      <div
        className={[
          "flex items-center w-full rounded-xl border transition-all duration-200",
          "bg-card",
          "border-border",
          "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15",
          "has-[:disabled]:opacity-50 has-[:read-only]:bg-muted/30",
          icon ? "pl-3.5" : "",
        ].join(" ")}
      >
        {icon && (
          <span className="flex-shrink-0 pr-2 text-muted-foreground">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          name={inputId}
          type={inputType}
          className={[
            "flex-1 min-w-0 h-11 bg-transparent px-3.5 text-sm",
            "text-foreground",
            "placeholder:text-muted-foreground",
            "focus:outline-none",
            "read-only:cursor-default",
            isPassword ? "pr-0" : "",
            classes || "",
          ].join(" ")}
          {...additionalAttrs}
        />

        {isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="flex-shrink-0 px-3 h-10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            {showPassword ? (
              <FaEyeSlash className="w-4 h-4" />
            ) : (
              <FaEye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
