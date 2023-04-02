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
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  TextField,
  colors,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useGlobalContext } from "@/context/globalContext";

const Mainbar = () => {
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFIeld, setShowFIeld] = useState(false);
  const { state, setState } = useGlobalContext();
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

  const [scrollPosition, setScrollPosition] = useState(null);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    handleScroll();
  }, [scrollPosition]);
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
    <Box width={"100%"}>
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
            <Link href={'/'}>LOGO</Link>
          </div>
        </Box>

        <Box
          component="form"
          sx={{
            p: "2px 4px",
            flex: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            m: "0px !important",
            bgcolor: "transparent",
            border: "none",
          }}
        >
          {showFIeld ? (
            <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-search"
                size="small"
                placeholder="Searching for...."
                color="error"
                sx={{
                  borderRadius: "1200px",
                  p: 0,
                  height: "44px",
                  overflow: "hidden",
                 
                }}
                endAdornment={
                  <Fragment>
                    <Button
                      variant="contained"
                      color="inherit"
                      disableElevation
                    
                      
                      endIcon={<KeyboardArrowDown />}
                      sx={{
                        display: "flex",
                        gap: "5px",
                        justifyContent: "center",
                        px: 3,
                        height: "100%",
                        textTransform: "capitalize",
                      
                        borderRadius: "0 0 0 0",
                        width: "220px",

                        alignItems: "center",
                        borderLeft: "1px solid #DAE1E7",
                      }}
                    >
                      All Category
                    </Button>
                  </Fragment>

                }
                startAdornment={
                  <IconButton sx={{
                        height: "100%"}}>
                    <Search />
                  </IconButton>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          ) : (
            <IconButton
              onClick={() => setShowFIeld(!showFIeld)}
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <Search />
            </IconButton>
          )}
        </Box>

        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          flex={1}
          gap={2}
          sx={{ alignItems: "center" }}
          className=" flex gap-2 items-center"
        >
          <div className="favirite">
            <IconButton color="error" onClick={() => route.push("/wishlist")}>
              <Badge badgeContent={8} color="info">
                <Favorite />
              </Badge>
            </IconButton>
          </div>
          <div className="cart">
            <IconButton onClick={() => setState(true)} color="warning">
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default Mainbar;
