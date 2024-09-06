
"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import MainModal from "./MainModal";
import Discount from "../common/Discount";
import Stock from "../common/Stock";
import Price from "../common/Price";
import VariantList from "../common/variants/VariantList";
import { content } from "@/assets/jsonfile/content";
import Tags from "../common/Tags";
import { useDispatch, useSelector } from "react-redux";
import { addByIncrement } from "@/store/reducers/cartSlice";
import { IoAdd, IoAddOutline, IoBagAddSharp, IoRemove, IoRemoveOutline } from "react-icons/io5";

const ProductModal = ({
  modalOpen,
  setModalOpen,
  product,
  attributes,
  currency,
}) => {
  const route = useRouter()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state["cart"]);
  const cartData = cart.cartItems.find((cartItem) => cartItem.id === product._id);
  ///console.log(cart, cartData);

  // const { setIsLoading, isLoading } = useContext(SidebarContext);
  // const { t, lang } = useTranslation("ns1");
  // const { handleAddItem, setItem, item } = useAddToCart();

  // react hook
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState("");
  const [selectVariant, setSelectVariant] = useState({});
  const [selectVa, setSelectVa] = useState({});
  const [variantTitle, setVariantTitle] = useState([]);
  const [variants, setVariants] = useState([]);
  const [total, setTotal] = useState(cartData?.cartQuantity ? cartData.cartQuantity : 1)
  // useEffect(() => {
  //   // ///console.log('value', value, product);
  //   if (value) {
  //     const result = product?.variants?.filter((variant) =>
  //       Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
  //     );

  //     const res = result?.map(
  //       ({
  //         originalPrice,
  //         price,
  //         discount,
  //         quantity,
  //         barcode,
  //         sku,
  //         productId,
  //         image,
  //         ...rest
  //       }) => ({
  //         ...rest,
  //       })
  //     );

  //     const filterKey = Object.keys(Object.assign({}, ...res));
  //     const selectVar = filterKey?.reduce(
  //       (obj, key) => ({ ...obj, [key]: selectVariant[key] }),
  //       {}
  //     );
  //     const newObj = Object.entries(selectVar).reduce(
  //       (a, [k, v]) => (v ? ((a[k] = v), a) : a),
  //       {}
  //     );

  //     const result2 = result?.find((v) =>
  //       Object.keys(newObj).every((k) => newObj[k] === v[k])
  //     );

  //     // ///console.log("result2", result2);

  //     if (result.length <= 0 || result2 === undefined) return setStock(0);

  //     setVariants(result);
  //     setSelectVariant(result2);
  //     setSelectVa(result2);
  //     setImg(result2?.image);
  //     setPrice(Number(result2?.price));
  //     setOriginalPrice(Number(result2?.originalPrice));

  //     setStock(result2?.quantity);

  //     setDiscount(Number(result2?.discount));
  //   } else if (product?.variants?.length > 0) {
  //     const result = product?.variants?.filter((variant) =>
  //       Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
  //     );

  //     setVariants(result);

  //     setPrice(Number(product.variants[0]?.price));
  //     setOriginalPrice(Number(product.variants[0]?.originalPrice));
  //     setStock(product.variants[0]?.quantity);
  //     setDiscount(Number(product.variants[0]?.discount));
  //     setSelectVariant(product.variants[0]);
  //     setSelectVa(product.variants[0]);
  //     setImg(product.variants[0]?.image);
  //   } else {
  //     setPrice(Number(product?.prices?.price));
  //     setOriginalPrice(Number(product?.prices?.originalPrice));
  //     setStock(product?.stock);
  //     setImg(product?.image[0]);
  //     setDiscount(Number(product?.prices?.discount));
  //   }
  // }, [
  //   product?.prices?.discount,
  //   product?.prices?.originalPrice,
  //   product?.prices?.price,
  //   product?.stock,
  //   product.variants,
  //   selectVa,
  //   selectVariant,
  //   value,
  // ]);
  // ///console.log("product", product);

  useEffect(() => {

  }, [variants, attributes]);

  // const handleAddToCart = (p) => {
  //   if (p.variants.length === 1 && p.variants[0].quantity < 1)
  //     return notifyError("Insufficient stock");

  //   if (stock <= 0) return notifyError("Insufficient stock");

  //   if (
  //     product?.variants.map(
  //       (variant) =>
  //         Object.entries(variant).sort().toString() ===
  //         Object.entries(selectVariant).sort().toString()
  //     )
  //   ) {
  //     const newItem = {
  //       ...p,
  //       id: `${
  //         p?.variants.length <= 0
  //           ? p._id
  //           : p._id +
  //             "-" +
  //             variantTitle?.map((att) => selectVariant[att._id]).join("-")
  //       }`,
  //       title: `${
  //         p?.variants.length <= 0
  //           ? showingTranslateValue(p.title, lang)
  //           : showingTranslateValue(p.title, lang) +
  //             "-" +
  //             variantTitle
  //               ?.map((att) =>
  //                 att.variants?.find((v) => v._id === selectVariant[att._id])
  //               )
  //               .map((el) => showingTranslateValue(el?.name, lang))
  //       }`,
  //       image: img,
  //       variant: selectVariant || {},
  //       price: p.variants.length === 0 ? p.prices.originalPrice : price,
  //       originalPrice:
  //         p.variants.length === 0 ? p.prices.originalPrice : originalPrice,
  //     };

  //     // ///console.log("newItem", newItem);

  //     handleAddItem(newItem);
  //   } else {
  //     return notifyError("Please select all variant first!");
  //   }
  // };

  const handleMoreInfo = (slug) => {
    setModalOpen(false);

    route.push(`/product/${slug}`);
    // setIsLoading(!isLoading);
  };

  const category_name = product?.category?.name
  // function handleAddToCart(product) {
  //   throw new Error("Function not implemented.");
  // }



  const handleAddToCart = (product) => {
    dispatch(addByIncrement({ product: product, cartQuantity: total }));
  };
  return (
    <>
      <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
            <Link href={`/product/${product.slug}`} passHref className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer">
              <div
                onClick={() => setModalOpen(false)}
                className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer"
              >
                <Discount product={product} discount={Number(discount)} slug={product?.slug} modal />
                {product.image[0] ? (
                  <Image
                    src={img || product.image[0]}
                    width={420}
                    height={420}
                    className=" w-full h-auto md:w-[420px] md:h-[420px] "
                    alt="product"
                  />
                ) : (
                  <Image
                    src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                    width={420}
                     className=" w-full h-auto md:w-[420px] md:h-[420px] "
                    height={420}
                    alt="product Image"
                  />
                )}
              </div>
            </Link>

            <div className="w-full flex flex-col p-5 md:p-8 text-left">
              <div className="mb-2 md:mb-2.5 block -mt-1.5">
                <Link href={`/product/${product.slug}`}  className=" text-gray-700">
                  <h1
                    // onClick={() => setModalOpen(false)}
                    className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer"
                  >

                    {product?.title?.data}

                  </h1>
                </Link>
                <div
                  className={`${stock <= 0 ? "relative py-1 mb-2" : "relative"
                    }`}
                >
                  <Stock stock={product.stock} card />
                </div>
              </div>
              <p className="text-sm leading-6 text-gray-500 md:leading-6">

                {product?.description?.data}
              </p>
              <div className="flex items-center my-4">
                <Price
                  product={product}
                  price={price}
                  card
                  currency={"$"}
                  originalPrice={originalPrice}
                />
              </div>

              <div className="mb-1">
                {variantTitle?.map((a, i) => (
                  <span key={a._id}>
                    <h4 className="text-sm py-1 font-serif text-gray-700 font-bold">

                      {a?.name}
                    </h4>
                    <div className="flex flex-row mb-3">
                      <VariantList
                        att={a._id}

                        option={a.option}
                        setValue={setValue}
                        varTitle={variantTitle}
                        variants={product?.variants}
                        setSelectVa={setSelectVa}
                        selectVariant={selectVariant}
                        setSelectVariant={setSelectVariant}
                      />
                    </div>
                  </span>
                ))}
              </div>


              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center justify-center w-full space-s-3 sm:space-s-4 ">
                  <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                    <button
                      onClick={() => setTotal(total - 1)}
                      disabled={total <= 1 ? true : false}

                      className={total <= 1 ? "flex items-center !cursor-default text-black justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500" : "flex items-center !cursor-pointer text-black justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"}
                    >
                      <span className=" text-base ">
                       <IoRemoveOutline/>
                      </span>
                    </button>
                    <p className="text-black font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24">
                      {total}
                    </p>
                    <button
                      onClick={() => setTotal(total + 1)}
                      className={product.quantity === 0 ? "  !cursor-default flex items-center justify-center h-full text-black flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500" : "  !cursor-pointer flex items-center justify-center h-full text-black flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"}
                      tabIndex={0}
                      disabled={product.quantity === 0 ? true : false}
                    >
                      <span className=" text-base">
                     <IoAddOutline/>
                      </span>
                    </button>
                  </div>
                  <button onClick={() => handleAddToCart({ ...product, id: product._id })} disabled={product.quantity === 0 ? true : false} className={product.quantity === 0 ? " !cursor-default text-sm leading-4 inline-flex items-center  transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none ml-4 text-white px-4  md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12" : " cursor-pointer text-sm leading-4 inline-flex items-center  transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none ml-4 text-white px-4  md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12"}>
                    Add To Cart
                  </button>
                </div>
              </div>


              <div className="flex items-center mt-4">
                <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                  <div>
                    <span className="font-serif font-semibold py-1 text-sm d-block">
                      <span className="text-gray-700">
                
                      
                        {content.category}
                        :
                      </span>{" "}
                      <Link
                        href={`/search?category=${product?.category?.name.data}&_id=${product?.category?._id}`}
                      >
                        <button
                          type="button"
                          className="text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600"
                         
                        >
                          {product?.category?.name.data}
                        </button>
                      </Link>
                    </span>
                    <Tags product={product} />
                  </div>

                  <div>
                    <button
                      onClick={() => handleMoreInfo(product.slug)}
                      className="font-sans font-medium text-sm text-orange-500"
                    >
                  
                      {content.moreInfo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainModal>
    </>
  );
};

export default ProductModal;
