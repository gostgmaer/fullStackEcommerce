import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Pricesumery = () => {

  const cartData = useSelector((state) => state["data"].cartItems);

  console.log(cartData);


  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Subtotal:</Typography>
          <Typography variant="body2">$</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Shipping:</Typography>
          <Typography variant="body2">$90.00</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Tax:</Typography>
          <Typography variant="body2">$40.00</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Discount:</Typography>
          <Typography variant="body2">$14.99</Typography>
        </Stack>
      </Box>
      <Divider sx={{ my: 2 }}></Divider>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mt: 2, mb: 1 }}
      >
        <Typography variant="body2">Total:</Typography>
        <Typography variant="body2">$14.99</Typography>
      </Stack>
    </Paper>
  );
};

export default Pricesumery;
