import {
  Dashboard,
  Favorite,
  KeyboardArrowDown,
  LocalMall,
  Login,
  Logout,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Container,
  Menu,
  MenuItem,
  Stack,
  AppBar,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useGlobalContext } from "@/context/globalContext";
import MainSearchbar from "./MainSearchbar";
import { useDispatch, useSelector } from "react-redux";

const Mainbar = () => {
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
      //console.log(error);
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
    <AppBar  position="relative">
      <Container>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          overflow="hidden"
          width={"100%"}
          className={" flex items-center justify-between"}
        >
          <Box
            flex={1}
            sx={{ display: "flex", gap: 5, alignItems: "center" }}
            className="leftSide"
          >
            <div className="logo">
              <Link href={"/"}>LOGO</Link>
            </div>
          </Box>
          <MainSearchbar />

          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            flex={1}
            gap={2}
            sx={{ alignItems: "center" }}
            className=" flex gap-2 items-center"
          >
            <div className="favirite">
              {wishlist.length !== 0 ? (
                <IconButton
                  color="error"
                  onClick={() => route.push("/wishlist")}
                >
                  <Badge
                    badgeContent={wishlist?.length.toString()}
                    color="info"
                  >
                    <Favorite />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton
                  color="error"
                  onClick={() => route.push("/wishlist")}
                >
                  <Badge badgeContent="0" color="info">
                    <Favorite />
                  </Badge>
                </IconButton>
              )}
            </div>

            <div className="cart">
              {cartItem.length !== 0 ? (
                <IconButton onClick={() => setState(true)} color="warning">
                  <Badge badgeContent={cartItem.length.toString()} color="info">
                    <LocalMall />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton onClick={() => setState(true)} color="warning">
                  <Badge badgeContent="0" color="info">
                    <LocalMall />
                  </Badge>
                </IconButton>
              )}
            </div>

            {/* <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={session.data.user.image}
              ></Avatar>
            </IconButton> */}
            <Fragment>
              <div className="login">
                <IconButton>
                  <Login />
                </IconButton>
              </div>
            </Fragment>

            
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Mainbar;

// export async function getStaticProps() {
//   const cartItem = useSelector((state) => state["data"].cartItems);
//   const wishlist = useSelector((state) => state["data"].wishList);

//   //console.log(wishlist);

//   return {
//     props: { newData: wishlist }, // will be passed to the page component as props
//   };
// }
