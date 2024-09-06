import requests from "./httpServices";

const wishlistServices = {
    addtowishlist: async (body, headers) => {
        return requests.post("/wishlist/add", body, headers);
    },

    updatewishlistItem: async (body, headers) => {
        return requests.post("/wishlist/update/:id", body, headers);
    },

    removeFromwishlistItem: async (body, headers) => {
        return requests.post("/wishlist/remove/:id", body, headers);
    },
    getCustomerwishlist: async (query, headers) => {
        return requests.get(`/order`, query, headers);
    }

};

export default wishlistServices;
