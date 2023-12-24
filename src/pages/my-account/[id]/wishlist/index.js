import {
  AddToCartSingle,
  CartAddItems,
} from "@/components/global/products/Cart";
import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { removeFromWishlist } from "@/store/cartReducer";
import { parse } from "cookie";
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
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { serverMethod } from "@/lib/network/http";
import WishlistItems from "@/components/Usermodule/Wishlist";


const Index = (props) => {
  return (
    <Userlayout user={props.session}>
      <Head>
        <title>Ecommerce Wishlist</title>
        <meta property="og:title" content="Ecommerce Wishlist" key="title" />
        <meta name="description" content="Ecommerce wishlist items" />
      </Head>
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
        <WishlistItems data={props} />
        {/* <TableItem wishlist={props.data}/> */}
        {/* <WishListTable data={props.data} /> */}
      </Box>
    </Userlayout>
  );
};

// const WishListTable = ({data}) => {
//   const wishlist = useSelector((state) => state["data"].wishList);
//   //console.log(data);
//   const dispatch = useDispatch();
//   return (
//     <TableContainer component={Paper}>
//       {wishlist.length != 0 ? (
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell align="left">Product Name</TableCell>
//               <TableCell align="left">Unit Price</TableCell>
//               <TableCell align="left">Stock Status</TableCell>
//               <TableCell align="right"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {wishlist.map((row) => (
//               <TableRow
//                 key={row.title}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell align="left">
//                   <IconButton
//                     onClick={() => dispatch(removeFromWishlist(row._id))}
//                     color="error"
//                   >
//                     <Close></Close>
//                   </IconButton>
//                 </TableCell>
//                 <TableCell align="left">
//                   <div className="flex gap-1 items-center">
                 
//                     <Image
//                       src={row["images"][0]["url"]}
//                       width={100}
//                       height={100}
//                       className="w-10 h-10 rounded-full"
//                       alt={row.title}
//                     ></Image>{" "}
//                     {row.title}
//                   </div>
//                 </TableCell>
//                 <TableCell align="left">
//                   {" "}
//                   <div className="price-wrapper">
//                     <p className="price font-semibold text-red-500 flex gap-3 items-end">
//                       <span className=" text-sm flex  items-end">
//                         $
//                         <span className=" ">
//                           {row?.salePrice
//                             ? row?.salePrice.toFixed(2)
//                             : row?.price.toFixed(2)}
//                         </span>
//                       </span>

//                       <span className=" line-through text-gray-500 ">
//                         ${row?.price ? row?.price.toFixed(2) : "$0.00"}
//                       </span>
//                       {row?.salePrice && (
//                         <span className=" text-green-500 top-3 left-3">
//                           {row?.salePrice &&
//                             ((100 / row?.price) * row?.salePrice).toFixed(2)}
//                           % off
//                         </span>
//                       )}
//                     </p>
//                   </div>
//                 </TableCell>

//                 <TableCell align="right">{"Avaliable"}</TableCell>
//                 <TableCell align="left">
//                   <AddToCartSingle product={row} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       ) : (
//         <div className="h-40 flex items-center justify-center font-medium text-xl">
//           {" "}
//           No Item Has been add to Wishlist
//         </div>
//       )}
//     </TableContainer>
//   );
// };

export default Index;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  const cookies = parse(ctx.req.headers.cookie || "");
  const token = cookies["headerPayload"] + "." + cookies["signature"];
  const params = {
    method: "get",
    token: token,
  };
  const data = await serverMethod(`/wishlists/fetch`, params);

  return {
    props: {
      data,session
    },
  };
};
