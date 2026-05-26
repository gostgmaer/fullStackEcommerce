import requests from "./httpServices";

const PLACEHOLDER_IMAGE = "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png";

const numberOr = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeProduct = (product) => {
  if (!product || typeof product !== "object") return product;

  const id = product._id || product.id;
  const originalPrice = numberOr(
    product.prices?.originalPrice ?? product.basePrice ?? product.originalPrice ?? product.price ?? product.finalPrice,
    0
  );
  const price = numberOr(
    product.prices?.price ?? product.finalPrice ?? product.salePrice ?? product.price ?? product.basePrice,
    originalPrice
  );
  const discount = numberOr(
    product.prices?.discount ?? product.discountValue ?? product.discountPercent,
    0
  );
  const image = Array.isArray(product.image)
    ? product.image
    : product.image
      ? [product.image]
      : [PLACEHOLDER_IMAGE];

  return {
    ...product,
    _id: id,
    id,
    image: image.length ? image : [PLACEHOLDER_IMAGE],
    stock: numberOr(product.stock ?? product.inventory, 0),
    prices: {
      ...(product.prices || {}),
      price,
      originalPrice,
      discount,
    },
  };
};

const normalizeCollectionResponse = (response) => {
  const data = response?.data;

  if (data?.result) {
    const results = data.result.map(normalizeProduct);
    return {
      ...response,
      results,
      result: results,
      total: data.pagination?.total || results.length,
      pagination: data.pagination,
    };
  }

  const results = (Array.isArray(data) ? data : data ? [data] : []).map(normalizeProduct);
  return {
    ...response,
    results,
    result: results,
    total: results.length,
  };
};

const normalizeEntityResponse = (response) => ({
  ...response,
  results: normalizeProduct(response?.data || response?.results || response),
  result: normalizeProduct(response?.data || response?.result || response),
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
