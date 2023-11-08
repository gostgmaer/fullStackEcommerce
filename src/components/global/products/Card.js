import { Item } from "@/components/elements/Item";
import { Add, Favorite, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "@/store/cartReducer";
import { useGlobalContext } from "@/context/globalContext";
import MuiModal from "@/layout/modal";
import Link from "next/link";
import { CartAddItems } from "./Cart";
const PCard = ({ product, size }) => {
  const [openModal, setOpenModal] = useState(false);
console.log(product);
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const dispatch = useDispatch();

  return (
    <Grid
      item
      className=" [&_.MuiPaper-rounded]:border p-1"
      xs={size ? size : 12}
      sx={{
        "& .MuiPaper-rounded": {
          boxShadow: "none",
        },
      }}
    >
      <Item>
        <div className="product-small bg-gray-50 col has-hover product type-product post-432 status-publish last instock product_cat-men product_cat-t-shirts product_tag-man product_tag-river-island product_tag-t-shirt has-post-thumbnail featured shipping-taxable purchasable product-type-simple is-selected">
          <div className="col-inner">
            <div className="badge-container absolute left top z-1"></div>
            <div className="product-small box ">
              <div className="image-fade_in_back [&_.show-on-hover]:hover:flex [&_.show-on-hover]:hidden relative">
                <Link
                  href={`/product/${product.slug}`}
                  aria-label={product?.title}
                >
                  <img
                    width="494"
                    height="593"
                    src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
                    data-src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                    alt=""
                    decoding="async"
                  />
                </Link>
                <div className="show-on-hover absolute top-3 right-3 rounded-full border-2">
                  {wishlist?.find((item) => item.id === product.id)?.id !==
                  product.id ? (
                    <IconButton
                      data-label={"Add to Wishlist"}
                      className=" border rounded-full h-10 w-10 flex items-center "
                      title={"Add to Wishlist"}
                      aria-label={"Add to Wishlist"}
                      onClick={() => dispatch(addToWishlist(product))}
                    >
                      <Favorite className="" />
                    </IconButton>
                  ) : (
                    <IconButton
                      color="error"
                      onClick={() => dispatch(removeFromWishlist(product.id))}
                    >
                      <Favorite />
                    </IconButton>
                  )}
                </div>
                <div>
                  {product?.discount && (
                    <Typography
                      className=" text-green-500  absolute top-3 left-3"
                      sx={{
                        p: "5px 10px",
                        borderRadius: 5,
                      }}
                      gutterBottom
                      variant="body2"
                    >
                      -
                      {product?.discount &&
                        ((100 / product?.price) * product?.discount).toFixed(2)}
                      %
                    </Typography>
                  )}
                </div>

                <span className=" gap-1 flex flex-col text-blck h-8  w-max px-5 absolute bottom-[50%]  grid-tools  hide-for-small bottom ">
                  <span className="p-2 rounded-full text-white bg-green-600 w-max">
                    Sale!
                  </span>
                  <span className="p-2 rounded-full text-white bg-orange-500 w-max">
                    New
                  </span>
                </span>

                <div
                  onClick={() => setOpenModal(true)}
                  className="image-tools cursor-pointer justify-center bg-gray-700 opacity-95 text-white h-8 items-center w-full absolute bottom-0 text-center grid-tools  hide-for-small bottom hover-slide-in show-on-hover"
                >
                  Quick View
                </div>
              </div>
            </div>
            <div className="box-text box-text-products px-5 py-1">
              <div className="title-wrapper">
                <p className="category text-xs font-semibold uppercase is-smaller no-text-overflow product-cat p-1 cursor-pointer">
                  Men
                </p>
                <Link href={`/product/${product?.slug}`}>
                  {product?.title
                    ? product?.title
                    : " This is a product? Title"}
                </Link>
              </div>
              <div className="price-wrapper">
                <p className="price font-semibold text-red-500 flex gap-3 items-end">
                  <span className=" text-lg flex  items-end">
                    $
                    <span className=" ">
                      {product?.salePrice
                        ? product?.price.toFixed(2) -
                          product?.salePrice.toFixed(2)
                        : product?.price.toFixed(2)
                        ? product?.price.toFixed(2)
                        : product?.price.toFixed(2)}
                    </span>
                  </span>

                  <span className=" line-through text-gray-500 ">
                    ${product?.price ? product?.price.toFixed(2) : "$0.00"}
                  </span>
                  {product?.salePrice && (
                    <span className=" text-green-500 top-3 left-3">
                      {product?.salePrice &&
                        ((100 / product?.price) * product?.salePrice).toFixed(
                          2
                        )}
                      % off
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Item>
      <MuiModal
        heading={undefined}
        Content={<ProductDetails product={product} />}
        classes={undefined}
        maxWidth={""}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></MuiModal>
    </Grid>
  );
};

export default PCard;

const ProductDetails = ({ product }) => {
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const dispatch = useDispatch();

  return (
    <div className="product-content flex overflow-hidden gap-5">
      <div className="product-gallery large-6 col flex-1 relative">
        <img
          src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
          data-src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
          className="w-auto h-auto lazy-load-active"
          alt=""
          decoding="async"
        />
        <div className="show-on-hover absolute top-3 right-3 rounded-full border-2">
          {wishlist?.find((item) => item.id?item.id:item._id === product.id?product.id:product._id)?.id !==
            product.id?product.id:product._id ? (
            <IconButton
              data-label={"Add to Wishlist"}
              className=" border rounded-full h-10 w-10 flex items-center "
              title={"Add to Wishlist"}
              aria-label={"Add to Wishlist"}
              onClick={() => dispatch(addToWishlist(product))}
            >
              <Favorite className="" />
            </IconButton>
          ) : (
            <IconButton
              color="error"
              onClick={() => dispatch(removeFromWishlist(product.id))}
            >
              <Favorite />
            </IconButton>
          )}
        </div>
        <div>
          {product?.discount && (
            <Typography
              className=" text-green-500  absolute top-3 left-3"
              sx={{
                p: "5px 10px",
                borderRadius: 5,
              }}
              gutterBottom
              variant="body2"
            >
              -
              {product?.discount &&
                ((100 / product?.price) * product?.discount).toFixed(2)}
              %
            </Typography>
          )}
        </div>

        <div className=" gap-1 flex flex-col text-blck h-8  w-full px-5 absolute bottom-[50%]  grid-tools  hide-for-small bottom ">
          <span className="p-2 rounded-full text-white bg-green-600 w-max">
            Sale!
          </span>
          <span className="p-2 rounded-full text-white bg-orange-500 w-max">
            New
          </span>
        </div>
      </div>
      <div className="product-info summary large-6 col entry-summary flex-1 p-5 overflow-hidden">
        <div className="product-lightbox-inner overflow-hidden">
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <p></p>
          <Link href={`/product/${product.slug}`}>
            {product?.title ? product?.title : " This is a product? Title"}
          </Link>
          <div className="border-t border-gray-300 my-4 w-5 border-2"></div>
          <div className="price-wrapper">
            <p className="price font-semibold text-red-500 flex gap-3 items-end">
              <span className=" text-lg flex  items-end">
                $
                <span className=" ">
                  {product?.discount
                    ? product?.price.toFixed(2) - product?.discount.toFixed(2)
                    : product?.price.toFixed(2)
                    ? product?.price.toFixed(2)
                    : product?.price.toFixed(2)}
                </span>
              </span>

              <span className=" line-through text-gray-500 ">
                ${product?.price ? product?.price.toFixed(2) : "$0.00"}
              </span>
              {product?.discount && (
                <span className=" text-green-500 top-3 left-3">
                  {product?.discount &&
                    ((100 / product?.price) * product?.discount).toFixed(2)}
                  % off
                </span>
              )}
            </p>
          </div>
          <div className="product-short-description">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
          <form
            className="cart"
            action=""
            method="post"
            encType="multipart/form-data"
          >
            <CartAddItems product={product} />
          </form>

          <div className="border-t border-gray-300 my-4 "></div>

          <div className="product_meta font-semibold">
            <span className="posted_in">
              Category:{" "}
              <a
                href="https://flatsome3.uxthemes.com/product-category/clothing/"
                rel="tag"
              >
                Clothing
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
