const FALLBACK_CATEGORIES = [
  { _id: "living-room-id", title: "Living Room", slug: "living-room" },
  { _id: "bedroom-id", title: "Bedroom", slug: "bedroom" },
  { _id: "dining-kitchen-id", title: "Dining & Kitchen", slug: "dining-kitchen" },
  { _id: "home-office-id", title: "Home Office", slug: "home-office" },
  { _id: "outdoor-furniture-id", title: "Outdoor Furniture", slug: "outdoor-furniture" },
  { _id: "lighting-id", title: "Lighting", slug: "lighting" },
  { _id: "rugs-carpets-id", title: "Rugs & Carpets", slug: "rugs-carpets" },
  { _id: "decor-mirrors-id", title: "Decor & Mirrors", slug: "decor-mirrors" },
];

const CategoryServices = {
  getShowingCategory: async () => {
    return {
      results: FALLBACK_CATEGORIES,
      result: FALLBACK_CATEGORIES,
      total: FALLBACK_CATEGORIES.length,
    };
  },
};

export default CategoryServices;
