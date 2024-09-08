import requests from "./httpServices";

const CustomerServices = {
  customerLogin: async (body) => {
    return requests.post("/customer/auth/login", body);
  },

  verifyEmailAddress: async (body) => {
    return requests.post("/customer/auth/verify-email", body);
  },

  registerCustomer: async (token, body) => {
    return requests.post(`/customer/auth/register/${token}`, body);
  },

  signUpWithProvider(token, body) {
    return requests.post(`/customer/auth/signup/${token}`, body);
  },

  forgetPassword: async (body) => {
    return requests.put("/customer/auth/forget-password", body);
  },

  resetPassword: async (body, headers) => {
    return requests.put("/customer/auth/reset-password", body, headers);
  },

  changePassword: async (body, headers) => {
    return requests.post("/custome/authr/change-password", body, headers);
  },

  updateCustomer: async (params, headers, body) => {
    return requests.patch(`/customer/auth/:id`, body, params, headers);
  },
  customerDashboard: async (query, headers) => {
    return requests.get(`/orders/customer/dashboard`, query, null, headers);
  },
};

export default CustomerServices;
