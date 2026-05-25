import requests from "./httpServices";

const normalizeCollectionResponse = (response) => {
  const data = response?.data;

  if (data?.result) {
    return {
      ...response,
      results: data.result,
      result: data.result,
      total: data.pagination?.total || data.result.length,
      pagination: data.pagination,
    };
  }

  const results = Array.isArray(data) ? data : data ? [data] : [];
  return {
    ...response,
    results,
    result: results,
    total: results.length,
  };
};

const normalizeEntityResponse = (response) => ({
  ...response,
  results: response?.data || response?.results || response,
  result: response?.data || response?.result || response,
});

const ProductServices = {
  getAllProducts: async (query) => {
    const response = await requests.get("/products", query);
    return normalizeCollectionResponse(response);
  },
  getShowingProducts: async (query) => {
    const response = await requests.get("/products", query);
    return normalizeCollectionResponse(response);
  },
  // getShowingStoreProducts: async (query) => {
  //   return requests.get(`/products`, query);
  // },
  getDiscountedProducts: async (query) => {
    const response = await requests.get("/products/discounted", query);
    return normalizeCollectionResponse(response);
  },
  getPopularProducts: async (query) => {
    const response = await requests.get("/products", { ...query, popular: true });
    return normalizeCollectionResponse(response);
  },
  getProductBySlug: async (params) => {
    const response = await requests.get(
      `/products/:identifier`,
      {},
      { identifier: params?.slug || params?.identifier || params },
      {},
      1
    );
    return normalizeEntityResponse(response);
  },

  getRelatedProducts: async (query) => {
    if (query?.id) {
      const response = await requests.get(
        `/products/:id/related`,
        { limit: query?.limit },
        { id: query.id },
        {},
        1
      );
      return normalizeCollectionResponse(response);
    }

    const response = await requests.get(`/products`, { ...query, limit: query?.limit || 5 });
    return normalizeCollectionResponse(response);
  }

};

export default ProductServices;
