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

  const prodileUrl = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    color: router.pathname === "/order" ? "red " : "",
  };

  const newArraydata = [
    {
      id: 1,
      text: "Dashboard",
      items: [
        {
          id: 1,
          url: "/order",
          text: "Order",
          icon: <ShoppingBagOutlined />,
          count: 5,
        },
        {
          id: 2,
          url: "/wishlist",
          text: "Wishlist",
          icon: <FavoriteOutlined />,
          count: 3,
        },
      ],
    },
    {
      id: 2,

      text: "Account Settings",
      items: [
        {
          id: 1,
          url: "/profile",
          text: "Profile info",
          icon: <Person />,
          count: 2,
        },
        {
          id: 2,
          url: "/address",
          text: "My Addresses",
          icon: <LocationCity />,
          count: 3,
        }
        
      ],
    },
  ];

  return (
    <Paper
      variant="outlined"
      sx={{ width: "100%", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Box sx={{ py: 3 }}>
        {newArraydata.map((item) => (
          <Stack my={1} key={item.id}>
            <Typography
              textTransform={"capitalize"}
              padding="0 1rem"
              mb={2}
              mt={1}
              variant="h6"
            >
              {item.text}
            </Typography>
            <Stack  gap={2}>
              {item.items.map((link) => (
                <Link
                  href={link.url}
                  className={router.pathname === link.url ? "red" : ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize:'16px',
                    padding: "0 1rem",
                    gap: 1,
                    color: router.pathname === link.url ? "red " : "",
                  }}
                  key={link.id}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    fontSize={"16px"}
                    gap={0.5}
                  >
                    {link.icon}
                    <Typography   fontSize={"16px"} variant="caption">{link.text}</Typography>
                  </Stack>
                  <Typography   fontSize={"16px"} variant="caption">{link.count}</Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        ))}
      </Box>
      {/* <Stack>
        <Typography textTransform={"capitalize"} variant="h6">
          Dashboard
        </Typography>
        <Stack gap={1}>
          <Link
            href="/order"
            className={router.pathname === "/order" ? "red" : ""}
            style={prodileUrl}
          >
            <Stack direction={"row"} alignItems={"center"} fontSize={"14"}>
              <ShoppingBagOutlined />
              <Typography variant="caption">Order</Typography>
            </Stack>
            <Typography variant="caption">12</Typography>
          </Link>
          <Link
            href={"/wishlist"}
            style={{ color: router.pathname === "/wishlist" ? "red" : "" }}
            className={router.pathname === "/wishlist" ? "red" : ""}
          >
            <Typography>
              <FavoriteOutlined />{" "}
              <Typography variant="body2">Wishlist</Typography>
            </Typography>
            <Typography variant="body2">12</Typography>
          </Link>
          <Link
            href={"/support-ticket"}
            style={{
              color: router.pathname === "/support-ticket" ? "red" : "",
            }}
            className={router.pathname === "/support-ticket" ? "red" : ""}
          >
            <Typography>
              <SupervisedUserCircle />{" "}
              <Typography variant="body2">Support Ticket</Typography>
            </Typography>
            <Typography variant="body2">1</Typography>
          </Link>
        </Stack>
      </Stack>
      <Stack>
        <Typography textTransform={"capitalize"} variant="h6">
          ACCOUNT SETTINGS
        </Typography>
        <Stack gap={1}>
          <Link
            href={"/profile"}
            style={{
              color: router.pathname === "/profile" ? "red" : "",
            }}
            className={router.pathname === "/profile" ? "red" : ""}
          >
            <Typography>
              <Person /> <Typography variant="body2">Profile Info</Typography>
            </Typography>
            <Typography variant="body2">5</Typography>
          </Link>
          <Link
            href={"/address"}
            style={{ color: router.pathname === "/address" ? "red" : "" }}
            className={router.pathname === "/address" ? "red" : ""}
          >
            <Typography>
              <LocationCity />{" "}
              <Typography variant="body2">Addresses</Typography>
            </Typography>
            <Typography variant="body2">2</Typography>
          </Link>
          <Link
            href={"/payment-method"}
            style={{
              color: router.pathname === "/payment-method" ? "red" : "",
            }}
            className={router.pathname === "/payment-method" ? "red" : ""}
          >
            <Typography>
              <CreditCard />{" "}
              <Typography variant="body2">Payment Methods</Typography>
            </Typography>
            <Typography variant="body2">1</Typography>
          </Link>
        </Stack>
      </Stack> */}
    </Paper>
  );
};

export default Left;
