import requests from "./httpServices";

const ProductServices = {
  getAllProducts: async (query) => {
    return await requests.get("/products", query);
  },
  getShowingProducts: async (query) => {
    return await requests.get("/products/show", query,null,null,1);
  },
  // getShowingStoreProducts: async (query) => {
  //   return requests.get(`/products`, query);
  // },
  getDiscountedProducts: async (query) => {
    return requests.get("/products/discount", query,null,null,1);
  },
  getPopularProducts: async (query) => {
    return requests.get("/products/popular", query,null,null,1);
  },
  getProductBySlug: async (params) => {
    return requests.get(`/products/view/:slug`, null, params,null,1);
  },

  getRelatedProducts: async (query) => {
    return requests.get(`/products/related`, query,null,null,1);
  }

};

export default ProductServices;
