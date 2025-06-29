import { baseurl } from "@/config/setting";

export async function fetchData(endpoint, options = {}) {
  try {
    const {
      method = "GET",
      body,
      params = {},
      query = {},
      headers = {},
      cacheTime = 60,
    } = options;

    if (!endpoint || typeof endpoint !== "string" || endpoint.trim() === "") {
      throw new Error("Invalid or missing endpoint");
    }

    // Build the URL
    let url = `${baseurl}${endpoint}`;

    // Replace URL parameters
    for (const [key, value] of Object.entries(params)) {
      if (!value && value !== 0) {
        throw new Error(`Missing value for URL parameter: ${key}`);
      }
      url = url.replace(`:${key}`, encodeURIComponent(value));
    }

    // Append query string
    const queryString = new URLSearchParams(
      Object.fromEntries(
        Object.entries(query).filter(
          ([, value]) => value !== undefined && value !== null && value !== ""
        )
      )
    ).toString();

    if (queryString) {
      url += `?${queryString}`;
    }

    // Prepare headers
    const mergedHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    const fetchOptions = {
      method,
      headers: mergedHeaders,
      next: { revalidate: cacheTime },
    };

    if (method !== "GET" && body !== undefined) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);

    const contentType = response.headers.get("content-type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      throw new Error(
        typeof responseData === "string"
          ? responseData
          : responseData.message || "Request failed"
      );
    }

    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    return { error: error.message || "Something went wrong" };
  }
}


const requests = {
  get: (endpoint, query = {}, params = {}, headers = {}, cacheTime = 3600) =>
    fetchData(endpoint, {
      method: "GET",
      query,
      params,
      headers,
      cacheTime,
    }),

  post: (endpoint, body = {}, headers = {}) =>
    fetchData(endpoint, {
      method: "POST",
      body,
      headers,
    }),

  put: (endpoint, body = {}, params = {}, headers = {}) =>
    fetchData(endpoint, {
      method: "PUT",
      body,
      params,
      headers,
    }),

  patch: (endpoint, body = {}, params = {}, headers = {}) =>
    fetchData(endpoint, {
      method: "PATCH",
      body,
      params,
      headers,
    }),

  delete: (endpoint, params = {}, headers = {}) =>
    fetchData(endpoint, {
      method: "DELETE",
      params,
      headers,
    }),
};

export default requests;
