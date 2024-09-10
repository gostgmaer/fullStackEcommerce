import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/orders/create", body, headers);
  },
  createOrder: async (body, headers) => {
    return requests.post("/orders/customer/rozorpay", body, headers);
  },
  createPaymentIntent: async (body, headers) => {
    return requests.post("/orders/create-payment-intent", body, headers);
  },

  getOrderCustomer: async (query, headers) => {
    return requests.get(`/orders/customer/fetch`, query,null, headers,1);
  },
  getOrderById: async (params, headers) => {
    return requests.get(`/orders/:id`,null,params, headers,1);
  },
};

export default OrderServices;
