// import { orders } from "@/assets/mock/moreData";
// import { ArrowForward, ArrowRight, Close } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Paper,
//   Stack,
//   TextField,
//   Typography,
//   colors,
// } from "@mui/material";
// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

// import moment from "moment/moment";
// import { useRouter } from "next/router";
// import { useDispatch, useSelector } from "react-redux";
// import EnhancedTable from "../elements/Table";
// import { CartAddItems } from "../global/products/Cart";
// import { removeFromWishlist } from "@/store/cartReducer";
// const TableItem = ({ wishlist }) => {
//   const dispatch = useDispatch();

//   const currData = wishlist.result.products



// // try {
// //   currData.map((element) => {
// //     //console.log(element);
// //     element["remove"] = (
// //       <IconButton
// //         className="border border-gray-400 rounded-full w-10 h-10"
// //         onClick={() => dispatch(removeFromWishlist(element._id))}
// //       >
// //         <Close />
// //       </IconButton>
// //     );
// //     element["action"] = <CartAddItems product={element} />;
// //   });
// // } catch (error) {

// //   //console.log(error);
// // }
//   // const action = (
//   //   <>
//   //     <CartAddItems />
//   //     <IconButton>
//   //       <Close />
//   //     </IconButton>
//   //   </>
//   // );

//   const headCells = [

//     {
//       id: "title",
//       numeric: true,
//       disablePadding: true,
//       label: "Product Name",
//     },
//     {
//       id: "salePrice",
//       numeric: true,
//       disablePadding: false,
//       label: "Unit Price",
//     },
//     {
//       id: "isAvailable",
//       numeric: true,
//       disablePadding: false,
//       label: "Stock Status",
//       Boolean:true
//     },
//     {
//       id: "remove",
//       numeric: true,
//       disablePadding: false,
//       label: "Rating",
//     },
//     {
//       id: "action",
//       numeric: true,
//       disablePadding: false,
//       label: "",
//     },
//   ];

//   return (
//     <Box width={"100%"}>
//       <Box sx={{ flexGrow: 1, width: "100%" }}>
//         {wishlist.result.products !== 0 ? (
//           <Grid
//             container
//             item
//             gap={"10px"}
//             justifyContent="flex-start"
//             p="0"
//             width="100%"
//             m="0"
//             columns={12.8}
//           >
//             <EnhancedTable rows={wishlist.result.products} headCells={headCells} />
//           </Grid>
//         ) : (
//           <Grid
//             container

//             item
//             gap={"10px"}
//             justifyContent="center"
//             p="0"
//             width="100%"
//             m="0"
//             columns={12.8}
//           >
//             <div className="h-64 shadow w-full flex items-center justify-center font-medium text-xl">

//               No Item Has been add to Wishlist
//             </div>
//           </Grid>
//         )}

//       </Box>
//     </Box>
//   );
// };

// export default TableItem;

// const OrderItem = ({ data }) => {
//   const router = useRouter();
//   // //console.log(data);

//   const StyleColor = {
//     backgroundColor:
//       data.status === "Delivered"
//         ? colors.green[50]
//         : (colors.red[100] && data.status === "Processing") ||
//           data.status === "Pending"
//           ? colors.grey[200]
//           : colors.red[100],
//     color:
//       data.status === "Delivered"
//         ? colors.green[600]
//         : (colors.red[600] && data.status === "Processing") ||
//           data.status === "Pending"
//           ? colors.grey[600]
//           : colors.red[600],
//     padding: "2px 10px",
//     borderRadius: 20,
//   };

//   return (
//     <Paper
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: 2,
//         width: "100%",

//         py: 1,
//         px: 2,
//       }}
//     >
//       <Typography variant="body2" sx={{ flex: 1 }}>
//         {data.id.substr(0, 8)}
//       </Typography>
//       <Stack
//         sx={{ flex: 1 }}
//         direction={"row"}
//         justifyContent={"flex-start"}
//         gap={1}
//       >
//         <Typography variant="body2" style={StyleColor}>
//           {data.status}
//         </Typography>
//       </Stack>

//       <Typography variant="body2" sx={{ flex: 1 }}>
//         {moment(data.createdAt).format("MMM Do, YYYY")}
//       </Typography>
//       <Typography sx={{ flex: 0.5 }} variant="body2">
//         ${data.totalPrice.toFixed(2)}
//       </Typography>
//       <Stack
//         sx={{ flex: 0.5 }}
//         direction={"row"}
//         justifyContent={"flex-end"}
//         gap={0.5}
//       >
//         <IconButton onClick={() => router.push(`/order/${data.id}`)}>
//           <ArrowForward />
//         </IconButton>
//       </Stack>
//     </Paper>
//   );
// };

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }



