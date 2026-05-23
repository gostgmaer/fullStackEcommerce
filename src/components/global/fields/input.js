"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

/**
 * Premium Input field — dark-mode aware, consistent border, accessible.
 *
 * Props:
 *  - label      {string}  Optional label text (no colon appended)
 *  - type       {string}  Input type (text, email, password, …)
 *  - id         {string}  id & name attribute
 *  - icon       {node}    Optional leading icon element
 *  - classes    {string}  Extra classes appended to the <input>
 *  - additionalAttrs {object} Spread onto <input> (register, placeholder, etc.)
 */
const Input = ({ label, type, additionalAttrs = {}, classes, icon, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || (label ? label.trim().replace(/\s+/g, "_").toLowerCase() : undefined);
  const isPassword = type === "password";
  const inputType = showPassword && isPassword ? "text" : type;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5"
        >
          {label}
          {additionalAttrs?.required && (
            <span className="text-red-500 ml-0.5 font-bold text-sm leading-none">*</span>
          )}
        </label>
      )}

      <div
        className={[
          "flex items-center w-full rounded-lg border transition-all duration-150",
          "bg-white dark:bg-slate-900/80",
          "border-slate-200 dark:border-slate-700",
          "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
          "has-[:disabled]:opacity-50 has-[:read-only]:bg-slate-50 has-[:read-only]:dark:bg-slate-800/60",
          icon ? "pl-3.5" : "",
        ].join(" ")}
      >
        {icon && (
          <span className="flex-shrink-0 pr-2 text-slate-400 dark:text-slate-500">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          name={inputId}
          type={inputType}
          className={[
            "flex-1 min-w-0 h-10 bg-transparent px-3.5 text-sm",
            "text-slate-900 dark:text-slate-100",
            "placeholder:text-slate-400 dark:placeholder:text-slate-500",
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
