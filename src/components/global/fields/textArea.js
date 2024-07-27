
import React from 'react';

const Textarea = ({ label, additionalAttrs, classes, id }) => {
    return (


        <div className="flex flex-col w-full">
            <label className="block">
                <span className=" block text-sm capitalize font-semibold  mb-1.5">
                    {label} <span className=" text-red-500 font-bold text-lg align-sub">{additionalAttrs.required && '*'} </span>:{" "}
                </span>
                <span
                    className={`flex items-center peer  w-full transition duration-200  rounded-md bg-transparent focus:ring-[0.6px] `}
                >


                    <textarea
                        className={`resize w-full border rounded p-2 px-3.5 min-h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 ${classes}`}

                        name={id ? id : label.trim().replace(/\s+/g, "_").toLowerCase()}
                        id={id ? id : label.trim().replace(/\s+/g, "_").toLowerCase()}
                        {...additionalAttrs}

                    />



                </span>
            </label>
        </div>


    );
};

export default Textarea;
