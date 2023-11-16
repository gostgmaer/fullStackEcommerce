/* eslint-disable react-hooks/exhaustive-deps */
import Wishlist from "@/components/Usermodule/Wishlist";
import {
  AddToCartSingle,
  CartAddItems,
} from "@/components/global/products/Cart";
import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { removeFromWishlist } from "@/store/cartReducer";
import { appBaseUrl } from "@/utils/config";
import { Close, Favorite } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const wishlist = useSelector((state) => state["data"].wishList);
  console.log(wishlist);
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
          >
            <Favorite color="error" />
            <span>My Wishlist</span>
          </Typography>
        </Stack>
        <WishListTable />
      </Box>
    </Userlayout>
  );
};

const WishListTable = (second) => {
  const wishlist = useSelector((state) => state["data"].wishList);
  const cartData = useSelector((state) => state["data"].cartItems);

  const dispatch = useDispatch();

  console.log(wishlist);
  return (
    <TableContainer component={Paper}>
      {wishlist.length != 0 ? (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="left">Unit Price</TableCell>
              <TableCell align="left">Stock Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlist.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <IconButton
                    onClick={() => dispatch(removeFromWishlist(row._id))}
                    color="error"
                  >
                    <Close></Close>
                  </IconButton>
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">
                  {" "}
                  <div className="price-wrapper">
                <p className="price font-semibold text-red-500 flex gap-3 items-end">
                  <span className=" text-sm flex  items-end">
                    $
                    <span className=" ">
                      {row?.salePrice
                        ? row?.salePrice.toFixed(2)
                        : row?.price.toFixed(2)}
                    </span>
                  </span>

                  <span className=" line-through text-gray-500 ">
                    ${row?.price ? row?.price.toFixed(2) : "$0.00"}
                  </span>
                  {row?.salePrice && (
                    <span className=" text-green-500 top-3 left-3">
                      {row?.salePrice &&
                        ((100 / row?.price) * row?.salePrice).toFixed(
                          2
                        )}
                      % off
                    </span>
                  )}
                </p>
              </div>
                </TableCell>

                <TableCell align="right">{"Avaliable"}</TableCell>
                <TableCell align="left">
                  <AddToCartSingle product={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="h-40 flex items-center justify-center font-medium text-xl"> No Item Has been add to Wishlist</div>
      )}
    </TableContainer>
  );
};

export default Index;

// export const getServerSideProps = async (ctx) => {

//   return {
//     redirect: {
//       destination: `/auth/signin?callbackUrl=${appBaseUrl}${ctx.resolvedUrl}`,
//       parmanent: false,
//     },
//   };

// };
