import { orders } from "@/assets/mock/moreData";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
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
import moment from "moment/moment";
import { useRouter } from "next/router";
const Orderlist = () => {
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
          fontSize: '16px !important',
          py: 1,
          px: 4,
          
        }}
      >
        <Typography variant="body2" sx={{ flex: 1 }}>Order #</Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>Status</Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>Date purchased</Typography>
        <Typography variant="body2" sx={{ flex: 0.5 }}>Total</Typography>
        <Typography variant="body2" sx={{ flex: 0.5,textAlign:"end" }}>Action</Typography>
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
        <IconButton
         
          onClick={() => router.push(`/order/${data.id}`)}
        >
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
  );
};
