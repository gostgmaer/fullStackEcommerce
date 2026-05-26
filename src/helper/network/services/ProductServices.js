import requests from "./httpServices";

const PLACEHOLDER_IMAGE = "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png";

const numberOr = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeDescription = (product) => {
  if (typeof product?.descriptions === "string") {
    return product.descriptions;
  }

  if (product?.descriptions && typeof product.descriptions === "object") {
    return product.descriptions.long || product.descriptions.extra || product.shortDescription || "";
  }

  return product?.shortDescription || "";
};

const normalizeImages = (product) => {
  if (Array.isArray(product?.image)) {
    return product.image;
  }

  if (product?.image) {
    return [product.image];
  }

  if (Array.isArray(product?.images)) {
    const urls = product.images
      .map((entry) => (typeof entry === "string" ? entry : entry?.url))
      .filter(Boolean);

    if (urls.length) {
      return urls;
    }
  }

  return [PLACEHOLDER_IMAGE];
};

export const normalizeProduct = (product) => {
  if (!product || typeof product !== "object") return product;

  const id = product._id || product.id;
  const descriptions = normalizeDescription(product);
  const title = product.title || product.name || product.productName || "";
  const quantity = numberOr(
    product.quantity ?? product.stock ?? product.inventory ?? product.detailedStockStatus?.quantity,
    0
  );
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
  const image = normalizeImages(product);

  return {
    ...product,
    _id: id,
    id,
    title,
    slug: product.slug || product.handle || "",
    descriptionData: product.descriptions,
    descriptions,
    image: image.length ? image : [PLACEHOLDER_IMAGE],
    stock: numberOr(product.stock ?? product.inventory ?? product.detailedStockStatus?.quantity, 0),
    quantity,
    unit: product.unit || product.saleUnit || product.measurementUnit || "item",
    price,
    originalPrice,
    discount,
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
