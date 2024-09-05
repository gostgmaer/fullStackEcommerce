// utils/fetchData.js

import { baseurl } from "@/config/setting";

export async function fetchData(endpoint, token, options = {}) {
  try {
    const {
      method = "GET",
      body,
      params = {},
      query = {},
      cacheTime = 60,
    } = options;

    // Validate token and endpoint
    if (!endpoint || typeof endpoint !== "string" || endpoint.trim() === "") {
      throw new Error("Invalid or missing endpoint");
    }

    // if (!token || typeof token !== 'string' || token.trim() === '') {
    //   throw new Error('Invalid or missing authorization token');
    // }

    // Build the URL
    let url = `${baseurl}${endpoint}`;

    // Validate and replace URL params
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value === undefined || value === null || value === "") {
          throw new Error(`Invalid or missing URL parameter: ${key}`);
        }
        url = url.replace(`:${key}`, value);
      });
    }

    // Validate and append query parameters
    if (query && typeof query === "object") {
      const validQuery = Object.entries(query)
        .filter(
          ([_, value]) => value !== undefined && value !== null && value !== ""
        ) // Filter out invalid values
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      const queryString = new URLSearchParams(validQuery).toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    // Make the fetch request
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:
        method === "POST" || method === "PATCH" || method === "PUT"
          ? JSON.stringify(body)
          : undefined,
      next: { revalidate: cacheTime },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be fetched" };
  }
}


const requests = {
  get: async (endpoint, query,params) =>
    await fetchData(endpoint, null, {
      cacheTime: 300,
      query: query,params:params // Cache for 5 minutes
    }),
  post: async (endpoint, body, token) =>
    await fetchData(endpoint, token, {
      cacheTime: 300,
      body: body, // Cache for 5 minutes
    }),
  put: async (endpoint, body, token, params) =>
    await fetchData(endpoint, token, {
      cacheTime: 300, body: body, params: params // Cache for 5 minutes
    }),
  patch: async (endpoint, body, token, params) =>
    await fetchData(endpoint, token, {
      cacheTime: 300, body: body, params: params // Cache for 5 minutes
    }),
  delete: async (endpoint, params, token) =>
    await fetchData(endpoint, token, {
      cacheTime: 300, params: params // Cache for 5 minutes
    }),


};



export default requests;
