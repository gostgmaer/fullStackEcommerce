import React from "react";

const Label = ({ type: Tag = 'span', className = '', children }) => {
  return (

    
    
// @ts-ignore
    <Tag className={`${className} block text-gray-800 font-medium  mb-2  `}>{children}</Tag>
  );
};

export default Label;
