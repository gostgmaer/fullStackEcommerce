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
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  const [price, setPrice] = useState(undefined);
  const [Rating, setRating] = useState(0);
  const [sort, setSort] = useState("relevance-desc");
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState(undefined);


  const fetchCategories = async (second) => {
    const response = await get("/categories");
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  const searchProducts = async (second) => {
   
var sortItem = sort.split('-');

let mysort=`${sortItem[0]}:${sortItem[1]}`
  // const [sortKey, sortOrder] = sort.split("-");
  // myObject[sortKey] = sortOrder

// console.log(mysort);

    const query = {
      filter: JSON.stringify({  
        match: {
          title: searchData,
        },
        startwith: {
          title: searchData,
        },  
        categories: category,
        brands:brand,salePrice:price
      }),
      page: page,
      limit: limit,
      sort: mysort,
    };
    const res = await get("/product/search/data", query);
    setProducts(res)
    // console.log(res);
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
        setLimit,products,setSort,sort,brand, setBrand,price, setPrice,categories
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
