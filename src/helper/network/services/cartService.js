import requests from "./httpServices";

const CartServices = {
  addtoCart: async (body, headers) => {
    return requests.post("/cart/add", body, headers);
  },

  updateCartItem: async (id, body, headers) => {
    return requests.post(`/cart/${id}/add`, body, headers);
  },

  removeFromCartItem: async (id, body, headers) => {
    return requests.post(`/cart/${id}/remove`, body, headers);
  },
  getCustomerCart: async (query, headers) => {
    return requests.get(`/cart`, query, headers);
  }
 
};

export default CartServices;
