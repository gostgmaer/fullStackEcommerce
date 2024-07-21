// pages/404.js
import { headers } from 'next/headers';
import React from 'react';
const headersList = headers()
const domain = headersList.get('host')


const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found {domain}</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default Custom404;
