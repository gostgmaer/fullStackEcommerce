import requests from "./httpServices";

const LOCAL_COUPON_CODES = new Set(["SAVE10", "WELCOME10", "FREESHIP"]);

export const normalizeCouponCode = (code = "") => String(code).trim().toUpperCase();

export const isLocalCouponCode = (code = "") => LOCAL_COUPON_CODES.has(normalizeCouponCode(code));

export const getStoredCouponCode = () => {
  if (typeof window === "undefined") return "";
  return normalizeCouponCode(localStorage.getItem("cartCouponCode") || "");
};

export const persistCouponCode = (code = "") => {
  if (typeof window === "undefined") return;

  const normalizedCode = normalizeCouponCode(code);
  if (!normalizedCode) {
    localStorage.removeItem("cartCouponCode");
    return;
  }

  localStorage.setItem("cartCouponCode", normalizedCode);
};

export const clearStoredCouponCode = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("cartCouponCode");
};

export const getLocalCouponResult = (code, subtotal = 0) => {
  const normalizedCode = normalizeCouponCode(code);
  const safeSubtotal = Number(Number(subtotal || 0).toFixed(2));

  if (!isLocalCouponCode(normalizedCode)) {
    return null;
  }

  if (normalizedCode === "FREESHIP") {
    return {
      code: normalizedCode,
      message: "Free shipping code applied successfully!",
      totals: {
        totalPrice: safeSubtotal,
        discountAmount: 0,
        totalDiscountedPrice: safeSubtotal,
      },
    };
  }

  const discountAmount = Number((safeSubtotal * 0.1).toFixed(2));
  const totalDiscountedPrice = Number(Math.max(safeSubtotal - discountAmount, 0).toFixed(2));

  return {
    code: normalizedCode,
    message: `${normalizedCode} applied! 10% Off (-₹${discountAmount.toFixed(2)})`,
    totals: {
      totalPrice: safeSubtotal,
      discountAmount,
      totalDiscountedPrice,
    },
  };
};

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
