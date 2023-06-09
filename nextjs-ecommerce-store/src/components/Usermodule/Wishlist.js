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
import { useSelector } from "react-redux";
import Productcard from "../elements/Productcard";
const Wishlist = () => {
  const wishlist = useSelector((state) => state["data"].wishList);
  // console.log(wishlist);
  return (
    <Box width={"100%"}>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
       {wishlist.length!==0? <Grid
          container
          item
          gap={"10px"}
          justifyContent="flex-start"
          p="0"
          width="100%"
          m="0"
          columns={12.8}
        >
          {wishlist.map((item) => (
            <Productcard key={item.id} size={4} product={item} />
          ))}
        </Grid>:
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
        </Grid>}
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
