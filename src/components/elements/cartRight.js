import { countries, states } from "@/assets/mock/staticData";
import { sumWithInitial } from "@/lib/sevice";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CartRight = () => {
  const cartData = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const router = useRouter();

  return (
    <Paper sx={{ px: 2.5, py: 3 }}>
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="body2">Total:</Typography>
          <Typography variant="body2">{`$ ${sumWithInitial(cartData).toFixed(
            2
          )}`}</Typography>
        </Stack>
        <Divider sx={{ my: 2, color: colors.grey[100] }} />
        {/* <Stack
          direction={"row"}
          gap={2}
          sx={{ mt: 1, mb: 2 }}
          alignItems={"center"}
        >
          <Typography variant="subtitle1">Additional Comments</Typography>
          <Typography
            variant="body2"
            sx={{
              padding: "2px 5px",
              bgcolor: colors.red[100],
              color: colors.red[400],
            }}
          >
            Note
          </Typography>
        </Stack> */}
        {/* <TextField
          fullWidth
          variant="outlined"
          style={{ borderColor: "Background" }}
          minRows={5}
          multiline
          name="field-addition-note"
        ></TextField> */}
        {/* <Divider sx={{ my: 2, color: colors.grey[100] }} /> */}
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          style={{ borderColor: "Background" }}
          label="Voucher"
          placeholder="Voucher"
          name="field-addition-note"
        ></TextField>
        <Button
          sx={{ mt: 2, mb: 4 }}
          fullWidth
          variant="outlined"
          color="error"
        >
          Apply Voucher
        </Button>
        <Divider sx={{ my: 2, color: colors.grey[50] }} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Typography variant="body2">Shiping Estimation:</Typography>
          <Typography variant="body2">$10.00</Typography>
        </Stack>
        
        {/* <Button
          sx={{ mt: 4, mb: 0.8 }}
          fullWidth
          variant="outlined"
          color="error"
        >
          Calculate Shipiing
        </Button> */}
        {cartData.length !== 0 && (
          <Button
            sx={{ mt: 0.8, mb: 2 }}
            fullWidth
            variant="contained"
            color="error"
            className="bg-red-500"
            onClick={() => router.push("/checkout")}
          >
            Checkout Now
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default CartRight;
