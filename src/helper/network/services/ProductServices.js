import requests from "./httpServices";

const ProductServices = {
  getAllProducts: async (query) => {
    return await requests.get("/products",query);
  },
  getShowingProducts: async (query) => {
    return await requests.get("/products/show",query);
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
