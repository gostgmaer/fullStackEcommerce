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
import { Favorite } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    addToWishlist,
    removeFromWishlist,
  } from "@/store/cartReducer";
const PCard = ({product}) => {

    const cartItem = useSelector((state) => state["data"].cartItems);
    const wishlist = useSelector((state) => state["data"].wishList);
    const dispatch = useDispatch();


  return (
    <Grid
      item
      className="px-2"
      xs={12}
      sx={{
        "& .MuiPaper-rounded:hover": {
          boxShadow: "0px 6px 10px rgba(3, 0, 71, 0.09)",
        },
      }}
    >
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
              <div className="image-tools cursor-pointer justify-center bg-gray-700 opacity-95 text-white h-8 items-center w-full absolute bottom-0 text-center grid-tools  hide-for-small bottom hover-slide-in show-on-hover">
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
    </Grid>
  );
};

export default PCard;
