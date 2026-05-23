'use client';
import React from 'react';
import { attributes } from '@/assets/fakeData/Products';
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
  const [total, setTotal] = useState(1);

  const handleAddToCart = (product) => {
    dispatch(addByIncrement({ product: { ...product, id: product._id }, cartQuantity: total }));
    notifySuccess(`${product.title} is Successfully Added!`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground transition-colors duration-200">
      <div className="px-0 py-6 lg:py-10">
        <div className="mx-auto px-4 lg:px-10 max-w-screen-2xl">
          
          {/* Breadcrumbs */}
          <div className="flex items-center pb-6">
            <ol className="flex items-center w-full overflow-hidden text-sm text-muted-foreground">
              <li className="font-semibold transition duration-200 ease-in cursor-pointer">
                <Link className="hover:text-primary" href="/">
                  Home
                </Link>
              </li>
              <li className="mx-2 mt-[1px]">
                <IoChevronForward className="w-3.5 h-3.5" />
              </li>
              <li className="font-semibold transition duration-200 ease-in cursor-pointer">
                <Link className="hover:text-primary" href={`/product/search?category=${product?.category.title?.toLowerCase().split(' ').join('-')}`}>
                  {product?.category.title}
                </Link>
              </li>
              <li className="mx-2 mt-[1px]">
                <IoChevronForward className="w-3.5 h-3.5" />
              </li>
              <li className="truncate text-muted-foreground/60">{product?.title}</li>
            </ol>
          </div>

          {/* Product Layout Grid */}
          <div className="w-full rounded-2xl p-4 lg:p-10 bg-card border border-border/40 shadow-sm transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Sticky Gallery Column */}
              <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 h-fit bg-muted/10 rounded-xl p-4 flex items-center justify-center border border-border/20">
                <div className="relative w-full max-w-[450px] aspect-square">
                  {product?.prices.discount > 0 && (
                    <span className="absolute top-2 left-2 z-10 text-xs bg-red-500 text-white py-1 px-2.5 rounded-full font-bold shadow-sm">
                      {Math.ceil(product.prices.discount)}% Off
                    </span>
                  )}
                  <Image
                    fill
                    alt={product.title}
                    src={product?.image[0]}
                    className="object-contain rounded-lg filter dark:brightness-95 transition-all"
                    sizes="(max-w-768px) 100vw, 450px"
                    priority
                  />
                </div>
              </div>

              {/* Details & Info Column */}
              <div className="lg:col-span-7 xl:col-span-7 space-y-6">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6">
                  
                  {/* Purchase Details */}
                  <div className="w-full md:w-7/12 space-y-4">
                    <div>
                      <h1 className="leading-tight text-xl md:text-2xl lg:text-3xl font-bold text-foreground">{product.title}</h1>
                      <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider mt-1.5">
                        SKU : <span className="font-bold text-foreground/80">{product.sku}</span>
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-foreground">${product.price.toFixed(2)}</span>
                      {product.retailPrice !== product.price && (
                        <del className="text-lg font-normal text-muted-foreground/60">${product.retailPrice.toFixed(2)}</del>
                      )}
                    </div>

                    <div>
                      {product.stock !== 0 ? (
                        <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                          Stock Out
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{product.descriptions}</p>
                      
                      {/* Quantity & Buy controls */}
                      <div className="flex items-center mt-6">
                        <div className="flex items-center justify-between space-x-4 w-full">
                          
                          {/* Counter */}
                          <div className="flex items-center border border-border bg-muted/20 rounded-lg overflow-hidden h-11 md:h-12">
                            <button
                              onClick={() => setTotal(total - 1)}
                              disabled={total <= 1}
                              className="px-4 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-opacity"
                            >
                              <IoRemoveOutline className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center text-sm font-semibold select-none">{total}</span>
                            <button
                              disabled={product.stock === 0}
                              onClick={() => setTotal(total + 1)}
                              className="px-4 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-opacity"
                            >
                              <IoAddOutline className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            disabled={product.stock === 0}
                            onClick={() => handleAddToCart(product)}
                            className="flex-1 h-11 md:h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold rounded-lg shadow-sm hover:shadow active:scale-[0.98] text-sm flex items-center justify-center"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>

                      {/* Meta Details */}
                      <div className="flex flex-col mt-6 space-y-3 pt-6 border-t border-border/40">
                        <span className="text-sm font-medium">
                          <span className="text-muted-foreground">Category: </span>
                          <span className="text-foreground">{product?.category.title}</span>
                        </span>
                        
                        {product.tags && product.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag, index) => (
                              <span key={index} className="bg-muted text-muted-foreground border border-border/30 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <SocialNetwork />
                      </div>
                    </div>
                  </div>

                  {/* Right side info panel */}
                  <div className="w-full md:w-5/12">
                    <Informations />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Products Section */}
          <div className="pt-12 lg:pt-16 pb-12">
            <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-primary transition-colors duration-200">Related Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {related?.results.map((data, index) => (
                <ProductCard key={index} product={data} attributes={attributes} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border/40 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex items-center justify-between space-x-4 animate-fade-in transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Total Price</span>
          <span className="text-lg font-bold text-foreground">${(product.price * total).toFixed(2)}</span>
        </div>
        <div className="flex items-center space-x-2 flex-1 justify-end max-w-[240px]">
          <div className="flex items-center border border-border rounded-lg bg-muted/30 h-10 overflow-hidden">
            <button
              onClick={() => setTotal(total - 1)}
              disabled={total <= 1}
              className="px-2 h-full flex items-center justify-center text-muted-foreground disabled:opacity-50"
            >
              <IoRemoveOutline />
            </button>
            <span className="w-8 text-center text-sm font-semibold">{total}</span>
            <button
              disabled={product.stock === 0}
              onClick={() => setTotal(total + 1)}
              className="px-2 h-full flex items-center justify-center text-muted-foreground disabled:opacity-50"
            >
              <IoAddOutline />
            </button>
          </div>
          
          <button
            disabled={product.stock === 0}
            onClick={() => handleAddToCart(product)}
            className="h-10 px-4 bg-primary text-primary-foreground font-semibold rounded-lg text-xs hover:bg-primary/90 active:scale-95 transition-all disabled:bg-muted disabled:text-muted-foreground flex-grow"
          >
            {product.stock === 0 ? "Out of Stock" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
