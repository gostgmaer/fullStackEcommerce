import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [years, setYears] = useState(null);
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);

  // useEffect(() => {
  //   console.log(cartItem);
  //   // window.localStorage.setItem('cartItem',cartItem)
  //   console.log(cartItem);
  // }, [cartItem]);

  const array = [];
  const getYearsList = (params) => {
    for (let index = 0; index <= 15; index++) {
      const expDate = new Date().getFullYear() + index;
      array.push(expDate);
    }
    const data = { year: array };

    setYears(data);
    // console.log(years);
  };

  // useEffect(() => {
  //   getYearsList();
  // }, []);

  return (
    <AppContext.Provider
      value={{ state, setState, openModal, years, setOpenModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
