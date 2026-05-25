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
    return requests.post(`/addresses`, body, headers);
  },
  updateCustomerAddress: async (headers, body,params) => {
    return requests.patch(`/addresses/:id`, body, params, headers);
  },
  fetchCustomerAddress: async (headers,query) => {
    return requests.get(`/addresses`, query, {}, headers, 0);
  },
  fetchCustomerSingleAddress: async (headers, params) => {
    return requests.get(`/addresses/:id`, {}, params, headers, 0);
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
