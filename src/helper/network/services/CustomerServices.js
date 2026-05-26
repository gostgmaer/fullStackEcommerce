// @ts-nocheck
import { Country, State } from "country-state-city";
import requests from "./httpServices";

const getProfile = async (headers) => {
  const response = await requests.get("/auth/profile", {}, {}, headers, 0);
  return response?.data || response;
};

const getUserId = async (headers) => {
  const profile = await getProfile(headers);
  return profile?._id || profile?.id;
};

const normalizeOrderCollection = (response) => {
  const data = response?.data || {};
  const results = data.result || [];
  return {
    ...response,
    results,
    result: results,
    total: data.pagination?.total || results.length,
    pagination: data.pagination,
  };
};

const ADDRESS_LABEL_BY_TYPE = {
  Shipping: "home",
  Billing: "work",
};

const ADDRESS_TYPE_BY_LABEL = {
  home: "Shipping",
  work: "Billing",
  other: "Shipping",
};

const findCountryByValue = (country) => {
  const normalizedCountry = String(country || "").trim().toLowerCase();
  if (!normalizedCountry) return null;

  return Country.getAllCountries().find(
    ({ isoCode, name }) =>
      isoCode.toLowerCase() === normalizedCountry ||
      name.toLowerCase() === normalizedCountry
  );
};

const normalizeCountryCode = (country) => {
  return findCountryByValue(country)?.isoCode || String(country || "").trim();
};

const normalizeStateCode = (country, state) => {
  const normalizedState = String(state || "").trim().toLowerCase();
  if (!normalizedState) return "";

  const countryCode = normalizeCountryCode(country);
  const matchedState = State.getStatesOfCountry(countryCode).find(
    ({ isoCode, name }) =>
      isoCode.toLowerCase() === normalizedState ||
      name.toLowerCase() === normalizedState
  );

  return matchedState?.isoCode || String(state || "").trim();
};

const splitFullName = (fullName) => {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
};

const normalizeAddressEntity = (address) => {
  if (!address || Array.isArray(address)) return address;

  const { firstName, lastName } = splitFullName(address.fullName);

  return {
    ...address,
    firstName: address.firstName || firstName,
    lastName: address.lastName || lastName,
    phone: address.phone || address.phoneNumber || "",
    email: address.email || "",
    address: address.address || address.addressLine1 || "",
    country: normalizeCountryCode(address.country),
    state: normalizeStateCode(address.country, address.state),
    city: address.city || "",
    postalCode: address.postalCode || "",
    type: address.type || ADDRESS_TYPE_BY_LABEL[address.label] || "Shipping",
  };
};

const normalizeAddressPayload = (body = {}) => {
  const fullName =
    body.fullName ||
    [body.firstName, body.lastName].filter(Boolean).join(" ").trim();

  const payload = {
    fullName,
    phone: body.phone || body.phoneNumber || "",
    email: body.email || "",
    addressLine1: body.addressLine1 || body.address || "",
    addressLine2: body.addressLine2 || "",
    addressLine3: body.addressLine3 || "",
    city: body.city || "",
    state: body.state || "",
    country: normalizeCountryCode(body.country),
    postalCode: body.postalCode || "",
    label: body.label || ADDRESS_LABEL_BY_TYPE[body.type] || "home",
  };

  if (body.isDefault !== undefined) {
    payload.isDefault = Boolean(body.isDefault);
  }

  return payload;
};

const normalizeSingleAddress = (response) => {
  const address = normalizeAddressEntity(
    response?.data || response?.result || response?.results || response
  );

  return {
    ...response,
    data: address,
    result: address,
    results: address,
  };
};

const normalizeAddressCollection = (response) => {
  const rawResults = Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.result)
      ? response.data.result
      : Array.isArray(response?.result)
        ? response.result
        : [];

  const results = rawResults.map(normalizeAddressEntity);

  return {
    ...response,
    data: results,
    result: results,
    results,
  };
};

const CustomerServices = {
  forgetPassword: async (body) => {
    return requests.post("/auth/forgot-password", body);
  },

  resetPassword: async (body,token) => {
    return requests.post(`/auth/reset-password/${token}`, body, undefined);
  },

  getProfile: async (query, headers) => {
    return getProfile(headers);
  },
  changePassword: async (body, headers) => {
    return requests.post(
      "/auth/change-password",
      {
        currentPassword: body.currentPassword || body.current_password,
        newPassword: body.newPassword || body.password,
        confirmPassword: body.confirmPassword || body.password,
      },
      headers
    );
  },

  updateCustomer: async (headers, body) => {
    return requests.patch(`/auth/profile`, body, {}, headers);
  },
  addCustomerAddress: async (headers, body) => {
    return requests.post(`/addresses`, normalizeAddressPayload(body), headers);
  },
  updateCustomerAddress: async (headers, body,params) => {
    return requests.patch(`/addresses/:id`, normalizeAddressPayload(body), params, headers);
  },
  setCustomerAddressDefault: async (headers, params) => {
    return requests.patch(`/addresses/:id/set-default`, {}, params, headers);
  },
  deleteCustomerAddress: async (headers, params) => {
    return requests.delete(`/addresses/:id`, params, headers);
  },
  fetchCustomerAddress: async (headers,query) => {
    const response = await requests.get(`/addresses`, query, {}, headers, 0);
    return normalizeAddressCollection(response);
  },
  fetchCustomerSingleAddress: async (headers, params) => {
    const response = await requests.get(`/addresses/:id`, {}, params, headers, 0);
    return normalizeSingleAddress(response);
  },
  customerDashboard: async (query, headers) => {
    const userId = await getUserId(headers);
    const response = await requests.get(`/orders`, { ...query, user: userId, limit: query?.limit || 100 }, {}, headers, 0);
    const normalized = normalizeOrderCollection(response);
    const results = normalized.results || [];

    return {
      ...normalized,
      results: {
        total: results.length,
        pending: results.filter((order) => order.status === "pending").length,
        processing: results.filter((order) => order.status === "processing").length,
        completed: results.filter((order) => ["delivered", "completed"].includes(order.status)).length,
      },
    };
  },
  
};

export default CustomerServices;
