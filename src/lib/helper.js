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