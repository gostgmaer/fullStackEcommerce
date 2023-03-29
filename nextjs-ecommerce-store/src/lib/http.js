import axios from "axios";

const baseURL = "https://ceebit-vwr.inadev.net/";
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
    headers: header,
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

  return {data,error};
};

export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};
