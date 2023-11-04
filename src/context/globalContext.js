import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [years, setYears] = useState(null);
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);

  return (
    <AppContext.Provider
      value={{ state, setState, openModal, setOpenModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
