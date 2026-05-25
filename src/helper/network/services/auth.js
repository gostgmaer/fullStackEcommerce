import requests from "../http";

const normalizeAuthResponse = (response) => {
  const payload = response?.data || response || {};
  const tokens = payload.tokens || {};
  const user = payload.user || {};

  return {
    ...response,
    ...payload,
    user,
    status: response?.success ? "OK" : response?.status,
    statusCode: response?.statusCode || (response?.success ? 200 : undefined),
    accessToken: tokens.accessToken || response?.accessToken,
    refreshToken: tokens.refreshToken || response?.refreshToken,
    id_token: tokens.idToken || response?.id_token,
    token_type: tokens.tokenType || response?.token_type,
    expiresAt: tokens.expiresAt || response?.expiresAt,
  };
};

const authService = {
  userRegister: async (body) => {
    return requests.post(
      "/auth/register",
      {
        ...body,
        confirmPassword: body.confirmPassword || body.password,
      },
      {}
    );
  },
  userLogin: async (body) => {
    const response = await requests.post(
      "/auth/login",
      {
        identifier: body.identifier || body.email,
        password: body.password,
      },
      {}
    );

    return normalizeAuthResponse(response);
  },
  userLogout: async (headers) => {
    return requests.post("/auth/logout", {}, headers);
  },
  getUserProfile: async (headers) => {
    const response = await requests.get("/auth/profile", {}, {}, headers, 3600);
    return response?.data || response;
  },
  updateUserProfile: async (body, params, headers) => {
    return requests.patch("/auth/profile", body, {}, headers);
  },
  changePassword: async (body, headers) => {
    return requests.post("/auth/change-password", body, headers);
  },
  forgetPassword: async (body, headers) => {
    return requests.post("/auth/forgot-password", body, headers);
  },
  resetPassword: async (body, token) => {
    return requests.post(`/auth/reset-password/${token}`, body, {});
  },
  verifyToken: async (body) => {
    const response = await requests.post(
      "/auth/refresh-token",
      {
        refreshToken: body?.refreshToken || body?.token || body,
      },
      {}
    );

    return normalizeAuthResponse(response);
  },
};

export default authService;
