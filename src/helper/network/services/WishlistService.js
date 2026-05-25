
import requests from "./httpServices";

const getProfile = async (headers) => {
    const response = await requests.get("/auth/profile", {}, {}, headers, 0);
    return response?.data || response;
};

const getUserId = async (headers) => {
    const profile = await getProfile(headers);
    return profile?._id || profile?.id;
};

const normalizeWishlistResponse = (response) => {
    const data = response?.data || response?.result || response?.results || response || [];
    const list = Array.isArray(data?.items)
        ? data.items
        : Array.isArray(data?.results)
            ? data.results
            : Array.isArray(data)
                ? data
                : [];

    return {
        ...response,
        result: list,
        results: list,
    };
};


const wishlistServices = {
    addtowishlist: async (body, headers) => {
        const userId = await getUserId(headers);
        const productId = body?.productId || body?.product || body?.id || body?._id;

        await requests.post("/wishlists", { userId, productId }, headers);
        return wishlistServices.fetchWishlist(headers);
    },

    fetchWishlist: async (headers) => {
        const userId = await getUserId(headers);
        const response = await requests.get(`/wishlists/:userId`, {}, { userId }, headers, 1);
        return normalizeWishlistResponse(response);
    },
    updatewishlistItem: async (id, body, headers) => {
        return wishlistServices.addtowishlist({ ...body, productId: id }, headers);
    },

    removeFromwishlistItem: async (params, headers) => {
        const userId = await getUserId(headers);
        const productId = params?.id || params?.productId;

        await requests.delete(`/wishlists/:userId/:productId`, { userId, productId }, headers);
        return wishlistServices.fetchWishlist(headers);
    },
    getCustomerwishlist: async (query, headers) => {
        return wishlistServices.fetchWishlist(headers);
    }

};

export default wishlistServices;
