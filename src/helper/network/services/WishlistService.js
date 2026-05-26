
import requests from "./httpServices";
import { baseurl } from "@/config/setting";

/** @typedef {Record<string, string>} RequestHeaders */
/** @typedef {{ [key: string]: any }} WishlistPayload */

/** @param {RequestHeaders=} headers */
const getProfile = async (headers) => {
    const response = await requests.get("/auth/profile", {}, {}, headers, 0);
    return response?.data || response;
};

/** @param {RequestHeaders=} headers */
const getUserId = async (headers) => {
    const profile = await getProfile(headers);
    return profile?._id || profile?.id;
};

/** @param {any} response */
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
    /** @param {WishlistPayload} body @param {RequestHeaders=} headers */
    addtowishlist: async (body, headers) => {
        const userId = await getUserId(headers);
        const productId = body?.productId || body?.product || body?.id || body?._id;

        await requests.post("/wishlists", { userId, productId }, headers);
        return wishlistServices.fetchWishlist(headers);
    },

    /** @param {RequestHeaders=} headers */
    fetchWishlist: async (headers) => {
        const userId = await getUserId(headers);
        const response = await fetch(`${baseurl}/wishlists/${encodeURIComponent(userId)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(headers || {}),
            },
            next: { revalidate: 1 },
        });

        if (response.status === 404) {
            return normalizeWishlistResponse({ result: [] });
        }

        const contentType = response.headers.get("content-type") || "";
        const responseData = contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        if (!response.ok) {
            throw new Error(
                typeof responseData === "string"
                    ? responseData
                    : responseData?.message || "Failed to fetch wishlist"
            );
        }

        const normalizedResponse = typeof responseData === "string"
            ? { result: [] }
            : responseData;

        return normalizeWishlistResponse(normalizedResponse);
    },
    /** @param {string} id @param {WishlistPayload} body @param {RequestHeaders=} headers */
    updatewishlistItem: async (id, body, headers) => {
        return wishlistServices.addtowishlist({ ...body, productId: id }, headers);
    },

    /** @param {WishlistPayload} params @param {RequestHeaders=} headers */
    removeFromwishlistItem: async (params, headers) => {
        const userId = await getUserId(headers);
        const productId = params?.id || params?.productId;

        await requests.delete(`/wishlists/:userId/:productId`, { userId, productId }, headers);
        return wishlistServices.fetchWishlist(headers);
    },
    /** @param {WishlistPayload} query @param {RequestHeaders=} headers */
    getCustomerwishlist: async (query, headers) => {
        return wishlistServices.fetchWishlist(headers);
    }

};

export default wishlistServices;
