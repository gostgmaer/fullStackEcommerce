import requests from "./httpServices";

const normalizeCartResponse = (response) => response?.data || response;

const CartServices = {
  addtoCart: async (body, headers) => {
    const response = await requests.post(
      "/cart/add",
      {
        productId: body?.productId || body?.product || body?._id || body?.id,
        quantity: Number(body?.quantity || 1),
      },
      headers
    );
    return normalizeCartResponse(response);
  },

  updateCartItem: async (id, body, headers) => {
    const response = await requests.patch(
      `/cart/update/:productId`,
      {
        productId: id,
        quantity: Number(body?.quantity || 1),
      },
      { productId: id },
      headers
    );
    return normalizeCartResponse(response);
  },

  removeFromCartItem: async (id, body, headers) => {
    const response = await requests.delete(`/cart/remove/:productId`, { productId: id }, headers);
    return normalizeCartResponse(response);
  },
  getCustomerCart: async (query, headers) => {
    const response = await requests.get(`/cart/list`, query, {}, headers, 0);
    return normalizeCartResponse(response);
  }
 
};

export default CartServices;
