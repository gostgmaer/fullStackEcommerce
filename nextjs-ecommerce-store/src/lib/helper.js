import axios from "axios";
import useSWR from "swr";

import { AUTH_TOKEN } from "../../constant";
import { apiUrl } from "@/utils/config";

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
  const { data, error, isLoading } = useSWR(`${apiUrl}${endpoint}?populate=*`, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
