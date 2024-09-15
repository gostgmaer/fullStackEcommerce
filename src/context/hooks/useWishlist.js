// hooks/useWishlist.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react'; // Assuming you're using NextAuth
import wishlistServices from '@/helper/network/services/WishlistService';
import { getToken } from '@/helper/functions/serverSession';

const useWishlist = () => {
  const { data: session } = useSession();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch wishlist from the backend

  const header = {
    Authorization: `Bearer ${session?.["accessToken"]}`,
  }




  const fetchWishlist = async () => {
    if (!session?.user) return; // Wait until the user is available
    setLoading(true);
    try {
      const response = await wishlistServices.fetchWishlist(header);
      setWishlist(response.results);
  
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching wishlist');
    } finally {
      setLoading(false);
    }
  };

  // Add item to wishlist
  const addToWishlist = async (product) => {
    try {
      const response = await wishlistServices.addtowishlist(product, header);
      setWishlist(response.results);
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding to wishlist');
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = async (params) => {
    try {
      const response = await wishlistServices.removeFromwishlistItem(params, header);
      setWishlist(response.results);
    } catch (err) {
      setError(err.response?.data?.message || 'Error removing from wishlist');
    }
  };


  // useEffect(() => {
  //   fetchWishlist();
  // }, []);

  return { wishlist,fetchWishlist, addToWishlist, removeFromWishlist, loading, error };
};

export default useWishlist;
