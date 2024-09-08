import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/orders/create", body, headers);
  },

  createPaymentIntent: async (body, headers) => {
    return requests.post("/orders/create-payment-intent", body, headers);
  },

  getOrderCustomer: async (query, headers) => {
    return requests.get(`/orders/customer`, query,null, headers);
  },
  getOrderById: async (params, headers) => {
    return requests.get(`/orders/:id`,null,params, headers);
  },
};

export default OrderServices;
