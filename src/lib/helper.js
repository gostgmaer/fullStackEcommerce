import { baseurl } from "@/config/setting";
import axios from "axios";
import useSWR from "swr";
import Cookies from 'js-cookie';


const AUTH_TOKEN = "asdjkashdjkashdjashduiasgdhiuasdijahsdiuhasuidhauisdhiauhdiuhaid"
export const getToken = () => {
  window.localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    window.localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN);
};

// @ts-ignore
export const fetcher = (...args) => axios(...args).then((res) => res.data);

export function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(
    `${baseurl}${endpoint}?populate=*`,
    fetcher
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export function useGetFetcher(endpoint,fetcherData) {
  const { data, error, isLoading } = useSWR(
    `${baseurl}${endpoint}?populate=*`,
    fetcherData
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}




export function storeCookiesOfObject(data) {
  if (data) {
    const userKeys = Object.keys(data);

    userKeys.forEach(key => {
      const value = data[key];
      Cookies.set(key, value);
    });
  }
}

export function convertToNestedObject(flatObject) {
  const result = {};

  // Object.keys(flatObject).forEach((key) => {
  //   const keys = key.split('.');
  //   let currentObj = result;

  //   keys.forEach((nestedKey, index) => {
  //     if (index === keys.length - 1) {
  //       currentObj[nestedKey] = flatObject[key];
  //     } else {
  //       currentObj[nestedKey] = currentObj[nestedKey] || {};
  //       currentObj = currentObj[nestedKey];
  //     }
  //   });
  // });
  Object.keys(flatObject).forEach((key) => {
    const keys = key.split('.');
    let currentObj = result;

    keys.forEach((nestedKey, index) => {
      // Check if the current nestedKey is numeric
      const isNumericKey = /^\d+$/.test(nestedKey);

      if (index === keys.length - 1) {
        if (isNumericKey) {
          currentObj = currentObj[nestedKey] || [];
          currentObj.push(flatObject[key]);
        } else {
          currentObj[nestedKey] = flatObject[key];
        }
      } else {
        currentObj[nestedKey] = currentObj[nestedKey] || {};
        currentObj = currentObj[nestedKey];
      }
    });
  });

  return result;
}

export function transformKeysToObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Check if the key starts with a numeric character or becomes numeric
      if (/^\d/.test(key) || !isNaN(key)) {
        // Convert the value to an array with particular values
        obj[key] = [Number(key)];
      }

      // If the value is an object, recursively call the function
      if (typeof obj[key] === 'object') {
        transformKeysToObject(obj[key]);
      }
    }
  }

  return obj;
}


// export function convertNumericKeysToObject(obj) {
//   for (const key in obj.filter) {
//     const value = obj.filter[key];

//     if (typeof value === 'object' && !Array.isArray(value) && /^\d/.test(Object.keys(value)[0])) {
//       // If the key's value is an object, not an array, and starts with a numeric value
//       const numericKey = Object.keys(value)[0];
//       const numericValue = value[numericKey];

//       // Convert the numeric key to an array with the original value
//       obj.filter[key] = { [numericKey.split(":")[0]]: [numericValue] };
//     }
//   }
//   return obj;
 
// }

export  function convertNumericKeysToObject(obj) {
  // function processObject(obj) {
  //   for (const key in obj) {
  //     const value = obj[key];

  //     if (typeof value === 'object' && !Array.isArray(value) && /^\d/.test(Object.keys(value)[0])) {
  //       // If the key's value is an object, not an array, and starts with a numeric value
  //       const numericKey = Object.keys(value)[0];
  //       const numericValue = value[numericKey];

  //       // Convert the numeric key to an array with the original value
  //       obj[key] = { [numericKey.split(":")[0]]: [numericValue] };
  //     } else if (typeof value === 'object') {
  //       // Recursively process nested objects
  //       processObject(value);
  //     }
  //   }
  // }

  // processObject(obj.filter);
  // return obj;
  function processObject(obj) {
    for (const key in obj) {
      if (/^\d/.test(key)) {
        // If the key starts with a numeric value
        const value = obj[key];

        // Convert the numeric key to an array with the original value
        obj[key.split(":")[0]] = [value];
        delete obj[key]; // Remove the original key-value pair
      } else if (typeof obj[key] === 'object') {
        // Recursively process nested objects
        processObject(obj[key]);
      }
    }
  }

  processObject(obj.filter);
  return obj; // Explicitly return the modified object
}


export function convertObject(inputObject) {
  const outputObject = {};

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const value = inputObject[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        const subKey = Object.keys(value)[0];
        const subValue = value[subKey];

        const numericSubKey = Number(subKey);

        if (!isNaN(numericSubKey)) {
          outputObject[key] = [subValue];
        } else {
          outputObject[key] = { [subKey]: subValue };
        }
      } else {
        outputObject[key] = value;
      }
    }
  }

  return outputObject;

}