import { orders } from "@/assets/mock/moreData";
import { useAuthContext } from "@/context/AuthContext";
import { get, post } from "@/lib/network/http";
import { useAxios } from "@/lib/network/interceptors";
import { ArrowForward, ArrowRight, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import moment from "moment/moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CartAddItems } from "../global/products/Cart";
import { removeFromWishlist } from "@/store/cartReducer";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { notifySuccess } from "@/lib/notify/notification";
import { useGlobalContext } from "@/context/globalContext";
const WishlistItems = ({ data }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [address, setAddress] = useState(undefined);
  const [axios, spinner] = useAxios();
  const dispatch = useDispatch();

  // const fetchAddress = async (params) => {
  //   const query = {
  //     filter: JSON.stringify({
  //       user: user.user?.id,
  //     }),
  //     page: page,
  //     limit: limit,
  //     sort: undefined,
  //   };

  //   const data = await get(`/orders/user/${user.user.id}`, query);
  //   //console.log(data);
  //   setAddress(data);
  // };

  // useEffect(() => {
  //   fetchAddress();
  // }, [limit, page]);

  const HeadingArray = ["", "Item", "Price", "Stock", "Cart"]

  return (
    <Box width={"100%"}>
      {data.data.result.products.length != 0 ? <> <Stack
        direction={"row"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          fontSize: "16px !important",
          py: 1,
          px: 2,
        }}
      >
        {HeadingArray.map((item, index) => (
          <div key={index} className={`w-full text-start ${item === "" || item === "Price" || item === "Stock" ? "flex-[0.5]" : "flex-1"}`}>
            {item}
          </div>
        ))}

      </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            width: "100%",
            fontSize: 2,
            py: 1,
            px: 2,
          }}
        >
          {data.data.result.products.map((item) => (
            <Items key={item.id} data={item} cartID={data.data.result} />
          ))}
        </Stack></> : <Box
          width={"100%"}
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        Wishlist is Empty
        {/* <Pagination count={10} variant="outlined" /> */}
      </Box>}

    </Box>
  );
};

export default WishlistItems;

const Items = ({ data, cartID }) => {
  const router = useRouter();
  const { getWishlist } = useGlobalContext()
 
  const dispatch = useDispatch();
  // const StyleColor = {
  //   backgroundColor:
  //     data.status === "Delivered"
  //       ? colors.green[50]
  //       : (colors.red[100] && data.status === "Processing") ||
  //         data.status === "Pending"
  //         ? colors.grey[200]
  //         : colors.red[100],
  //   color:
  //     data.status === "Delivered"
  //       ? colors.green[600]
  //       : (colors.red[600] && data.status === "Processing") ||
  //         data.status === "Pending"
  //         ? colors.grey[600]
  //         : colors.red[600],
  //   padding: "2px 10px",
  //   borderRadius: 20,
  // };


  const RemoveWishList = async () => {
    const res = await post(`/wishlists/${cartID._id}/remove`, { product: data._id })
    if (res.status == "OK") {
      dispatch(removeFromWishlist(data._id))
      getWishlist()
      notifySuccess(res.message, 2000)
    }

  }



  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",

        py: 1,
        px: 2,
      }}
      className=" hover:bg-gray-50"
    >
      <Stack
        sx={{ flex: 0.5 }}
        direction={"row"}
        justifyContent={"flex-start"}
        gap={1}
      >
        <IconButton
          className="!border border-red-700 border-solid text-red-700 rounded-full w-10 h-10"
          onClick={RemoveWishList}
        >
          <Close />
        </IconButton>
      </Stack>
      <div className=" flex gap-2 flex-1 items-center">
        <Image src={data?.images[0].url} height={100} width={100} alt={data.title} className="w-20 h-20"></Image>
        <span className="text-sm">{data.title}</span>
      </div>
      <Stack
        sx={{ flex: 0.5 }}
        direction={"row"}
        justifyContent={"flex-start"}
        gap={1}
      >
        <Typography variant="body2">
          ${data.salePrice.toFixed(2)}
        </Typography>
      </Stack>

      <Typography sx={{ flex: 0.5 }} variant="body2">
        {data?.isAvailable ? "InStock" : "Out of Stock"}
      </Typography>

      <Stack
        sx={{ flex: 1 }}
        direction={"row"}
        justifyContent={"flex-end"}
        gap={0.5}
      >
        <CartAddItems product={data} />
        {/* <IconButton onClick={() => router.push(`/my-account/order/${data.id}`)}>
          <ArrowForward />
        </IconButton> */}
      </Stack>
    </Paper>
  );
};
