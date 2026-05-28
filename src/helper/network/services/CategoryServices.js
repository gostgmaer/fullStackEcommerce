import requests from "./httpServices";

const CategoryServices = {
  getShowingCategory: async () => {
    try {
      const response = await requests.get("/categories");
      const data = response?.data || response?.results || response;
      const results = Array.isArray(data) ? data : data?.result || data?.results || [];
      return {
        results,
        result: results,
        total: results.length,
      };
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      return { results: [], result: [], total: 0 };
    }
  },
};

export default CategoryServices;
