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


  const router = useRouter();
  // const { lang } = useTranslation("ns1"); // default namespace (optional)
  // const { isLoading, setIsLoading } = useContext(SidebarContext);

  // const { data, loading, error } = useAsync(
  //   CategoryServices.getShowingCategory
  // );

  // const data = CategoriesData




  // const handleCategoryClick = (id, categoryName) => {
  //   const category_name = categoryName
  //     .toLowerCase()
  //     .replace(/[^A-Z0-9]+/gi, "-");
  //   const url = `/product/search?category=${category_name}&_id=${id}`;
  //   router.push(url);

  // };

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {props?.category?.results?.map((category, i) => (
          <li className="group h-full" key={i + 1}>
            <div className="flex flex-col w-full h-full card-base hover:shadow-premium-hover hover:-translate-y-1 p-5 cursor-pointer relative overflow-hidden transition-all duration-400">
              <a href={`/product/search?category=${category.title}&_id=${category._id}`} className="absolute inset-0 z-10"></a>
              <div className="flex flex-col items-center text-center gap-3 relative z-0">
                <div className="w-14 h-14 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center p-2.5 group-hover:bg-primary/10 dark:group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-400">
                  {category.images ? (
                    <Image
                      src={category?.images[0]}
                      alt={category.title}
                      width={48}
                      height={48}
                      className="object-contain transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      alt={category.title}
                      width={48}
                      height={48}
                      className="object-contain opacity-50 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="w-full">
                  <h3 className="text-sm text-foreground font-bold leading-tight line-clamp-1 group-hover:text-primary transition-colors duration-200">
                    {category?.title}
                  </h3>
                  
                  {category?.child?.length > 0 && (
                    <ul className="pt-2 mt-2 border-t border-border/40 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                      {category?.child?.slice(0, 2).map((child) => (
                        <li key={child.path} className="pt-1.5">
                          <a
                            href={`/product/search?category=${child.title}&_id=${child._id}`}
                            className="flex items-center justify-center text-[10px] text-muted-foreground hover:text-primary transition-colors"
                          >
                            <span className="text-primary mr-1">
                              <IoChevronForwardSharp className="w-3 h-3" />
                            </span>
                            <span className="truncate">{child?.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
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
