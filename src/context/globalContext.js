import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "./AuthContext";
import { get, post } from "@/lib/network/http";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const { user, userId } = useAuthContext();
  const [state, setState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState({});

  const searchProducts = async (second) => {
    const query = {
      filter: JSON.stringify({  
        match: {
          title: searchData,
        },
        startwith: {
          title: searchData,
        },  
        categories: category,
      }),
      page: page,
      limit: limit,
      sort: sort,
    };
    const res = await get("/products", query);
    setProducts(res)
    console.log(res);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        openModal,
        setOpenModal,
        searchData,
        setSearchData,
        category,
        setCategory,
        page,
        setPage,
        searchProducts,
        limit,
        setLimit,products
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
