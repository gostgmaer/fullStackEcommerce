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