import {
  Dashboard,
  Favorite,
  Person,
  ShoppingCart,
  Logout,
  Search,
  Settings,
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
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartBlock from "../cart";
import { useGlobalContext } from "@/context/globalContext";
import TopBar from "../global/header/topbar";
import Image from "next/image";
import { get } from "@/lib/network/http";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";

function Header(props) {
  const { state, setState } = useGlobalContext();
  const [scrollPosition, setScrollPosition] = useState(null);
  const { data: session, status } = useSession();

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
      <Navigation data={session} />
      {/* <MainSearchbar/> */}

      {state && <CartBlock />}
    </Box>
  );
}

export default Header;

function Navigation({data}) {
  const route = useRouter();
  const { state, setState, searchProducts,categories } = useGlobalContext();
  const { userId } = useAuthContext();
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const [searchData, setSearchData] = useState("");

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }


  const fetchData = (params) => {
     route.push(`/product/search?search=${searchData}`);
    searchProducts();
  };


  return (
    <AppBar
      component={"div"}
      position="relative"
      color="primary"
      className="!text-gray-700  !bg-[#fff] !shadow-none "
    >
      <Container className="!flex py-2 items-center justify-between">
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
              className=" !rounded-3xl"
            >
              <option value="">All</option>
              {categories?.results?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
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
            className="!rounded-3xl"
          >
            <InputBase
              placeholder="Search…"
              style={{ padding: "8px", width: "90%" }}
              onChange={(e) => setSearchData(e.target.value)}
              value={searchData}
            />
            <button
              className="  text-gray-100 hover:bg-gray-800 h-10 bg-gray-500  w-20 rounded-full"
              onClick={fetchData}
            >
              <Search />
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
              <Favorite
                onClick={() =>
                  route.push(userId?`/my-account/${userId?.user_id}/wishlist`:'/auth/signin')
                }
              />
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

          <AccountMenu user={data?.["user"]} />
        </Box>
      </Container>
    </AppBar>
  );
}

export function AccountMenu({user}) {
  const route = useRouter();
  // const { user, userId, signout } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = ()=>{
    handleClose;
    signOut()
    window.sessionStorage.clear();
    window.localStorage.clear();
    const cookies = Cookies.get();
    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {user ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={user?.["image"]}
              ></Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Login">
            <IconButton
              onClick={() => route.push("/auth/signin")}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Person />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        <MenuItem
          onClick={() => {
            route.push(`/my-account/${user?.id}`);
            handleClose();
          }}
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            src={user?.["image"]}
          ></Avatar>{" "}
          My account
        </MenuItem>

        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
