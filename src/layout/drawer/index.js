import { Close, Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import * as React from "react";

export default function SwipeableTemporaryDrawer({
  children,
  state,
  toggleDrawer,
}) {
  //   const list = (anchor) => (

  //   );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={"left"}
            open={state[anchor]}
            variant="persistent"
             onClose={()=>{console.log("click")}}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{
                width: 320,
              }}
              role="presentation"
              //   onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {children}
              <Box className="absolute !top-[0] right-0" top={0} right={0}>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
