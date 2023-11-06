import { orders } from "@/assets/mock/moreData";
import { ArrowForward, ArrowRight, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import moment from "moment/moment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import EnhancedTable from "../elements/Table";
import { CartAddItems } from "../global/products/Cart";
import { removeFromWishlist } from "@/store/cartReducer";
const Wishlist = ({ wishlist }) => {
  const dispatch = useDispatch();

  wishlist.forEach((element) => {
    element["remove"] = (
      <IconButton
        className="border border-gray-400 rounded-full w-10 h-10"
        onClick={() => dispatch(removeFromWishlist(element.id))}
      >
        <Close />
      </IconButton>
    );
    element["action"] = <CartAddItems product={element} />;
  });
  // const action = (
  //   <>
  //     <CartAddItems />
  //     <IconButton>
  //       <Close />
  //     </IconButton>
  //   </>
  // );

  const headCells = [
    {
      id: "remove",
      numeric: false,
      disablePadding: true,
      label: "",
    },
    {
      id: "title",
      numeric: true,
      disablePadding: true,
      label: "Product Name",
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "Unit Price",
    },
    {
      id: "stock",
      numeric: true,
      disablePadding: false,
      label: "Stock Status",
    },
    {
      id: "rating",
      numeric: true,
      disablePadding: false,
      label: "Rating",
    },
    {
      id: "action",
      numeric: true,
      disablePadding: false,
      label: "",
    },
  ];

  return (
    <Box width={"100%"}>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        {wishlist.length !== 0 ? (
          <Grid
            container
            item
            gap={"10px"}
            justifyContent="flex-start"
            p="0"
            width="100%"
            m="0"
            columns={12.8}
          >
            {/* {wishlist.map((item) => (
              <Productcard key={item.id} size={4} product={item} />
            ))} */}
          </Grid>
        ) : (
          <Grid
            container
            item
            gap={"10px"}
            justifyContent="center"
            p="0"
            width="100%"
            m="0"
            columns={12.8}
          >
            No product on your wishlist
          </Grid>
        )}
        <EnhancedTable rows={wishlist} headCells={headCells} />
      </Box>
    </Box>
  );
};

export default Wishlist;

const OrderItem = ({ data }) => {
  const router = useRouter();
  // console.log(data);

  const StyleColor = {
    backgroundColor:
      data.status === "Delivered"
        ? colors.green[50]
        : (colors.red[100] && data.status === "Processing") ||
          data.status === "Pending"
        ? colors.grey[200]
        : colors.red[100],
    color:
      data.status === "Delivered"
        ? colors.green[600]
        : (colors.red[600] && data.status === "Processing") ||
          data.status === "Pending"
        ? colors.grey[600]
        : colors.red[600],
    padding: "2px 10px",
    borderRadius: 20,
  };

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
    >
      <Typography variant="body2" sx={{ flex: 1 }}>
        {data.id.substr(0, 8)}
      </Typography>
      <Stack
        sx={{ flex: 1 }}
        direction={"row"}
        justifyContent={"flex-start"}
        gap={1}
      >
        <Typography variant="body2" style={StyleColor}>
          {data.status}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ flex: 1 }}>
        {moment(data.createdAt).format("MMM Do, YYYY")}
      </Typography>
      <Typography sx={{ flex: 0.5 }} variant="body2">
        ${data.totalPrice.toFixed(2)}
      </Typography>
      <Stack
        sx={{ flex: 0.5 }}
        direction={"row"}
        justifyContent={"flex-end"}
        gap={0.5}
      >
        <IconButton onClick={() => router.push(`/order/${data.id}`)}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
