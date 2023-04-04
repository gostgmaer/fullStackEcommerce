import { ClassNames } from "@emotion/react";
import {
  CreditCard,
  Favorite,
  FavoriteOutlined,
  LocationCity,
  Person,
  ShoppingBagOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Left = () => {
  console.log(ClassNames);
  const router = useRouter();
  return (
    <Box>
      <Paper>
        <Stack>
          <Typography textTransform={"capitalize"} variant="h6">
            Dashboard
          </Typography>
          <Stack gap={1}>
            <Link
              href="/order"
              className={router.pathname === "/order" ? "red" : ""}
              style={{ color: router.pathname === "/order" ? "red" : "" }}
            >
              <Typography>
                <ShoppingBagOutlined />{" "}
                <Typography variant="body2">Order</Typography>
              </Typography>
              <Typography variant="body2">12</Typography>
            </Link>
            <Link
              href={"/wishlist"}
              style={{ color: router.pathname === "/wishlist" ? "red" : "" }}
              className={router.pathname === "/order" ? "red" : ""}
            >
              <Typography>
                <FavoriteOutlined />{" "}
                <Typography variant="body2">Wishlist</Typography>
              </Typography>
              <Typography variant="body2">12</Typography>
            </Link>
            <Box>
              <Typography>
                <SupervisedUserCircle />{" "}
                <Typography variant="body2">Support Ticket</Typography>
              </Typography>
              <Typography variant="body2">1</Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Typography textTransform={"capitalize"} variant="h6">
            ACCOUNT SETTINGS
          </Typography>
          <Stack gap={1}>
            <Box>
              <Typography>
                <Person /> <Typography variant="body2">Profile Info</Typography>
              </Typography>
              <Typography variant="body2">5</Typography>
            </Box>
            <Box>
              <Typography>
                <LocationCity />{" "}
                <Typography variant="body2">Addresses</Typography>
              </Typography>
              <Typography variant="body2">2</Typography>
            </Box>
            <Box>
              <Typography>
                <CreditCard />{" "}
                <Typography variant="body2">Payment Methods</Typography>
              </Typography>
              <Typography variant="body2">1</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Left;
