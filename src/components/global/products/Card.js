// import React from 'react';
// import Link from 'next/link';
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from '@mui/material';

// const PCard = ({ product }) => {
//   return (
//     <Card className="max-w-sm shadow-md">
//       <Link href={`/products/${product.id}`}>
//       <CardActionArea>
//             <CardMedia
//               component="img"
//               alt={product.title}
//               height="200"
//               image={product.image}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {product.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {product.description}
//               </Typography>
//               <Typography variant="h6" color="textPrimary">
//                 ${product.price}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//       </Link>
//       <Button variant="contained" color="primary">
//         Add to Cart
//       </Button>
//     </Card>
//   );
// };

// export default PCard;

import { Item } from "@/components/elements/Item";
import { Add, Favorite, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
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
const PCard = ({ product, size }) => {
  const [openModal, setOpenModal] = useState(false);

  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const dispatch = useDispatch();

  return (
    <Grid
      item
      className=" [&_.MuiPaper-rounded]:border"
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
                <a
                  href="https://flatsome3.uxthemes.com/shop/men/t-shirts/ss-crew-california-sub-river-island/"
                  aria-label="SS Crew California Sub River Island"
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
                </a>
                <IconButton
                  data-label={"Add to Wishlist"}
                  className="show-on-hover absolute border rounded-full top-5 right-5 h-10 w-10 flex items-center hover:text-red-600"
                  title={"Add to Wishlist"}
                  aria-label={"Add to Wishlist"}
                  onClick={() =>
                    dispatch(
                      addToWishlist({
                        id: product.id,
                        slug: product.slug,
                        title: product.title,
                        brand: product.brand,
                        price: product.price,
                        size: product.size,
                        colors: product.colors,
                        discount: product.discount,
                        thumbnail: product.thumbnail,
                        images: product.images,
                        categories: product.categories,
                        status: product.status,
                        reviews: product.reviews,
                        for: product?.for,
                      })
                    )
                  }
                >
                  <Favorite className="" />
                </IconButton>
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
                <p className="category text-xs uppercase is-smaller no-text-overflow product-cat p-1 cursor-pointer">
                  Men
                </p>
                <a
                  href="https://flatsome3.uxthemes.com/shop/men/t-shirts/ss-crew-california-sub-river-island/"
                  className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                >
                  SS Crew California Sub River Island
                </a>
              </div>
              <div className="price-wrapper">
                <span className="price font-medium">
                  <span>$</span> <span> 19,00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Item>
      <MuiModal
        heading={undefined}
        Content={<ProductDetails data={product} />}
        classes={undefined}
        maxWidth={""}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></MuiModal>
    </Grid>
  );
};

export default PCard;

const ProductDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="product-content flex overflow-hidden gap-5">
      <div className="product-gallery large-6 col flex-1">
        <img
          src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
          data-src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-494x593.jpeg"
          className="w-auto h-auto lazy-load-active"
          alt=""
          decoding="async"
        />
      </div>
      <div className="product-info summary large-6 col entry-summary flex-1 p-5 overflow-hidden">
        <div className="product-lightbox-inner overflow-hidden">
          <a
            className="plain"
            href="https://flatsome3.uxthemes.com/shop/clothing/happy-ninja/"
          >
            <p className=" text-2xl">Happy Ninja</p>
          </a>
          <div className="border-t border-gray-300 my-4 w-5 border-2"></div>
          <div className="price-wrapper">
            <span className="price font-medium">
              <span>$</span> <span> 19,00</span>
            </span>
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
            <CartAddItems />
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

const CartAddItems = ({}) => {
  return (
    <Box className="flex items-center">
      <Stack
        flex={0.5}
        direction={"row"}
        alignItems={"center"}
        className="flex py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
        sx={{
          "&>.MuiButton-outlined": {
            p: 0,
            minHeight: 0,
            minWidth: 0,
            textTransform: "capitalize",
          },
        }}
      >
        <TextField
          type="button"
          value={"-"}
          className="h-10 w-10 cursor-pointer "
        />
        <TextField
          type="text"
          value={5}
          className="h-10 w-12 text-center [&_.MuiInputBase-input]:cursor-auto "
        />
        <TextField
          type="button"
          value={"+"}
          className="h-10 w-10 cursor-pointer "
        />
      </Stack>
      <Button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 h-10 px-4 rounded">
        Add to Cart
      </Button>
    </Box>
  );
};
