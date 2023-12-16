import { orders } from "@/assets/mock/moreData";
import { useAuthContext } from "@/context/AuthContext";
import { get } from "@/lib/network/http";
import { useAxios } from "@/lib/network/interceptors";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
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
const Orderlist = () => {
  const { userId } = useAuthContext();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [address, setAddress] = useState(undefined);
  const [axios, spinner] = useAxios();
  const fetchAddress = async (params) => {
    const query = {
      filter: JSON.stringify({
        user: userId?.user_id,
      }),
      page: page,
      limit: limit,
      sort: undefined,
    };

    const data = await get(`/orders/user/${userId.user_id}`, query);
    console.log(data);
    setAddress(data);
  };

  useEffect(() => {
    fetchAddress();
  }, [limit, page]);


  return (
    <Box width={"100%"}>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          fontSize: "16px !important",
          py: 1,
          px: 4,
        }}
      >
        <Typography variant="body2" sx={{ flex: 1 }}>
          Order #
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Status
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Date purchased
        </Typography>
        <Typography variant="body2" sx={{ flex: 0.5 }}>
          Total
        </Typography>
        <Typography variant="body2" sx={{ flex: 0.5, textAlign: "end" }}>
          Action
        </Typography>
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
        {orders.map((item) => (
          <OrderItem key={item.id} data={item} />
        ))}
      </Stack>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          gap: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination count={10} variant="outlined" />
      </Box>
    </Box>
  );
};

export default Orderlist;

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
        <IconButton onClick={() => router.push(`/my-account/order/${data.id}`)}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
  );
};
