'use client';
import React from 'react';
import { attributes, getProductByParentCategory } from '@/assets/fakeData/Products';
import ProductCard from '@/components/elements/product/ProductCard';
import Informations from '@/components/global/common/informations/Informations';
import SocialNetwork from '@/components/global/common/SocialNetwork';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { addByIncrement } from '@/store/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { IoAddOutline, IoChevronForward, IoRemoveOutline } from 'react-icons/io5';
import { notifySuccess } from '@/utils/notify/notice';
import Image from 'next/image';

const SingleProduct = ({ props }) => {
  const dispatch = useDispatch();
  const { product, related } = props;
  // //console.log(product);
  //console.log(product, related);

  const [total, setTotal] = useState(1);

  const handleAddToCart = (product) => {
    dispatch(addByIncrement({ product: { ...product, id: product._id }, cartQuantity: total }));
    notifySuccess(`${product.title} is Successfully Add!`);
  };

  // const currency = globalSetting?.default_currency || "$";

  // const RelatedProduct = getProductByParentCategory(product?.category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          <div className="flex items-center pb-4">
            <ol className="flex items-center w-full overflow-hidden">
              <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer  font-semibold">
                <Link className="!no-underline !text-black hover:!text-emerald-500" href="/">
                  Home
                </Link>
              </li>
              <li className="text-sm mt-[1px]">
                <IoChevronForward />
              </li>
              <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
                <Link className="!no-underline !text-black hover:!text-emerald-500" href={`/product/search?category=${product?.category.title?.toLowerCase().split(' ').join('-')}`}>
                  {product?.category.title}
                </Link>
              </li>
              <li className="text-sm mt-[1px]">
                <IoChevronForward />
              </li>
              <li className="text-sm px-1 transition duration-200 ease-in ">{product?.title}</li>
            </ol>
          </div>
          <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
            <div className="flex flex-col xl:flex-row">
              <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5-12 xl:w-4/12">
                {product?.prices.discount === 0 ? '' : <span className=" text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">{Math.ceil(product.prices.discount)}% Off</span>}
                <span
                  className=" block overflow-hidden bg-none opacity-100 border-0 m-0 p-0 relative "
                  style={{
                    boxSizing: 'border-box',

                    width: ' initial',
                    height: 'initial',
                  }}
                >
                  <Image
                    width={500}
                    height={500}
                    // className=' w-80 h-80'
                    alt={product.title?.data}
                    src={product?.image[0]}
                    sizes="100vw"
                  />
                </span>
              </div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                  <div className="w-full md:w-7/12 md:pr-4 lg:pr-4 xl:pr-12">
                    <div className="mb-2">
                      <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold text-gray-800">{product.title}</h1>
                      <p className="uppercase font-medium text-gray-500">
                        SKU :<span className="font-bold text-gray-600">{product.sku}</span>
                      </p>
                    </div>
                    <div className="font-bold">
                      <span className="inline-block text-2xl">${product.price}</span>
                      {product.retailPrice === product.price ? '' : <del className="text-lg font-normal text-gray-400 ml-1">${product.retailPrice}</del>}
                    </div>
                    <div className="mb-4 md:mb-5 block">
                      {product.stock !== 0 && <span className="bg-emerald-100 text-emerald-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold mt-2 ">In Stock</span>}
                      {product.stock === 0 && <span className="bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold  mt-2">Stock Out</span>}
                    </div>
                    <div>
                      <p className="text-sm leading-6 text-gray-500 md:leading-7">{product.descriptions}</p>
                      <div className="flex items-center mt-4">
                        <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                          <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button onClick={() => setTotal(total - 1)} disabled={total <= 1 ? true : false} className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500">
                              <span className="text-dark text-base">
                                <IoRemoveOutline />
                              </span>
                            </button>
                            <p className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24">{total}</p>
                            <button
                              disabled={product.quantity === 0 ? true : false}
                              onClick={() => {
                                setTotal(total + 1);
                              }}
                              className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                            >
                              <span className="text-dark text-base">
                                <IoAddOutline />
                              </span>
                            </button>
                          </div>
                          <button disabled={product.quantity === 0 ? true : false} onClick={() => handleAddToCart(product)} className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <span className=" font-semibold py-1 text-sm d-block">
                          <span className="text-gray-700">Category: </span>
                          <span className="text-gray-500">{product?.category.title}</span>
                        </span>
                        <div className="flex flex-row">
                          {product.tags.map((e, index) => {
                            return (
                              <span key={index} className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2">
                                {e}
                              </span>
                            );
                          })}
                        </div>
                        <SocialNetwork />
                      </div>
                    </div>
                  </div>
                  <Informations />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 llg:pt-20 lg:pb-10"></div>
          <div className="pt-10 llg:pt-20 lg:pb-10">
            <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold  hover:text-gray-600">Related Products</h3>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
                  {related?.results.map((data, index) => (
                    <ProductCard key={index} product={data} attributes={attributes} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
