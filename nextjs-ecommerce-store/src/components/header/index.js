import {
  Dashboard,
  Favorite,
  LocalMall,
  LocalShipping,
  Login,
  Logout,
  Person,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Wrapper from "./Wrapper";
import { useSession, signIn, signOut } from "next-auth/react";
import { useAuthContext } from "@/context/AuthContext";

function Header(props) {
  const [show, setShow] = useState("translate-y-0");
  const { logoutHandler } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const route = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    if (e.target.innerText) {
      route.push(`${e.target.innerText.replace(" ", "-").toLowerCase()}`);
    }
  };
  const handleCLosemenu = () => {};

  const session = useSession();

  //console.log(session);

  const handleLogoutHandler = (e) => {
    try {
      signOut({ redirect: true, callbackUrl: "http://localhost:3000/" });
    } catch (error) {
      console.log(error);
    }

    setAnchorEl(null);
  };

  return (
    <header
      className={` w-full h-12 bg-gray-100 md:h-16 justify-between flex items-center sticky top-0 transition-transform duration-75 ${show}`}
    >
      <Wrapper className={" flex items-center justify-between"}>
        <div className="logo">
          <span>logo</span>
        </div>
        <div className="items gap-3 flex items-center">
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>category</Link>
          <Link href={"/"}>profile</Link>
        </div>

        <Box className=" flex gap-2 items-center">
          <div className="favirite">
            <IconButton color="error" onClick={() => route.push("/wishlist")}>
              <Badge badgeContent={8} color="info">
                <Favorite />
              </Badge>
            </IconButton>
          </div>
          <div className="cart">
            <IconButton color="warning">
              <Badge badgeContent={4} color="info">
                <LocalMall />
              </Badge>
            </IconButton>
          </div>

          {session?.data ? (
            <IconButton
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
            </IconButton>
          ) : (
            <Fragment>
              <div className="login">
                <IconButton onClick={() => signIn()}>
                  <Login />
                </IconButton>
              </div>
            </Fragment>
          )}
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
              My account
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Dashboard fontSize="small" />
              </ListItemIcon>
              dashboard
            </MenuItem>
            <MenuItem onClick={handleLogoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Wrapper>
    </header>
  );
}

export default Header;
