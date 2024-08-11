import { createContext, useContext, useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import {
  ReadonlyURLSearchParams,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import {
  generateUrlFromNestedObject,
  parseUrlWithQueryParams,
} from "@/lib/helper/functions";
import qs from "qs";
import { get } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";

var Url = require("url-parse");
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState({
    price_per_night: "",
    priceMax: "",
    location: { city: "" },
    name: "",
    type: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    year_of_construction: "",
    amenities: [],
    // parking: false,
    // floor: { number: 0 },
    is_furnished: "",
    search: "",
  });
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedSort, setSelectedSort] = useState("popularity-desc");
  const [searchData, setSearchData] = useState(undefined);
  const [wishlistData, setWishlistData] = useState(undefined);
  const { data: session, status } = useSession();

  const handleSearch = () => {
    // console.log(filters);
    var sortItem = selectedSort.split("-");
    let mysort = `${sortItem[0]}:${sortItem[1]}`;
    const paramsQuery = { filter: filters, page: pages, limit, sort: mysort };
    const checkQuerydata = generateUrlFromNestedObject({ ...paramsQuery });
    router.replace(`/properties/search${checkQuerydata}`);
  };
  const fetchSearchData = async (second) => {
    var currentURL = window.location.href;
    var url = new Url(currentURL);
    const parsedObject = parseUrlWithQueryParams(`${url.query}`);

    const query = parsedObject ? parsedObject : {};
    const params = {
      ...query,
      filter: JSON.stringify(query.filter),
    };
    const request = await get(
      `/realestate/record`,
      params
    );
    setSearchData(request)
   
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  const getWishlist = async (second) => {
    const res = await get('/wishlists/fetch')
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
        filters,
        setFilters,
        handleSearch,
        handleFilterChange,
        pages,
        setPages,
        limit,
        setLimit,
        selectedSort,
        setSelectedSort,
        fetchSearchData,searchData,wishlistData,getWishlist
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
