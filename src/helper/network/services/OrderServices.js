import requests from "./httpServices";
import { isLocalCouponCode, normalizeCouponCode } from "./CouponServices";

const getProfile = async (headers) => {
  const response = await requests.get("/auth/profile", {}, {}, headers, 0);
  return response?.data || response;
};

const getUserId = async (headers) => {
  if (!headers?.Authorization) {
    return null;
  }

  const profile = await getProfile(headers);
  return profile?._id || profile?.id;
};

const normalizeOrderList = (response) => {
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

const normalizeOrderEntity = (response) => ({
  ...response,
  result: response?.data || response?.result || response,
  results: response?.data || response?.results || response,
});

const normalizeTrackedOrder = (order) => {
  const shippingAddress = order?.shippingAddress || {};

  return {
    ...order,
    streetAddress:
      shippingAddress.addressLine1 ||
      shippingAddress.street ||
      order?.streetAddress ||
      "",
    city: shippingAddress.city || order?.city || "",
    country: shippingAddress.country || order?.country || "",
    zipPostal:
      shippingAddress.postalCode ||
      shippingAddress.zipPostal ||
      order?.zipPostal ||
      "",
    items: (order?.items || []).map((item) => {
      const unitPrice = Number(
        item?.price ??
          item?.product?.price ??
          item?.product?.finalPrice ??
          item?.product?.salePrice ??
          item?.product?.basePrice ??
          0
      );

      return {
        ...item,
        product: {
          ...(item?.product || {}),
          title: item?.product?.title || item?.title || "Product Item",
          price: unitPrice,
        },
      };
    }),
  };
};

const getLineItemDiscountAmount = (item = {}) =>
  Number(item?.lineDiscountAmount ?? item?.discountAmount ?? 0);

const mapCartItemsToOrderItems = (items = []) =>
  items.map((item) => ({
    product:
      item?.product?._id ||
      item?.product?.id ||
      item?.product ||
      item?.productId ||
      item?._id ||
      item?.id,
    quantity: Number(item?.cartQuantity ?? item?.quantity ?? 1),
    price: Number(
      item?.price ??
        item?.prices?.price ??
        item?.product?.finalPrice ??
        item?.product?.salePrice ??
        item?.product?.basePrice ??
        0
    ),
    discount: getLineItemDiscountAmount(item),
  }));

const OrderServices = {
  addOrder: async (body, headers) => {
    const userId = await getUserId(headers);
    const normalizedCouponCode = normalizeCouponCode(body.couponCode || body.couponcode);
    const payload = {
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      shippingMethod: body.shippingMethod || "standard",
      shippingPrice: Number(body.shippingPrice || 0),
      taxAmount: Number(body.taxAmount || 0),
      discountAmount: Number(body.discountAmount ?? body.discount ?? 0),
      couponCode: isLocalCouponCode(normalizedCouponCode) ? "" : normalizedCouponCode,
      payment_method: body.payment_method,
      additionalNotes: body.additionalNotes || body.notes || "",
      items: mapCartItemsToOrderItems(body.items || body.products || body.cartItems),
      shippingAddress: body.shippingAddress || {
        addressLine1: body.address || body.addressLine1,
        city: body.city,
        postalCode: body.zipCode || body.postalCode,
        country: body.country,
      },
      billingAddress: body.billingAddress || {
        addressLine1: body.address || body.addressLine1,
        city: body.city,
        postalCode: body.zipCode || body.postalCode,
        country: body.country,
      },
    };

    if (userId) {
      payload.user = userId;
    }

    return requests.post("/orders", payload, headers);
  },
  cancelOrder: async (params, headers) => {
    return requests.delete("/orders/:id", params, headers);
  },
  verifyOrder: async (body, headers) => {
    return requests.post("/payments/verify", body, headers);
  },
  getOrderCustomer: async (query, headers) => {
    const userId = await getUserId(headers);
    const response = await requests.get(`/orders`, { ...query, user: userId }, {}, headers, 1);
    return normalizeOrderList(response);
  },
  getOrderById: async (params, headers) => {
    const response = await requests.get(`/orders/:id`, {}, params, headers, 1);
    return normalizeOrderEntity(response);
  },
  trackOrder: async (body) => {
    const response = await requests.post(`/orders/track`, body);
    const normalizedOrder = normalizeTrackedOrder(response?.data || response?.result || response?.results || response);

    return {
      ...response,
      data: normalizedOrder,
      result: normalizedOrder,
      results: normalizedOrder,
    };
  },
};

export default OrderServices;
