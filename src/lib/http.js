import axios from "axios";
import { cleanQueryparam } from "./sevice";
import { apiUrl, token } from "@/utils/config";

const baseURL = apiUrl;
const Authorization = {

};

export const invokeExternalAPI = async (
  endpoint,
  method,
  body,
  header,
  query
) => {
  const options = {
    method: method,
    url: baseURL + endpoint,
    headers: { ...Authorization, ...header },
    params: query,
    data: body,
  };

  cleanQueryparam(options.params);

  if (method === "get") {
    delete options.body;
  }

  let data = null;
  let error = null;


  try {
    const res = await axios(options);
    data = res.data;
    // const res = fetch(u)
  } catch (e) {
    if (e?.response?.statusText !== "") {
      error = e?.response?.statusText;
    }
    error = e.message;
  }

  return { data, error };
};
