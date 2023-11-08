import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "./AuthContext";
import { post } from "@/lib/network/http";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const { user, userId } = useAuthContext();
  const [state, setState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [years, setYears] = useState(null);
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);


  const createCart = () => { 
    
    const response =  post('/cart',cartItem)
    console.log(response);


   }


  return (
    <AppContext.Provider value={{ state, setState, openModal, setOpenModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
