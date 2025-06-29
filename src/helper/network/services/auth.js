import requests from "../http";

const authService = {
  userRegister: async (body) => {
    return await requests.post("/user/auth/register", body, {});
  },
  userLogin: async (body) => {
    return await requests.post("/user/auth/login", body, {});
  },
  userLogout: async (headers) => {
    return await requests.post("/user/auth/logout", {}, headers);
  },
  getUserProfile: async (headers) => {
    return await requests.get("/user/auth/profile", {}, {}, headers, 3600); // Cache for 1 hour
  },
  updateUserProfile: async (body, params, headers) => {
    return await requests.patch(
      "/user/auth/profile/update",
      body,
      params,
      headers
    );
  },
  changePassword: async (body, headers) => {
    return await requests.post("/user/auth/change-password", body, headers);
  },
  forgetPassword: async (body, headers) => {
    return await requests.post("/user/auth/forget-password", body, headers);
  },
  resetPassword: async (body, headers) => {
    return await requests.post(
      "/user/auth/reset-password/:token",
      body,
      headers
    );
  },
  verifyEmailAddress: async (body) => {
    return requests.post("/customer/auth/verify-email", body, {});
  },
  verifyToken: async (body) => {
    return requests.post("/user/auth/session/refresh/token", body, {});
  },
};

export default authService;
