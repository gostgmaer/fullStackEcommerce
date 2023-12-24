import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "./AuthContext";
import { get, post } from "@/lib/network/http";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { generateUrlFromNestedObject, parseUrlWithQueryParams } from "@/helper/function";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const { user, userId } = useAuthContext();
  const [state, setState] = useState(false);
  const [wishlistData, setWishlistData] = useState(undefined);
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
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const fetchCategories = async (second) => {
    const response = await get("/categories");
    setCategories(response);
  };

  useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
  }, [categories]);


  const searchProducts = async (second) => {
    // const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
  
    var sortItem = sort.split('-');



    let mysort = `${sortItem[0]}:${sortItem[1]}`
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
        brandName: brand, salePrice: price,search:searchData
      }),
      page: page,
      limit: limit,
      sort: mysort,
    };

  
    // const search = {
    //   filter: {
    //     match: {
    //       title: searchData,
    //     },
    //     startwith: {
    //       title: searchData,
    //     },
    //     categories: category,
    //     brands: brand, salePrice: price
    //   },
    //   page: page,
    //   limit: limit,
    //   sort: mysort,
    // }

    // console.log(search);

    // const queryString = objectToQueryString(search);
    // console.log(queryString);
    // const cleanQuery = deleteEmptyKeys(search)
    const urlWithQueryParams = generateUrlFromNestedObject({...query,filter:query.filter});
    // console.log('Generated URL:', urlWithQueryParams);
    const parsedObject = parseUrlWithQueryParams(`${urlWithQueryParams}`);
    // console.log('Parsed Object:', parsedObject);

    router.push(`${pathname}${urlWithQueryParams}`);
    const res = await get("/product/search/data", query);
    setProducts(res)
   
  };

  const getWishlist = async (second) => {
    const res= await get('/wishlists/fetch')
    setWishlistData(res)
    console.log(res);
  }
  useEffect(() => {
    if (session) {
      getWishlist()
    }
  }, [session]);

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
        setLimit, products, setSort, sort, brand, setBrand, price, setPrice, categories, getWishlist
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

