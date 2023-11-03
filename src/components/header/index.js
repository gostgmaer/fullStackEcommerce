import {
  Dashboard,
  Favorite,
  Person,
  ShoppingCart,
  Logout,
  Search,
} from "@mui/icons-material";

import {
  Avatar,
  AppBar,
  Container,
  Select,
  Typography,
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  colors,
  FormControl,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartBlock from "../cart";
import { useGlobalContext } from "@/context/globalContext";
import TopBar from "../global/header/topbar";
import Image from "next/image";

function Header(props) {
  const { state, setState } = useGlobalContext();
  const [scrollPosition, setScrollPosition] = useState(null);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    handleScroll();
  }, [scrollPosition]);

  return (
    <Box
      component={"header"}
      sx={{
        width: "100%",
        // height: 12 * 6,
        bgcolor: colors.grey[100],
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar />
      <Navigation />

      {state && <CartBlock />}
    </Box>
  );
}

export default Header;

function Navigation() {
  const { state, setState } = useGlobalContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const route = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if (e.target.innerText) {
      route.push(`/${e.target.innerText.replace(" ", "-").toLowerCase()}`);
    }
  };

  const handleLogoutHandler = (e) => {
    try {
    } catch (error) {
      console.log(error);
    }

    setAnchorEl(null);
  };
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <AppBar
      component={"div"}
      position="relative"
      color="primary"
      className="text-gray-700  bg-[#fff] shadow-none "
    >
      <Container className="flex  py-2 items-center justify-between">
        <Typography variant="h6" className="flex-1">
          <Link
            href="/"
            title="Flatsome - Best selling WooCommerce theme"
            rel="home"
          >
            <Image
              src="/assets/images/logo (1).png"
              alt="Flatsome"
              width={200}
              height={75}
            />
          </Link>
        </Typography>
        <Box className="flex items-center justify-center gap-1" flex={2.5}>
          <FormControl size="small" className=" ">
            <Select
              native
              style={{
                minWidth: "100px",
                maxWidth: "max-content",
                backgroundColor: "#f2f2f2",
              }}
              className=" rounded-3xl"
            >
              <option value="">All</option>
              <option value="bags">Bags</option>
              <option value="booking">Booking</option>
              <option value="clothing">Clothing</option>
              <option value="men">Men</option>
              <option value="music">Music</option>
              <option value="posters">Posters</option>
              <option value="shoes">Shoes</option>
              <option value="women">Women</option>
            </Select>
          </FormControl>

          <div
            style={{
              width: "60%",
              backgroundColor: "#f2f2f2",

              display: "flex",
              alignItems: "center",

              height: "40px",
            }}
            className=" rounded-3xl"
          >
            <InputBase
              placeholder="Search…"
              style={{ padding: "8px", width: "90%" }}
            />
            <button className=" rounded text-gray-700 h-10">
              {" "}
              <Search />{" "}
            </button>
          </div>
        </Box>
        <Box className="flex flex-1 justify-end">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={wishlist?.length.toString()} color="error">
              <Favorite />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={() => setState(true)}
          >
            <Badge badgeContent={cartItem?.length.toString()} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Person />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={() => setAnchorEl(null)}
            onClick={() => setAnchorEl(null)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar />
              profile
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Dashboard fontSize="small" />
              </ListItemIcon>
              Order
            </MenuItem>
            <MenuItem onClick={handleLogoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
