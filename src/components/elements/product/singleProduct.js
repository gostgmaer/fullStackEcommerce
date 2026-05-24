'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/elements/product/ProductCard';
import Informations from '@/components/global/common/informations/Informations';
import SocialNetwork from '@/components/global/common/SocialNetwork';
import VariantList from '@/components/global/common/variants/VariantList';
import Link from 'next/link';
import { addByIncrement } from '@/store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoAddOutline, IoChevronForward, IoRemoveOutline, IoStar, IoStarHalf, IoCheckmarkCircleSharp, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { notifySuccess, notifyerror } from '@/utils/notify/notice';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { addToWishlist, removeFromWishlist, fetchWishlist } from '@/store/reducers/wishslice';
import { useRouter } from 'next/navigation';

const SingleProduct = ({ props }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();
  const { product, related, attributes = [] } = props;

  // Quantity Counter
  const [total, setTotal] = useState(1);

  const { wishlist } = useSelector((state) => state["wishlist"]) || { wishlist: [] };

  // Fetch wishlist if authenticated and not loaded
  useEffect(() => {
    if (session?.accessToken) {
      dispatch(fetchWishlist({ Authorization: `Bearer ${session.accessToken}` }));
    }
  }, [dispatch, session?.accessToken]);

  const token = session?.accessToken ? { Authorization: `Bearer ${session.accessToken}` } : null;
  const isWishlisted = wishlist?.some((item) => item?.product?._id === product?._id);

  const handleToggleWishlist = () => {
    if (status !== "authenticated" || !token) {
      notifyerror("Please login to save items to your wishlist!");
      return;
    }
    if (isWishlisted) {
      dispatch(removeFromWishlist({ id: product._id, token }));
    } else {
      dispatch(addToWishlist({ id: product._id, token }));
    }
  };

  const handleBuyNow = () => {
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
    router.push("/checkout");
  };

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

  // Dynamic Delivery & Countdown States
  const [timeLeft, setTimeLeft] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // Bundle cross-sell states
  const [bundleProduct, setBundleProduct] = useState(null);
  const [includeBundle, setIncludeBundle] = useState(true);

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

  // Save to recently viewed history list
  useEffect(() => {
    if (product && product._id) {
      try {
        const viewedStr = localStorage.getItem("recentlyViewedProducts") || "[]";
        let viewed = JSON.parse(viewedStr);
        // Remove current if duplicate
        viewed = viewed.filter((item) => item._id !== product._id);
        // Prepend current product
        viewed.unshift({
          _id: product._id,
          title: product.title,
          slug: product.slug,
          image: product.image,
          prices: product.prices,
          unit: product.unit,
          stock: product.stock,
        });
        // Slice to max 6 history items
        localStorage.setItem("recentlyViewedProducts", JSON.stringify(viewed.slice(0, 6)));
      } catch (err) {
        console.error("Failed to update recently viewed history:", err);
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
      setStock(0);
    }
  }, [selectVariant, variantTitle, product]);

  // Calculate dynamic delivery date and cutoff timer
  useEffect(() => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const date = new Date();
    date.setDate(date.getDate() + 2); // Standard 2-day promise
    setDeliveryDate(date.toLocaleDateString('en-US', options));

    const interval = setInterval(() => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(18, 0, 0, 0); // 6:00 PM shipping cutoff daily

      let diff = cutoff - now;
      if (diff < 0) {
        cutoff.setDate(cutoff.getDate() + 1);
        diff = cutoff - now;
      }

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hrs}h ${mins}m ${secs}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Set Frequently Bought Together item
  useEffect(() => {
    if (related?.results && related.results.length > 0) {
      setBundleProduct(related.results[0]);
    }
  }, [related]);

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

  const handleAddBundleToCart = () => {
    if (stock <= 0) {
      notifyerror("Main item is out of stock!");
      return;
    }

    // Add main item
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

    // Add bundle item if selected
    if (includeBundle && bundleProduct) {
      const bundleCartProduct = {
        ...bundleProduct,
        id: bundleProduct._id,
        prices: {
          price: Number(bundleProduct.prices?.price || 0),
          originalPrice: Number(bundleProduct.prices?.originalPrice || 0),
          discount: Number(bundleProduct.prices?.discount || 0),
        }
      };
      dispatch(addByIncrement({ product: bundleCartProduct, cartQuantity: 1 }));
      notifySuccess(`Bundle Added: ${product.title} + ${bundleProduct.title}!`);
    } else {
      notifySuccess(`${cartItemTitle} is Successfully Added!`);
    }
  };

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
          <div className="w-full rounded-2xl p-4 lg:p-10 bg-card border border-border/40 shadow-sm transition-all duration-200 mb-8">
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
                      <span className="text-3xl font-extrabold text-foreground">₹{Number(price).toFixed(2)}</span>
                      {originalPrice && originalPrice !== price && (
                        <del className="text-lg font-normal text-muted-foreground/60">₹{Number(originalPrice).toFixed(2)}</del>
                      )}
                    </div>

                    {/* Stock Status & Low stock warnings */}
                    <div>
                      {stock > 0 ? (
                        <div className="space-y-1.5">
                          <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                            In Stock ({stock} available)
                          </span>
                          {stock < 15 && (
                            <p className="text-xs font-bold text-red-500 animate-pulse flex items-center gap-1">
                              ⚠️ Hurry! Only {stock} items left in stock.
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold">
                          Stock Out
                        </span>
                      )}
                    </div>

                    {/* Dynamic Delivery estimate countdown */}
                    {stock > 0 && deliveryDate && timeLeft && (
                      <div className="bg-muted/30 border border-border/40 rounded-xl p-3 flex items-center gap-3">
                        <span className="text-xl">🚚</span>
                        <div className="text-xs">
                          <p className="text-foreground font-semibold">
                            Get it by <span className="text-primary font-bold">{deliveryDate}</span>
                          </p>
                          <p className="text-[10px] mt-0.5 text-muted-foreground">
                            Order in the next <span className="font-mono font-bold text-foreground bg-muted/60 px-1 py-0.5 rounded">{timeLeft}</span>
                          </p>
                        </div>
                      </div>
                    )}

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
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                      {/* Counter */}
                      <div className="flex items-center border border-border bg-muted/20 rounded-lg overflow-hidden h-12 justify-between w-full sm:w-32">
                        <button
                          type="button"
                          onClick={() => setTotal(total - 1)}
                          disabled={total <= 1}
                          className="px-3 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-opacity"
                        >
                          <IoRemoveOutline className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center text-sm font-bold select-none text-foreground">{total}</span>
                        <button
                          type="button"
                          disabled={stock === 0}
                          onClick={() => setTotal(total + 1)}
                          className="px-3 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-opacity"
                        >
                          <IoAddOutline className="w-4 h-4" />
                        </button>
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-3 flex-1 w-full">
                        <button
                          disabled={stock === 0}
                          onClick={handleAddToCart}
                          className="flex-1 h-12 bg-muted hover:bg-muted/80 text-foreground border border-border/80 transition-all font-bold rounded-lg shadow-sm active:scale-[0.98] text-sm flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add To Cart
                        </button>

                        <button
                          disabled={stock === 0}
                          onClick={handleBuyNow}
                          className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/95 transition-all font-bold rounded-lg shadow-md active:scale-[0.98] text-sm flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Buy Now
                        </button>

                        {/* Wishlist Button */}
                        <button
                          type="button"
                          onClick={handleToggleWishlist}
                          className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-all shadow-sm active:scale-95 flex-shrink-0 ${
                            isWishlisted
                              ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-500 hover:text-red-650"
                              : "bg-muted border-border hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                          }`}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          {isWishlisted ? (
                            <IoHeart className="w-5 h-5 fill-red-500 text-red-500" />
                          ) : (
                            <IoHeartOutline className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Trust Seals Checkout Logos */}
                    {stock > 0 && (
                      <div className="pt-4 border-t border-border/40 space-y-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                          Guaranteed Safe & Secure Checkout
                        </span>
                        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-muted-foreground">
                          <span className="bg-muted/40 px-2.5 py-1 rounded border border-border/30 text-foreground/80">RuPay</span>
                          <span className="bg-muted/40 px-2.5 py-1 rounded border border-border/30 text-foreground/80">UPI</span>
                          <span className="bg-muted/40 px-2.5 py-1 rounded border border-border/30 text-foreground/80">VISA</span>
                          <span className="bg-muted/40 px-2.5 py-1 rounded border border-border/30 text-foreground/80">MC</span>
                          <span className="bg-muted/40 px-2.5 py-1 rounded border border-border/30 text-foreground/80">NetBanking</span>
                        </div>
                      </div>
                    )}

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

          {/* Frequently Bought Together Bundle Upsell widget */}
          {stock > 0 && bundleProduct && (
            <div className="w-full rounded-2xl bg-card border border-border/40 shadow-sm p-5 lg:p-8 mb-8">
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Frequently Bought Together</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                
                {/* Visual Connection */}
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 bg-white border border-border/40 rounded-xl p-2 flex items-center justify-center shadow-sm">
                      <Image fill className="object-contain p-1" src={activeImage || product.image?.[0] || 'https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png'} alt={product.title} sizes="80px" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground max-w-[100px] truncate text-center mt-1.5">{product.title}</span>
                  </div>
                  <span className="text-xl font-bold text-muted-foreground">+</span>
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 bg-white border border-border/40 rounded-xl p-2 flex items-center justify-center shadow-sm">
                      <Image fill className="object-contain p-1" src={bundleProduct.image?.[0] || 'https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png'} alt={bundleProduct.title} sizes="80px" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground max-w-[100px] truncate text-center mt-1.5">{bundleProduct.title}</span>
                  </div>
                </div>

                {/* Bundle math & purchase CTA */}
                <div className="flex-1 md:border-l border-border/30 md:pl-6 space-y-3 w-full">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <label className="flex items-center cursor-pointer select-none text-muted-foreground font-semibold">
                      <input
                        type="checkbox"
                        checked={includeBundle}
                        onChange={(e) => setIncludeBundle(e.target.checked)}
                        className="h-4 w-4 rounded border-border bg-transparent text-primary focus:ring-primary/20 mr-2.5"
                      />
                      Add Bundle item: <span className="font-bold text-foreground ml-1">{bundleProduct.title}</span>
                    </label>
                    <span className="font-bold text-foreground">₹{Number(bundleProduct.prices?.price || 0).toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/30 pt-3">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wide">Bundle Price:</span>
                      <p className="text-lg font-black text-foreground">
                        ₹{(price + (includeBundle ? Number(bundleProduct.prices?.price || 0) : 0)).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={handleAddBundleToCart}
                      className="bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-bold py-2.5 px-5 rounded-lg transition active:scale-95 shadow-sm"
                    >
                      Add Both to Cart
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

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
                      <p className="text-sm font-semibold text-primary">Free shipping threshold is only ₹500.00!</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Easy Returns & Exchanges</h4>
                      <p className="text-sm">We offer a 7-day money-back guarantee if you are not fully satisfied. Simply ensure the packaging is intact and contact our support desk for return labels.</p>
                      <p className="text-sm">Need help? Email us at <a href="mailto:support@ecommerce.com" className="text-primary hover:underline">support@ecommerce.com</a> for prompt support.</p>
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
          <span className="text-lg font-black text-primary">₹{(Number(price) * total).toFixed(2)}</span>
        </div>
        <div className="flex items-center space-x-2 flex-1 justify-end max-w-[260px]">
          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
              isWishlisted
                ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-500"
                : "bg-muted border-border text-muted-foreground"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? <IoHeart className="w-5 h-5 fill-red-500" /> : <IoHeartOutline className="w-5 h-5" />}
          </button>

          <button
            disabled={stock === 0}
            onClick={handleBuyNow}
            className="h-10 px-4 bg-primary text-primary-foreground font-bold rounded-lg text-xs hover:bg-primary/90 active:scale-95 transition-all disabled:bg-muted disabled:text-muted-foreground flex-grow"
          >
            {stock === 0 ? "Out of Stock" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
