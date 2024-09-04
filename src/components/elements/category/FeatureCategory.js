"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoChevronForwardSharp } from "react-icons/io5";
//internal import
// import { SidebarContext } from "@context/SidebarContext";
// import useAsync from "@hooks/useAsync";
// import CategoryServices from "@services/CategoryServices";
import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import { CategoriesData } from "@/assets/fakeData/CategoriesData";
// import { showingTranslateValue } from "@utils/translate";

const FeatureCategory = () => {
  const router = useRouter();
  // const { lang } = useTranslation("ns1"); // default namespace (optional)
  // const { isLoading, setIsLoading } = useContext(SidebarContext);

  // const { data, loading, error } = useAsync(
  //   CategoryServices.getShowingCategory
  // );

  const data = CategoriesData

  console.log(data[0]);
  
  
  // console.log('category',data)

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
 
  };

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {data.map((category, i) => (
            <li className="group" key={i + 1}>
              <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                <div className="flex items-center">
                  <div>
                    {category.icon ? (
                      <Image
                        src={category?.icon}
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
                      onClick={() =>
                        handleCategoryClick(
                          category._id,
                          category?.name
                        )
                      }
                      className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1  group-hover"
                    >
                      {category?.name}
                    </h3>
                    <ul className="pt-1 mt-1">
                      {category?.subCategories?.slice(0, 3).map((child) => (
                        <li key={child.path} className="pt-1">
                          <a
                            onClick={() =>
                              handleCategoryClick(
                                child.path,
                                child.name
                              )
                            }
                            className="flex items-center font-serif text-xs text-gray-400 cursor-pointer"
                          >
                            <span className="text-xs text-gray-400 ">
                              <IoChevronForwardSharp />
                            </span>
                            {child?.name}
                          </a>

                          {/* <ul className="pt-1 pl-2">
                            {child?.children?.slice(0, 3).map((child) => (
                              <li key={child._id} className="pt-1">
                                <a
                                  onClick={() =>
                                    handleCategoryClick(
                                      child._id,
                                      showingTranslateValue(child?.name, lang)
                                    )
                                  }
                                  className="flex items-center font-serif text-xs text-gray-400 cursor-pointer"
                                >
                                  <span className="text-xs text-gray-400">
                                    <IoChevronForwardSharp />
                                  </span>
                                  {showingTranslateValue(child?.name, lang)}
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                      ))}
                    </ul>
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
