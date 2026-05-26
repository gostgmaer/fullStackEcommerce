import requests from "./httpServices";

const getProfile = async (headers) => {
  const response = await requests.get("/auth/profile", {}, {}, headers, 0);
  return response?.data || response;
};

const getUserId = async (headers) => {
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
    discount: Number(item?.discount ?? item?.product?.discountValue ?? 0),
  }));

const OrderServices = {
  addOrder: async (body, headers) => {
    const userId = await getUserId(headers);
    const payload = {
      user: userId,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      shippingMethod: body.shippingMethod || "standard",
      shippingPrice: Number(body.shippingPrice || 0),
      taxAmount: Number(body.taxAmount || 0),
      discountAmount: Number(body.discountAmount ?? body.discount ?? 0),
      couponCode: body.couponCode || body.couponcode,
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
};

export default OrderServices;
