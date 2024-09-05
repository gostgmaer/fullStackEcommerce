import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/order/add", body, headers);
  },

  createPaymentIntent: async (body, headers) => {
    return requests.post("/order/create-payment-intent", body, headers);
  },

  getOrderCustomer: async (query, headers) => {
    return requests.get(`/order`, query, headers);
  },
  getOrderById: async (params, headers) => {
    return requests.get(`/order/:id`, params, headers);
  },
};

export default OrderServices;
