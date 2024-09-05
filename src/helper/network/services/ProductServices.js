import requests from "./httpServices";

const ProductServices = {
  getShowingProducts: async () => {
    return await requests.get("/products");
  },
  getShowingStoreProducts: async (query) => {
    return requests.get(`/products`, query);
  },
  getDiscountedProducts: async (query) => {
    return requests.get("/products/discount", query);
  },
  getProductBySlug: async (params) => {
    return requests.get(`/products/:slug`, params);
  },
};

export default ProductServices;
