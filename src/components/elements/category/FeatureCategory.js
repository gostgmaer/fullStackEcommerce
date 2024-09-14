"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoChevronForwardSharp } from "react-icons/io5";
//internal import
// import { SidebarContext } from "@context/SidebarContext";
// import useAsync from "@hooks/useAsync";
// import CategoryServices from "@services/CategoryServices";
// import useTranslation from "next-translate/useTranslation";
// import { useContext } from "react";
import { CategoriesData } from "@/assets/fakeData/CategoriesData";
// import { showingTranslateValue } from "@utils/translate";

const FeatureCategory = (props) => {

  //console.log(props);

  const router = useRouter();
  // const { lang } = useTranslation("ns1"); // default namespace (optional)
  // const { isLoading, setIsLoading } = useContext(SidebarContext);

  // const { data, loading, error } = useAsync(
  //   CategoryServices.getShowingCategory
  // );

  // const data = CategoriesData

  /////console.log(data[0]);


  // /////console.log('category',data)

  // const handleCategoryClick = (id, categoryName) => {
  //   const category_name = categoryName
  //     .toLowerCase()
  //     .replace(/[^A-Z0-9]+/gi, "-");
  //   const url = `/product/search?category=${category_name}&_id=${id}`;
  //   router.push(url);

  // };

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {props?.category?.results?.map((category, i) => (
          <li className="group" key={i + 1}>
            <div className="flex w-full h-full border border-gray-100 dark:border-gray-500 shadow-sm bg-white dark:bg-gray-600 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div>
                  {category.images ? (
                    <Image
                      src={category?.images[0]}
                      alt="category"
                      width={35}
                      height={35}
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      alt="category"
                      width={35}
                      height={35}
                    />
                  )}
                </div>

                <div className="pl-4">
                  <h3

                    className="text-sm text-gray-600 dark:text-gray-200 font-serif font-medium leading-tight line-clamp-1  group-hover"
                  >
                    <a
                      href={`/product/search?category=${category.title}&_id=${category._id}`}
                      className="flex items-center font-serif text-xs text-gray-400 dark:text-gray-800 cursor-pointer"
                    >

                      {category?.title}
                    </a>

                  </h3>
                  {category?.child?.length ? <ul className="pt-1 mt-1">
                    {category?.child?.slice(0, 3).map((child) => (
                      <li key={child.path} className="pt-1">
                        <a
                          href={`/product/search?category=${child.title}&_id=${child._id}`}
                          className="flex items-center font-serif text-xs text-gray-400 dark:text-gray-800 cursor-pointer"
                        >
                          <span className="text-xs text-gray-400 dark:text-gray-800">
                            <IoChevronForwardSharp />
                          </span>
                          {child?.name}
                        </a>


                      </li>
                    ))}
                  </ul>:''}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeatureCategory;
