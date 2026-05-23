// components/SelectField.js
import React from "react";

const SelectField = ({ options, value, onChange, id, datakey, label, placeholder, heading, additionalAttrs }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {heading}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        name={id}
        id={id}
        className="block w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
      >
        <option value="" className="text-slate-400 dark:text-slate-500">{placeholder ? placeholder : "Select"}</option>
        {options?.map((option) => (
          <option
            key={option[datakey]}
            value={option[datakey]}
            className="capitalize bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
            {...additionalAttrs}
          >
            {option[label]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;


export const Select = ({ options, id, label, additionalAttrs, placeholder, optionkeys = { key: "", value: "" } }) => {
  return (
    <div className="flex flex-col w-full mb-1">
      <div className="block">
        {label && (
          <label htmlFor={id} className="block text-sm capitalize font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {label} <span className="text-red-500 align-sub font-bold text-lg">{additionalAttrs?.required && '*'}</span> :{" "}
          </label>
        )}
        <div className="flex items-center peer w-full transition duration-200 rounded-lg bg-transparent">
          <select
            {...additionalAttrs}
            name={id}
            id={id}
            className="block w-full px-3 py-2 h-10 bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
          >
            <option value="" className="text-slate-400 dark:text-slate-500">{placeholder ? placeholder : "Select"}</option>
            {options.map((option) => (
              <option
                key={option[optionkeys.key]}
                value={option[optionkeys.key]}
                className="capitalize bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              >
                {option[optionkeys.value]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
