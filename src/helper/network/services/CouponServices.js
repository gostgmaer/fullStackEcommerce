import requests from "./httpServices";

const CouponServices = {
  // Get all coupons
  getAllCoupons: async () => {
    return requests.get("/coupons");
  },

  // Get only enabled (showing) coupons
  getShowingCoupons: async () => {
    return requests.get("/coupons/active");
  },

  // Get a single coupon by ID
  getCouponById: async (id) => {
    return requests.get(`/coupons/${id}`);
  },

  // Add a new coupon
  addCoupon: async (couponData) => {
    return requests.post("/coupons", couponData);
  },

  // Add multiple coupons
  addAllCoupons: async (couponsData) => {
    return requests.post("/coupons/bulk", couponsData);
  },

  // Apply coupon to product
  applyCouponToProduct: async (data, headers = {}) => {
    const response = await requests.post("/coupons/apply", data, headers);
    return response?.data || response;
  },

  // Update a single coupon by ID
  updateCouponById: async (id, couponData) => {
    return requests.put(`/coupons/${id}`, couponData);
  },

  // Update multiple coupons
  updateManyCoupons: async (couponsData) => {
    return requests.patch("/coupons/bulk/update", couponsData);
  },

  // Show/hide a coupon (update status)
  updateCouponStatus: async (id, status) => {
    return requests.put(`/coupons/${id}/status`, { status });
  },

  // Delete a single coupon by ID
  deleteCouponById: async (id) => {
    return requests.delete(`/coupons/${id}`);
  },

  // Delete multiple coupons
  deleteManyCoupons: async (couponsData) => {
    return requests.patch("/coupons/bulk/delete", couponsData);
  },
};

export default CouponServices;
