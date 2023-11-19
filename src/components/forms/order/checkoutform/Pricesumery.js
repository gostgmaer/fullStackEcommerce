import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pricesumery = () => {
  const cartData = useSelector((state) => state["data"].cartItems);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(25);
  const [discount, setDiscount] = useState(45);

  const CalculateTotal = (params) => {
    const subtotal = cartData.reduce((acc, item) => acc + item.subtotal, 0);
    const absulateprice = subtotal + shipping - discount;
    setTotal(absulateprice);
  };

  useEffect(() => {
    CalculateTotal();
  }, [cartData]);

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
          <Typography variant="body2">
            ${" "}
            {cartData.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Shipping:</Typography>
          <Typography variant="body2">${shipping.toFixed(2)}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
          className="hidden"
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
          <Typography variant="body2">${discount.toFixed(2)}</Typography>
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
        <Typography variant="body2">${total.toFixed(2)}</Typography>
      </Stack>
    </Paper>
  );
};

export default Pricesumery;
