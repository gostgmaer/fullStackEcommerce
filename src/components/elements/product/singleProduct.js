'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/elements/product/ProductCard';
import Informations from '@/components/global/common/informations/Informations';
import SocialNetwork from '@/components/global/common/SocialNetwork';
import VariantList from '@/components/global/common/variants/VariantList';
import Link from 'next/link';
import { addByIncrement } from '@/store/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { IoAddOutline, IoChevronForward, IoRemoveOutline, IoStar, IoStarHalf, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { notifySuccess, notifyerror } from '@/utils/notify/notice';
import Image from 'next/image';

const SingleProduct = ({ props }) => {
  const dispatch = useDispatch();
  const { product, related, attributes = [] } = props;

  // Quantity Counter
  const [total, setTotal] = useState(1);

  // Variant States
  const [variantTitle, setVariantTitle] = useState([]);
  const [selectVariant, setSelectVariant] = useState({});
  const [selectVa, setSelectVa] = useState({});
  const [value, setValue] = useState("");

  // Product price / stock / image / sku state synced with variant selection
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [sku, setSku] = useState("");
  const [activeImage, setActiveImage] = useState("");

  // Tabs state
  const [activeTab, setActiveTab] = useState("description");

  // Load and sort variant titles based on attributes list
  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      const res = Object.keys(Object.assign({}, ...product.variants));
      const varTitle = attributes?.filter((att) => res.includes(att?._id));
      setVariantTitle(varTitle || []);
    }
  }, [product, attributes]);

  // Initial setup when product loads
  useEffect(() => {
    if (product) {
      if (product.variants && product.variants.length > 0) {
        const firstVariant = product.variants[0];
        setSelectVariant(firstVariant);
        setSelectVa(firstVariant);
        setPrice(Number(firstVariant.price));
        setOriginalPrice(Number(firstVariant.originalPrice));
        setStock(firstVariant.quantity);
        setDiscount(Number(firstVariant.discount));
        setSku(firstVariant.sku || product.sku || "");
        if (firstVariant.image) {
          setActiveImage(firstVariant.image);
        } else {
          setActiveImage(product.image?.[0] || "");
        }
      } else {
        setSelectVariant({});
        setSelectVa({});
        setPrice(Number(product.prices?.price || 0));
        setOriginalPrice(Number(product.prices?.originalPrice || 0));
        setStock(product.stock || 0);
        setDiscount(Number(product.prices?.discount || 0));
        setSku(product.sku || "");
        setActiveImage(product.image?.[0] || "");
      }
    }
  }, [product]);

  // Handle updates when a variant attribute option is clicked
  useEffect(() => {
    if (!product || !product.variants || product.variants.length === 0) return;
    if (Object.keys(selectVariant).length === 0) return;

    // Find a variant that matches all selected options in the list
    const matched = product.variants.find((variant) => {
      return variantTitle.every((att) => {
        const attId = att._id;
        return variant[attId] === selectVariant[attId];
      });
    });

    if (matched) {
      setPrice(Number(matched.price));
      setOriginalPrice(Number(matched.originalPrice));
      setStock(matched.quantity);
      setDiscount(Number(matched.discount));
      setSku(matched.sku || product.sku || "");
      if (matched.image) {
        setActiveImage(matched.image);
      }
    } else {
      // Set stock to 0 if selection leads to an invalid variant path
      setStock(0);
    }
  }, [selectVariant, variantTitle, product]);

  const handleAddToCart = () => {
    if (stock <= 0) {
      notifyerror("Sorry, this item is out of stock!");
      return;
    }

    const hasVariants = product.variants && product.variants.length > 0;
    const variantIdSuffix = hasVariants
      ? "-" + variantTitle.map((att) => selectVariant[att._id]).join("-")
      : "";
    const cartItemId = product._id + variantIdSuffix;

    const variantNameSuffix = hasVariants
      ? " - " + variantTitle
          .map((att) => att.variants?.find((v) => v._id === selectVariant[att._id])?.name)
          .filter(Boolean)
          .join(", ")
      : "";
    const cartItemTitle = product.title + variantNameSuffix;

    const cartProduct = {
      ...product,
      id: cartItemId,
      title: cartItemTitle,
      image: [activeImage, ...(product.image || []).slice(1)],
      sku: sku || product.sku,
      stock: stock,
      prices: {
        price: price,
        originalPrice: originalPrice,
        discount: discount,
      },
      variant: selectVariant || {},
    };

    dispatch(addByIncrement({ product: cartProduct, cartQuantity: total }));
    notifySuccess(`${cartItemTitle} is Successfully Added!`);
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
          <div className="w-full rounded-2xl p-4 lg:p-10 bg-card border border-border/40 shadow-sm transition-all duration-200 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Gallery Column */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-square bg-muted/10 rounded-xl p-4 flex items-center justify-center border border-border/20">
                  {discount > 0 && (
                    <span className="absolute top-4 left-4 z-10 text-xs bg-red-500 text-white py-1 px-2.5 rounded-full font-bold shadow-sm animate-pulse">
                      {Math.ceil(discount)}% Off
                    </span>
                  )}
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      alt={product?.title || 'Product image'}
                      src={activeImage || 'https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png'}
                      className="object-contain rounded-lg filter dark:brightness-95 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, 450px"
                      priority
                    />
                  </div>
                </div>

                {/* Thumbnails row */}
                {product?.image && product.image.length > 1 && (
                  <div className="flex flex-wrap gap-2 justify-start mt-2">
                    {product.image.map((imgUrl, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative w-16 h-16 rounded-lg border-2 overflow-hidden bg-card transition-all duration-200 ${
                          activeImage === imgUrl ? 'border-primary scale-105 shadow-sm' : 'border-border/60 hover:border-border'
                        }`}
                      >
                        <Image
                          fill
                          src={imgUrl}
                          alt={`${product.title} view ${index + 1}`}
                          className="object-contain p-1 filter dark:brightness-95"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details & Info Column */}
              <div className="lg:col-span-7 xl:col-span-7 space-y-6">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6">
                  
                  {/* Purchase Details */}
                  <div className="w-full md:w-7/12 space-y-5">
                    <div>
                      <h1 className="leading-tight text-xl md:text-2xl lg:text-3xl font-bold text-foreground">{product.title}</h1>
                      <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider mt-1.5">
                        SKU : <span className="font-bold text-foreground/80">{sku}</span>
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-foreground">${Number(price).toFixed(2)}</span>
                      {originalPrice && originalPrice !== price && (
                        <del className="text-lg font-normal text-muted-foreground/60">${Number(originalPrice).toFixed(2)}</del>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div>
                      {stock !== 0 ? (
                        <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                          In Stock ({stock} available)
                        </span>
                      ) : (
                        <span className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                          Stock Out
                        </span>
                      )}
                    </div>

                    {/* Short Description */}
                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{product.descriptions}</p>
                    </div>

                    {/* Variant Selectors */}
                    {variantTitle && variantTitle.length > 0 && (
                      <div className="pt-2 space-y-4">
                        {variantTitle.map((a) => (
                          <div key={a._id} className="space-y-1.5">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                              Select {a?.name}:
                            </span>
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
                        ))}
                      </div>
                    )}

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
                            disabled={stock === 0}
                            onClick={() => setTotal(total + 1)}
                            className="px-4 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-opacity"
                          >
                            <IoAddOutline className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          disabled={stock === 0}
                          onClick={handleAddToCart}
                          className="flex-1 h-11 md:h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold rounded-lg shadow-sm hover:shadow active:scale-[0.98] text-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {stock === 0 ? "Out of Stock" : "Add To Cart"}
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

                  {/* Right side info panel */}
                  <div className="w-full md:w-5/12">
                    <Informations />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Upgraded specifications, reviews & policy tab layout */}
          <div className="w-full rounded-2xl bg-card border border-border/40 shadow-sm p-4 lg:p-10 mb-12">
            {/* Tabs Trigger Headers */}
            <div className="flex border-b border-border/40 overflow-x-auto scrollbar-hide space-x-8 mb-6">
              {[
                { id: "description", label: "Description" },
                { id: "specifications", label: "Specifications" },
                { id: "reviews", label: "Customer Reviews" },
                { id: "shipping", label: "Shipping & Policies" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 font-semibold text-sm transition-all relative border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="py-2 text-sm leading-relaxed text-muted-foreground">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Product Description</h3>
                  <p>{product?.descriptions || "No description available for this product."}</p>
                  <p className="mt-2 text-muted-foreground/80">
                    This premium product has been carefully formulated, checked for quality, and packaged to ensure customer satisfaction. Enjoy high performance, durability, and elegance in daily use.
                  </p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground mb-4">Specifications</h3>
                  <div className="border border-border/40 rounded-xl overflow-hidden divide-y divide-border/40 bg-muted/5">
                    {[
                      { key: "SKU / Catalog Number", value: sku || product?.sku || "N/A" },
                      { key: "Category", value: product?.category?.title || "N/A" },
                      { key: "Unit Size / Weight", value: product?.unit || "1 Pack" },
                      { key: "Stock Level Status", value: stock > 0 ? `Available (${stock} items)` : "Out of Stock" },
                      { key: "Standard Quality Check", value: "Certified Organic / Tested Quality" },
                      { key: "Standard Delivery Window", value: "1 - 3 Business Days" }
                    ].map((spec, i) => (
                      <div key={i} className="grid grid-cols-1 sm:grid-cols-3 p-3 text-sm">
                        <span className="font-semibold text-foreground">{spec.key}</span>
                        <span className="sm:col-span-2 text-muted-foreground mt-1 sm:mt-0">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-border/40 pb-6">
                    {/* Rating score summary */}
                    <div className="md:col-span-4 text-center md:border-r border-border/40 py-2">
                      <div className="text-4xl font-extrabold text-foreground mb-1">4.8</div>
                      <div className="flex justify-center text-amber-500 mb-1">
                        <IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf />
                      </div>
                      <span className="text-xs text-muted-foreground">Based on {product.totalReviews || 12} reviews</span>
                    </div>

                    {/* Progress bars */}
                    <div className="md:col-span-8 space-y-2">
                      {[
                        { stars: 5, pct: 80 },
                        { stars: 4, pct: 15 },
                        { stars: 3, pct: 5 },
                        { stars: 2, pct: 0 },
                        { stars: 1, pct: 0 }
                      ].map((bar, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <span className="w-12 text-muted-foreground font-medium">{bar.stars} Star</span>
                          <div className="flex-1 h-2 bg-muted/40 rounded-full mx-3 overflow-hidden border border-border/10">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${bar.pct}%` }} />
                          </div>
                          <span className="w-8 text-right text-muted-foreground font-medium">{bar.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-foreground">Verified Purchaser Feedback</h4>
                    <div className="space-y-4 divide-y divide-border/20">
                      {[
                        { name: "Sarah M.", date: "May 20, 2026", rating: 5, comment: "Absolutely love it! Premium feel and high quality materials. Highly recommend to everyone.", verified: true },
                        { name: "David K.", date: "May 14, 2026", rating: 5, comment: "Fast shipping, item matches description perfectly. Very satisfied with my purchase. Will order again.", verified: true },
                        { name: "Emma L.", date: "April 29, 2026", rating: 4, comment: "Good product, but shipping packaging could be better. Product itself works beautifully and handles very well.", verified: true }
                      ].map((review, idx) => (
                        <div key={idx} className="pt-4 first:pt-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-semibold text-foreground block text-sm">{review.name}</span>
                              <div className="flex items-center space-x-2 mt-0.5">
                                <div className="flex text-amber-500 text-xs">
                                  {Array.from({ length: review.rating }).map((_, sIdx) => <IoStar key={sIdx} />)}
                                  {review.rating < 5 && <IoStar className="text-muted/30" />}
                                </div>
                                {review.verified && (
                                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded-full inline-flex items-center gap-0.5 font-semibold">
                                    <IoCheckmarkCircleSharp /> Verified
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground/80 mt-2">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Shipping & Return Policies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Delivery Information</h4>
                      <p className="text-sm">We provide shipping across all areas. Enjoy next-day delivery on local orders placed before 3 PM. Standard delivery windows are between 1 to 3 business days.</p>
                      <p className="text-sm font-semibold text-primary">Free shipping threshold is only $5.00!</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Easy Returns & Exchanges</h4>
                      <p className="text-sm">We offer a 7-day money-back guarantee if you are not fully satisfied. Simply ensure the packaging is intact and contact our support desk for return labels.</p>
                      <p className="text-sm">Need help? Email us at support@ecommercestore.com for prompt support.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products Section */}
          <div className="pt-12 lg:pt-16 pb-12">
            <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-primary transition-colors duration-200">Related Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {related?.results?.map((data, index) => (
                <ProductCard key={index} product={data} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border/40 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex items-center justify-between space-x-4 animate-fade-in transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Total Price</span>
          <span className="text-lg font-bold text-foreground">${(Number(price) * total).toFixed(2)}</span>
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
              disabled={stock === 0}
              onClick={() => setTotal(total + 1)}
              className="px-2 h-full flex items-center justify-center text-muted-foreground disabled:opacity-50"
            >
              <IoAddOutline />
            </button>
          </div>
          
          <button
            disabled={stock === 0}
            onClick={handleAddToCart}
            className="h-10 px-4 bg-primary text-primary-foreground font-semibold rounded-lg text-xs hover:bg-primary/90 active:scale-95 transition-all disabled:bg-muted disabled:text-muted-foreground flex-grow"
          >
            {stock === 0 ? "Out of Stock" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
